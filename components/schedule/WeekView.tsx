import { cn } from "@/lib/utils";
import type { Schedule } from "@/data/types";
import { DayCard } from "./DayCard";

interface WeekViewProps {
  schedule: Schedule;
  className?: string;
}

export function WeekView({ schedule, className }: WeekViewProps) {
  return (
    <div className={cn("animate-in fade-in duration-300", className)}>
      {schedule.map((week, wi) => (
        <section key={wi} className="space-y-4 sm:space-y-5">
          {week.name && (
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              {week.name}
            </h2>
          )}
          <div
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            role="list"
          >
            {week.days.map((day, di) => (
              <DayCard key={di} day={day} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
