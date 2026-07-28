import { Blocks, Bot, Globe, MapPin, TrendingUp, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Textos conforme 01_DISCOVERY/01-BRIEFING.md — seção 5. */
export const services: Service[] = [
  {
    id: "inteligencia-artificial",
    title: "Inteligência Artificial para Empresas",
    description:
      "Automatize atendimento, vendas e operações com agentes inteligentes disponíveis 24 horas por dia.",
    icon: Bot,
  },
  {
    id: "websites",
    title: "Websites que Vendem",
    description:
      "Sites modernos, rápidos e desenvolvidos para transformar visitantes em clientes.",
    icon: Globe,
  },
  {
    id: "automacoes",
    title: "Automações Inteligentes",
    description:
      "Conecte WhatsApp, CRM, Google, sistemas internos e plataformas em um único ecossistema automatizado.",
    icon: Workflow,
  },
  {
    id: "google-meu-negocio",
    title: "Google Meu Negócio",
    description:
      "Faça sua empresa aparecer exatamente quando seu cliente estiver procurando pelos seus serviços.",
    icon: MapPin,
  },
  {
    id: "marketing-performance",
    title: "Marketing de Performance",
    description:
      "Google Ads e Meta Ads focados em crescimento, geração de oportunidades e retorno sobre investimento.",
    icon: TrendingUp,
  },
  {
    id: "sistemas",
    title: "Desenvolvimento de Sistemas",
    description:
      "Criamos soluções sob medida para empresas que precisam de tecnologia exclusiva.",
    icon: Blocks,
  },
];
