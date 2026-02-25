import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <main className="flex min-w-0 max-w-2xl flex-col items-center gap-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
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
