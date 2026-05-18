/**
 * PackagingSection — Premium packaging showcase.
 * NEW: Charcoal headings + gold accents on warm haveli wall.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";
import { packagingOptions } from "@/lib/masalaData";

const PACKAGING_IMAGE = asset("/images/pustani-packaging.webp");

export default function PackagingSection() {
  return (
    <section id="packaging" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-haveli-wall)]" />
      <div className="absolute inset-0 haveli-texture" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-bronze)] mb-4">
            Packaging & Presentation
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[var(--color-charcoal)] mb-5 font-bold italic">
            Fit for Royalty
          </h2>
          <p className="font-body text-base text-[var(--color-charcoal)]/55 max-w-xl mx-auto">
            Every Pushtaini package is a treasure chest — designed to preserve the soul of each masala 
            while honoring the royal heritage of Rajasthan.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-14 h-px bg-[var(--color-gold)]/30" />
            <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]/40" />
            <div className="w-14 h-px bg-[var(--color-gold)]/30" />
          </div>
        </motion.div>

        {/* Main packaging image */}
        <motion.div
          className="max-w-4xl mx-auto px-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group ornate-frame p-2 bg-[var(--color-charcoal)]/10">
            <img
              src={PACKAGING_IMAGE}
              alt="Pushtaini premium spice packaging collection"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-warm-black)]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Packaging options grid */}
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {packagingOptions.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              className="group relative p-6 border border-[var(--color-gold)]/15 bg-[var(--color-ivory)]/30 hover:border-[var(--color-gold)]/40 transition-all duration-500"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              whileHover={{ y: -3 }}
            >
              {/* Corner ornaments on hover */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[var(--color-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Type badge */}
              <div className="mb-3">
                <span className="font-ui text-[9px] tracking-[0.25em] uppercase px-2.5 py-1 border border-[var(--color-gold)]/25 text-[var(--color-bronze)] font-medium">
                  {pkg.type}
                </span>
              </div>

              {/* Name */}
              <h4 className="font-display text-lg text-[var(--color-charcoal)] mb-1.5 font-semibold">
                {pkg.name}
              </h4>

              {/* Size */}
              <p className="font-heading text-[10px] text-[var(--color-bronze)] tracking-[0.2em] uppercase mb-3">
                {pkg.size}
              </p>

              {/* Description */}
              <p className="font-body text-sm text-[var(--color-charcoal)]/50 leading-relaxed">
                {pkg.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Travel-friendly callout */}
        <motion.div
          className="max-w-3xl mx-auto px-4 mt-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative p-8 md:p-12 border border-[var(--color-gold)]/25 bg-[var(--color-ivory)]/20 text-center">
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]/35" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/35" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/35" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]/35" />

            <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-bronze)] mb-3">
              Travel With Taste
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-[var(--color-charcoal)] mb-4 font-bold italic">
              Take Pushtaini Everywhere
            </h3>
            <p className="font-body text-base text-[var(--color-charcoal)]/50 max-w-lg mx-auto leading-relaxed mb-6">
              Our travel-friendly packaging is designed for the modern explorer who refuses to 
              compromise on authentic Rajasthani flavors — compact, leak-proof, and TSA-approved.
            </p>
            <a href="#collection" className="btn-royal-dark">
              Discover Travel Packs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
