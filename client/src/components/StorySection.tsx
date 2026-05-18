/**
 * StorySection — Heritage story with cultural context.
 * Uses the falling spices image and cultural imagery.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const SPICE_FALLING = asset("/images/pushtaini-spice-falling.webp");
const CULTURE_IMAGE = asset("/images/pustani-rajasthan-culture.webp");

export default function StorySection() {
  return (
    <section id="story" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-brown)] via-[var(--color-haveli-warm)]/50 to-[var(--color-haveli-brown)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white italic font-bold mb-4">
            Born of Royal Kitchens
          </h2>
        </motion.div>

        {/* Split layout: Falling spices + Story text */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center mb-20">
          {/* Falling spices image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-2 border border-[var(--color-haveli-gold)]/10" />
            <img
              src={SPICE_FALLING}
              alt="Spices falling dramatically"
              className="w-full max-h-[500px] object-cover"
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              boxShadow: "inset 0 0 40px rgba(26, 15, 8, 0.4)"
            }} />
          </motion.div>

          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-display text-xl md:text-2xl text-[var(--color-haveli-cream)] italic font-semibold mb-6">
              Where the Desert Meets Royalty
            </h3>
            <div className="space-y-4">
              <p className="font-body text-sm md:text-base text-[var(--color-haveli-sand)] leading-relaxed">
                In the heart of Rajasthan, where ancient forts pierce golden skies and the 
                Thar Desert stretches to infinity, a culinary tradition was born that would 
                define Indian cuisine for centuries.
              </p>
              <p className="font-body text-sm md:text-base text-[var(--color-haveli-sand)] leading-relaxed">
                Pushtaini draws from this living heritage — where every spice tells a story 
                of kings and warriors, of desert ingenuity and royal excess. Our masalas are 
                not manufactured — they are composed.
              </p>
              <p className="font-body text-sm md:text-base text-[var(--color-haveli-sand)] leading-relaxed">
                Each blend is a symphony of flavors perfected over generations in the royal 
                kitchens of Jodhpur, Jaipur, Udaipur, and Jaisalmer.
              </p>
            </div>

            {/* Heritage points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Stone-Ground", desc: "200-year-old chakki mills" },
                { label: "Royal Provenance", desc: "Rajputana kitchen recipes" },
                { label: "Desert-Sourced", desc: "Mathania chilies, Pushkar coriander" },
                { label: "Hand-Blended", desc: "Master artisan composed" },
              ].map((item, i) => (
                <div key={item.label} className="border-l border-[var(--color-haveli-gold)]/20 pl-3">
                  <p className="font-heading text-[10px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)] mb-0.5">
                    {item.label}
                  </p>
                  <p className="font-body text-xs text-[var(--color-haveli-sand)]/70">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Culture image full width */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute -inset-3 border border-[var(--color-haveli-gold)]/10" />
          <img
            src={CULTURE_IMAGE}
            alt="Rajasthani culture and heritage"
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-haveli-dark)]/70 via-transparent to-[var(--color-haveli-dark)]/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="font-body text-lg md:text-2xl text-[var(--color-haveli-cream)] italic">
                "The desert teaches patience. The spice rewards it."
              </p>
              <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[var(--color-haveli-gold)]/60 mt-3">
                — Pushtaini Philosophy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
