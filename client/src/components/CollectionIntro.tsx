/**
 * CollectionIntro — Introduction to the masala collection.
 * NEW: Deep charcoal headings + gold accents on warm wall background.
 */
import { motion } from "framer-motion";

export default function CollectionIntro() {
  return (
    <section id="collection" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background — warm aged paper */}
      <div className="absolute inset-0 bg-[var(--color-haveli-wall)]" />
      <div className="absolute inset-0 haveli-texture" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Ornate top decoration */}
          <div className="flex items-center justify-center gap-3 mb-7">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
            <svg className="w-5 h-5 text-[var(--color-gold)]/70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
            </svg>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent" />
          </div>

          <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-bronze)] mb-5">
            The Pushtaini Collection
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[var(--color-charcoal)] mb-6 leading-tight font-bold italic">
            Twelve Royal Masalas
          </h2>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-14 h-px bg-[var(--color-gold)]/40" />
            <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]/50" />
            <div className="w-14 h-px bg-[var(--color-gold)]/40" />
          </div>

          <p className="font-body text-lg md:text-xl text-[var(--color-charcoal)]/60 leading-relaxed max-w-2xl mx-auto mb-7">
            Each blend in the Pushtaini collection is a chapter from Rajasthan's culinary manuscript — 
            a story of land, culture, and centuries of perfected craft.
          </p>

          <p className="font-hindi text-lg text-[var(--color-gold-muted)] font-medium">
            "हर चुटकी में हज़ार साल का वज़न"
          </p>

          {/* Scroll hint */}
          <div className="mt-14 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-[var(--color-gold)]/20" />
            <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-[var(--color-charcoal)]/35">
              Scroll to explore each masala
            </p>
            <div className="w-10 h-px bg-[var(--color-gold)]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
