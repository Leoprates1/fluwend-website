"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "framer-motion";

/**
 * Provedores de movimento do site:
 * - Lenis: scroll suave global (DESIGN.md).
 * - MotionConfig: `reducedMotion="user"` desliga deslocamentos quando o
 *   sistema do usuário pede menos movimento, mantendo apenas fades.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  // `ReactLenis root` não cria elemento no DOM, então alternar entre os dois
  // caminhos não altera a árvore renderizada — não há risco de hidratação.
  if (prefersReducedMotion) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
  }

  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis
        root
        options={{
          lerp: 0.085,
          duration: 1.4,
          smoothWheel: true,
          wheelMultiplier: 0.9,
        }}
      >
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}
