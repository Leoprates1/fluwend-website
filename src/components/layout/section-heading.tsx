import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Rótulo curto acima do título. */
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

/** Cabeçalho padrão das seções: rótulo, título e subtítulo. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="flex items-center gap-3">
        <span className="bg-gradient-brand h-px w-8" aria-hidden="true" />
        <span className="font-display text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
      </p>

      <h2 className="mt-7 text-[clamp(2rem,4.6vw,3.5rem)] leading-[1.08] font-semibold">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
