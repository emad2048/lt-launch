"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ScheduleMode = "garrison" | "field";

interface ScheduleToggleProps {
  value: ScheduleMode;
  onChange: (mode: ScheduleMode) => void;
  className?: string;
}

export function ScheduleToggle({ value, onChange, className }: ScheduleToggleProps) {
  return (
    <div
      role="tablist"
      aria-label="Schedule type"
      className={cn(
        "flex w-full rounded-lg border border-border bg-muted p-1 sm:w-auto sm:inline-flex",
        className
      )}
    >
      <Button
        role="tab"
        aria-selected={value === "garrison"}
        variant={value === "garrison" ? "default" : "ghost"}
        size="sm"
        onClick={() => onChange("garrison")}
        className="flex-1 rounded-md transition-colors sm:flex-initial"
      >
        Garrison
      </Button>
      <Button
        role="tab"
        aria-selected={value === "field"}
        variant={value === "field" ? "default" : "ghost"}
        size="sm"
        onClick={() => onChange("field")}
        className="flex-1 rounded-md transition-colors sm:flex-initial"
      >
        Field
      </Button>
    </div>
  );
}
