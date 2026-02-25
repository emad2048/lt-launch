import { cn } from "@/lib/utils";
import type { QuickLink } from "@/data/types";

interface QuickLinkCardProps {
  link: QuickLink;
  className?: string;
}

export function QuickLinkCard({ link, className }: QuickLinkCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.06)] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.08)] hover:border-border/80 sm:p-5",
        className
      )}
    >
      <div className="mb-2">
        <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/80">
          {link.category}
        </span>
      </div>
      <h3 className="mb-2 text-base font-bold leading-tight text-foreground sm:text-lg">
        {link.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {link.description}
      </p>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-opacity duration-150 hover:underline hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        Open
        <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </a>
    </article>
  );
}
