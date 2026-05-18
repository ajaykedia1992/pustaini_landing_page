/**
 * NotFound — 404 page with Pushtaini brand styling.
 */
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-warm-black)]">
      <div className="text-center px-4 max-w-md">
        <p className="font-display text-8xl gold-text-gradient mb-4 font-bold italic" style={{ opacity: 0.4 }}>404</p>
        <h1 className="font-display text-2xl text-[var(--color-haveli-cream)] mb-3 font-semibold">
          Page Not Found
        </h1>
        <p className="font-body text-base text-[var(--color-haveli-cream)]/50 mb-8">
          This page has vanished like saffron threads in a royal feast.
        </p>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setLocation("/")}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
