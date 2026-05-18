/**
 * HeritageSection — Brand story with luxury gold/cream typography.
 * NEW: Gold accents replacing maroon throughout.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const CULTURE_IMAGE = asset("/images/pustani-rajasthan-culture.webp");

export default function HeritageSection() {
  return (
    <section id="story" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={CULTURE_IMAGE}
          alt="Traditional Rajasthani haveli kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.04_45)]/85 via-[oklch(0.16_0.04_45)]/70 to-[oklch(0.16_0.04_45)]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.16_0.04_45)]/40 via-transparent to-[oklch(0.16_0.04_45)]/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-gold)]/60 mb-4">Our Heritage</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[var(--color-haveli-cream)] mb-5 font-bold italic">
            Born of Royal Kitchens
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-14 h-px bg-[var(--color-gold)]/30" />
            <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]/35" />
            <div className="w-14 h-px bg-[var(--color-gold)]/30" />
          </div>
        </motion.div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-xl text-[var(--color-haveli-cream)] mb-5 tracking-wide font-semibold">
              Where the Desert Meets Royalty
            </h3>
            <p className="font-body text-base text-[var(--color-haveli-cream)]/65 leading-relaxed mb-5">
              In the heart of Rajasthan, where ancient forts pierce golden skies and the Thar Desert 
              stretches to infinity, a culinary tradition was born that would define Indian cuisine for 
              centuries. Pushtaini draws from this living heritage — where every spice tells a story of 
              kings and warriors, of desert ingenuity and royal excess.
            </p>
            <p className="font-body text-base text-[var(--color-haveli-cream)]/65 leading-relaxed">
              Our masalas are not manufactured — they are composed. Each blend is a symphony of 
              flavors perfected over generations in the royal kitchens of Jodhpur, Jaipur, Udaipur, 
              and Jaisalmer.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              {[
                {
                  title: "Stone-Ground Tradition",
                  text: "Every Pushtaini masala is ground on 200-year-old stone chakki mills in Pushkar, preserving volatile oils that modern grinding destroys.",
                },
                {
                  title: "Royal Provenance",
                  text: "Our recipes trace directly to the royal kitchens of Rajputana — authenticated through historical manuscripts and oral traditions.",
                },
                {
                  title: "Desert-Sourced Ingredients",
                  text: "From Mathania chilies to Pushkar coriander, every ingredient is sourced from its traditional Rajasthani origin.",
                },
                {
                  title: "Hand-Blended Excellence",
                  text: "Master blenders with decades of experience compose each masala by hand, adjusting for seasonal variations.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="relative pl-5 border-l border-[var(--color-gold)]/40"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12 }}
                >
                  <h4 className="font-heading text-[11px] tracking-[0.2em] uppercase text-[var(--color-gold)] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="font-body text-sm text-[var(--color-haveli-cream)]/50 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
