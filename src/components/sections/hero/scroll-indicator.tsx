/**
 * Indicador de rolagem — presente, nunca protagonista.
 * É um link real: também serve a quem navega por teclado.
 */
export function ScrollIndicator() {
  return (
    <a
      href="#servicos"
      aria-label="Ir para a seção de serviços"
      className="group absolute inset-x-0 bottom-10 mx-auto flex w-fit flex-col items-center gap-3 opacity-60 transition-opacity duration-500 hover:opacity-100 focus-visible:opacity-100"
    >
      <span className="font-display text-[0.6rem] tracking-[0.32em] text-muted-foreground uppercase">
        Role
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-border">
        <span className="animate-scroll-hint absolute inset-x-0 top-0 block h-6 bg-gradient-to-b from-transparent via-brand-cyan to-transparent" />
      </span>
    </a>
  );
}
