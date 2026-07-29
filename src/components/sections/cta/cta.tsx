import { Mail, MapPin, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

import { ContactForm } from "./contact-form";

export function Cta() {
  return (
    <Section id="contato" className="overflow-hidden">
      {/* Ponto mais luminoso da página depois do Hero: é aqui que se decide. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(75%_60%_at_50%_50%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_72%)]"
      />

      <Container>
        <Reveal>
          <SurfaceCard className="border-primary/25 p-8 md:p-14">
            <span
              aria-hidden="true"
              className="bg-gradient-brand absolute inset-x-0 top-0 h-px opacity-70"
            />

            <div className="relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <div>
                <p className="flex items-center gap-3">
                  <span
                    className="bg-gradient-brand h-px w-8"
                    aria-hidden="true"
                  />
                  <span className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                    Contato
                  </span>
                </p>

                <h2 className="mt-7 text-[clamp(1.9rem,4vw,3rem)] leading-[1.1] font-semibold">
                  Vamos descobrir o que dá para{" "}
                  <span className="text-gradient-brand">
                    automatizar na sua empresa
                  </span>
                  ?
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Conte seu cenário em poucas linhas. A partir dele, mostramos
                  onde há trabalho manual sobrando e quais são os próximos
                  passos.
                </p>

                <div className="mt-10 space-y-4">
                  <a
                    href={whatsappLink(whatsappMessages.contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <MessageCircle
                      aria-hidden="true"
                      className="size-5 text-brand-cyan"
                    />
                    {siteConfig.contact.whatsappDisplay}
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <Mail aria-hidden="true" className="size-5 text-brand-cyan" />
                    {siteConfig.contact.email}
                  </a>

                  <p className="flex items-center gap-3 text-muted-foreground">
                    <MapPin
                      aria-hidden="true"
                      className="size-5 text-brand-cyan"
                    />
                    {siteConfig.location.label}
                  </p>
                </div>

                <Button
                  asChild
                  variant="glass"
                  size="xl"
                  className="mt-10 w-full sm:w-fit lg:hidden"
                >
                  <a
                    href={whatsappLink(whatsappMessages.contact)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    Falar agora no WhatsApp
                  </a>
                </Button>
              </div>

              <ContactForm />
            </div>
          </SurfaceCard>
        </Reveal>
      </Container>
    </Section>
  );
}
