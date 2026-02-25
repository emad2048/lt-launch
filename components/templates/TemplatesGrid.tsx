import { cn } from "@/lib/utils";
import type { Template } from "@/data/types";
import { TemplateCard } from "./TemplateCard";

interface TemplatesGridProps {
  templates: Template[];
  className?: string;
}

export function TemplatesGrid({ templates, className }: TemplatesGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6",
        className
      )}
      role="list"
    >
      {templates.map((template) => (
        <TemplateCard key={template.id} template={template} />
      ))}
    </div>
  );
}
