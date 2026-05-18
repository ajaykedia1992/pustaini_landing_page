/**
 * FloatingSpices — Ambient floating spice particles throughout the page.
 * Creates the feeling of spice dust in the air of an old haveli shop.
 */
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  opacity: number;
}

const SPICE_COLORS = [
  "#d4a545", // gold/turmeric
  "#c4783a", // coriander
  "#8b4513", // cumin
  "#cd5c5c", // chili
  "#daa520", // saffron
  "#b8860b", // amber
];

export default function FloatingSpices() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: SPICE_COLORS[Math.floor(Math.random() * SPICE_COLORS.length)],
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.opacity,
            animation: `spiceFloat ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
