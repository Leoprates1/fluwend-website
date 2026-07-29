export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/**
 * Nenhuma resposta afirma prazo, preço ou resultado numérico: nada disso está
 * definido na documentação, e o briefing proíbe promessas irreais.
 */
export const faqItems: FaqItem[] = [
  {
    id: "o-que-e",
    question: "O que exatamente a Fluwend faz?",
    answer:
      "Construímos ecossistemas digitais completos. Isso vai de agentes de Inteligência Artificial que atendem e vendem 24 horas por dia, passando por automações que conectam WhatsApp, CRM e sistemas internos, até sites, sistemas sob medida e campanhas de tráfego pago. O ponto não é entregar peças soltas, e sim fazer tudo operar junto.",
  },
  {
    id: "porte",
    question: "Minha empresa é pequena. Faz sentido para mim?",
    answer:
      "Sim. A tecnologia que antes era exclusividade de grandes operações hoje cabe em empresas de qualquer porte — e costuma ter impacto ainda maior onde a equipe é enxuta, porque cada hora liberada do trabalho manual pesa mais. O escopo é definido a partir da sua realidade, não de um pacote pronto.",
  },
  {
    id: "comecar",
    question: "Como começa um projeto?",
    answer:
      "Pelo diagnóstico. Conversamos sobre a sua operação, entendemos onde estão os gargalos e o que já existe funcionando. A partir daí desenhamos a estratégia e apresentamos o que faz sentido implementar, em que ordem e por quê.",
  },
  {
    id: "sistemas",
    question: "Preciso trocar os sistemas que já uso?",
    answer:
      "Na maioria dos casos, não. Boa parte do nosso trabalho é justamente integrar o que a empresa já usa — CRM, WhatsApp, ferramentas do Google, planilhas e sistemas internos — para que passem a conversar entre si. Substituir só entra em cena quando a ferramenta atual for o próprio gargalo.",
  },
  {
    id: "prazo",
    question: "Quanto tempo leva?",
    answer:
      "Depende do escopo. Uma automação pontual e uma plataforma sob medida vivem em escalas diferentes de tempo. O cronograma é definido junto com você na etapa de estratégia, com as entregas divididas em partes acompanháveis.",
  },
  {
    id: "investimento",
    question: "Como funciona o investimento?",
    answer:
      "Cada projeto é orçado conforme o escopo definido no diagnóstico — não trabalhamos com pacotes fechados iguais para todos. Também existem formatos de acompanhamento mensal, para empresas que querem evoluir o ecossistema de forma contínua.",
  },
  {
    id: "depois",
    question: "E depois que o projeto vai ao ar?",
    answer:
      "O acompanhamento continua. Medimos o que foi implementado, ajustamos o que precisa de ajuste e expandimos o ecossistema conforme a empresa cresce. É esse ciclo contínuo que sustenta o resultado ao longo do tempo.",
  },
  {
    id: "atendimento",
    question: "Vocês atendem empresas de outras cidades?",
    answer:
      "Sim. A Fluwend fica em Belo Horizonte e todo o processo — diagnóstico, estratégia, implementação e acompanhamento — funciona de forma remota, com reuniões e entregas online.",
  },
];
