/**
 * Pushtaini Product Data — Single source of truth for all masalas.
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  HOW TO ADD A NEW PRODUCT:                                      │
 * │  1. Open client/src/data/products.json                          │
 * │  2. Add a new object to the "products" array                    │
 * │  3. Add the product image to client/public/images/              │
 * │  4. Set the "image" field to "/images/your-image-name.webp"     │
 * │  5. Push to git — that's it!                                    │
 * │                                                                 │
 * │  HOW TO ADD A NEW COMBO PACK:                                   │
 * │  1. Open client/src/data/products.json                          │
 * │  2. Add a new object to the "comboPacks" array                  │
 * │  3. Reference existing product IDs in "masalaIds"               │
 * │  4. Add a combo image to client/public/images/                  │
 * │  5. Push to git — done!                                         │
 * └─────────────────────────────────────────────────────────────────┘
 */

import productData from "@/data/products.json";
import { asset } from "@/lib/utils";

export interface Product {
  id: string;
  name: string;
  hindi: string;
  price: number;
  tag: string;
  character: string;
  image: string;
  category: "non-veg" | "veg" | "street" | "everyday";
  story: string;
  ingredients: string[];
  usage: string;
  weight: string;
}

export interface ComboPackData {
  id: string;
  name: string;
  hindi: string;
  description: string;
  masalaIds: string[];
  originalPrice: number;
  comboPrice: number;
  badge: string;
  image: string;
}

// Apply the asset() helper to image paths for GitHub Pages compatibility
export const products: Product[] = productData.products.map((p) => ({
  ...p,
  image: asset(p.image),
  category: p.category as Product["category"],
}));

export const comboPacks: ComboPackData[] = productData.comboPacks.map((c) => ({
  ...c,
  image: asset(c.image),
}));

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRecommendations(currentId: string, count = 3): Product[] {
  const current = getProductById(currentId);
  if (!current) return products.slice(0, count);

  // Recommend from same category first, then others
  const sameCategory = products.filter(
    (p) => p.id !== currentId && p.category === current.category
  );
  const others = products.filter(
    (p) => p.id !== currentId && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}
