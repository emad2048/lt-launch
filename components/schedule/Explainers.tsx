"use client";

import { cn } from "@/lib/utils";
import type { ScheduleMode } from "./ScheduleToggle";

interface ExplainersProps {
  mode: ScheduleMode;
  className?: string;
}

const garrisonBullets = {
  why: [
    "A predictable garrison week builds trust and lets your Soldiers plan life outside work.",
    "Clear blocks (PT, training, admin) reduce last-minute taskers and confusion.",
  ],
  rhythms: [
    "PT first keeps fitness non-negotiable; dedicated admin blocks protect training time.",
    "Professional development and one-on-ones are scheduled, not squeezed in.",
  ],
  pitfalls: [
    "Avoid filling every gap with meetings—leave buffer for the unexpected.",
    "Don’t let “urgent” admin push training to the back burner every week.",
  ],
};

const fieldBullets = {
  why: [
    "Field weeks are where you validate what you practiced in garrison.",
    "A clear sequence (prep → execute → AAR) turns chaos into learning.",
  ],
  rhythms: [
    "Reveille and movement times drive the week—communicate them early.",
    "Chow, recovery, AAR, and turn-in get dedicated time so nothing is rushed.",
  ],
  pitfalls: [
    "Skipping or shortening AAR wastes the training value of the week.",
    "Return and draw-down without a plan can burn the whole Friday.",
  ],
};

function ExplainerSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground">
        {title}
      </h3>
      <ul className="space-y-1.5 text-sm text-muted-foreground" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Explainers({ mode, className }: ExplainersProps) {
  const bullets = mode === "garrison" ? garrisonBullets : fieldBullets;

  return (
    <aside
      className={cn(className)}
      aria-label="Weekly rhythm explainer"
    >
      <div className="space-y-5 rounded-xl border border-border bg-card p-4 shadow-sm sm:p-5 sm:space-y-6">
        <h2 className="text-base font-semibold text-foreground">
          {mode === "garrison" ? "Garrison week" : "Field week"} at a glance
        </h2>
        <ExplainerSection title="Why this matters" items={bullets.why} />
        <ExplainerSection title="Key rhythms" items={bullets.rhythms} />
        <ExplainerSection title="Common pitfalls" items={bullets.pitfalls} />
      </div>
    </aside>
  );
}
