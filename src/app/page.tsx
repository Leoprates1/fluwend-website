import { ArrowRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

/**
 * PÁGINA TEMPORÁRIA — validação da fundação.
 * Será substituída pelas seções reais (Hero → Serviços → Diferenciais → Processo → CTA).
 */
export default function Home() {
  return (
    <main id="conteudo">
      <Section className="pt-40">
        <Container className="max-w-4xl">
          <Reveal>
            <p className="font-display text-sm tracking-[0.3em] text-brand-cyan uppercase">
              {siteConfig.positioning}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 text-5xl leading-[1.05] font-semibold md:text-7xl">
              <span className="text-gradient-brand">{siteConfig.slogan}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button asChild variant="brand" size="xl">
                <a
                  href={whatsappLink(whatsappMessages.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href="#servicos">
                  Ver serviços
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section id="servicos" className="border-t border-border">
        <Container>
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold md:text-5xl">
              O que construímos
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.06}>
                <article className="h-full rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
                  <service.icon
                    className="size-7 text-brand-cyan"
                    aria-hidden="true"
                  />
                  <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
