"use client";

import { useState, useMemo } from "react";
import { templates } from "@/data/templates";
import type { TemplateCategory } from "@/data/types";
import { TemplatesGrid } from "@/components/templates/TemplatesGrid";
import { Button } from "@/components/ui/button";

const CATEGORIES: TemplateCategory[] = [
  "Counseling",
  "Readiness",
  "Property",
  "Admin/Training",
];

type FilterValue = "All" | TemplateCategory;

export default function TemplatesPage() {
  const [selected, setSelected] = useState<FilterValue>("All");

  const filteredTemplates = useMemo(() => {
    if (selected === "All") return templates;
    return templates.filter((t) => t.category === selected);
  }, [selected]);

  return (
    <main className="py-8">
      <h1>Templates</h1>
      <p className="mt-2 text-muted-foreground">
        Downloadable Word and PDF templates for counseling, readiness, property, and admin.
      </p>

      <section className="mt-6" aria-label="Filter by category">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selected === "All" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelected("All")}
            className="rounded-full"
          >
            All
          </Button>
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={selected === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelected(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <div className="mt-6">
        <TemplatesGrid templates={filteredTemplates} />
      </div>
    </main>
  );
}
