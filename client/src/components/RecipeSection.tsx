/**
 * RecipeSection — Short recipe cards with beautiful food photography.
 * Each recipe links to the masala used, with a WhatsApp order button.
 * Includes a background video of spices being poured.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const SPICE_VIDEO = "/manus-storage/pushtaini-spice-pour_971927e7.mp4";

const recipes = [
  {
    name: "Laal Maas",
    hindi: "लाल मांस",
    description: "The legendary fiery red meat curry of Rajasthan. Slow-cooked mutton in a blazing mathania chili gravy that'll make your soul sing.",
    masala: "Dada Ji's Laal Maas Masala",
    cookTime: "90 min",
    servings: "4",
    difficulty: "Medium",
    quickSteps: ["Marinate mutton in yogurt + masala for 2 hours", "Sear in mustard oil until golden", "Add onion-garlic paste, cook until dark", "Add Laal Maas masala + water, slow cook 60 min"],
    image: asset("/images/pushtaini-recipe-laalmaas.webp"),
  },
  {
    name: "Dal Baati Churma",
    hindi: "दाल बाटी चूरमा",
    description: "The holy trinity of Rajasthani cuisine. Crispy baatis dunked in rich dal, with sweet churma on the side — pure comfort.",
    masala: "Rani Sa's Dal Baati Masala",
    cookTime: "60 min",
    servings: "6",
    difficulty: "Easy",
    quickSteps: ["Knead wheat dough, shape into balls, bake until golden", "Cook panchmel dal with Dal Baati masala", "Crush baatis, drizzle with ghee for churma", "Serve hot with a generous ghee pour"],
    image: asset("/images/pushtaini-recipe-dalbaati.webp"),
  },
  {
    name: "Gatte Ki Sabzi",
    hindi: "गट्टे की सब्ज़ी",
    description: "Besan dumplings swimming in a spiced yogurt gravy. The dish that proves vegetarian food can be just as royal.",
    masala: "Maharaja Sa's Gatte Masala",
    cookTime: "45 min",
    servings: "4",
    difficulty: "Easy",
    quickSteps: ["Mix besan with Gatte masala, roll into logs, boil", "Slice boiled gatte into rounds", "Prepare yogurt gravy with tempered spices", "Add gatte, simmer until flavours meld"],
    image: asset("/images/pushtaini-recipe-gatte.webp"),
  },
  {
    name: "Ker Sangri",
    hindi: "केर सांगरी",
    description: "The desert's secret treasure. Wild berries and beans from the Thar, cooked with ancient spice wisdom only Dadi Sa knows.",
    masala: "Dadi Sa's Ker Sangri Masala",
    cookTime: "40 min",
    servings: "4",
    difficulty: "Medium",
    quickSteps: ["Soak dried ker and sangri overnight", "Drain and sauté in mustard oil with cumin", "Add Ker Sangri masala, dried mango powder", "Cook until tender, finish with red chili tempering"],
    image: asset("/images/pushtaini-recipe-kersangri.webp"),
  },
];

function getWhatsAppLink(masalaName: string) {
  const message = `Hi! I just saw the ${masalaName} recipe on your website. I'd like to order the masala! 🌶️`;
  return `https://wa.me/919092489091?text=${encodeURIComponent(message)}`;
}

export default function RecipeSection() {
  return (
    <section id="recipes" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background video — subtle spice pour */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-[0.08]"
        >
          <source src={SPICE_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-haveli-dark)]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[10px] tracking-[0.5em] uppercase text-[var(--color-haveli-gold)] mb-3">
            From Our Kitchen To Yours
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white italic font-bold mb-4">
            Royal Recipes
          </h2>
          <p className="font-body text-base text-[var(--color-haveli-cream)]/80 max-w-xl mx-auto">
            Quick recipes using Pushtaini masalas. Each dish carries centuries of Rajasthani culinary wisdom — 
            now simplified for your kitchen.
          </p>
        </motion.div>

        {/* Recipe Cards */}
        <div className="space-y-8 md:space-y-12">
          {recipes.map((recipe, i) => (
            <motion.div
              key={recipe.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
            >
              <div className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-8 bg-[var(--color-haveli-dark)]/40 border border-[var(--color-haveli-gold)]/10 group-hover:border-[var(--color-haveli-gold)]/25 transition-all duration-500`}>
                {/* Food Image */}
                <div className="relative w-full md:w-2/5 flex-shrink-0 overflow-hidden">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--color-haveli-dark)]/30 hidden md:block" />
                  
                  {/* Difficulty badge */}
                  <div className="absolute top-3 left-3">
                    <span className="font-ui text-[8px] tracking-[0.15em] uppercase px-2 py-1 bg-[var(--color-haveli-dark)]/80 backdrop-blur-sm border border-[var(--color-haveli-gold)]/30 text-[var(--color-haveli-gold)]">
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>

                {/* Recipe Content */}
                <div className="flex-1 p-5 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl text-white italic font-bold">
                        {recipe.name}
                      </h3>
                      <span className="font-body text-sm text-[var(--color-haveli-gold)] italic">
                        {recipe.hindi}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-ui text-[9px] tracking-[0.1em] uppercase text-[var(--color-haveli-sand)]/60">
                        ⏱ {recipe.cookTime}
                      </span>
                      <span className="font-ui text-[9px] tracking-[0.1em] uppercase text-[var(--color-haveli-sand)]/60">
                        👥 {recipe.servings} servings
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-body text-sm text-[var(--color-haveli-cream)]/75 leading-relaxed mb-5">
                      {recipe.description}
                    </p>

                    {/* Quick Steps */}
                    <div className="space-y-2 mb-6">
                      <p className="font-ui text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/60 mb-2">
                        Quick Steps
                      </p>
                      {recipe.quickSteps.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-start gap-2.5">
                          <span className="font-heading text-[10px] text-[var(--color-haveli-gold)] mt-0.5 flex-shrink-0">
                            {stepIdx + 1}.
                          </span>
                          <span className="font-body text-xs text-[var(--color-haveli-sand)]/80">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Masala Link & Order */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-[var(--color-haveli-gold)]/10">
                    <div>
                      <p className="font-ui text-[8px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)]/50 mb-1">
                        Made With
                      </p>
                      <p className="font-heading text-xs tracking-[0.1em] uppercase text-[var(--color-haveli-cream)]">
                        {recipe.masala}
                      </p>
                    </div>
                    <a
                      href={getWhatsAppLink(recipe.masala)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#8B6914] hover:bg-[#6B5010] px-3 py-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(191,155,48,0.4)]"
                    >
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      <span className="font-ui text-[10px] tracking-wide text-white font-semibold">
                        Order Masala
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-body text-sm text-[var(--color-haveli-cream)]/50 italic">
            More recipes coming soon. Follow @pushtainimasala on Instagram for daily cooking inspiration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
