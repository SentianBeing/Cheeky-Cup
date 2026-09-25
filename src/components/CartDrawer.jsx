import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart, FREE_SHIPPING_THRESHOLD } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discountAmount,
    discountPercent,
    shipping,
    total,
    freeShippingProgress,
    amountToFreeShipping,
    applyPromo,
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (inputCode) {
      applyPromo(inputCode);
    }
  };

  const handleFakeCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      alert('🎉 Order placed successfully! (Demo Checkout) Your Cheeky Ceremonial Matcha is on its way. xoxo Talia!');
      setIsCheckingOut(false);
      setIsCartOpen(false);
    }, 1000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(58, 2, 27, 0.4)',
      backdropFilter: 'blur(4px)',
    }}>
      <div style={{ position: 'absolute', inset: 0 }} onClick={() => setIsCartOpen(false)} />

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '440px',
        height: '100%',
        background: 'var(--cream)',
        borderLeft: '1px solid rgba(88, 3, 42, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 101,
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={18} color="var(--tyrian-purple)" />
            <h3 style={{ fontSize: '0.92rem', fontWeight: '800', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--tyrian-purple)' }}>
              Your Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--tyrian-purple)',
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div style={{
          padding: '0.85rem 1.5rem',
          backgroundColor: 'var(--ivory)',
          borderBottom: '1px solid rgba(88, 3, 42, 0.1)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--tyrian-purple)' }}>
            <span>
              {amountToFreeShipping === 0
                ? '★ You unlocked Free US Shipping'
                : `Add $${amountToFreeShipping.toFixed(2)} more for Free Shipping`}
            </span>
            <span>{freeShippingProgress.toFixed(0)}%</span>
          </div>

          <div style={{
            width: '100%',
            height: '4px',
            background: 'var(--mimi-pink)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}>
            <div style={{
              width: `${freeShippingProgress}%`,
              height: '100%',
              background: 'var(--rusty-red)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', margin: 'auto 0' }}>
              <p style={{ fontSize: '1rem', color: 'rgba(88,3,42,0.7)', marginBottom: '1rem' }}>
                Your bag is currently empty.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById('shop');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Shop Ceremonial Matcha
              </button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                style={{
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(88, 3, 42, 0.12)',
                  backgroundColor: 'var(--ivory)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-xs)',
                  backgroundColor: 'var(--cream)',
                  border: '1px solid rgba(88, 3, 42, 0.1)',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--tyrian-purple)', lineHeight: 1.2 }}>
                    {item.name}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(88, 3, 42, 0.65)', marginTop: '0.15rem' }}>
                    {item.subtitle || item.option}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.6rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid rgba(88, 3, 42, 0.2)',
                      borderRadius: 'var(--radius-full)',
                    }}>
                      <button
                        onClick={() => updateQuantity(item.id, item.option, -1)}
                        style={{ width: '22px', height: '22px', border: 'none', background: 'transparent', cursor: 'pointer', fontWeight: '700' }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', padding: '0 0.35rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.option, 1)}
                        style={{ width: '22px', height: '22px', border: 'none', background: 'transparent', cursor: 'pointer', fontWeight: '700' }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id, item.option)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--tyrian-purple)' }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid rgba(88, 3, 42, 0.12)',
            backgroundColor: 'var(--ivory)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}>
            {/* Promo input */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '0.4rem' }}>
              <input
                type="text"
                placeholder="PROMO CODE (XOXOTALIA)"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.55rem 0.75rem',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid rgba(88, 3, 42, 0.2)',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  outline: 'none',
                  textTransform: 'uppercase',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.55rem 0.85rem',
                  border: '1px solid var(--tyrian-purple)',
                  background: 'transparent',
                  borderRadius: 'var(--radius-xs)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Apply
              </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.82rem', color: 'var(--tyrian-purple)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.75 }}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--rusty-red)' }}>
                  <span>Discount ({discountPercent * 100}%)</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ opacity: 0.75 }}>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '1.05rem',
                fontWeight: '800',
                borderTop: '1px solid rgba(88, 3, 42, 0.1)',
                paddingTop: '0.4rem',
                marginTop: '0.2rem',
              }}>
                <span>Total</span>
                <span style={{ color: 'var(--rusty-red)' }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleFakeCheckout}
              disabled={isCheckingOut}
              className="btn-primary"
              style={{ width: '100%', padding: '0.95rem', fontSize: '0.88rem' }}
            >
              <span>{isCheckingOut ? 'Processing...' : `Checkout — $${total.toFixed(2)}`}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
