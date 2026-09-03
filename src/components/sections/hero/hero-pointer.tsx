"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Camadas do Hero que reagem ao cursor.
 *
 * Duas coisas acontecem ao mesmo tempo: um halo azul-ciano acompanha o mouse
 * em `mix-blend-mode: screen`, e a malha técnica acende só ao redor dele.
 *
 * Decisões que valem registro:
 *
 *  - **Não renderiza nada** sem mouse (`hover: hover` + `pointer: fine`) nem
 *    quando o visitante pediu `prefers-reduced-motion`. Em celular o Hero
 *    volta a ser exatamente o que era: nenhuma camada extra, nenhum listener.
 *  - A montagem acontece depois do primeiro efeito, então o HTML do servidor e
 *    o da primeira renderização do cliente são iguais — nada de divergência de
 *    hidratação.
 *  - A posição é escrita **no máximo uma vez por quadro**, em variáveis CSS.
 *    Nenhum estado do React muda ao mover o mouse: não há re-render.
 *  - O laço só roda enquanto o cursor ainda está a caminho do alvo; parado, ele
 *    se encerra sozinho em vez de ocupar um `requestAnimationFrame` eterno.
 */
export function HeroPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const [ativo, setAtivo] = useState(false);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const temMouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (temMouse.matches && !menosMovimento.matches) {
      setAtivo(true);
    }
  }, []);

  useEffect(() => {
    if (!ativo) return;

    const el = ref.current;
    if (!el) return;

    /** Última posição conhecida do cursor, em coordenadas da viewport. */
    let clienteX = 0;
    let clienteY = 0;
    /** Posição desenhada, que persegue a do cursor com atraso. */
    let x: number | null = null;
    let y: number | null = null;
    let quadro = 0;
    let temPosicao = false;

    const desenhar = () => {
      quadro = 0;

      const caixa = el.getBoundingClientRect();
      const alvoX = clienteX - caixa.left;
      const alvoY = clienteY - caixa.top;

      if (x === null || y === null) {
        x = alvoX;
        y = alvoY;
      } else {
        x += (alvoX - x) * 0.14;
        y += (alvoY - y) * 0.14;
      }

      el.style.setProperty("--pointer-x", `${x.toFixed(1)}px`);
      el.style.setProperty("--pointer-y", `${y.toFixed(1)}px`);

      // Continua só enquanto ainda houver caminho a percorrer.
      if (Math.abs(alvoX - x) > 0.5 || Math.abs(alvoY - y) > 0.5) {
        quadro = requestAnimationFrame(desenhar);
      }
    };

    const aoMover = (evento: MouseEvent) => {
      clienteX = evento.clientX;
      clienteY = evento.clientY;

      if (!temPosicao) {
        temPosicao = true;
        setVisivel(true);
      }

      if (!quadro) {
        quadro = requestAnimationFrame(desenhar);
      }
    };

    window.addEventListener("mousemove", aoMover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", aoMover);
      if (quadro) cancelAnimationFrame(quadro);
    };
  }, [ativo]);

  if (!ativo) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visivel ? 1 : 0 }}
    >
      <div className="grid-reveal absolute inset-0" />
      <div className="pointer-halo absolute inset-0" />
    </div>
  );
}
