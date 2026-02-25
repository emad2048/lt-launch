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
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5",
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
