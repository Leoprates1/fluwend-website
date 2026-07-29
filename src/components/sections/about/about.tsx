import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { SurfaceCard } from "@/components/ui/surface-card";
import { aboutParagraphs, promises } from "@/content/about";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <Section id="sobre" className="overflow-hidden">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-24">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Sobre a Fluwend"
                title={
                  <>
                    Uma empresa de tecnologia,{" "}
                    <span className="text-gradient-brand">
                      não uma agência.
                    </span>
                  </>
                }
              />
            </Reveal>

            <div className="mt-8 space-y-6">
              {aboutParagraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12}>
            <SurfaceCard className="border-primary/25 p-10 md:p-12">
              <span
                aria-hidden="true"
                className="bg-gradient-brand absolute inset-x-0 top-0 h-px opacity-70"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_65%_at_50%_0%,color-mix(in_oklab,var(--primary)_15%,transparent),transparent_72%)]"
              />

              <div className="relative">
                <Image
                  src="/brand/fluwend-symbol.png"
                  alt=""
                  width={974}
                  height={1289}
                  loading="lazy"
                  className="h-14 w-auto drop-shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
                />

                <p className="mt-8 font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                  Nossa promessa
                </p>

                <ul className="mt-6 space-y-4">
                  {promises.map((promise) => (
                    <li
                      key={promise}
                      className="border-b border-border/60 pb-4 text-xl font-semibold last:border-0 last:pb-0"
                    >
                      {promise}
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-sm text-muted-foreground">
                  {siteConfig.legalName} · {siteConfig.location.label}
                </p>
              </div>
            </SurfaceCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
