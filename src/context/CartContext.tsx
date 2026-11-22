"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CustomMeasurements {
  busto: string;
  cintura: string;
  cadera: string;
  altura: string;
}

export interface CartItem {
  uid: string;
  productId: string;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  printLabel: string;
  quantity: number;
  isCustomSized: boolean;
  measurements?: CustomMeasurements;
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "uid" | "quantity">, qty?: number) => void;
  updateQuantity: (uid: string, delta: number) => void;
  updateItemPrint: (uid: string, printLabel: string) => void;
  removeItem: (uid: string) => void;
  clearCart: () => void;
  lastAddedTick: number;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "carlyunderwater_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedTick, setLastAddedTick] = useState(0);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore storage errors
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items, hydrated]);

  const addItem = (
    item: Omit<CartItem, "uid" | "quantity">,
    qty: number = 1
  ) => {
    const m = item.measurements;
    const measureKey = m
      ? `${m.busto}-${m.cintura}-${m.cadera}-${m.altura}`
      : "std";
    const uid = `${item.productId}__${item.printLabel}__${measureKey}`;

    setItems((prev) => {
      const existing = prev.find((i) => i.uid === uid);
      if (existing) {
        return prev.map((i) =>
          i.uid === uid ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { ...item, uid, quantity: qty }];
    });
    setLastAddedTick((t) => t + 1);
  };

  const updateQuantity = (uid: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.uid === uid
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (uid: string) => {
    setItems((prev) => prev.filter((item) => item.uid !== uid));
  };

  const updateItemPrint = (uid: string, printLabel: string) => {
    setItems((prev) =>
      prev.map((item) => (item.uid === uid ? { ...item, printLabel } : item))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        addItem,
        updateQuantity,
        updateItemPrint,
        removeItem,
        clearCart,
        lastAddedTick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
