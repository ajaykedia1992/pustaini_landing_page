/**
 * SpiceParticles — Continuous falling spice particles that change based on scroll position.
 * Design: Warm-toned particles matching the vintage haveli palette.
 * Colors shift based on which masala section is currently in view.
 */
import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
  drift: number;
}

const SPICE_COLORS = {
  turmeric: ["#E8A838", "#D4922A", "#C7841F", "#F0B848"],
  chili: ["#C0392B", "#E74C3C", "#A93226", "#D35400"],
  cumin: ["#8B6914", "#A67C00", "#6B5200", "#9B7B1A"],
  coriander: ["#5D8233", "#7BA23F", "#4A6B28", "#6B9B35"],
  saffron: ["#FF6F00", "#FF8F00", "#E65100", "#FFB300"],
  cardamom: ["#2E7D32", "#388E3C", "#1B5E20", "#4CAF50"],
  cinnamon: ["#6D4C41", "#8D6E63", "#5D4037", "#A1887F"],
  clove: ["#3E2723", "#5D4037", "#4E342E", "#6D4C41"],
  fennel: ["#9E9D24", "#AFB42B", "#827717", "#C0CA33"],
  mustard: ["#F9A825", "#FBC02D", "#F57F17", "#FFCA28"],
  fenugreek: ["#8D6E63", "#A1887F", "#6D4C41", "#BCAAA4"],
  pepper: ["#424242", "#616161", "#757575", "#9E9E9E"],
  mixed: ["#E8A838", "#C0392B", "#8B6914", "#FF6F00", "#6D4C41"],
};

type SpiceType = keyof typeof SPICE_COLORS;

export default function SpiceParticles({ activeSpice = "mixed" }: { activeSpice?: SpiceType }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const colors = SPICE_COLORS[activeSpice] || SPICE_COLORS.mixed;
    const newParticles: Particle[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.5 + 0.15,
      drift: (Math.random() - 0.5) * 40,
    }));
    setParticles(newParticles);
  }, [activeSpice]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-spice-fall"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size}px ${p.color}40`,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      {/* Larger slow-falling particles for depth */}
      {particles.slice(0, 12).map((p) => (
        <div
          key={`slow-${p.id}`}
          className="absolute rounded-full animate-spice-fall-slow blur-[1px]"
          style={{
            left: `${(p.x + 30) % 100}%`,
            width: `${p.size * 2}px`,
            height: `${p.size * 2}px`,
            backgroundColor: p.color,
            opacity: p.opacity * 0.3,
            "--duration": `${p.duration + 4}s`,
            "--delay": `${p.delay + 2}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export { SPICE_COLORS };
export type { SpiceType };
