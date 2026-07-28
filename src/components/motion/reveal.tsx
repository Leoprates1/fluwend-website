"use client";

import { motion } from "framer-motion";
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
 *
 * O respeito a `prefers-reduced-motion` vem do `MotionConfig reducedMotion="user"`
 * aplicado na raiz: o deslocamento é descartado e resta apenas o fade.
 * A árvore renderizada é sempre a mesma no servidor e no cliente — qualquer
 * ramificação aqui causaria erro de hidratação.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
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
