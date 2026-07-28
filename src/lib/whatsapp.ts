import { siteConfig } from "@/lib/site";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Fluwend e quero entender como a Inteligência Artificial pode ajudar minha empresa.";

/**
 * Monta o link do WhatsApp com mensagem pré-preenchida.
 * `context` permite identificar de qual CTA veio o contato.
 */
export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.contact.whatsapp}?${params.toString()}`;
}

export const whatsappMessages = {
  default: DEFAULT_MESSAGE,
  hero: "Olá! Vim pelo site da Fluwend e quero conversar sobre um projeto.",
  services: (service: string) =>
    `Olá! Vim pelo site da Fluwend e tenho interesse em ${service}.`,
  contact:
    "Olá! Vim pelo site da Fluwend e gostaria de solicitar um diagnóstico.",
} as const;
