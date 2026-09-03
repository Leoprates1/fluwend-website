import { HeroPointer } from "./hero-pointer";

/**
 * Fundo do Hero — composição abstrata em camadas.
 *
 * Continua sem imagem, sem vídeo e sem canvas: o custo é de pintura, não de
 * execução. Este componente é Server Component; o único filho de cliente é o
 * <HeroPointer>, que existe só quando há mouse e some por completo no celular.
 *
 * Ordem das camadas (de trás para frente):
 *  1. luz superior      — o brilho que nasce atrás do conteúdo
 *  2. auroras           — três volumes de cor em deriva
 *  3. névoa             — volumes largos atravessando em sentido contrário
 *  4. malha técnica     — grid com máscara radial
 *  5. camadas do cursor — halo + malha acesa ao redor do mouse (só no desktop)
 *  6. linha do horizonte— o corte luminoso que dá profundidade
 *  7. grão              — quebra o gradiente chapado
 *  8. vinheta + fade    — foca o centro e costura com a próxima seção
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* 1. Luz superior */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-20%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_62%)]" />

      {/* 2. Auroras */}
      <div className="animate-aurora absolute -top-[22%] -left-[12%] h-[46rem] w-[46rem] rounded-full bg-primary/25 blur-[130px]" />
      <div className="animate-aurora-alt absolute -right-[16%] bottom-[4%] h-[38rem] w-[38rem] rounded-full bg-brand-cyan/16 blur-[120px]" />
      <div className="animate-aurora absolute top-[34%] left-[38%] h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-[110px]" />

      {/* 3. Névoa — mais larga que alta, e cruzando as auroras */}
      <div className="animate-fog absolute top-[10%] left-[20%] h-[22rem] w-[34rem] rounded-full bg-brand-cyan/12 blur-[90px]" />
      <div className="animate-fog-alt absolute bottom-[-8%] left-[6%] h-[24rem] w-[40rem] rounded-full bg-primary/16 blur-[100px]" />
      <div className="animate-fog absolute -top-[6%] right-[12%] h-[30rem] w-[30rem] rounded-full bg-brand-cyan/10 blur-[95px] [animation-direction:reverse]" />

      {/* 4. Malha técnica */}
      <div className="bg-grid absolute inset-0 opacity-45 [mask-image:radial-gradient(80%_60%_at_50%_35%,black,transparent_75%)]" />

      {/* 5. Cursor — nada é renderizado sem mouse */}
      <HeroPointer />

      {/* 6. Linha do horizonte — abaixo do bloco de texto, nunca sobre ele */}
      <div className="animate-horizon absolute inset-x-[16%] bottom-[12%] h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-cyan)_60%,transparent),color-mix(in_oklab,var(--primary)_60%,transparent),transparent)]" />

      {/* 7. Grão */}
      <div className="bg-grain absolute inset-0 opacity-[0.16] mix-blend-soft-light" />

      {/* 8. Vinheta e transição para a próxima seção */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_40%,transparent_45%,var(--background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
