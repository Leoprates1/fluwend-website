/**
 * Fundo do Hero — composição abstrata em camadas, 100% CSS.
 *
 * Nenhuma imagem, nenhum canvas, nenhum JavaScript: o custo é de pintura,
 * não de execução. Server Component por definição.
 *
 * Ordem das camadas (de trás para frente):
 *  1. luz superior      — o brilho que nasce atrás do conteúdo
 *  2. auroras           — dois volumes de cor em deriva lenta
 *  3. malha técnica     — grid com máscara radial
 *  4. linha do horizonte— o corte luminoso que dá profundidade
 *  5. grão              — quebra o gradiente chapado
 *  6. vinheta + fade    — foca o centro e costura com a próxima seção
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
      <div className="animate-aurora-alt absolute top-[34%] left-[38%] h-[26rem] w-[26rem] rounded-full bg-primary/12 blur-[110px]" />

      {/* 3. Malha técnica */}
      <div className="bg-grid absolute inset-0 opacity-45 [mask-image:radial-gradient(80%_60%_at_50%_35%,black,transparent_75%)]" />

      {/* 4. Linha do horizonte — abaixo do bloco de texto, nunca sobre ele */}
      <div className="animate-horizon absolute inset-x-[16%] bottom-[12%] h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--brand-cyan)_60%,transparent),color-mix(in_oklab,var(--primary)_60%,transparent),transparent)]" />

      {/* 5. Grão */}
      <div className="bg-grain absolute inset-0 opacity-[0.16] mix-blend-soft-light" />

      {/* 6. Vinheta e transição para a próxima seção */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_40%,transparent_45%,var(--background)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
