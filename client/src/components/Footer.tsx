/**
 * Footer — Premium brand footer with gold/charcoal luxury palette.
 */
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-[var(--color-warm-black)] border-t border-[var(--color-gold)]/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Brand mark */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl mb-3 font-bold italic gold-text-gradient">
            Pushtaini
          </h2>
          <p className="font-heading text-xs tracking-[0.4em] uppercase text-[var(--color-haveli-cream)]/40">
            Old Roots. Bold Spices.
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-[var(--color-gold)]/20" />
            <div className="w-1.5 h-1.5 rotate-45 border border-[var(--color-gold)]/25" />
            <div className="w-10 h-px bg-[var(--color-gold)]/20" />
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <h5 className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/55 mb-3">Collection</h5>
            <ul className="space-y-1.5">
              <li><a href="#collection" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">All Masalas</a></li>
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Gift Sets</a></li>
              <li><a href="#packaging" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Travel Packs</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/55 mb-3">Heritage</h5>
            <ul className="space-y-1.5">
              <li><a href="#story" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Our Story</a></li>
              <li><a href="#culture" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Rajasthani Culture</a></li>
              <li><a href="#family" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">The Family</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/55 mb-3">Experience</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Recipes</a></li>
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Spice Guide</a></li>
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Virtual Tour</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/55 mb-3">Connect</h5>
            <ul className="space-y-1.5">
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Wholesale</a></li>
              <li><a href="#" className="font-body text-sm text-[var(--color-haveli-cream)]/40 hover:text-[var(--color-gold)] transition-colors duration-300">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--color-gold)]/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-ui text-[10px] tracking-wider text-[var(--color-haveli-cream)]/25">
            &copy; 2026 Pushtaini. All rights reserved. Crafted in Rajasthan with royal pride.
          </p>
          <p className="font-hindi text-sm text-[var(--color-gold)]/25">
            पुश्तैनी — राजस्थान की शाही विरासत
          </p>
        </div>
      </div>
    </footer>
  );
}
