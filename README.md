# Fluwend Website 2026

Website oficial da Fluwend — **AI Growth Company**.

Site one-page, tema dark premium, com foco em performance, SEO e conversão via WhatsApp.

---

## Stack

Next.js 15 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion (LazyMotion) · Lenis · Lucide · pnpm · Vercel

GSAP não é utilizado. Se algum efeito futuro exigir ScrollTrigger, será adicionado apenas para esse caso.

---

## Como rodar

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

Outros comandos:

```bash
pnpm build      # build de produção
pnpm start      # servir o build
pnpm typecheck  # tsc --noEmit
pnpm lint       # eslint
node scripts/extract-brand-assets.mjs   # regenera símbolo e wordmark da logo
```

Copie `.env.example` para `.env.local` e ajuste a URL do site quando o domínio for definido.

> **Windows:** não rode `pnpm build` com o `pnpm dev` ativo — os dois escrevem em `.next` e o servidor de desenvolvimento quebra. Encerre um antes de iniciar o outro.

---

## Estrutura

```
Dockerfile              imagem de produção multi-stage
docker-compose.yml      teste local da imagem
.dockerignore
src/
  app/
    layout.tsx            metadata, fontes, JSON-LD, providers de movimento
    page.tsx              composição da one-page
    globals.css           design tokens, utilitários de marca, keyframes
    icon.png              favicon (gerado do símbolo)
    apple-icon.png        ícone iOS
    opengraph-image.tsx   imagem de compartilhamento gerada no build
    manifest.ts / robots.ts / sitemap.ts
  components/
    layout/    Container, Section, SectionHeading, Logo, SiteHeader, MobileNav, SiteFooter
    motion/    SmoothScroll (Lenis + LazyMotion), Reveal
    sections/  hero, services, differentials, process, about, cta, faq
    ui/        componentes shadcn/ui + SurfaceCard
  content/     services, differentials, process, about, faq
  lib/         site.ts, whatsapp.ts, structured-data.ts, motion.ts, utils.ts
scripts/       extract-brand-assets.mjs
public/brand/  logos e símbolo
```

### Convenções

- Telefone, e-mail, cidade e URL vivem **apenas** em `src/lib/site.ts`.
- Links de WhatsApp são gerados por `src/lib/whatsapp.ts`.
- Textos das seções vivem em `src/content/` — componentes não carregam copy fixa.
- O respiro vertical vem do componente `Section`, não de cada seção.
- A superfície dos cards vem de `SurfaceCard` — não recrie o efeito glass.
- Animações usam `m.*` (nunca `motion.*`): o site roda com `LazyMotion strict`.
- Curva de easing única em `src/lib/motion.ts`.
- Cores apenas via tokens de `globals.css`.
- Dados que cruzam de Server para Client Component precisam ser serializáveis — passe ícones já renderizados como `ReactNode`.

---

## Deploy com Docker (VPS Hostinger + EasyPanel)

O projeto roda em `output: "standalone"`: o build gera um servidor Node autocontido, e a imagem final carrega só ele, os arquivos estáticos e a pasta `public`.

### A variável que precisa entrar no build

`NEXT_PUBLIC_SITE_URL` alimenta canonical, Open Graph, sitemap, robots e JSON-LD. Por ser `NEXT_PUBLIC_*`, ela é **embutida durante o build** — defini-la só como variável de runtime não altera o HTML já gerado.

Portanto, no EasyPanel ela deve ser informada como **build argument**. O `Dockerfile` já traz `https://fluwend.com.br` como padrão; se o domínio for esse, nada precisa ser feito.

### Testar a imagem localmente

```bash
docker compose up --build
# http://localhost:3000
```

Ou sem compose:

```bash
docker build -t fluwend-website --build-arg NEXT_PUBLIC_SITE_URL=https://fluwend.com.br .
docker run --rm -p 3000:3000 fluwend-website
```

### Subir no EasyPanel

1. **Criar o serviço** — no projeto do EasyPanel, `+ Service` → `App`.
2. **Origem** — aponte para o repositório no GitHub (branch `main`) ou envie o código pelo Git interno do EasyPanel.
3. **Build** — método `Dockerfile`, caminho `./Dockerfile`. O EasyPanel detecta a porta exposta; se pedir, informe **3000**.
4. **Build arguments** — `NEXT_PUBLIC_SITE_URL = https://seudominio.com.br`.
5. **Environment** (runtime) — nada obrigatório. `NODE_ENV`, `PORT` e `HOSTNAME` já vêm definidos na imagem.
6. **Domínio** — em `Domains`, adicione o domínio e ative HTTPS (Let's Encrypt). O proxy do EasyPanel encaminha a porta 443 para a 3000 do container.
7. **Deploy** — o `HEALTHCHECK` do container responde em até ~20s após subir.

Notas de compatibilidade:

- O servidor escuta em `0.0.0.0`, exigência do proxy do EasyPanel — `127.0.0.1` não seria alcançável.
- O container roda como usuário sem privilégios (`nextjs`, uid 1001).
- `sharp` está em `dependencies` e o Alpine recebe `libc6-compat`, para que a otimização de imagens do Next funcione na imagem final.
- Não há banco, volume ou estado: o serviço pode ser reiniciado ou escalado sem cuidados adicionais.

### Após o deploy

- Conferir `/sitemap.xml`, `/robots.txt` e `/opengraph-image`.
- Registrar o site no Google Search Console e enviar o sitemap.
- Validar os dados estruturados no Rich Results Test.

## Deploy alternativo (Vercel)

1. Importe o repositório na Vercel (framework detectado automaticamente).
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final.
3. Aponte o domínio e confirme o certificado.

---

## Documentação do projeto

- `PROJECT.md` → visão geral, escopo, decisões e pendências.
- `BRAND.md` → identidade, paleta e tipografia.
- `DESIGN.md` → direção visual e regras de motion.
- `STACK.md` → tecnologias.
- `TASKS.md` → roadmap.
- `01_DISCOVERY/` → briefing e arquitetura do site.

---

## Desenvolvido por

Fluwend
