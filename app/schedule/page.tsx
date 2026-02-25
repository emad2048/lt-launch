"use client";

import { useState } from "react";
import { garrisonSchedule, fieldSchedule } from "@/data/schedule";
import type { ScheduleMode } from "@/components/schedule/ScheduleToggle";
import { ScheduleToggle } from "@/components/schedule/ScheduleToggle";
import { Explainers } from "@/components/schedule/Explainers";
import { WeekView } from "@/components/schedule/WeekView";

export default function SchedulePage() {
  const [mode, setMode] = useState<ScheduleMode>("garrison");
  const schedule = mode === "garrison" ? garrisonSchedule : fieldSchedule;

  return (
    <main className="py-6 sm:py-8">
      <h1>Schedule</h1>
      <p className="mt-2 text-muted-foreground">
        Toggle between Garrison and Field week templates.
      </p>
      <div className="mt-5 sm:mt-6">
        <ScheduleToggle value={mode} onChange={setMode} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_minmax(280px,340px)] lg:items-start">
        <div className="min-w-0">
          <WeekView schedule={schedule} />
        </div>
        <Explainers mode={mode} className="lg:sticky lg:top-6" />
      </div>
    </main>
  );
}
