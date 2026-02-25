import { cn } from "@/lib/utils";
import type { ScheduleDay } from "@/data/types";

interface DayCardProps {
  day: ScheduleDay;
  className?: string;
}

export function DayCard({ day, className }: DayCardProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-5",
        className
      )}
    >
      <h3 className="mb-3 border-b border-border pb-2.5 text-sm font-semibold uppercase tracking-wide text-foreground">
        {day.name}
      </h3>
      <ul className="space-y-2.5 sm:space-y-3" role="list">
        {day.blocks.map((block, i) => (
          <li
            key={i}
            className="flex flex-col gap-0.5 border-l-2 border-muted pl-3 text-sm transition-colors hover:border-primary/30 sm:pl-3.5"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <span
                className="shrink-0 font-mono text-xs text-muted-foreground"
                aria-label="Time"
              >
                {block.time}
              </span>
              <span className="font-medium text-foreground">{block.title}</span>
            </div>
            {block.details && (
              <p className="text-xs text-muted-foreground">
                {block.details}
              </p>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
