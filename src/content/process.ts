export type ProcessStep = {
  id: string;
  step: string;
  title: string;
  description: string;
};

/** As quatro etapas definidas em 01_DISCOVERY/04-ESTRUTURA-DO-SITE.md. */
export const processSteps: ProcessStep[] = [
  {
    id: "diagnostico",
    step: "01",
    title: "Diagnóstico",
    description:
      "Entendemos sua operação de perto: onde o time perde tempo, o que trava as vendas e quais processos ainda dependem de trabalho manual.",
  },
  {
    id: "estrategia",
    step: "02",
    title: "Estratégia",
    description:
      "Desenhamos o ecossistema: o que automatizar, o que construir e em que ordem — priorizando o que gera resultado mais rápido.",
  },
  {
    id: "implementacao",
    step: "03",
    title: "Implementação",
    description:
      "Colocamos tudo de pé: agentes de IA, automações, sistemas, site e campanhas. Você acompanha cada entrega, sem caixa-preta.",
  },
  {
    id: "crescimento",
    step: "04",
    title: "Crescimento contínuo",
    description:
      "Medimos, ajustamos e expandimos. O ecossistema evolui junto com a empresa, em vez de envelhecer parado.",
  },
];
