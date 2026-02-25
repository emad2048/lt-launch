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
        "flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 sm:p-5",
        className
      )}
    >
      <div className="mb-2">
        <span className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          {template.category}
        </span>
      </div>
      <h3 className="mb-2 text-base font-semibold leading-tight text-foreground sm:text-lg">
        {template.title}
      </h3>
      <p className="mb-4 flex-1 text-sm text-muted-foreground">
        {template.description}
      </p>
      <a
        href={downloadHref}
        download={template.filename}
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary hover:underline"
      >
        Download
        <span aria-hidden>↓</span>
      </a>
    </article>
  );
}
