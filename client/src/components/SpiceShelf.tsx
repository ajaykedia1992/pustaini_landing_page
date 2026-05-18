/**
 * SpiceShelf — Full-width spice shelf display section.
 * Shows the ornate carved shelf with brass containers and glass jars.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const SHELF_IMAGE = asset("/images/pushtaini-spice-shelf.webp");

export default function SpiceShelf() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-dark)] via-[var(--color-haveli-brown)] to-[var(--color-haveli-dark)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section intro */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            The Pushtaini Pantry
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-white italic font-bold mb-3">
            Every Jar Tells a Story
          </h2>
          <p className="font-body text-sm text-[var(--color-haveli-cream)] max-w-md mx-auto">
            Stone-ground on 200-year-old chakki mills. Stored in hand-engraved brass. 
            Sealed with generations of wisdom.
          </p>
        </motion.div>

        {/* Shelf Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Ornate frame */}
          <div className="absolute -inset-3 md:-inset-5 border border-[var(--color-haveli-gold)]/15" />
          <div className="absolute -inset-1 md:-inset-2 border border-[var(--color-haveli-gold)]/8" />
          
          <img
            src={SHELF_IMAGE}
            alt="Pushtaini spice shelf with brass containers and glass jars"
            className="w-full h-auto object-cover"
          />
          
          {/* Warm glow overlay at edges */}
          <div className="absolute inset-0 pointer-events-none" style={{
            boxShadow: "inset 0 0 80px rgba(26, 15, 8, 0.4)"
          }} />
        </motion.div>

        {/* Feature callouts */}
        <div className="grid grid-cols-3 gap-4 mt-10">
          {[
            { label: "Stone Ground", desc: "200-year-old chakki" },
            { label: "Hand Blended", desc: "Master spice artisans" },
            { label: "Brass Sealed", desc: "Traditional preservation" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <p className="font-heading text-[10px] md:text-xs tracking-[0.2em] uppercase text-[var(--color-haveli-gold)] mb-1">
                {item.label}
              </p>
              <p className="font-body text-xs text-[var(--color-haveli-sand)]/70">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
