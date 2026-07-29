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

## Deploy (Vercel)

1. Suba o repositório para o GitHub.
2. Importe o projeto na Vercel (framework detectado automaticamente; build `pnpm build`).
3. Defina a variável `NEXT_PUBLIC_SITE_URL` com o domínio final.
4. Aponte o domínio e confirme o certificado.
5. Depois do deploy: registrar o site no Google Search Console e enviar `/sitemap.xml`.

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
