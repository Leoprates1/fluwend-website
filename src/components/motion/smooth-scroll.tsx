"use client";

import { ReactLenis } from "lenis/react";
import {
  domAnimation,
  LazyMotion,
  MotionConfig,
  useReducedMotion,
} from "framer-motion";

/**
 * Provedores de movimento do site:
 * - LazyMotion: carrega só o subconjunto `domAnimation` do Framer Motion.
 *   Por isso os componentes usam `m.*` em vez de `motion.*` — `strict`
 *   garante que ninguém volte a importar o pacote inteiro sem perceber.
 * - MotionConfig: `reducedMotion="user"` desliga deslocamentos quando o
 *   sistema do usuário pede menos movimento, mantendo apenas fades.
 * - Lenis: scroll suave global (DESIGN.md), desativado no mesmo cenário.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  // `ReactLenis root` não cria elemento no DOM, então alternar entre os dois
  // caminhos não altera a árvore renderizada — não há risco de hidratação.
  const content = prefersReducedMotion ? (
    children
  ) : (
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
  );

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{content}</MotionConfig>
    </LazyMotion>
  );
}
