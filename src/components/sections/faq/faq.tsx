import { MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SurfaceCard } from "@/components/ui/surface-card";
import { faqItems } from "@/content/faq";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export function Faq() {
  return (
    <Section id="faq" className="overflow-hidden">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionHeading
                eyebrow="Dúvidas frequentes"
                title={
                  <>
                    Perguntas que{" "}
                    <span className="text-gradient-brand">
                      chegam antes do projeto.
                    </span>
                  </>
                }
                description="Se a sua não estiver aqui, é só perguntar — respondemos direto no WhatsApp."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <Button
                asChild
                variant="glass"
                size="xl"
                className="mt-10 transition-transform duration-500 hover:-translate-y-0.5"
              >
                <a
                  href={whatsappLink(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle aria-hidden="true" />
                  Tirar uma dúvida
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <SurfaceCard className="px-7 py-2 md:px-9">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item) => (
                  <AccordionItem
                    key={item.id}
                    value={item.id}
                    className="border-border/60"
                  >
                    <AccordionTrigger className="py-6 text-left text-base font-medium hover:no-underline data-[state=open]:text-brand-cyan">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </SurfaceCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
