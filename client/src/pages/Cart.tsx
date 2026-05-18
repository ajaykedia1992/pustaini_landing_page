/**
 * Cart Page — Shows all items in cart with quantity controls.
 * Checkout button generates a WhatsApp message with the full order.
 */
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { products, comboPacks } from "@/lib/products";
import { useEffect } from "react";

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, getWhatsAppCheckoutLink } = useCart();
  const [, setLocation] = useLocation();

  // Scroll to top when navigating to cart
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-haveli-dark)]">
      {/* Top Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-haveli-dark)]/95 backdrop-blur-sm border-b border-[var(--color-haveli-gold)]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-heading text-[11px] tracking-[0.2em] uppercase">Continue Shopping</span>
          </button>

          <Link href="/" className="font-display text-lg text-[var(--color-haveli-gold)] italic font-bold">
            Pushtaini
          </Link>

          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </nav>

      {/* Cart Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[var(--color-haveli-gold)] mb-2">
              Your Selection
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-white italic font-bold">
              Royal Cart
            </h1>
          </motion.div>

          {items.length === 0 ? (
            /* Empty Cart */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 mx-auto mb-6 border border-[var(--color-haveli-gold)]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--color-haveli-gold)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="font-body text-base text-[var(--color-haveli-cream)]/60 mb-6">
                Your cart is empty. Explore our royal collection and add some masalas!
              </p>
              <Link href="/" className="btn-vintage text-sm">
                Browse Collection
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {items.map((item, i) => {
                  const isProduct = item.type === "product";
                  const data = isProduct
                    ? products.find((p) => p.id === item.id)
                    : comboPacks.find((c) => c.id === item.id);

                  if (!data) return null;

                  const name = data.name;
                  const price = isProduct
                    ? (data as typeof products[0]).price
                    : (data as typeof comboPacks[0]).comboPrice;
                  const image = isProduct
                    ? (data as typeof products[0]).image
                    : (data as typeof comboPacks[0]).image;
                  const subtitle = isProduct
                    ? (data as typeof products[0]).hindi
                    : (data as typeof comboPacks[0]).hindi;

                  return (
                    <motion.div
                      key={item.id}
                      className="flex gap-4 bg-[var(--color-haveli-dark)]/60 border border-[var(--color-haveli-gold)]/10 p-3 md:p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                      {/* Image */}
                      <div className="w-16 h-20 md:w-20 md:h-24 flex-shrink-0 overflow-hidden border border-[var(--color-haveli-gold)]/10">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-heading text-[10px] md:text-xs tracking-[0.1em] uppercase text-[var(--color-haveli-cream)]">
                                {name}
                              </h3>
                              <p className="font-body text-[10px] text-[var(--color-haveli-gold)]/70 italic">
                                {subtitle}
                              </p>
                              {!isProduct && (
                                <span className="inline-block mt-1 font-ui text-[7px] tracking-[0.1em] uppercase px-1.5 py-0.5 bg-[var(--color-haveli-gold)]/15 border border-[var(--color-haveli-gold)]/30 text-[var(--color-haveli-gold)]">
                                  Combo Pack
                                </span>
                              )}
                            </div>
                            {/* Remove button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-[var(--color-haveli-sand)]/40 hover:text-red-400 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* Quantity & Price */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center border border-[var(--color-haveli-gold)]/20 text-[var(--color-haveli-sand)] hover:border-[var(--color-haveli-gold)]/50 hover:text-[var(--color-haveli-gold)] transition-colors text-sm"
                            >
                              −
                            </button>
                            <span className="font-ui text-xs text-[var(--color-haveli-cream)] w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center border border-[var(--color-haveli-gold)]/20 text-[var(--color-haveli-sand)] hover:border-[var(--color-haveli-gold)]/50 hover:text-[var(--color-haveli-gold)] transition-colors text-sm"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-heading text-sm tracking-wider text-[var(--color-haveli-gold)]">
                            ₹{(price * item.quantity).toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <motion.div
                className="border border-[var(--color-haveli-gold)]/15 p-5 md:p-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-ui text-[9px] tracking-[0.2em] uppercase text-[var(--color-haveli-sand)]/60">
                    {totalItems} item{totalItems > 1 ? "s" : ""}
                  </span>
                  <button
                    onClick={clearCart}
                    className="font-ui text-[9px] tracking-[0.1em] uppercase text-red-400/70 hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="flex items-end justify-between mb-6 pb-4 border-b border-[var(--color-haveli-gold)]/10">
                  <span className="font-heading text-sm tracking-[0.1em] uppercase text-[var(--color-haveli-cream)]">
                    Total
                  </span>
                  <span className="font-heading text-2xl tracking-wider text-[var(--color-haveli-gold)] font-bold">
                    ₹{totalPrice.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* WhatsApp Checkout */}
                <a
                  href={getWhatsAppCheckoutLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#8B6914] hover:bg-[#6B5010] px-6 py-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(191,155,48,0.4)]"
                >
                  <svg className="w-5 h-5 text-[var(--color-haveli-cream)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-ui text-sm tracking-[0.15em] uppercase text-white font-bold">
                    Order via WhatsApp
                  </span>
                </a>

                <p className="text-center mt-3 font-body text-[11px] text-[var(--color-haveli-sand)]/50">
                  Your order details will be sent to our WhatsApp for confirmation & payment
                </p>
              </motion.div>

              {/* Continue Shopping */}
              <div className="text-center">
                <Link href="/" className="font-heading text-[11px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)] hover:text-[var(--color-haveli-cream)] transition-colors underline underline-offset-4">
                  ← Add More Masalas
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
