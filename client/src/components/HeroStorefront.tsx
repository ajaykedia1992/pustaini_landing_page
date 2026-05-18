/**
 * HeroStorefront — The main hero section designed to look like
 * stepping into a real Rajasthani haveli spice shop entrance.
 * Full-screen immersive background with vintage sign-painted typography.
 * Now includes the royal crest logo above the title.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const STOREFRONT_BG = asset("/images/pushtaini-storefront.webp");
const CREST_LOGO = asset("/images/pushtaini-royal-crest.webp");

export default function HeroStorefront() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image — The Haveli Storefront */}
      <div className="absolute inset-0">
        <img
          src={STOREFRONT_BG}
          alt="Pushtaini Haveli Spice Shop"
          className="w-full h-full object-cover"
        />
        {/* Warm vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-haveli-dark)]/40 via-transparent to-[var(--color-haveli-dark)]/70" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Content — Vintage Sign Typography */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Royal Crest Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4"
        >
          <img
            src={CREST_LOGO}
            alt="Pushtaini Royal Crest"
            className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_4px_20px_rgba(180,150,60,0.3)]"
          />
        </motion.div>

        {/* EST. line */}
        <motion.div
          className="flex items-center gap-4 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="font-heading text-[10px] md:text-xs tracking-[0.4em] text-[var(--color-haveli-cream)] uppercase">
            Est.
          </span>
          <span className="w-8 h-px bg-[var(--color-haveli-gold)]/70" />
          <span className="text-[var(--color-haveli-gold)] text-sm">✦</span>
          <span className="w-8 h-px bg-[var(--color-haveli-gold)]/70" />
          <span className="font-heading text-[10px] md:text-xs tracking-[0.4em] text-[var(--color-haveli-cream)] uppercase">
            MMXXIV
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="font-display text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.85] font-bold italic masala-title tracking-tight"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          Pushtaini
        </motion.h1>

        {/* Subtitle with decorative dashes */}
        <motion.div
          className="flex items-center gap-3 mt-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <span className="w-10 h-px bg-[var(--color-haveli-gold)]/80" />
          <span className="font-heading text-sm md:text-base tracking-[0.5em] text-white uppercase font-semibold">
            Masala
          </span>
          <span className="w-10 h-px bg-[var(--color-haveli-gold)]/80" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-heading text-sm md:text-lg tracking-[0.3em] text-white uppercase mb-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Old Roots. Bold Spices.
        </motion.p>

        {/* Hindi tagline */}
        <motion.p
          className="font-body text-sm md:text-lg text-[var(--color-haveli-gold)] mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          हर मसाला, एक किस्सा।
        </motion.p>

        <motion.p
          className="font-body text-xs text-[var(--color-haveli-cream)]/80 italic mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          Every Masala. A Chapter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <a href="#collection" className="btn-vintage-filled">
            Explore Collection
          </a>
          <a href="#family" className="btn-vintage">
            Meet The Family
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="font-ui text-[9px] tracking-[0.3em] text-[var(--color-haveli-cream)]/60 uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[var(--color-haveli-gold)]/50 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
