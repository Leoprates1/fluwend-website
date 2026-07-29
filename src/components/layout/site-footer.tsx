import { Mail, MapPin, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

const socialLinks = Object.entries(siteConfig.social).filter(
  ([, href]) => href.length > 0,
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/70">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_100%_at_50%_100%,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_70%)]"
      />

      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-muted-foreground">{siteConfig.slogan}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              Navegação
            </h2>
            <ul className="mt-6 space-y-3.5">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
              Fale com a gente
            </h2>
            <ul className="mt-6 space-y-3.5">
              <li>
                <a
                  href={whatsappLink(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <MessageCircle
                    aria-hidden="true"
                    className="size-4 text-brand-cyan"
                  />
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <Mail aria-hidden="true" className="size-4 text-brand-cyan" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin aria-hidden="true" className="size-4 text-brand-cyan" />
                {siteConfig.location.label}
              </li>
            </ul>

            {socialLinks.length > 0 ? (
              <ul className="mt-6 flex gap-4">
                {socialLinks.map(([name, href]) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground capitalize transition-colors duration-300 hover:text-foreground"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border/60 pt-8 text-sm text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p className="font-display text-[0.65rem] tracking-[0.24em] uppercase">
            {siteConfig.positioning}
          </p>
        </div>
      </Container>
    </footer>
  );
}
