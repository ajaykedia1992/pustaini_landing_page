/**
 * Navigation — Premium luxury nav with gold/charcoal palette.
 * Font: Cormorant SC for links, Playfair Display for brand.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Family", href: "#family" },
    { label: "Collection", href: "#collection" },
    { label: "Heritage", href: "#story" },
    { label: "Packaging", href: "#packaging" },
    { label: "Culture", href: "#culture" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-warm-black)]/95 backdrop-blur-md border-b border-[var(--color-gold)]/10 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl md:text-2xl font-bold gold-text-gradient"
          style={{
            textShadow: scrolled ? "none" : "0 1px 8px rgba(180,150,60,0.15)"
          }}>
          Pushtaini
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-heading text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--color-haveli-cream)]/60 hover:text-[var(--color-gold)]"
                  : "text-[var(--color-haveli-cream)]/50 hover:text-[var(--color-gold)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px transition-all duration-300 bg-[var(--color-gold)] ${mobileOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
            <span className={`h-px transition-all duration-300 bg-[var(--color-gold)] ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-px transition-all duration-300 bg-[var(--color-gold)] ${mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-warm-black)]/98 backdrop-blur-lg border-b border-[var(--color-gold)]/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-heading text-sm tracking-[0.2em] uppercase text-[var(--color-haveli-cream)]/60 hover:text-[var(--color-gold)] transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
