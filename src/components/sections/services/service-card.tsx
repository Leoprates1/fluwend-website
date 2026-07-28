"use client";

import { m, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { EASE } from "@/lib/motion";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

type ServiceCardProps = {
  title: string;
  description: string;
  /**
   * Ícone já renderizado pelo Server Component.
   * Receber o elemento pronto — em vez do componente — é o que permite manter
   * o catálogo de serviços no servidor: só objetos simples cruzam a fronteira.
   */
  icon: React.ReactNode;
};

/**
 * Card de serviço.
 *
 * Três microinterações, todas discretas:
 *  - elevação de 6px no hover (descartada sob `prefers-reduced-motion`);
 *  - contorno e ícone que acendem;
 *  - um facho de luz que acompanha o cursor — só pintura, sem re-render:
 *    o gradiente é escrito direto no style pelos motion values.
 *
 * O "Saiba mais" leva ao WhatsApp com o serviço já citado na mensagem. Enquanto
 * não existirem páginas por serviço, é o destino honesto — nenhum link morto.
 */
export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${pointerX}px ${pointerY}px, color-mix(in oklab, var(--brand-cyan) 14%, transparent), transparent 72%)`;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  }

  return (
    <m.article
      onPointerMove={handlePointerMove}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-surface/55 p-8 backdrop-blur-xl transition-colors duration-500 hover:border-primary/45"
    >
      <m.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Brilho de topo, no mesmo idioma da linha do horizonte do Hero. */}
      <span
        aria-hidden="true"
        className="bg-gradient-brand pointer-events-none absolute inset-x-8 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-70"
      />

      <div className="relative flex h-full flex-col">
        <span className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-surface-elevated/70 text-brand-cyan transition-all duration-500 group-hover:border-brand-cyan/40 group-hover:shadow-[0_0_28px_-8px_color-mix(in_oklab,var(--brand-cyan)_60%,transparent)]">
          {icon}
        </span>

        <h3 className="mt-7 text-xl leading-snug font-semibold">{title}</h3>

        <p className="mt-4 text-muted-foreground">{description}</p>

        <a
          href={whatsappLink(whatsappMessages.services(title))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Saiba mais sobre ${title}`}
          className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-medium text-foreground/85 transition-colors duration-300 hover:text-brand-cyan focus-visible:text-brand-cyan"
        >
          Saiba mais
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </m.article>
  );
}
