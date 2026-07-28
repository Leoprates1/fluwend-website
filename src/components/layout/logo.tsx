import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

/**
 * Símbolo da marca + wordmark tipográfico.
 * O símbolo é o recorte otimizado gerado por `scripts/extract-brand-assets.mjs`.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label={`${siteConfig.name} — ir para o topo`}
      className={cn(
        "group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      <Image
        src="/brand/fluwend-symbol.png"
        alt=""
        width={974}
        height={1289}
        priority
        className="h-8 w-auto drop-shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_45%,transparent)]"
      />
      <span className="font-display text-base font-semibold tracking-[0.26em] uppercase">
        {siteConfig.name}
      </span>
    </a>
  );
}
