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
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 sm:gap-5",
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
