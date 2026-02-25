import { cn } from "@/lib/utils";
import type { Template } from "@/data/types";

interface TemplateCardProps {
  template: Template;
  className?: string;
}

export function TemplateCard({ template, className }: TemplateCardProps) {
  const downloadHref = `/templates/${template.filename}`;

  return (
    <article
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.06)] transition-[box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.08)] hover:border-border/80 sm:p-5",
        className
      )}
    >
      <div className="mb-2">
        <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground/80">
          {template.category}
        </span>
      </div>
      <h3 className="mb-2 text-base font-bold leading-tight text-foreground sm:text-lg">
        {template.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {template.description}
      </p>
      <a
        href={downloadHref}
        download={template.filename}
        className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-opacity duration-150 hover:underline hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
      >
        Download
        <span aria-hidden className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
      </a>
    </article>
  );
}
