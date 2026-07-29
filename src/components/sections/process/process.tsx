import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="processo" className="overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Como funciona"
            title={
              <>
                Quatro etapas,{" "}
                <span className="text-gradient-brand">sem caixa-preta.</span>
              </>
            }
            description="Do primeiro diagnóstico à evolução contínua, você sabe exatamente o que está sendo feito, por que e em que ordem."
          />
        </Reveal>

        <ol className="relative mt-18 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {/* Trilho que costura as etapas — só no desktop, onde a leitura é horizontal. */}
          <span
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-[linear-gradient(90deg,color-mix(in_oklab,var(--primary)_50%,transparent),color-mix(in_oklab,var(--brand-cyan)_35%,transparent),transparent)] xl:block"
          />

          {processSteps.map((step, index) => (
            <li key={step.id} className="h-full">
              <Reveal delay={index * 0.08} className="group relative flex h-full flex-col">
                <span className="relative flex size-12 items-center justify-center rounded-full border border-border bg-surface/80 backdrop-blur-xl transition-colors duration-500 group-hover:border-primary/50">
                  <span className="font-display text-sm font-semibold text-brand-cyan">
                    {step.step}
                  </span>
                </span>

                <h3 className="mt-7 text-xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
