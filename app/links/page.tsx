"use client";

import { useState, useMemo } from "react";
import { quickLinks } from "@/data/links";
import type { QuickLinkCategory } from "@/data/types";
import { QuickLinksGrid } from "@/components/links/QuickLinksGrid";
import { Button } from "@/components/ui/button";

const CATEGORIES: QuickLinkCategory[] = [
  "Personnel/Admin",
  "Training",
  "Maintenance/Logistics",
  "Finance",
];

type FilterValue = "All" | QuickLinkCategory;

export default function LinksPage() {
  const [selected, setSelected] = useState<FilterValue>("All");

  const filteredLinks = useMemo(() => {
    if (selected === "All") return quickLinks;
    return quickLinks.filter((link) => link.category === selected);
  }, [selected]);

  return (
    <main className="py-8">
      <h1>Quick Links</h1>
      <p className="mt-2 text-muted-foreground">
        Essential links for personnel, training, logistics, and finance. Bookmark these for day-to-day use.
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
        <QuickLinksGrid links={filteredLinks} />
      </div>
    </main>
  );
}
