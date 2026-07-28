import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section">;

/**
 * Bloco vertical padrão do site.
 * O respiro entre seções é definido aqui — não em cada seção.
 */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-24 py-section md:py-section-lg",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
