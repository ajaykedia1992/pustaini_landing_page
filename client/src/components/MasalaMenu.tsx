/**
 * MasalaMenu — Visual product grid showing each masala in premium brass tins
 * with character portraits on each tin matching the masala's guardian.
 * Clicking any tin navigates to the Product Detail Page (PDP).
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { asset } from "@/lib/utils";

const masalas = [
  { id: "laal-maas", name: "Dada Ji's Laal Maas", hindi: "दादा जी का लाल मांस", price: "₹399", tag: "Fiery", character: "Dada Ji", image: asset("/images/pushtaini-tin-dadaji-laalmaas.webp") },
  { id: "dal-baati", name: "Rani Sa's Dal Baati", hindi: "रानी सा का दाल बाटी", price: "₹349", tag: "Bestseller", character: "Rani Sa", image: asset("/images/pushtaini-tin-ranisa-dalbaati.webp") },
  { id: "gatte", name: "Maharaja Sa's Gatte", hindi: "महाराजा सा का गट्टे", price: "₹299", tag: "Royal", character: "Maharaja Sa", image: asset("/images/pushtaini-tin-maharaja-gatte.webp") },
  { id: "ker-sangri", name: "Dadi Sa's Ker Sangri", hindi: "दादी सा का केर सांगरी", price: "₹379", tag: "Desert Special", character: "Dadi Sa", image: asset("/images/pushtaini-tin-dadisa-kersangri.webp") },
  { id: "safed-maas", name: "Kunwar Sa's Safed Maas", hindi: "कुंवर सा का सफेद मांस", price: "₹449", tag: "Premium", character: "Kunwar Sa", image: asset("/images/pushtaini-tin-kunwar-safedmaas.webp") },
  { id: "mohan-maas", name: "Thakur Sa's Mohan Maas", hindi: "ठाकुर सा का मोहन मांस", price: "₹469", tag: "Enchanting", character: "Thakur Sa", image: asset("/images/pushtaini-tin-thakur-mohanmaas.webp") },
  { id: "jungli-maas", name: "Rawat Sa's Jungli Maas", hindi: "रावत सा का जंगली मांस", price: "₹429", tag: "Wild", character: "Rawat Sa", image: asset("/images/pushtaini-tin-rawat-junglimaas.webp") },
  { id: "mirchi-vada", name: "Chhote Sarkar's Mirchi Vada", hindi: "छोटे सरकार का मिर्ची वड़ा", price: "₹299", tag: "Street Crown", character: "Chhote Sarkar", image: asset("/images/pushtaini-tin-chhote-mirchivada.webp") },
  { id: "chai-masala", name: "Bua Sa's Chai Masala", hindi: "बुआ सा की चाय मसाला", price: "₹249", tag: "Warmth", character: "Bua Sa", image: asset("/images/pushtaini-tin-bua-chai.webp") },
  { id: "achaar-masala", name: "Mama Sa's Achaar Masala", hindi: "मामा सा का अचार मसाला", price: "₹329", tag: "Tangy", character: "Mama Sa", image: asset("/images/pushtaini-tin-mama-achaar.webp") },
  { id: "papad-masala", name: "Nani Sa's Papad Masala", hindi: "नानी सा का पापड़ मसाला", price: "₹279", tag: "Quick", character: "Nani Sa", image: asset("/images/pushtaini-tin-nani-papad.webp") },
  { id: "biryani-masala", name: "Tau Sa's Biryani Masala", hindi: "ताऊ सा का बिरयानी मसाला", price: "₹389", tag: "Heritage", character: "Tau Sa", image: asset("/images/pushtaini-tin-tau-biryani.webp") },
];

export default function MasalaMenu() {
  return (
    <section id="collection" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-dark)] via-[var(--color-haveli-brown)] to-[var(--color-haveli-dark)]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0b84a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            The Royal Collection
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white italic font-bold mb-4">
            Pushtaini Masala Collection
          </h2>
          <p className="font-body text-base text-[var(--color-haveli-cream)]/80 max-w-xl mx-auto">
            Each masala, hand-ground on 200-year-old chakki mills, sealed in ornate brass tins 
            engraved with the stories of Rajasthan's royal kitchens.
          </p>
          <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/60 mt-4">
            Tap any tin to view details & order
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {masalas.map((masala, i) => (
            <motion.div
              key={masala.id}
              className="group relative block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <Link href={`/product/${masala.id}`} className="block">
                {/* Product Card */}
                <div className="relative h-full flex flex-col bg-[var(--color-haveli-dark)]/80 border border-[var(--color-haveli-gold)]/15 p-3 md:p-5 transition-all duration-500 group-hover:border-[var(--color-haveli-gold)]/40 group-hover:bg-[var(--color-haveli-dark)]/90 group-hover:shadow-[0_0_30px_rgba(224,184,74,0.15)]">
                  
                  {/* Tag */}
                  <div className="absolute top-2 right-2 md:top-3 md:right-3 z-10">
                    <span className="font-ui text-[7px] tracking-[0.15em] uppercase px-1.5 py-0.5 md:px-2 md:py-1 bg-[var(--color-haveli-gold)]/20 border border-[var(--color-haveli-gold)]/40 text-[var(--color-haveli-gold)]">
                      {masala.tag}
                    </span>
                  </div>

                  {/* Character Brass Tin Image */}
                  <div className="relative aspect-[3/4] mb-3 md:mb-4 overflow-hidden">
                    <img
                      src={masala.image}
                      alt={masala.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Warm glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-haveli-dark)]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* View details indicator on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="bg-[var(--color-haveli-gold)]/90 px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                        <svg className="w-4 h-4 text-[var(--color-haveli-dark)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span className="text-[var(--color-haveli-dark)] text-[10px] font-semibold tracking-wide uppercase">View</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="mt-auto flex flex-col">
                    <h4 className="font-heading text-[9px] md:text-xs tracking-[0.12em] uppercase text-[var(--color-haveli-cream)] group-hover:text-[var(--color-haveli-gold)] transition-colors duration-300 leading-tight md:min-h-[2.5rem] flex items-start">
                      {masala.name}
                    </h4>
                    <p className="font-body text-[9px] md:text-[10px] text-[var(--color-haveli-sand)]/70 mt-1.5 md:mt-2">
                      {masala.hindi}
                    </p>
                    <div className="flex items-center justify-between pt-1.5 md:pt-2 mt-1.5 md:mt-2 border-t border-[var(--color-haveli-gold)]/10">
                      <span className="font-ui text-[7px] md:text-[8px] tracking-[0.1em] text-[var(--color-haveli-gold)]/60 uppercase">
                        by {masala.character}
                      </span>
                      <span className="font-heading text-xs md:text-sm tracking-wider text-[var(--color-haveli-gold)]">
                        {masala.price}
                      </span>
                    </div>
                  </div>

                  {/* Corner accents on hover */}
                  <div className="absolute top-0 left-0 w-4 h-4 md:w-5 md:h-5 border-t border-l border-[var(--color-haveli-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 md:w-5 md:h-5 border-b border-r border-[var(--color-haveli-gold)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#combos" className="btn-vintage-filled">
            View Combo Packs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
