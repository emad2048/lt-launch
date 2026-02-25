import { cn } from "@/lib/utils";
import type { QuickLink } from "@/data/types";
import { QuickLinkCard } from "./QuickLinkCard";

interface QuickLinksGridProps {
  links: QuickLink[];
  className?: string;
}

export function QuickLinksGrid({ links, className }: QuickLinksGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 md:grid-cols-2 sm:gap-6",
        className
      )}
      role="list"
    >
      {links.map((link) => (
        <QuickLinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
