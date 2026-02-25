import { quickLinks } from "@/data/links";
import { QuickLinksGrid } from "@/components/links/QuickLinksGrid";

export default function LinksPage() {
  return (
    <main className="py-8">
      <h1>Quick Links</h1>
      <p className="mt-2 text-muted-foreground">
        Essential links for personnel, training, logistics, and finance.
      </p>
      <div className="mt-6">
        <QuickLinksGrid links={quickLinks} />
      </div>
    </main>
  );
}
