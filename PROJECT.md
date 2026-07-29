# PROJECT

Visão geral do novo website da Fluwend.

---

## Objetivo

Posicionar a Fluwend como uma **AI Growth Company** — uma empresa de tecnologia que integra Inteligência Artificial, automação, engenharia de software e marketing de performance para gerar crescimento mensurável.

O site precisa provocar a percepção: *"essa empresa está anos à frente da concorrência."*

Meta de negócio: gerar oportunidades qualificadas de contato.

---

## Decisões confirmadas

| Tema | Decisão |
| --- | --- |
| Posicionamento | AI Growth Company (empresas de todos os portes, tom premium) |
| Estrutura | One-page cinematográfica |
| Tema visual | Dark premium |
| Conversão | WhatsApp (CTA principal) + formulário (alternativa) |

O `BRAND.md` foi alinhado a essa decisão — o posicionamento anterior ("Automação Inteligente para Pequenas Empresas") foi substituído.

---

## Escopo da fase 1

- Uma página (`/`) com as seções definidas em `01_DISCOVERY/04-ESTRUTURA-DO-SITE.md`.
- Seis serviços em destaque.
- CTAs para WhatsApp com mensagem pré-preenchida.
- Formulário de contato como caminho alternativo.
- SEO técnico: metadata, Open Graph, sitemap, robots, dados estruturados.
- Performance e acessibilidade como critério de aceite, não como ajuste final.

## Fora do escopo da fase 1

- Páginas individuais por serviço.
- Blog.
- Seção de cases/portfólio (não há material comprovável — ver Pendências).
- Área de cliente, e-commerce, multi-idioma.

---

## Princípios inegociáveis

- **Nenhum resultado, número, cliente ou depoimento inventado.** O briefing proíbe promessas irreais; conteúdo não comprovado não entra no site.
- Linguagem estratégica e clara — nunca excessivamente técnica.
- Poucos elementos por tela. Cada seção respira.
- Animação serve à narrativa; nunca atrapalha leitura ou performance.

---

## Critérios de aceite

- Lighthouse: Performance ≥ 90, Acessibilidade ≥ 95, SEO ≥ 95 (mobile).
- Contraste mínimo AA em todo texto sobre fundo escuro.
- `prefers-reduced-motion` respeitado em todas as animações.
- Funcional em mobile, tablet e desktop.
- Nenhum texto placeholder (lorem ipsum) no deploy.

---

## Decisões de implementação

- **Formulário de contato:** sem backend definido, o formulário monta a mensagem e abre o WhatsApp já preenchido, em vez de simular um envio. Trocar o corpo de `handleSubmit` quando houver serviço de e-mail ou CRM.
- **"Saiba mais" dos serviços:** aponta para o WhatsApp citando o serviço, já que páginas por serviço são fase 2.
- **Sem cases nem números:** nenhuma métrica, cliente ou depoimento aparece no site — não há material comprovável e o briefing proíbe promessas irreais.
- **Hospedagem:** VPS Hostinger com EasyPanel, via imagem Docker multi-stage (`output: standalone`). A URL pública entra como *build argument*, porque `NEXT_PUBLIC_SITE_URL` é embutida na geração das páginas estáticas.

---

## Pendências de informação

- [x] Número de WhatsApp comercial.
- [x] E-mail de contato (`fluwend@gmail.com` — provisório, trocar pelo profissional).
- [x] Cidade / região de atuação.
- [ ] Domínio definitivo (hoje `NEXT_PUBLIC_SITE_URL` aponta para `fluwend.com.br`).
- [ ] Redes sociais (o rodapé já exibe assim que forem preenchidas em `siteConfig.social`).
- [ ] CNPJ / razão social completa, se o rodapé precisar exibir.
- [ ] Logo vetorial (SVG) — hoje o header usa o símbolo em PNG recortado da arte original.
- [ ] Cases, clientes ou depoimentos autorizados.
- [ ] Ferramenta de analytics.
