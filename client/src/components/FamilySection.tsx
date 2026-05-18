/**
 * FamilySection — Character portraits in ornate frames.
 * Premium royal typography: Playfair Display + Cormorant SC + Cormorant Garamond
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const CHAR_GRANDFATHER = asset("/images/pustani-char-grandfather.webp");
const CHAR_QUEEN = asset("/images/pustani-char-queen.webp");
const CHAR_MAHARAJA = asset("/images/pustani-char-maharaja.webp");
const CHAR_DADI = asset("/images/pustani-char-dadi.webp");

const familyMembers = [
  {
    image: CHAR_GRANDFATHER,
    name: "Dada Ji",
    title: "The Spice Master",
    subtitle: "Masala Grinder\nSince 1897",
    quote: "मसाला वही, स्वाद वही",
  },
  {
    image: CHAR_QUEEN,
    name: "Rani Sa",
    title: "The Laal Maas Queen",
    subtitle: "Chili Connoisseur\nRoyal Approved",
    quote: "तीखा है तो ठीक है",
  },
  {
    image: CHAR_MAHARAJA,
    name: "Maharaja",
    title: "The Spice Keeper",
    subtitle: "Masala Dabba\nGuardian",
    quote: "हर मसाले में राज है",
  },
  {
    image: CHAR_DADI,
    name: "Dadi Ma",
    title: "The Garam Masala Guru",
    subtitle: "Extra Masala\nExtra Wisdom",
    quote: "प्यार से बने, स्वाद से खिले",
  },
];

export default function FamilySection() {
  return (
    <section id="family" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background — warm luxury tone */}
      <div className="absolute inset-0 bg-[oklch(0.30_0.05_48)]" />
      {/* Warm lantern-like radial glows */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse at 15% 20%, rgba(200,160,60,0.10), transparent 40%),
                          radial-gradient(ellipse at 85% 25%, rgba(200,160,60,0.10), transparent 40%),
                          radial-gradient(ellipse at 50% 80%, rgba(180,140,80,0.05), transparent 50%)`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-xs tracking-[0.5em] uppercase text-[var(--color-gold)]/80 mb-4">
            The Pushtaini Family
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-[var(--color-haveli-cream)] mb-5 font-bold italic">
            Meet The Legends
          </h2>
          <p className="font-body text-lg text-[var(--color-haveli-cream)]/65 max-w-xl mx-auto">
            Every great masala has a guardian. These are the keepers of Pushtaini's royal recipes.
          </p>
        </motion.div>

        {/* Character portraits grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {familyMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Portrait frame */}
              <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-cover"
                />
                
                {/* Hover overlay with quote */}
                <div className="absolute inset-0 bg-[var(--color-haveli-dark)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                  <p className="font-hindi text-sm text-[var(--color-haveli-cream)] text-center px-4 font-medium">
                    {member.quote}
                  </p>
                </div>
              </div>

              {/* Name plate below frame */}
              <div className="mt-4 text-center bg-[var(--color-aged-paper)]/12 border border-[var(--color-gold)]/25 py-3 px-2">
                <h4 className="font-heading text-sm md:text-base tracking-[0.2em] uppercase text-[var(--color-haveli-cream)]">
                  {member.name}
                </h4>
                <p className="font-body text-xs text-[var(--color-gold)]/80 mt-1 italic">
                  {member.title}
                </p>
                <p className="font-ui text-[10px] text-[var(--color-haveli-cream)]/45 mt-1 whitespace-pre-line leading-tight tracking-wider">
                  {member.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-14 h-px bg-[var(--color-gold)]/35" />
            <p className="font-hindi text-lg text-[var(--color-gold)]/65 font-medium">
              पुश्तैनी — पीढ़ियों का स्वाद
            </p>
            <div className="w-14 h-px bg-[var(--color-gold)]/35" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
