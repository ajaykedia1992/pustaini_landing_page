/**
 * FooterSection — Minimal vintage footer with brand identity and royal crest.
 */
import { motion } from "framer-motion";
import { asset } from "@/lib/utils";

const CREST_LOGO = asset("/images/pushtaini-royal-crest.webp");

export default function FooterSection() {
  return (
    <footer className="relative py-16 border-t border-[var(--color-haveli-gold)]/10">
      <div className="absolute inset-0 bg-[var(--color-haveli-brown)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand with Crest */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={CREST_LOGO} 
                alt="Pushtaini Royal Crest" 
                className="w-14 h-14 object-contain"
              />
              <div>
                <h3 className="font-display text-xl text-[var(--color-haveli-gold)] italic font-bold">
                  Pushtaini
                </h3>
                <p className="font-heading text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-sand)]/60">
                  Royal Heritage Spices
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-[var(--color-haveli-sand)]/70 leading-relaxed mb-4">
              Old Roots. Bold Spices.<br />
              Born in the royal kitchens of Rajasthan.
            </p>
            <p className="font-body text-xs text-[var(--color-haveli-gold)]/70 italic">
              हर मसाला, एक किस्सा।
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[var(--color-haveli-gold)] mb-4">
              Explore
            </p>
            <div className="space-y-2">
              {["All Masalas", "Gift Sets", "Travel Packs", "Our Story", "Recipes"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block font-body text-sm text-[var(--color-haveli-sand)]/70 hover:text-[var(--color-haveli-gold)] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading text-[10px] tracking-[0.3em] uppercase text-[var(--color-haveli-gold)] mb-4">
              Connect
            </p>
            <div className="space-y-2">
              <a href="tel:+919092489091" className="block font-body text-sm text-[var(--color-haveli-sand)]/70 hover:text-[var(--color-haveli-gold)] transition-colors">
                +91 9092489091
              </a>
              <a href="mailto:contact@pushtaini.com" className="block font-body text-sm text-[var(--color-haveli-sand)]/70 hover:text-[var(--color-haveli-gold)] transition-colors">
                contact@pushtaini.com
              </a>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.instagram.com/pushtainimasala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-[9px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)]/40 hover:text-[var(--color-haveli-gold)] transition-colors border border-[var(--color-haveli-gold)]/15 px-3 py-1.5 hover:border-[var(--color-haveli-gold)]/30"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/919092489091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-[9px] tracking-[0.15em] uppercase text-[var(--color-haveli-gold)]/40 hover:text-[var(--color-haveli-gold)] transition-colors border border-[var(--color-haveli-gold)]/15 px-3 py-1.5 hover:border-[var(--color-haveli-gold)]/30"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-haveli-gold)]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-[9px] tracking-[0.15em] text-[var(--color-haveli-sand)]/60 uppercase">
            © {new Date().getFullYear()} Pushtaini Masala. All rights reserved.
          </p>
          <p className="font-body text-xs text-[var(--color-haveli-sand)]/50 italic">
            Crafted with love in Rajasthan
          </p>
        </div>
      </div>
    </footer>
  );
}
