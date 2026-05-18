/**
 * MasalaCard — Individual masala section with luxury premium styling.
 * Typography: Playfair Display (display) + Cormorant SC (headings) + Cormorant Garamond (body) + Outfit (UI)
 */
import { motion } from "framer-motion";
import type { Masala } from "@/lib/masalaData";

interface MasalaCardProps {
  masala: Masala;
  index: number;
}

export default function MasalaCard({ masala, index }: MasalaCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Alternating warm backgrounds */}
      <div className={`absolute inset-0 ${isEven ? "bg-[var(--color-haveli-dark)]" : "bg-[oklch(0.24_0.035_48)]"}`} />
      
      {/* Subtle color accent from the masala */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background: `radial-gradient(ellipse at ${isEven ? "25%" : "75%"} 50%, ${masala.color}, transparent 60%)`,
        }}
      />

      <div className={`relative z-10 max-w-6xl mx-auto px-4 md:px-8 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-10 md:gap-16`}>
        {/* Spice visual card */}
        <motion.div
          className="w-full md:w-2/5 relative"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative max-w-[320px] mx-auto">
            {/* Ornate frame */}
            <div className="relative p-6 border border-[var(--color-gold)]/25 bg-[var(--color-aged-paper)]/5">
              {/* Corner ornaments */}
              <div className="absolute -top-px -left-px w-7 h-7 border-t border-l border-[var(--color-gold)]/50" />
              <div className="absolute -top-px -right-px w-7 h-7 border-t border-r border-[var(--color-gold)]/50" />
              <div className="absolute -bottom-px -left-px w-7 h-7 border-b border-l border-[var(--color-gold)]/50" />
              <div className="absolute -bottom-px -right-px w-7 h-7 border-b border-r border-[var(--color-gold)]/50" />

              {/* Inner content */}
              <div className="text-center py-8">
                {/* Spice color circle */}
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 relative animate-float"
                  style={{ 
                    background: `radial-gradient(circle, ${masala.color}90, ${masala.accentColor}50)`,
                    boxShadow: `0 0 50px ${masala.color}25, 0 0 100px ${masala.color}10`
                  }}
                >
                  <div className="absolute inset-2 rounded-full border border-[var(--color-gold)]/20" />
                </div>

                {/* Hindi name */}
                <p className="font-hindi text-2xl mb-3 font-semibold" style={{ color: masala.color }}>
                  {masala.hindiName}
                </p>

                {/* Aroma note */}
                <div className="w-14 h-px mx-auto my-3 bg-[var(--color-gold)]/25" />
                <p className="font-body text-xs text-[var(--color-haveli-cream)]/55 italic leading-relaxed px-2">
                  {masala.aromaNote}
                </p>
              </div>
            </div>

            {/* Ingredient tags */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {masala.ingredients.slice(0, 4).map((ingredient, i) => (
                <motion.span
                  key={ingredient}
                  className="text-[10px] font-ui tracking-[0.15em] px-3 py-1 border border-[var(--color-gold)]/18 text-[var(--color-haveli-cream)]/55 bg-[var(--color-haveli-dark)]/30 uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {ingredient}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Number and tagline */}
          <div className="flex items-center gap-4 mb-3">
            <span className="font-display text-3xl text-[var(--color-gold)]/15 font-bold italic">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="font-ui text-[10px] tracking-[0.3em] uppercase font-medium"
              style={{ color: masala.color }}
            >
              {masala.tagline}
            </span>
          </div>

          {/* Royal Name */}
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-haveli-cream)] mb-1 leading-tight font-bold italic">
            {masala.royalName}
          </h3>
          <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--color-haveli-cream)]/40 mb-1">
            {masala.character} — {masala.characterTitle}
          </p>

          {/* Dish reference */}
          <p className="font-body text-sm italic text-[var(--color-gold)]/55 mb-5">
            Crafted for — <span className="text-[var(--color-haveli-cream)]/60">{masala.dish}</span>
          </p>

          {/* Description */}
          <p className="font-body text-base text-[var(--color-haveli-cream)]/75 leading-relaxed mb-5">
            {masala.description}
          </p>

          {/* Story */}
          <div className="relative pl-5 border-l mb-5" style={{ borderColor: `${masala.color}40` }}>
            <p className="font-body text-sm text-[var(--color-haveli-cream)]/55 leading-relaxed italic">
              {masala.story}
            </p>
          </div>

          {/* Cultural note */}
          <div className="p-5 border border-[var(--color-gold)]/12 bg-[var(--color-haveli-dark)]/15">
            <p className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/65 mb-2">
              Cultural Heritage
            </p>
            <p className="font-body text-sm text-[var(--color-haveli-cream)]/50 leading-relaxed">
              {masala.culturalNote}
            </p>
          </div>

          {/* Dish description */}
          <div className="mt-4 flex items-start gap-3">
            <div className="w-1.5 h-1.5 mt-2 rotate-45" style={{ backgroundColor: masala.color }} />
            <p className="font-body text-sm text-[var(--color-haveli-cream)]/45">
              <span className="text-[var(--color-gold)]/65 font-medium">{masala.dish}:</span> {masala.dishDescription}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="mt-16 md:mt-24 flex items-center justify-center gap-4 max-w-xs mx-auto">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/18 to-transparent" />
        <div className="w-1.5 h-1.5 rotate-45 border border-[var(--color-gold)]/25" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-gold)]/18 to-transparent" />
      </div>
    </motion.div>
  );
}
