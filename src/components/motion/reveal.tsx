"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Atraso em segundos — use para escalonar itens de uma lista. */
  delay?: number;
  /** Deslocamento vertical inicial, em pixels. */
  distance?: number;
};

/**
 * Entrada suave ao entrar na viewport.
 * Movimento curto e duração longa — nada salta (DESIGN.md).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-96px" }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
