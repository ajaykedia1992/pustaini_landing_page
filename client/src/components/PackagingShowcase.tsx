/**
 * PackagingShowcase — Premium packaging display with royal character portraits on containers.
 * Each packaging features a family character (Dada Ji, Rani Sa, Maharaja Sa, Dadi Sa, Chhote Sarkar).
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const PACK_DADAJI = asset("/images/pushtaini-pack-dadaji.webp");
const PACK_RANISA = asset("/images/pushtaini-pack-ranisa.webp");
const PACK_MAHARAJA = asset("/images/pushtaini-pack-maharaja.webp");
const PACK_COLLECTION = asset("/images/pushtaini-pack-collection.webp");
const PACK_TIN = asset("/images/pushtaini-pack-tin.webp");

const characterPacks = [
  {
    name: "Dada Ji's Heritage Box",
    character: "Dada Ji",
    title: "The Spice Guardian",
    description: "Dark navy box with gold filigree borders featuring Dada Ji grinding masala in his brass mortar. The original keeper of Pushtaini secrets.",
    image: PACK_DADAJI,
    masala: "Laal Maas Masala",
    size: "100g",
  },
  {
    name: "Rani Sa's Royal Edition",
    character: "Rani Sa",
    title: "Queen of the Kitchen",
    description: "Elegant box featuring Rani Sa holding a brass bowl of crimson spices, framed in ornate Rajasthani jali patterns. A gift worthy of queens.",
    image: PACK_RANISA,
    masala: "Dal Baati Churma Masala",
    size: "100g",
  },
  {
    name: "Maharaja Sa's Gatte Box",
    character: "Maharaja Sa",
    title: "The Royal Connoisseur",
    description: "Regal packaging featuring the Maharaja with his golden goblet, surrounded by the finest spices of his court. For those who accept nothing less than royal.",
    image: PACK_MAHARAJA,
    masala: "Gatte Ka Masala",
    size: "100g",
  },
];

export default function PackagingShowcase() {
  return (
    <section id="packaging" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-dark)] via-[var(--color-haveli-brown)] to-[var(--color-haveli-dark)]" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse at 50% 30%, rgba(224,184,74,0.08), transparent 60%)`
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            Packaging
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white italic font-bold mb-4">
            Every Box Tells a Story
          </h2>
          <p className="font-body text-sm text-[var(--color-haveli-cream)] max-w-lg mx-auto">
            Each Pushtaini package features a royal family character — their portrait, their masala, their legacy. 
            Collect them all to complete the Pushtaini dynasty.
          </p>
        </motion.div>

        {/* Character Packaging Grid — 3 individual boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {characterPacks.map((pack, i) => (
            <motion.div
              key={pack.name}
              className="group relative flex flex-col h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-4 border border-[var(--color-haveli-gold)]/10 group-hover:border-[var(--color-haveli-gold)]/30 transition-all duration-500 aspect-[3/4]">
                <img
                  src={pack.image}
                  alt={pack.name}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 pointer-events-none" style={{
                  boxShadow: "inset 0 0 40px rgba(26, 15, 8, 0.3)"
                }} />
              </div>
              
              {/* Info */}
              <div className="px-1 flex flex-col flex-1">
                <p className="font-heading text-[9px] tracking-[0.3em] uppercase text-[var(--color-haveli-gold)]/70 mb-1 md:min-h-[2.5rem] md:flex md:items-end">
                  {pack.character} — {pack.title}
                </p>
                <h4 className="font-display text-lg text-[var(--color-haveli-cream)] italic font-semibold mb-2">
                  {pack.name}
                </h4>
                <p className="font-body text-xs text-[var(--color-haveli-sand)]/70 leading-relaxed mb-2 flex-1">
                  {pack.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-ui text-[9px] tracking-[0.15em] uppercase text-[var(--color-haveli-sand)]/50">
                    {pack.masala} • {pack.size}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Collection Banner */}
        <motion.div
          className="relative mb-14"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="absolute -inset-3 border border-[var(--color-haveli-gold)]/10" />
          <img
            src={PACK_COLLECTION}
            alt="Pushtaini complete royal family collection — all 5 characters"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            boxShadow: "inset 0 0 60px rgba(26, 15, 8, 0.3)"
          }} />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-[var(--color-haveli-dark)] to-transparent">
            <p className="font-heading text-[9px] tracking-[0.4em] uppercase text-[var(--color-haveli-gold)] mb-1">
              Complete Collection
            </p>
            <h3 className="font-display text-xl md:text-2xl text-white italic font-bold">
              The Royal Family — All 5 Characters
            </h3>
            <p className="font-body text-xs text-[var(--color-haveli-cream)]/80 mt-1">
              Dada Ji • Rani Sa • Maharaja Sa • Dadi Sa • Chhote Sarkar
            </p>
          </div>
        </motion.div>

        {/* Dadi Sa's Brass Tin */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-14">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border border-[var(--color-haveli-gold)]/10">
              <img
                src={PACK_TIN}
                alt="Dadi Sa's brass tin with portrait on lid"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-heading text-[9px] tracking-[0.4em] uppercase text-[var(--color-haveli-gold)] mb-2">
              Travel Friendly
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white italic font-bold mb-4">
              Dadi Sa's Brass Tin
            </h3>
            <p className="font-body text-sm text-[var(--color-haveli-cream)]/80 leading-relaxed mb-4">
              Hand-finished brass tin with Dadi Sa's portrait engraved on the lid — the Keeper of Desert Secrets 
              offering her treasured spice thali. Opens to reveal vibrant masala inside. Airtight seal keeps 
              spices fresh for months. TSA-friendly, compact, and impossibly elegant.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Airtight Seal", "TSA Friendly", "75g Capacity", "Hand-Engraved"].map((tag) => (
                <span key={tag} className="font-ui text-[9px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)]/70 border border-[var(--color-haveli-gold)]/15 px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
            <p className="font-body text-xs text-[var(--color-haveli-sand)]/60 italic">
              "Take Rajasthan wherever you go. Dadi Sa's blessings travel with every tin."
            </p>
          </motion.div>
        </div>

        {/* Travel-friendly callout */}
        <motion.div
          className="mt-12 p-8 border border-[var(--color-haveli-gold)]/15 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[var(--color-haveli-gold)] mb-2">
            Collect the Dynasty
          </p>
          <h3 className="font-display text-xl md:text-2xl text-[var(--color-haveli-cream)] italic font-semibold mb-3">
            Each Character. Each Masala. Each Story.
          </h3>
          <p className="font-body text-sm text-[var(--color-haveli-sand)]/80 max-w-md mx-auto mb-5">
            From Dada Ji's fiery Laal Maas to Dadi Sa's gentle Ker Sangri — every Pushtaini package 
            is a chapter in our family's spice legacy. Collect them all.
          </p>
          <a href="https://wa.me/919092489091" target="_blank" rel="noopener noreferrer" className="btn-vintage inline-block">
            Order Your Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
