import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/content/services";

import { ServiceCard } from "./service-card";

export function Services() {
  return (
    <Section id="servicos" className="overflow-hidden">
      {/* Continuidade visual com o Hero: uma luz fraca nascendo à direita. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_85%_0%,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
      />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Serviços"
            title={
              <>
                Seis frentes.{" "}
                <span className="text-gradient-brand">Um só ecossistema.</span>
              </>
            }
            description="Cada serviço resolve um problema real da operação — e todos conversam entre si, para que sua empresa venda mais, gaste menos tempo com trabalho repetitivo e cresça com previsibilidade."
          />
        </Reveal>

        <div className="mt-18 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.07}
              distance={18}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={<service.icon className="size-6" aria-hidden="true" />}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
