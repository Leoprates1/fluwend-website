# syntax=docker/dockerfile:1

###############################################################################
# Fluwend Website — imagem de produção
#
# Multi-stage: as dependências e o build ficam em estágios descartados, e a
# imagem final carrega só o servidor standalone do Next e os arquivos estáticos.
###############################################################################

FROM node:22-alpine AS base
# libc6-compat: exigido por binários nativos (sharp) em Alpine/musl.
RUN apk add --no-cache libc6-compat
# Usa a versão de pnpm declarada em "packageManager" no package.json.
# O prompt de download precisa ficar desligado: o build não é interativo.
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
WORKDIR /app


###############################################################################
# 1. Dependências — camada cacheada enquanto o lockfile não mudar
###############################################################################
FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile


###############################################################################
# 2. Build
###############################################################################
FROM base AS builder

# URL pública do site. Precisa existir no BUILD: por ser NEXT_PUBLIC_*, o valor
# é embutido nas páginas geradas (canonical, Open Graph, sitemap, JSON-LD).
# Defini-la apenas em runtime não muda o HTML já gerado.
ARG NEXT_PUBLIC_SITE_URL=https://fluwend.com.br
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL

# Medição (GA4 e Meta Pixel). Mesma regra da URL acima: por serem NEXT_PUBLIC_*,
# precisam existir no BUILD — informá-las só em runtime no EasyPanel não faz o
# script aparecer no HTML. Vazias por padrão: sem ID, nada é renderizado.
ARG NEXT_PUBLIC_GA_ID=
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_FB_PIXEL_ID=
ENV NEXT_PUBLIC_FB_PIXEL_ID=$NEXT_PUBLIC_FB_PIXEL_ID

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm build


###############################################################################
# 3. Runtime — imagem final
###############################################################################
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
# 0.0.0.0 é obrigatório para o container aceitar conexões externas
# (o proxy do EasyPanel não alcançaria 127.0.0.1).
ENV HOSTNAME=0.0.0.0

# O servidor nunca roda como root.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
