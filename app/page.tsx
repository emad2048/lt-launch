import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <main className="flex min-w-0 max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl">
          LT Launchpad
        </h1>
        <p className="text-lg text-muted-foreground">
          Professional onboarding for cadets and new Platoon Leaders.
        </p>
        <Button>Get Started</Button>
      </main>
    </div>
  );
}
