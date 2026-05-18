/**
 * FamilyGallery — Character portraits in ornate golden frames with mini stories.
 * Each character has a backstory that brings the Pushtaini dynasty to life.
 * Includes Sheru — the royal dog and Chief Taster (Unpaid).
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";
import { useState } from "react";

const CHAR_GRANDFATHER = asset("/images/pustani-char-grandfather.webp");
const CHAR_QUEEN = asset("/images/pustani-char-queen.webp");
const CHAR_MAHARAJA = asset("/images/pustani-char-maharaja.webp");
const CHAR_DADI = asset("/images/pustani-char-dadi.webp");
const CHAR_SHERU = asset("/images/pushtaini-sheru-portrait.webp");

const familyMembers = [
  {
    name: "Dada Ji",
    title: "The Spice Guardian — Since 1897",
    hindi: "मसाला वही, स्वाद वही, Legacy वही।",
    subtitle: "Laal Maas • Chakki Special",
    image: CHAR_GRANDFATHER,
    story: "Dada Ji started grinding masala at the age of 12 on a stone chakki that his great-grandfather brought from Jodhpur. He refuses to use electric grinders — says they 'kill the soul of the spice.' Every morning at 4 AM, he still wakes up to hand-roast cumin seeds in a cast-iron kadhai passed down 5 generations. His Laal Maas masala has made grown men cry — and come back for seconds.",
    funFact: "Has never tasted store-bought masala. Calls it 'dhoka' (betrayal).",
  },
  {
    name: "Rani Sa",
    title: "Queen of the Royal Kitchen",
    hindi: "तीखा है तो ठीक है।",
    subtitle: "Dal Baati • Ghevar",
    image: CHAR_QUEEN,
    story: "Rani Sa learned the art of spice blending from the royal kitchens of Udaipur, where her grandmother served as the head cook for the Maharana's family. She believes every masala must pass the 'aroma test' — if it doesn't make the neighbours knock on your door asking 'kya ban raha hai?', it's not ready. Her Dal Baati masala is so legendary, families fight over the last baati.",
    funFact: "Adds a secret pinch of saffron to her Dal Baati that nobody can figure out.",
  },
  {
    name: "Maharaja Sa",
    title: "The Royal Connoisseur",
    hindi: "हर मसाले में राज है।",
    subtitle: "Gatte Ka Masala",
    image: CHAR_MAHARAJA,
    story: "Maharaja Sa doesn't cook — he commands. With a single sniff, he can tell you the exact village where the cumin was harvested and which season's harvest it belongs to. He once rejected an entire batch of coriander because it was 'harvested two days too late.' His Gatte Ka Masala is blended with mathematical precision — 23 spices, each measured to the milligram on a brass scale from 1842.",
    funFact: "Owns 47 different brass spice containers, each for a specific spice.",
  },
  {
    name: "Dadi Sa",
    title: "Keeper of Desert Secrets",
    hindi: "प्यार से बने, स्वाद से खिले।",
    subtitle: "Ker Sangri • Papad Sabzi",
    image: CHAR_DADI,
    story: "Dadi Sa knows every wild herb and berry that grows in the Thar Desert. She walks barefoot through the sand dunes at dawn, collecting ker berries and sangri pods that only she can find. Her recipes use ingredients that don't exist in any cookbook — desert flowers, wild seeds, and a mysterious 'raat ki mitti' (night soil) that she swears gives her masala its earthy depth. Nobody argues with Dadi Sa.",
    funFact: "Claims her papad sabzi masala can cure homesickness. Nobody has proven her wrong.",
  },
  {
    name: "Sheru",
    title: "Chief Taster (Unpaid)",
    hindi: "सूंघा नहीं तो बना नहीं।",
    subtitle: "Quality Control • All Masalas",
    image: CHAR_SHERU,
    story: "Sheru wandered into the Pushtaini kitchen in 2019 as a stray pup, sniffed Dada Ji's freshly roasted cumin, and simply refused to leave. He has since appointed himself as the official quality inspector of every batch. His method? One deep sniff, followed by either a dignified tail wag (approved) or sitting directly on the masala tray (rejected). He has a 100% accuracy rate — the one batch he rejected turned out to have expired coriander. Nobody questions Sheru anymore.",
    funFact: "Has his own brass bowl engraved 'Chief Taster — By Appointment Only.' Gets a treat for every approved batch. Has gained 4 kg since joining.",
  },
];

export default function FamilyGallery() {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  return (
    <section id="family" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-brown)] via-[var(--color-haveli-warm)] to-[var(--color-haveli-brown)]" />
      
      {/* Warm ambient glow */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(ellipse at 30% 40%, rgba(224,184,74,0.12), transparent 50%),
                          radial-gradient(ellipse at 70% 60%, rgba(224,184,74,0.08), transparent 50%)`
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
            The Pushtaini Dynasty
          </p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white italic font-bold mb-4">
            Meet The Legends
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--color-haveli-cream)] max-w-lg mx-auto">
            Every great masala has a guardian. These are the keepers of Pushtaini's royal recipes — 
            each character, a chapter in our spice legacy.
          </p>
        </motion.div>

        {/* Portrait Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {familyMembers.map((member, i) => (
            <motion.div
              key={member.name}
              className={`group ${member.name === "Sheru" ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row gap-5 bg-[var(--color-haveli-dark)]/40 border border-[var(--color-haveli-gold)]/15 p-4 md:p-6 group-hover:border-[var(--color-haveli-gold)]/30 transition-all duration-500">
                {/* Portrait Frame */}
                <div className="relative flex-shrink-0 w-full sm:w-44 md:w-48">
                  {/* Ornate frame border */}
                  <div className="absolute -inset-2 border border-[var(--color-haveli-gold)]/20 group-hover:border-[var(--color-haveli-gold)]/40 transition-colors duration-500" />
                  <div className="absolute -inset-1 border border-[var(--color-haveli-gold)]/10" />
                  
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Warm overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-haveli-dark)]/60 via-transparent to-transparent" />
                    
                    {/* Hindi quote */}
                    <div className="absolute top-3 left-3 right-3">
                      <p className="font-body text-xs text-[var(--color-haveli-gold)] italic">
                        "{member.hindi}"
                      </p>
                    </div>

                    {/* Masala association at bottom */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="font-ui text-[8px] tracking-[0.1em] uppercase text-[var(--color-haveli-cream)]/80">
                        {member.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-heading text-sm md:text-base tracking-[0.2em] uppercase text-[var(--color-haveli-cream)] mb-1">
                        {member.name}
                      </h4>
                      {member.name === "Sheru" && (
                        <span className="text-[8px] font-ui tracking-[0.1em] uppercase px-2 py-0.5 bg-[var(--color-haveli-gold)]/20 border border-[var(--color-haveli-gold)]/40 text-[var(--color-haveli-gold)] mb-1">
                          🐾 4-Legged
                        </span>
                      )}
                    </div>
                    <p className="font-body text-xs text-[var(--color-haveli-gold)] italic mb-3">
                      {member.title}
                    </p>
                    
                    {/* Mini Story */}
                    <p className={`font-body text-xs md:text-sm leading-relaxed text-[var(--color-haveli-sand)]/90 ${
                      expandedStory === i ? '' : 'line-clamp-4'
                    }`}>
                      {member.story}
                    </p>
                    
                    <button
                      onClick={() => setExpandedStory(expandedStory === i ? null : i)}
                      className="font-ui text-[9px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)] mt-2 hover:text-[var(--color-haveli-cream)] transition-colors"
                    >
                      {expandedStory === i ? '— Read Less' : '— Read Full Story'}
                    </button>
                  </div>

                  {/* Fun Fact */}
                  <div className="mt-4 pt-3 border-t border-[var(--color-haveli-gold)]/10">
                    <p className="font-ui text-[8px] tracking-[0.1em] uppercase text-[var(--color-haveli-gold)]/60 mb-1">
                      Fun Fact
                    </p>
                    <p className="font-body text-[11px] text-[var(--color-haveli-cream)]/70 italic">
                      "{member.funFact}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="font-body text-lg text-[var(--color-haveli-gold)]/80 italic">
            "हर मसाला, एक किस्सा। हर चुटकी में पुश्तैनी विरासत।"
          </p>
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-[var(--color-haveli-sand)]/60 mt-2">
            Every Masala, A Chapter. Every Pinch, A Legacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
