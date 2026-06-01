'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load from sessionStorage on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem('debenny_cart');
      if (saved) setItems(JSON.parse(saved));
    } catch {}
  }, []);

  // Persist to sessionStorage on change
  useEffect(() => {
    try {
      sessionStorage.setItem('debenny_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  const addItem = (product, size, color) => {
    setItems((prev) => {
      const key = `${product.id}-${size}-${color}`;
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        { key, product, size, color, qty: 1 },
      ];
    });
    setIsOpen(true);
  };

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key));
  };

  const updateQty = (key, qty) => {
    if (qty < 1) return removeItem(key);
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, qty } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0);
  const totalPrice = items.reduce(
    (acc, i) => acc + i.product.price * i.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
