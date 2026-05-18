/**
 * Pushtaini Masala — Landing Page
 * 
 * Design: Immersive heritage spice shop storefront.
 * The page feels like stepping into a real Rajasthani haveli spice shop.
 * Warm amber lighting, ornate carved frames, vintage sign typography.
 */
import { useEffect, useState, useRef } from "react";
import { asset } from "@/lib/utils";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "wouter";
import { useCart } from "@/contexts/CartContext";
import HeroStorefront from "@/components/HeroStorefront";
import FamilyGallery from "@/components/FamilyGallery";
import MasalaMenu from "@/components/MasalaMenu";
import SpiceShelf from "@/components/SpiceShelf";
import PackagingShowcase from "@/components/PackagingShowcase";
import StorySection from "@/components/StorySection";
import FooterSection from "@/components/FooterSection";
import FloatingSpices from "@/components/FloatingSpices";
import ComboPackSection from "@/components/ComboPackSection";
import RecipeSection from "@/components/RecipeSection";

const CREST_LOGO = asset("/images/pushtaini-royal-crest.webp");

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  return (
    <div ref={containerRef} className="relative min-h-screen bg-[var(--color-haveli-dark)]">
      {/* Floating spice particles throughout */}
      <FloatingSpices />
      
      {/* Navigation */}
      <NavBar />
      
      {/* Hero — The Storefront Entrance */}
      <HeroStorefront />
      
      {/* Family Gallery — Character Portraits */}
      <FamilyGallery />
      
      {/* Spice Shelf Display */}
      <SpiceShelf />
      
      {/* Masala Menu Board */}
      <MasalaMenu />
      
      {/* Combo Pack Gift Sets */}
      <ComboPackSection />
      
      {/* Recipe Section */}
      <RecipeSection />
      
      {/* Packaging Showcase */}
      <PackagingShowcase />
      
      {/* Story / Heritage */}
      <StorySection />
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { totalItems } = useCart();

  const navLinks = [
    { label: "Family", href: "#family" },
    { label: "Collection", href: "#collection" },
    { label: "Combos", href: "#combos" },
    { label: "Recipes", href: "#recipes" },
    { label: "Story", href: "#story" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? "bg-[var(--color-haveli-dark)]/95 backdrop-blur-sm border-b border-[var(--color-haveli-gold)]/10" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo with Crest */}
        <a href="#" className="flex items-center gap-2.5">
          <img 
            src={CREST_LOGO} 
            alt="Pushtaini Royal Crest" 
            className={`transition-all duration-500 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`}
          />
          <span className="font-display text-lg md:text-xl text-[var(--color-haveli-gold)] italic font-bold tracking-wide">
            Pushtaini
          </span>
        </a>

        {/* Desktop Nav Links — only on large screens */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-heading text-[11px] tracking-[0.25em] uppercase text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop: Cart + CTA — only on large screens */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[var(--color-haveli-gold)] text-[var(--color-haveli-dark)] text-[9px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

        {/* Desktop CTA Button with Hover Contact Info */}
        <div className="relative group">
          <button className="btn-vintage text-[10px] px-4 py-2">
            Connect With Us
          </button>
          {/* Hover Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] translate-y-2 group-hover:translate-y-0">
            <div className="bg-[var(--color-haveli-dark)]/95 backdrop-blur-md border border-[var(--color-haveli-gold)]/20 p-4 space-y-3 shadow-xl">
              <a 
                href="tel:+919092489091" 
                className="flex items-center gap-2.5 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
              >
                <span className="text-[var(--color-haveli-gold)] text-sm">✆</span>
                <span className="font-body text-xs">+91 9092489091</span>
              </a>
              <div className="w-full h-px bg-[var(--color-haveli-gold)]/10" />
              <a 
                href="mailto:contact@pushtaini.com" 
                className="flex items-center gap-2.5 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
              >
                <span className="text-[var(--color-haveli-gold)] text-sm">✉</span>
                <span className="font-body text-xs">contact@pushtaini.com</span>
              </a>
              <div className="w-full h-px bg-[var(--color-haveli-gold)]/10" />
              <a 
                href="https://wa.me/919092489091" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
              >
                <span className="text-[var(--color-haveli-gold)] text-sm">💬</span>
                <span className="font-body text-xs">WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
        </div>

        {/* Mobile/Tablet: Cart + Hamburger — visible below lg */}
        <div className="lg:hidden flex items-center gap-1">
          <Link
            href="/cart"
            className="relative text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[var(--color-haveli-gold)] text-[var(--color-haveli-dark)] text-[9px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="relative z-[110] p-3 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-7 flex flex-col gap-[6px]">
              <span 
                className={`block h-[2px] rounded-full bg-[var(--color-haveli-gold)] transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[8px]" : ""
                }`} 
              />
              <span 
                className={`block h-[2px] rounded-full bg-[var(--color-haveli-gold)] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`} 
              />
              <span 
                className={`block h-[2px] rounded-full bg-[var(--color-haveli-gold)] transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-[105] backdrop-blur-lg"
            style={{ backgroundColor: 'rgba(42, 26, 15, 0.99)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {/* Nav Links */}
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-heading text-lg tracking-[0.3em] uppercase text-[var(--color-haveli-cream)] hover:text-[var(--color-haveli-gold)] transition-colors duration-300"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Divider */}
              <motion.div 
                className="w-16 h-px bg-[var(--color-haveli-gold)]/30"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              />

              {/* Contact Info */}
              <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <a 
                  href="tel:+919092489091" 
                  className="font-body text-sm text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
                >
                  ✆ +91 9092489091
                </a>
                <a 
                  href="mailto:contact@pushtaini.com" 
                  className="font-body text-sm text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
                >
                  ✉ contact@pushtaini.com
                </a>
                <a 
                  href="https://wa.me/919092489091" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-vintage text-[10px] mt-2"
                  onClick={() => setMobileOpen(false)}
                >
                  WhatsApp Order
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
