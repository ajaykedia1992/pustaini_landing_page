/**
 * ProductDetail (PDP) — Individual masala page with story, ingredients,
 * usage tips, recommendations, and add-to-cart functionality.
 */
import { useParams, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { getProductById, getRecommendations, type Product } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const product = getProductById(id || "");
  const { addProduct, totalItems } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Scroll to top when navigating to a product page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[var(--color-haveli-dark)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-white italic mb-4">Masala Not Found</h1>
          <Link href="/" className="btn-vintage text-sm">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const recommendations = getRecommendations(product.id, 3);

  const handleAddToCart = () => {
    addProduct(product.id);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[var(--color-haveli-dark)]">
      {/* Top Nav Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-haveli-dark)]/95 backdrop-blur-sm border-b border-[var(--color-haveli-gold)]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-heading text-[11px] tracking-[0.2em] uppercase">Back</span>
          </button>

          <Link href="/" className="font-display text-lg text-[var(--color-haveli-gold)] italic font-bold">
            Pushtaini
          </Link>

          <Link
            href="/cart"
            className="relative flex items-center gap-1.5 text-[var(--color-haveli-sand)] hover:text-[var(--color-haveli-gold)] transition-colors"
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Product Hero */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 mb-16 md:mb-24">
            {/* Image */}
            <motion.div
              className="w-full md:w-2/5 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-[3/4] border border-[var(--color-haveli-gold)]/15 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Tag */}
                <div className="absolute top-4 right-4">
                  <span className="font-ui text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 bg-[var(--color-haveli-dark)]/80 backdrop-blur-sm border border-[var(--color-haveli-gold)]/40 text-[var(--color-haveli-gold)]">
                    {product.tag}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              className="flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Character */}
              <p className="font-ui text-[9px] tracking-[0.3em] uppercase text-[var(--color-haveli-gold)]/70 mb-2">
                by {product.character} · {product.weight}
              </p>

              {/* Name */}
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white italic font-bold mb-1">
                {product.name}
              </h1>
              <p className="font-body text-base md:text-lg text-[var(--color-haveli-gold)] italic mb-6">
                {product.hindi}
              </p>

              {/* Story */}
              <div className="mb-6">
                <p className="font-ui text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/50 mb-2">
                  The Story
                </p>
                <p className="font-body text-sm md:text-base text-[var(--color-haveli-cream)]/80 leading-relaxed">
                  {product.story}
                </p>
              </div>

              {/* Usage */}
              <div className="mb-6">
                <p className="font-ui text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/50 mb-2">
                  Best Used For
                </p>
                <p className="font-body text-sm text-[var(--color-haveli-sand)]/75 leading-relaxed">
                  {product.usage}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <p className="font-ui text-[8px] tracking-[0.2em] uppercase text-[var(--color-haveli-gold)]/50 mb-3">
                  Key Ingredients
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="font-body text-[11px] px-2.5 py-1 bg-[var(--color-haveli-warm)]/30 border border-[var(--color-haveli-gold)]/15 text-[var(--color-haveli-sand)]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <span className="font-heading text-2xl md:text-3xl tracking-wider text-[var(--color-haveli-gold)] font-bold">
                  ₹{product.price}
                </span>

                <button
                  onClick={handleAddToCart}
                  className={`flex items-center gap-2.5 px-6 py-3 font-ui text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 ${
                    justAdded
                      ? "bg-[#8B6914] text-[var(--color-haveli-cream)]"
                      : "bg-[var(--color-haveli-gold)] text-[var(--color-haveli-dark)] hover:bg-[var(--color-haveli-gold)]/90 hover:shadow-[0_0_20px_rgba(240,200,80,0.3)]"
                  }`}
                  style={{ transform: justAdded ? "scale(0.97)" : "scale(1)" }}
                >
                  {justAdded ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Added!
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Add to Cart
                    </>
                  )}
                </button>
              </div>

              {/* Cart hint */}
              {totalItems > 0 && (
                <motion.p
                  className="mt-3 font-body text-xs text-[var(--color-haveli-sand)]/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {totalItems} item{totalItems > 1 ? "s" : ""} in cart ·{" "}
                  <Link href="/cart" className="text-[var(--color-haveli-gold)] underline underline-offset-2">
                    View Cart
                  </Link>
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-t border-[var(--color-haveli-gold)]/10 pt-12">
              <div className="text-center mb-10">
                <p className="font-heading text-[10px] tracking-[0.4em] uppercase text-[var(--color-haveli-gold)] mb-2">
                  Complete Your Collection
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-white italic font-bold">
                  You Might Also Love
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
                {recommendations.map((rec) => (
                  <RecommendationCard key={rec.id} product={rec} />
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

function RecommendationCard({ product }: { product: Product }) {
  const { addProduct } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addProduct(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative bg-[var(--color-haveli-dark)]/60 border border-[var(--color-haveli-gold)]/10 hover:border-[var(--color-haveli-gold)]/30 transition-all duration-500 cursor-pointer">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h4 className="font-heading text-[10px] tracking-[0.12em] uppercase text-[var(--color-haveli-cream)] group-hover:text-[var(--color-haveli-gold)] transition-colors mb-1">
            {product.name}
          </h4>
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm text-[var(--color-haveli-gold)]">
              ₹{product.price}
            </span>
            <button
              onClick={handleAdd}
              className={`font-ui text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 transition-all duration-300 ${
                added
                  ? "bg-[#8B6914] text-[var(--color-haveli-cream)]"
                  : "bg-[var(--color-haveli-gold)]/20 border border-[var(--color-haveli-gold)]/40 text-[var(--color-haveli-gold)] hover:bg-[var(--color-haveli-gold)]/30"
              }`}
            >
              {added ? "Added ✓" : "+ Add"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
