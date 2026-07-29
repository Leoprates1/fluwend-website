"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

/**
 * Navegação mobile em painel inteiro.
 * Trava o scroll enquanto aberta (inclusive o do Lenis), fecha com Esc,
 * ao escolher um link e ao voltar para o desktop.
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (!isOpen) return;

    lenis?.stop();
    document.documentElement.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    function handleBreakpoint() {
      if (desktop.matches) setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleBreakpoint);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [isOpen, lenis]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="menu-mobile"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        className="relative z-50 inline-flex size-10 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors duration-300 hover:border-primary/50 lg:hidden"
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen ? (
          <m.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-background/96 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8 pb-16">
              <nav aria-label="Navegação principal">
                <ul className="space-y-2">
                  {siteConfig.nav.map((link, index) => (
                    <m.li
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.06 * index,
                        ease: EASE,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="font-display block py-3 text-3xl font-semibold transition-colors duration-300 hover:text-brand-cyan"
                      >
                        {link.label}
                      </a>
                    </m.li>
                  ))}
                </ul>
              </nav>

              <Button
                asChild
                variant="brand"
                size="xl"
                className="mt-12 w-full sm:w-fit"
              >
                <a
                  href={whatsappLink(whatsappMessages.default)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle aria-hidden="true" />
                  Falar no WhatsApp
                </a>
              </Button>

              <p className="mt-8 text-sm text-muted-foreground">
                {siteConfig.contact.whatsappDisplay} ·{" "}
                {siteConfig.location.label}
              </p>
            </div>
          </m.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
