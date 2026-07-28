"use client";

import { useState } from "react";
import { m, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Header transparente sobre o Hero.
 * Ganha vidro e contorno só depois que o conteúdo começa a passar por baixo —
 * assim a primeira dobra permanece limpa.
 *
 * O menu mobile completo será tratado na etapa do Header.
 */
export function SiteHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(value > 24);
  });

  return (
    <m.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500",
        isScrolled
          ? "border-b border-border/70 bg-background/72 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-8">
        <Logo />

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="bg-gradient-brand absolute -bottom-1.5 left-0 h-px w-0 transition-[width] duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <Button asChild variant="glass" size="sm" className="rounded-full">
          <a
            href={whatsappLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </Button>
      </Container>
    </m.header>
  );
}
