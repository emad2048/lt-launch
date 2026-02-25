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
        "flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:p-5",
        className
      )}
    >
      <div className="mb-2">
        <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          {link.category}
        </span>
      </div>
      <h3 className="mb-2 text-base font-semibold leading-tight text-foreground sm:text-lg">
        {link.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {link.description}
      </p>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        Open
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}
