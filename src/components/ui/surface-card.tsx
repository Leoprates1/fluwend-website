import { cn } from "@/lib/utils";

/**
 * Classes do card premium do site — glass discreto, contorno suave e o
 * contorno que acende no hover. Ficam aqui para que Serviços, Diferenciais,
 * Processo, FAQ e Contato compartilhem exatamente a mesma superfície.
 */
export const surfaceCard =
  "relative overflow-hidden rounded-2xl border border-border/70 bg-surface/55 backdrop-blur-xl transition-colors duration-500";

export const surfaceCardInteractive = cn(
  surfaceCard,
  "hover:border-primary/45",
);

type SurfaceCardProps = React.ComponentProps<"div"> & {
  interactive?: boolean;
};

export function SurfaceCard({
  className,
  interactive = false,
  ...props
}: SurfaceCardProps) {
  return (
    <div
      className={cn(
        interactive ? surfaceCardInteractive : surfaceCard,
        className,
      )}
      {...props}
    />
  );
}
