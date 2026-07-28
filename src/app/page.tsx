import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SiteHeader } from "@/components/layout/site-header";
import { Reveal } from "@/components/motion/reveal";
import { Hero } from "@/components/sections/hero/hero";
import { services } from "@/content/services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />

        {/* TEMPORÁRIO — destino do CTA e da âncora até a seção de Serviços ser construída. */}
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
                    <h3 className="mt-6 text-xl font-semibold">
                      {service.title}
                    </h3>
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
    </>
  );
}
