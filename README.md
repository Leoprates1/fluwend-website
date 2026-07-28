# Fluwend Website 2026

Website oficial da Fluwend — **AI Growth Company**.

Site one-page, tema dark premium, com foco em performance, SEO e conversão via WhatsApp.

---

## Stack

Next.js 15 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion · Lenis · Lucide · pnpm · Vercel

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
```

Copie `.env.example` para `.env.local` e ajuste a URL do site quando o domínio for definido.

---

## Estrutura

```
src/
  app/          rotas, layout, globals.css, sitemap, robots
  components/
    layout/     Container, Section
    motion/     SmoothScroll (Lenis), Reveal (Framer Motion)
    ui/         componentes shadcn/ui
  content/      conteúdo estruturado (serviços)
  lib/          site.ts (dados institucionais), whatsapp.ts, structured-data.ts, utils.ts
public/brand/   logos
```

### Convenções

- Telefone, e-mail e URL vivem **apenas** em `src/lib/site.ts`.
- Links de WhatsApp são gerados por `src/lib/whatsapp.ts`.
- O respiro vertical das seções vem do componente `Section`, não de cada seção.
- Toda animação passa por `Reveal` ou respeita `prefers-reduced-motion`.
- Os design tokens ficam em `src/app/globals.css` (`:root` + `@theme inline`). Não use cores fora dos tokens.

---

## Documentação do projeto

- `PROJECT.md` → visão geral, escopo e decisões.
- `BRAND.md` → identidade, paleta e tipografia.
- `DESIGN.md` → direção visual e regras de motion.
- `STACK.md` → tecnologias.
- `TASKS.md` → roadmap.
- `01_DISCOVERY/` → briefing e arquitetura do site.

---

## Status

🟢 Fundação concluída. Próximo passo: desenvolvimento das seções (Hero → Serviços → Diferenciais → Processo → CTA → Footer).

---

## Desenvolvido por

Fluwend
