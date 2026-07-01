import { cn } from "../../lib/utils";

export function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "text-xs font-bold tracking-widest  uppercase text-dark mb-3  font-body",
        className,
      )}
    >
      {children}
    </p>
  );
}
