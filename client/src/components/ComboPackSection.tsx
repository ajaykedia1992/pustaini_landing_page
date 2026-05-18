/**
 * ComboPackSection — Themed gift sets bundling 3-4 masalas together.
 * Each combo has a WhatsApp order link for easy purchasing.
 * Features the premium gift box image and curated bundles.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const GIFT_BOX_IMG = asset("/images/pushtaini-combo-giftbox.webp");

const comboPacks = [
  {
    name: "The Royal Feast Box",
    hindi: "शाही दावत",
    description: "The ultimate Rajasthani non-veg feast. Everything you need for a royal dinner that'll have guests bowing.",
    masalas: ["Dada Ji's Laal Maas", "Kunwar Sa's Safed Maas", "Thakur Sa's Mohan Maas", "Rawat Sa's Jungli Maas"],
    originalPrice: "₹1,776",
    comboPrice: "₹1,499",
    savings: "Save ₹277",
    badge: "Bestseller",
    color: "from-red-900/30 to-amber-900/30",
  },
  {
    name: "The Vegetarian Throne",
    hindi: "शाकाहारी सिंहासन",
    description: "Pure veg, pure royal. Dal Baati to Gatte — the complete Rajasthani vegetarian experience in one box.",
    masalas: ["Rani Sa's Dal Baati", "Maharaja Sa's Gatte", "Dadi Sa's Ker Sangri", "Nani Sa's Papad Masala"],
    originalPrice: "₹1,306",
    comboPrice: "₹1,099",
    savings: "Save ₹207",
    badge: "Family Favourite",
    color: "from-green-900/30 to-amber-900/30",
  },
  {
    name: "The Daily Essentials",
    hindi: "रोज़ का ख़ज़ाना",
    description: "Your everyday kitchen heroes. Chai, Achaar, Biryani — the masalas that make ordinary meals extraordinary.",
    masalas: ["Bua Sa's Chai Masala", "Mama Sa's Achaar Masala", "Tau Sa's Biryani Masala"],
    originalPrice: "₹967",
    comboPrice: "₹799",
    savings: "Save ₹168",
    badge: "Value Pack",
    color: "from-amber-900/30 to-yellow-900/30",
  },
  {
    name: "The Street King Box",
    hindi: "गली का राजा",
    description: "For those who believe the best food comes from the streets. Mirchi Vada + Chai = pure happiness.",
    masalas: ["Chhote Sarkar's Mirchi Vada", "Bua Sa's Chai Masala", "Mama Sa's Achaar Masala", "Nani Sa's Papad Masala"],
    originalPrice: "₹1,156",
    comboPrice: "₹949",
    savings: "Save ₹207",
    badge: "New",
    color: "from-orange-900/30 to-red-900/30",
  },
];

function getWhatsAppLink(comboName: string, masalas: string[], price: string) {
  const masalaList = masalas.join(", ");
  const message = `Hi! I'd like to order the *${comboName}* combo pack (${price}):\n${masalaList}\n\nPlease share payment and delivery details! 🎁`;
  return `https://wa.me/919092489091?text=${encodeURIComponent(message)}`;
}

export default function ComboPackSection() {
  return (
    <section id="combos" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-dark)] via-[#1a1008] to-[var(--color-haveli-dark)]" />
      
      {/* Subtle gold pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e0b84a' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20.5z'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            Curated Gift Sets
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white italic font-bold mb-4">
            Royal Combo Boxes
          </h2>
          <p className="font-body text-base text-[var(--color-haveli-cream)]/80 max-w-xl mx-auto">
            Hand-picked masala bundles for every occasion — from royal feasts to everyday cooking. 
            Beautifully packaged in our signature navy & gold gift boxes.
          </p>
        </motion.div>

        {/* Hero Gift Box Image */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-14 md:mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden border border-[var(--color-haveli-gold)]/20">
            <img
              src={GIFT_BOX_IMG}
              alt="Pushtaini Royal Gift Box"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Warm overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-haveli-dark)]/60 via-transparent to-transparent" />
            
            {/* Caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
              <p className="font-heading text-[10px] md:text-xs tracking-[0.3em] uppercase text-[var(--color-haveli-gold)]">
                Premium Gift Packaging
              </p>
              <p className="font-body text-xs md:text-sm text-[var(--color-haveli-cream)]/80 mt-1">
                Each combo arrives in our signature velvet-lined box with gold ribbon
              </p>
            </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[var(--color-haveli-gold)]/40" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[var(--color-haveli-gold)]/40" />
        </motion.div>

        {/* Combo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {comboPacks.map((combo, i) => (
            <motion.div
              key={combo.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <div className={`relative h-full flex flex-col bg-gradient-to-br ${combo.color} border border-[var(--color-haveli-gold)]/15 p-5 md:p-7 transition-all duration-500 group-hover:border-[var(--color-haveli-gold)]/40 group-hover:shadow-[0_0_40px_rgba(224,184,74,0.1)]`}>
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="font-ui text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 bg-[var(--color-haveli-gold)]/20 border border-[var(--color-haveli-gold)]/50 text-[var(--color-haveli-gold)]">
                    {combo.badge}
                  </span>
                </div>

                {/* Combo Name */}
                <h3 className="font-display text-xl md:text-2xl text-white italic font-bold mb-1 pr-20">
                  {combo.name}
                </h3>
                <p className="font-body text-sm text-[var(--color-haveli-gold)] italic mb-3">
                  {combo.hindi}
                </p>

                {/* Description */}
                <p className="font-body text-xs md:text-sm text-[var(--color-haveli-cream)]/75 leading-relaxed mb-5">
                  {combo.description}
                </p>

                {/* Masala List */}
                <div className="space-y-2 mb-6">
                  <p className="font-ui text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/60">
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {combo.masalas.map((masala) => (
                      <span
                        key={masala}
                        className="font-body text-[10px] md:text-xs px-2.5 py-1 bg-[var(--color-haveli-dark)]/60 border border-[var(--color-haveli-gold)]/15 text-[var(--color-haveli-sand)]"
                      >
                        {masala}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto flex items-end justify-between pt-4 border-t border-[var(--color-haveli-gold)]/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-lg md:text-xl tracking-wider text-[var(--color-haveli-gold)] font-bold">
                        {combo.comboPrice}
                      </span>
                      <span className="font-body text-xs text-[var(--color-haveli-sand)]/50 line-through">
                        {combo.originalPrice}
                      </span>
                    </div>
                    <span className="font-ui text-[9px] tracking-[0.1em] text-green-400/80 uppercase">
                      {combo.savings}
                    </span>
                  </div>
                  
                  <a
                    href={getWhatsAppLink(combo.name, combo.masalas, combo.comboPrice)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5010] px-3 py-2 md:px-4 md:py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(191,155,48,0.4)]"
                  >
                    <svg className="w-4 h-4 text-[var(--color-haveli-cream)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="font-ui text-[10px] md:text-xs tracking-wide text-[var(--color-haveli-cream)] font-semibold uppercase">
                      Order
                    </span>
                  </a>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-[var(--color-haveli-gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[var(--color-haveli-gold)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Combo CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="font-body text-sm text-[var(--color-haveli-cream)]/60 mb-4">
            Want a custom combo? Tell us your favourites and we'll create a personalized box.
          </p>
          <a
            href="https://wa.me/919092489091?text=Hi!%20I'd%20like%20to%20create%20a%20custom%20combo%20box.%20Here%20are%20my%20favourite%20masalas%3A%20"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vintage"
          >
            Build Your Own Box
          </a>
        </motion.div>
      </div>
    </section>
  );
}
