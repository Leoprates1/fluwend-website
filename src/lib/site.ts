/**
 * Fonte única de verdade para dados institucionais.
 * Nenhum componente deve escrever telefone, e-mail ou URL diretamente.
 */

export const siteConfig = {
  name: "Fluwend",
  legalName: "Fluwend Automações com IA",
  slogan: "Construindo o futuro dos negócios, hoje.",
  positioning: "AI Growth Company",
  description:
    "Inteligência Artificial, automação e tecnologia para transformar empresas em negócios inteligentes, escaláveis e lucrativos.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fluwend.com.br",
  locale: "pt-BR",

  contact: {
    email: "fluwend@gmail.com",
    /** Formato internacional, apenas dígitos — usado nos links do WhatsApp. */
    whatsapp: "5531982415224",
    whatsappDisplay: "(31) 98241-5224",
  },

  location: {
    city: "Belo Horizonte",
    state: "MG",
    stateName: "Minas Gerais",
    country: "BR",
    label: "Belo Horizonte · MG",
  },

  social: {
    instagram: "",
    linkedin: "",
  },

  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "Contato", href: "#contato" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
