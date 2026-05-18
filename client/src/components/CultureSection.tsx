/**
 * CultureSection — How Rajasthani culture influences each masala.
 * Fonts: Playfair Display + Cormorant SC + Cormorant Garamond + Outfit
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const DAL_BAATI_IMAGE = asset("/images/pustani-dal-baati.webp");
const SPICE_CLOSEUP = asset("/images/pustani-spice-closeup.webp");

const culturalInfluences = [
  {
    title: "The Desert's Gift",
    subtitle: "Scarcity Breeds Genius",
    description: "The Thar Desert's harsh climate forced Rajasthani cooks to develop preservation techniques and flavor-maximizing spice blends that could transform the simplest ingredients into extraordinary meals.",
  },
  {
    title: "The Warrior's Table",
    subtitle: "Rajput Culinary Code",
    description: "Rajput warriors demanded food that was bold, energizing, and unforgettable. Their culinary code — fierce heat, rich ghee, and complex spice layers — shaped every meat masala in our collection.",
  },
  {
    title: "The Merchant's Route",
    subtitle: "Marwari Trading Legacy",
    description: "Marwari merchants traveling ancient trade routes brought spices from across Asia. Their genius extended to the kitchen — creating vegetarian masalas of such complexity they rivaled any meat dish.",
  },
  {
    title: "The Queen's Kitchen",
    subtitle: "Zenana Culinary Arts",
    description: "In royal zenanas, queens developed the most refined spice blends — Safed Maas, Mohan Maas, and sweet masalas for Ghevar. These recipes were closely guarded royal treasures.",
  },
];

export default function CultureSection() {
  return (
    <section id="culture" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[oklch(0.28_0.05_50)]" />
      {/* Warm glow accents */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse at 20% 30%, rgba(200,150,70,0.08), transparent 50%),
                          radial-gradient(ellipse at 80% 70%, rgba(200,150,70,0.06), transparent 50%)`
      }} />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-14 md:mb-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-gold)]/60 mb-4">
            Culture & Influence
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[var(--color-haveli-cream)] mb-5 font-bold italic">
            Rajasthan in Every Grain
          </h2>
          <p className="font-body text-base text-[var(--color-haveli-cream)]/60 max-w-xl mx-auto">
            Four pillars of Rajasthani culture shaped our masala collection — each blend 
            carries the spirit of the land and its timeless traditions.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-14 h-px bg-[var(--color-gold)]/25" />
            <div className="w-2 h-2 rotate-45 border border-[var(--color-gold)]/30" />
            <div className="w-14 h-px bg-[var(--color-gold)]/25" />
          </div>
        </motion.div>

        {/* Image + content layout */}
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Featured image row */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            <motion.div
              className="relative overflow-hidden border border-[var(--color-gold)]/20 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={DAL_BAATI_IMAGE}
                alt="Traditional Rajasthani Dal Baati Churma"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.04_50)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/90 mb-1">
                  The Sacred Dish
                </p>
                <p className="font-body text-sm text-[var(--color-haveli-cream)]/80 italic">
                  Dal Baati Churma — where every celebration begins
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden border border-[var(--color-gold)]/20 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={SPICE_CLOSEUP}
                alt="Spice powder in dramatic lighting"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.04_50)] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-heading text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)]/90 mb-1">
                  The Art of Blending
                </p>
                <p className="font-body text-sm text-[var(--color-haveli-cream)]/80 italic">
                  Each particle carries centuries of perfected proportions
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cultural influences grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {culturalInfluences.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative p-7 border border-[var(--color-gold)]/15 bg-[oklch(0.22_0.04_50)]/50 hover:border-[var(--color-gold)]/30 transition-all duration-500 group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.6 }}
              >
                {/* Number */}
                <span className="absolute top-5 right-5 font-display text-3xl text-[var(--color-gold)]/8 group-hover:text-[var(--color-gold)]/15 transition-colors italic font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Content */}
                <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--color-gold)]/55 mb-2 font-medium">
                  {item.subtitle}
                </p>
                <h4 className="font-display text-xl text-[var(--color-haveli-cream)] mb-3 font-semibold">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-[var(--color-haveli-cream)]/50 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[var(--color-gold)]/25 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
