import { BrainCircuit, Gauge, Handshake, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Base: 01_DISCOVERY/01-BRIEFING.md — seção 6. */

export const comparison = {
  common: {
    label: "O modelo de sempre",
    items: [
      "Campanhas isoladas do resto da operação",
      "Relatórios que não viram decisão",
      "Processos manuais que travam o time",
      "Entrega pontual, sem evolução depois",
    ],
  },
  fluwend: {
    label: "O modelo Fluwend",
    items: [
      "Um ecossistema onde tudo conversa",
      "Dados que orientam o próximo passo",
      "Operação automatizada de ponta a ponta",
      "Evolução contínua junto com a empresa",
    ],
  },
} as const;

export type Pillar = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const pillars: Pillar[] = [
  {
    id: "tecnologia-estrategia",
    title: "Tecnologia com estratégia",
    description:
      "Nenhuma ferramenta entra por moda. Cada escolha técnica responde a um objetivo de negócio.",
    icon: BrainCircuit,
  },
  {
    id: "ecossistema",
    title: "Ecossistema integrado",
    description:
      "IA, automação, software, marketing e dados na mesma engrenagem — não em ilhas separadas.",
    icon: Layers,
  },
  {
    id: "eficiencia",
    title: "Eficiência mensurável",
    description:
      "Menos trabalho manual, menos retrabalho, mais tempo do time onde ele realmente decide.",
    icon: Gauge,
  },
  {
    id: "parceria",
    title: "Parceria de longo prazo",
    description:
      "Projetos que continuam depois da entrega, evoluindo conforme a empresa cresce.",
    icon: Handshake,
  },
];
