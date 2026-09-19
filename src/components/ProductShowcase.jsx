import React, { useState } from 'react';
import { Star, Check, ArrowRight, ShieldCheck, Zap, Truck } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';
import { useCart } from '../context/CartContext';

export const ProductShowcase = () => {
  const { addToCart } = useCart();
  const [selectedTierId, setSelectedTierId] = useState('single-tin');
  const [purchaseType, setPurchaseType] = useState('onetime');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const productImages = [
    { src: '/assets/tin-closeup.png', label: 'Ceremonial Tin' },
    { src: '/assets/starter-bundle.png', label: 'The Starter Bundle' },
    { src: '/assets/matcha-iced-pour.png', label: 'Iced Pour' },
    { src: '/assets/latte-art.png', label: 'Velvety Foam' },
    { src: '/assets/whisk-ritual-2.png', label: 'Whisking' },
  ];

  const selectedTier = PRODUCT_DATA.pricingTiers.find((t) => t.id === selectedTierId) || PRODUCT_DATA.pricingTiers[0];
  const price = purchaseType === 'subscribe' ? Math.round(selectedTier.price * 0.85) : selectedTier.price;

  const handleAddToCart = () => {
    addToCart({
      id: selectedTier.id,
      name: `Cheeky Ceremonial Matcha — ${selectedTier.title}`,
      subtitle: `${selectedTier.servings} • ${purchaseType === 'subscribe' ? 'Monthly Refill (15% Off)' : 'One-time Order'}`,
      price: price,
      originalPrice: selectedTier.originalPrice,
      quantity: 1,
      image: selectedTier.image,
      option: purchaseType === 'subscribe' ? 'Monthly Subscription' : 'One-time Purchase',
      isSubscription: purchaseType === 'subscribe',
    });
  };

  return (
    <section id="shop" className="section-spacing" style={{
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
    }}>
      <div className="cheeky-container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 2.0 ) THE FLAGSHIP PRODUCT</span>
          <span className="meta-tag">CEREMONIAL MATCHA POWDER</span>
          <span className="meta-tag">100% ORGANIC JAPANESE TENCHA</span>
        </div>

        {/* Product Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4.5rem',
          alignItems: 'start',
        }} className="product-editorial-grid">
          
          {/* Left: Product Imagery Gallery */}
          <div>
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid rgba(88, 3, 42, 0.15)',
              backgroundColor: 'var(--cream)',
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '460px',
              position: 'relative',
            }}>
              <span className="pill-badge" style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                color: 'var(--rusty-red)',
                borderColor: 'var(--rusty-red)',
                background: 'var(--ivory)'
              }}>
                {selectedTier.badge}
              </span>

              <img
                src={productImages[activeImageIndex].src}
                alt={productImages[activeImageIndex].label}
                style={{
                  maxHeight: '380px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 30px rgba(88, 3, 42, 0.08))',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Thumbnail Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '0.6rem',
              marginTop: '0.85rem',
            }}>
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    borderRadius: 'var(--radius-xs)',
                    border: `1px solid ${activeImageIndex === idx ? 'var(--rusty-red)' : 'rgba(88, 3, 42, 0.15)'}`,
                    background: 'var(--cream)',
                    padding: '0.4rem',
                    cursor: 'pointer',
                    height: '74px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Sourcing Note */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem 1.25rem',
              border: '1px solid rgba(88, 3, 42, 0.12)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.82rem',
              color: 'rgba(88, 3, 42, 0.8)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <ShieldCheck size={20} color="var(--matcha-deep)" style={{ flexShrink: 0 }} />
              <span>
                100% single-origin spring tencha, shade-cultivated for 28 days on volcanic mineral soil in Kagoshima & Uji, Japan.
              </span>
            </div>
          </div>

          {/* Right: Product Details, Tier Selection & Buy Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '2px', color: 'var(--rusty-red)' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="var(--rusty-red)" color="var(--rusty-red)" />
                  ))}
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--tyrian-purple)', opacity: 0.8 }}>
                  4.94 (2,480+ REVIEWS)
                </span>
              </div>

              <h2 style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: '400',
                color: 'var(--tyrian-purple)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}>
                <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.85em', display: 'block' }}>
                  Cheeky Ceremonial
                </span>
                <span className="italic-serif" style={{ color: 'var(--rusty-red)' }}>
                  Matcha Powder
                </span>
              </h2>

              <p style={{
                fontSize: '0.98rem',
                lineHeight: '1.6',
                color: 'rgba(88, 3, 42, 0.82)',
                marginTop: '0.6rem',
              }}>
                Stone-ground Japanese ceremonial matcha crafted for daily rituals. Ultra-smooth, naturally sweet, with electric vibrant spring green color and zero bitterness.
              </p>
            </div>

            {/* Option Tiers */}
            <div>
              <label className="meta-tag" style={{ display: 'block', marginBottom: '0.6rem' }}>
                Select Option
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {PRODUCT_DATA.pricingTiers.map((tier) => {
                  const isSelected = selectedTierId === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTierId(tier.id)}
                      style={{
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${isSelected ? 'var(--rusty-red)' : 'rgba(88, 3, 42, 0.2)'}`,
                        backgroundColor: isSelected ? 'var(--mimi-pink)' : 'var(--cream)',
                        padding: '0.95rem 1.25rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'var(--transition)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `1px solid ${isSelected ? 'var(--rusty-red)' : 'var(--tyrian-purple)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          {isSelected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rusty-red)' }} />}
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--tyrian-purple)' }}>
                              {tier.title}
                            </span>
                            {tier.popular && (
                              <span style={{
                                fontSize: '0.65rem',
                                fontWeight: '700',
                                color: 'var(--rusty-red)',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                              }}>
                                ★ Most Loved
                              </span>
                            )}
                          </div>
                          <p style={{ fontSize: '0.75rem', color: 'rgba(88, 3, 42, 0.65)' }}>
                            {tier.servings}
                          </p>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>
                          ${purchaseType === 'subscribe' ? Math.round(tier.price * 0.85) : tier.price}
                        </span>
                        {tier.originalPrice && (
                          <span style={{ fontSize: '0.82rem', color: 'rgba(88, 3, 42, 0.45)', textDecoration: 'line-through', marginLeft: '0.4rem' }}>
                            ${tier.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Frequency Selection: One-time vs Subscribe */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.6rem',
            }}>
              <button
                type="button"
                onClick={() => setPurchaseType('onetime')}
                style={{
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${purchaseType === 'onetime' ? 'var(--rusty-red)' : 'rgba(88, 3, 42, 0.2)'}`,
                  background: purchaseType === 'onetime' ? 'var(--cream-soft)' : 'transparent',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--tyrian-purple)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  One-Time Order
                </p>
                <p style={{ fontSize: '0.72rem', color: 'rgba(88, 3, 42, 0.65)' }}>
                  Standard purchase
                </p>
              </button>

              <button
                type="button"
                onClick={() => setPurchaseType('subscribe')}
                style={{
                  borderRadius: 'var(--radius-sm)',
                  border: `1px solid ${purchaseType === 'subscribe' ? 'var(--rusty-red)' : 'rgba(88, 3, 42, 0.2)'}`,
                  background: purchaseType === 'subscribe' ? 'var(--mimi-pink)' : 'transparent',
                  padding: '0.75rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--rusty-red)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Monthly Refill (Save 15%)
                </p>
                <p style={{ fontSize: '0.72rem', color: 'rgba(88, 3, 42, 0.65)' }}>
                  Pause or cancel anytime
                </p>
              </button>
            </div>

            {/* Add to Bag Action */}
            <button
              onClick={handleAddToCart}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '1.05rem 2rem',
                fontSize: '0.88rem',
              }}
            >
              <span>Add to Bag — ${price}</span>
              <ArrowRight size={16} />
            </button>

            {/* Specifications list */}
            <div style={{
              borderTop: '1px solid rgba(88, 3, 42, 0.12)',
              paddingTop: '1.2rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              fontSize: '0.8rem',
            }}>
              <div>
                <p className="meta-tag">Origin</p>
                <p style={{ fontWeight: '700', color: 'var(--tyrian-purple)' }}>Kagoshima & Uji, Japan</p>
              </div>
              <div>
                <p className="meta-tag">Harvest</p>
                <p style={{ fontWeight: '700', color: 'var(--tyrian-purple)' }}>1st Spring Flush (Tencha)</p>
              </div>
              <div>
                <p className="meta-tag">Servings</p>
                <p style={{ fontWeight: '700', color: 'var(--tyrian-purple)' }}>30 Servings (30g Tin)</p>
              </div>
              <div>
                <p className="meta-tag">Taste Profile</p>
                <p style={{ fontWeight: '700', color: 'var(--tyrian-purple)' }}>Velvety Umami, 0% Bitterness</p>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
