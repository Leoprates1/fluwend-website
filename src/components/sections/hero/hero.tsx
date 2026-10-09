"use client";

import { ArrowDownRight, MessageCircle } from "lucide-react";
import { useEffect, useRef, type CSSProperties } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

import { ScrollIndicator } from "./scroll-indicator";

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
/** 0 antes de `de`, 1 depois de `ate`, linear no meio. */
const entre = (x: number, de: number, ate: number) => clamp01((x - de) / (ate - de));

/**
 * A abertura é mais alta que a tela e o palco fica preso enquanto a pessoa rola
 * por ela. A rolagem não move a página: move o tempo do vídeo (o androide vira o
 * rosto, estoura em raios e vira a logo). Tudo que anima lê variáveis CSS que o
 * efeito abaixo atualiza no próprio <section>.
 */
export function Hero() {
  const secao = useRef<HTMLElement>(null);
  const filme = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = secao.current;
    const video = filme.current;
    if (!el || !video) return;

    let alvo = 0;
    let atual = 0;
    let zoomBase = 1;
    let quadro = 0;
    const largo = () => window.innerWidth >= 768;

    const ler = () => {
      const total = el.offsetHeight - window.innerHeight;
      const p = total > 0 ? clamp01((window.scrollY - el.offsetTop) / total) : 0;
      alvo = p;
      const sai = entre(p, 0.26, 0.4);
      el.style.setProperty("--p", p.toFixed(4));
      el.style.setProperty("--oa", (1 - sai).toFixed(3));
      // No computador o androide começa à direita, abrindo espaço para o título.
      el.style.setProperty("--desloca", largo() ? (16 * (1 - entre(p, 0.2, 0.45))).toFixed(2) : "0");
      zoomBase = largo() ? 1.16 - 0.16 * entre(p, 0.2, 0.45) : 1;
      el.style.setProperty("--ob", (entre(p, 0.42, 0.52) * (1 - entre(p, 0.7, 0.78))).toFixed(3));
      el.style.setProperty("--oc", entre(p, 0.9, 0.98).toFixed(3));
    };

    const passo = () => {
      // O tempo do vídeo persegue a rolagem aos poucos, para o movimento sair liso.
      atual += (alvo - atual) * 0.14;
      // No fim o vídeo encolhe, para a logo não ficar atrás do botão. Segue o tempo real
      // do vídeo: ali o quadro já é preto, igual ao fundo do palco, e a borda não aparece.
      const fim = entre(atual, 0.86, 0.95);
      el.style.setProperty("--zoom", (zoomBase - 0.2 * fim).toFixed(3));
      const duracao = video.duration;
      if (Number.isFinite(duracao) && duracao > 0) {
        const t = Math.min(duracao - 0.05, atual * duracao);
        if (Math.abs(video.currentTime - t) > 0.02) video.currentTime = t;
      }
      quadro = requestAnimationFrame(passo);
    };

    video.pause();
    ler();
    quadro = requestAnimationFrame(passo);
    window.addEventListener("scroll", ler, { passive: true });
    window.addEventListener("resize", ler);
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("scroll", ler);
      window.removeEventListener("resize", ler);
    };
  }, []);

  const camada = "pointer-events-none absolute inset-0 flex";

  return (
    <section
      ref={secao}
      id="inicio"
      className="relative h-[340svh]"
      style={{ "--p": 0, "--oa": 1, "--ob": 0, "--oc": 0 } as CSSProperties}
    >
      <div className="sticky top-0 isolate h-svh overflow-hidden bg-black">
        <video
          ref={filme}
          muted
          playsInline
          preload="auto"
          poster="/hero/androide-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 -z-20 size-full object-cover will-change-transform"
          style={{
            transform:
              "translateX(calc(var(--desloca,0) * 1%)) scale(var(--zoom,1))",
          }}
        >
          <source src="/hero/androide.mp4" type="video/mp4" />
        </video>

        {/* Véu: escurece a esquerda (computador) ou a base (celular) enquanto o título está na tela. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/40 to-background/50 md:bg-gradient-to-r md:from-background md:via-background/55 md:to-transparent"
          style={{ opacity: "var(--oa,1)" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-background/90 to-transparent"
        />

        {/* 1. Título e botões, no começo. */}
        <div
          className={`${camada} items-end pb-24 md:items-center md:pb-0`}
          style={{
            opacity: "var(--oa,1)",
            transform: "translateY(calc((1 - var(--oa,1)) * -40px))",
          }}
        >
          <Container>
            <div className="pointer-events-auto max-w-2xl">
              <p>
                <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-cyan opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-brand-cyan" />
                  </span>
                  <span className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
                    {siteConfig.positioning}
                  </span>
                </span>
              </p>

              <h1 className="mt-7 text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.04] font-semibold">
                Transformamos empresas em{" "}
                <span className="text-gradient-live">negócios inteligentes</span>.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                Unimos Inteligência Artificial, automação e engenharia de software
                para reduzir trabalho manual, aumentar vendas e preparar sua
                operação para escalar.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild variant="brand" size="xl">
                  <a
                    href={whatsappLink(whatsappMessages.hero)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle aria-hidden="true" />
                    Falar no WhatsApp
                  </a>
                </Button>
                <Button asChild variant="glass" size="xl" className="group">
                  <a href="#servicos">
                    Conhecer nossos serviços
                    <ArrowDownRight
                      aria-hidden="true"
                      className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                    />
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        {/* 2. A frase, enquanto o androide vira o rosto. Decorativa: o texto real está na seção de diferenciais. */}
        <div
          aria-hidden="true"
          className={`${camada} items-center justify-center px-6 text-center`}
          style={{ opacity: "var(--ob,0)" }}
        >
          <p
            className="max-w-5xl font-display text-[clamp(1.9rem,5.2vw,4.25rem)] leading-[1.08] font-semibold"
            style={{
              textShadow: "0 4px 40px rgba(5,7,10,.9)",
              transform: "scale(calc(.94 + var(--ob,0) * .06))",
            }}
          >
            A maioria entrega campanhas.
            <br />
            Nós construímos <span className="text-brand-cyan">ecossistemas.</span>
          </p>
        </div>

        {/* 3. Os botões voltam quando a logo aparece. */}
        <div
          className={`${camada} items-end justify-center px-6 pb-[clamp(1.4rem,5vh,3.5rem)]`}
          style={{
            opacity: "var(--oc,0)",
            transform: "translateY(calc((1 - var(--oc,0)) * 30px))",
          }}
        >
          <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a
                href={whatsappLink(whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={-1}
              >
                <MessageCircle aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div style={{ opacity: "calc(1 - var(--p,0) * 8)" }}>
          <ScrollIndicator />
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-brand-cyan"
          style={{ width: "calc(var(--p,0) * 100%)" }}
        />
      </div>
    </section>
  );
}
