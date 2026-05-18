/**
 * CartContext — Shopping cart state management with localStorage persistence.
 * Supports adding individual masalas and combo packs.
 * Checkout generates a WhatsApp message with the full order.
 */
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { products, comboPacks, type Product, type ComboPackData } from "@/lib/products";

export interface CartItem {
  id: string;
  type: "product" | "combo";
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addProduct: (productId: string) => void;
  addCombo: (comboId: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  getWhatsAppCheckoutLink: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "pushtaini-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addProduct = (productId: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId && item.type === "product");
      if (existing) {
        return prev.map((item) =>
          item.id === productId && item.type === "product"
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: productId, type: "product", quantity: 1 }];
    });
  };

  const addCombo = (comboId: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === comboId && item.type === "combo");
      if (existing) {
        return prev.map((item) =>
          item.id === comboId && item.type === "combo"
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { id: comboId, type: "combo", quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    if (item.type === "product") {
      const product = products.find((p) => p.id === item.id);
      return sum + (product ? product.price * item.quantity : 0);
    } else {
      const combo = comboPacks.find((c) => c.id === item.id);
      return sum + (combo ? combo.comboPrice * item.quantity : 0);
    }
  }, 0);

  const getWhatsAppCheckoutLink = () => {
    const lines: string[] = ["Hi! I'd like to place an order:\n"];

    items.forEach((item) => {
      if (item.type === "product") {
        const product = products.find((p) => p.id === item.id);
        if (product) {
          lines.push(`• *${product.name}* (₹${product.price}) × ${item.quantity}`);
        }
      } else {
        const combo = comboPacks.find((c) => c.id === item.id);
        if (combo) {
          lines.push(`• *${combo.name}* combo (₹${combo.comboPrice}) × ${item.quantity}`);
        }
      }
    });

    lines.push(`\n*Total: ₹${totalPrice.toLocaleString("en-IN")}*`);
    lines.push("\nPlease share payment and delivery details! 🙏");

    const message = lines.join("\n");
    return `https://wa.me/919092489091?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addProduct,
        addCombo,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        getWhatsAppCheckoutLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
