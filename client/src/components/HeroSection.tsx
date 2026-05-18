/**
 * HeroSection — Luxury haveli wall with Pushtaini brand name.
 * NEW: Gold gradient title + charcoal accents replacing bland maroon.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const HAVELI_WALL = asset("/images/pustani-haveli-wall.webp");

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Haveli wall background */}
      <div className="absolute inset-0">
        <img
          src={HAVELI_WALL}
          alt="Vintage haveli wall"
          className="w-full h-full object-cover"
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(20,16,8,0.3)] via-transparent to-[rgba(20,16,8,0.5)]" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(15,12,6,0.6) 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Established date */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="font-heading text-[11px] tracking-[0.4em] text-[var(--color-gold)]/80">EST.</span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[var(--color-gold)]/60" />
            <svg className="w-4 h-4 text-[var(--color-gold)]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
            </svg>
            <div className="w-8 h-px bg-[var(--color-gold)]/60" />
          </div>
          <span className="font-heading text-[11px] tracking-[0.4em] text-[var(--color-gold)]/80">MMXXIV</span>
        </motion.div>

        {/* Main title — PUSHTAINI in luminous gold */}
        <motion.h1
          className="font-display text-7xl md:text-9xl lg:text-[11rem] leading-[0.9] mb-5 font-bold gold-shimmer-gradient animate-shimmer"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          style={{
            textShadow: "0 4px 30px rgba(180, 150, 60, 0.3), 0 2px 10px rgba(180, 150, 60, 0.15)",
            filter: "drop-shadow(0 2px 20px rgba(180, 150, 60, 0.2))"
          }}
        >
          Pushtaini
        </motion.h1>

        {/* Subtitle with decorative elements */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-10 h-px bg-[var(--color-gold)]/50" />
          <span className="font-heading text-base md:text-lg tracking-[0.5em] text-[var(--color-gold)]/90">
            Masala
          </span>
          <div className="w-10 h-px bg-[var(--color-gold)]/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-heading text-xl md:text-2xl tracking-[0.2em] text-[var(--color-haveli-cream)]/85 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Old Roots. Bold Spices.
        </motion.p>

        {/* Hindi tagline */}
        <motion.p
          className="font-hindi text-xl md:text-2xl text-[var(--color-gold)]/75 mb-3 font-medium"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          हर मसाला, एक किस्सा।
        </motion.p>

        {/* Subtitle description */}
        <motion.p
          className="font-body text-lg md:text-xl text-[var(--color-haveli-cream)]/60 max-w-md mx-auto italic"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        >
          Every Masala. A Chapter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a href="#collection" className="btn-royal">
            Explore Collection
          </a>
          <a href="#family" className="btn-royal-outline">
            Meet The Family
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-px h-14 bg-gradient-to-b from-[var(--color-gold)]/50 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
