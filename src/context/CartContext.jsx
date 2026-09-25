import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const CartContext = createContext();

export const FREE_SHIPPING_THRESHOLD = 40;

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('cheeky_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 'single-tin',
          name: 'Cheeky Ceremonial Matcha Tin',
          subtitle: '30g (~30 Servings) • First Harvest Kagoshima',
          price: 28,
          originalPrice: 32,
          quantity: 1,
          image: '/assets/tin-closeup.png',
          option: 'One-time Purchase',
          isSubscription: false,
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('cheeky_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FAA7E0', '#58032A', '#E1233C', 'var(--rusty-red)', '#FFE0F5']
      });
    } catch (e) {
      console.warn(e);
    }
  };

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.option === item.option);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.option === item.option
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true);
    triggerConfetti();
  };

  const updateQuantity = (id, option, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.option === option) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id, option) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.option === option)));
  };

  const applyPromo = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'CHEEKY10' || clean === 'XOXOTALIA') {
      setDiscountPercent(0.10);
      setPromoSuccess('10% Talia discount applied! ✨');
      setPromoError('');
    } else if (clean === 'VIP15' || clean === 'TALIA') {
      setDiscountPercent(0.15);
      setPromoSuccess('15% VIP discount applied! 🍵');
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "XOXOTALIA" or "CHEEKY10"');
      setPromoSuccess('');
    }
  };

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * discountPercent;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.95;
  const total = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        itemCount,
        subtotal,
        discountAmount,
        discountPercent,
        shipping,
        total,
        freeShippingProgress,
        amountToFreeShipping,
        promoCode,
        setPromoCode,
        promoError,
        promoSuccess,
        applyPromo,
        triggerConfetti,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
