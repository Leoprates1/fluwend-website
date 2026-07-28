"use client";

import { m, type Variants } from "framer-motion";
import { ArrowDownRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

import { HeroBackground } from "./hero-background";
import { ScrollIndicator } from "./scroll-indicator";

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-32 pb-28"
    >
      <HeroBackground />

      <Container>
        <m.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <m.p variants={rise}>
            <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand-cyan" />
              </span>
              <span className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                {siteConfig.positioning}
              </span>
            </span>
          </m.p>

          <m.h1
            variants={rise}
            className="mt-9 text-[clamp(2.5rem,7.2vw,5.5rem)] leading-[1.03] font-semibold"
          >
            Transformamos empresas em{" "}
            <span className="text-gradient-brand">negócios inteligentes</span>.
          </m.h1>

          <m.p
            variants={rise}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Unimos Inteligência Artificial, automação e engenharia de software
            para reduzir trabalho manual, aumentar vendas e preparar sua
            operação para escalar.
          </m.p>

          <m.div
            variants={rise}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              variant="brand"
              size="xl"
              className="transition-transform duration-500 hover:-translate-y-0.5"
            >
              <a
                href={whatsappLink(whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="glass"
              size="xl"
              className="group transition-transform duration-500 hover:-translate-y-0.5"
            >
              <a href="#servicos">
                Conhecer nossos serviços
                <ArrowDownRight
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
            </Button>
          </m.div>

          <m.p
            variants={rise}
            className="mt-10 font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground/70 uppercase"
          >
            {siteConfig.location.label}
          </m.p>
        </m.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
