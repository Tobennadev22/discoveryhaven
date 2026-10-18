import { cn } from "../../lib/utils";

// A small yellow "sticker" tag above a section heading. It carries its own
// colours so it reads on both light and dark sections; colour classes passed
// in from older call sites are dropped so they can't clash with the sticker.
export function SectionLabel({ children, className }) {
  const layout = (className || "")
    .split(/\s+/)
    .filter((c) => c && !/^text-(aqua|yellow|white|dark|slate|gray)/.test(c))
    .join(" ");

  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 -rotate-2 rounded-full border-2 border-dark bg-yellow px-3.5 py-1 mb-5 font-body text-[0.8125rem] font-extrabold leading-snug text-dark shadow-press-sm",
        layout,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-dark" />
      {children}
    </p>
  );
}
