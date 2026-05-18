/**
 * OrnateBorder — Decorative border frame inspired by Rajasthani haveli architecture.
 * Uses gold tones matching the luxury aesthetic.
 */
import { motion } from "framer-motion";

export default function OrnateBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Corner ornaments */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-t border-l border-[var(--color-gold)]/50" />
      <div className="absolute -top-3 -right-3 w-8 h-8 border-t border-r border-[var(--color-gold)]/50" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b border-l border-[var(--color-gold)]/50" />
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b border-r border-[var(--color-gold)]/50" />
      
      {/* Inner border */}
      <div className="absolute inset-0 border border-[var(--color-gold)]/20 pointer-events-none" />
      
      {/* Content */}
      {children}
    </motion.div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
      <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]/50" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
    </motion.div>
  );
}
