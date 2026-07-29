import { Check, Minus } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";
import { comparison, pillars } from "@/content/differentials";

export function Differentials() {
  return (
    <Section id="diferenciais" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_45%_at_10%_10%,color-mix(in_oklab,var(--brand-cyan)_8%,transparent),transparent_70%)]"
      />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Diferenciais"
            title={
              <>
                A maioria entrega campanhas.{" "}
                <span className="text-gradient-brand">
                  Nós construímos ecossistemas.
                </span>
              </>
            }
            description="Integramos Inteligência Artificial, automação, desenvolvimento de software, marketing e análise de dados numa engrenagem só. É essa diferença que separa presença digital de transformação digital."
          />
        </Reveal>

        <div className="mt-18 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <SurfaceCard className="h-full bg-surface/30 p-8 md:p-10">
              <p className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                {comparison.common.label}
              </p>
              <ul className="mt-8 space-y-4">
                {comparison.common.items.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <Minus
                      aria-hidden="true"
                      className="mt-0.5 size-5 shrink-0 text-muted-foreground/50"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <SurfaceCard className="h-full border-primary/30 p-8 md:p-10">
              {/* Fio de luz no topo, mesma assinatura dos cards de serviço. */}
              <span
                aria-hidden="true"
                className="bg-gradient-brand absolute inset-x-0 top-0 h-px opacity-70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]"
              />

              <div className="relative">
                <p className="font-display text-[0.68rem] tracking-[0.24em] text-brand-cyan uppercase">
                  {comparison.fluwend.label}
                </p>
                <ul className="mt-8 space-y-4">
                  {comparison.fluwend.items.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <Check
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-brand-cyan"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SurfaceCard>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.id} delay={index * 0.07} className="h-full">
              <SurfaceCard interactive className="group h-full p-7">
                <pillar.icon
                  aria-hidden="true"
                  className="size-6 text-brand-cyan transition-transform duration-500 group-hover:-translate-y-0.5"
                />
                <h3 className="mt-6 text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </SurfaceCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
