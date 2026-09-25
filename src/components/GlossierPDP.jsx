import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, ShieldCheck, Zap, Leaf, Check, Star, ChevronDown, ChevronUp } from 'lucide-react';

export const GlossierPDP = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState('one-time'); // 'one-time' | 'subscribe'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState('ritual'); // 'ritual' | 'origin' | 'shipping'

  const productImages = [
    { src: '/assets/tin-closeup.png', alt: 'Cheeky Ceremonial Matcha Tin 30g' },
    { src: '/assets/latte-art.png', alt: 'Vibrant Green Matcha Latte' },
    { src: '/assets/matcha-glass.png', alt: 'Iced Cheeky Matcha in Glass' },
    { src: '/assets/section-lifestyle.png', alt: 'Cheeky Matcha in Morning Routine' },
  ];

  const price = purchaseType === 'subscribe' ? 23.80 : 28.00;

  const handleAddToCart = () => {
    addToCart({
      id: 'cheeky-ceremonial-tin-30g',
      name: 'Cheeky Ceremonial Grade Matcha Tin',
      subtitle: purchaseType === 'subscribe' ? 'Monthly Auto-Refill (Save 15%)' : 'Single 30g Tin (30 Servings)',
      price: price,
      quantity: quantity,
      image: '/assets/tin-closeup.png',
      option: purchaseType === 'subscribe' ? 'Subscription (Every 30 Days)' : 'One-Time Purchase',
      isSubscription: purchaseType === 'subscribe',
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setIsCartOpen(true);
  };

  const features = [
    {
      icon: <Leaf size={16} color="var(--brand-wine)" />,
      title: '1st Harvest Uji Tencha',
      desc: 'Shade-grown for 30 days & stone-milled in Kyoto, Japan.',
    },
    {
      icon: <Zap size={16} color="var(--brand-red)" />,
      title: 'Clean Focus, Zero Crash',
      desc: '68mg natural caffeine + rich L-Theanine for steady calm energy.',
    },
    {
      icon: <Sparkles size={16} color="var(--brand-wine)" />,
      title: 'Zero Bitterness Guarantee',
      desc: 'Sweet, creamy umami note with vibrant electric green microfoam.',
    },
    {
      icon: <ShieldCheck size={16} color="var(--brand-red)" />,
      title: 'Airtight UV-Safe Tin',
      desc: 'Recyclable aluminum tin sealed fresh at the tea farm in Japan.',
    },
  ];

  return (
    <section id="shop" style={{
      padding: '70px 0 90px',
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '64px',
          alignItems: 'start',
        }} className="pdp-grid">
          
          {/* Left Column: Product Gallery */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Main Image Frame */}
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1 / 1.08',
              backgroundColor: 'transparent',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Badge */}
              <span style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--brand-red)',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: '4px 10px',
                border: '1px solid rgba(0,0,0,0.06)',
                zIndex: 2,
              }}>
                100% Ceremonial Grade
              </span>

              <img
                src={productImages[activeImageIndex].src}
                alt={productImages[activeImageIndex].alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </div>

            {/* Thumbnail Navigation */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {productImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  style={{
                    aspectRatio: '1 / 1',
                    padding: '0px',
                    backgroundColor: 'transparent',
                    border: activeImageIndex === idx ? '2px solid var(--border-dark)' : '1px solid var(--border-light)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.15s ease',
                    opacity: activeImageIndex === idx ? 1 : 0.65,
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: PDP Details & Buy Actions */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Reviews & Social Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', gap: '2px', color: 'var(--brand-wine)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-main)' }}>
                4.9
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                (520+ Reviews) • <em>Talia's Pick</em>
              </span>
            </div>

            {/* Product Title */}
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              lineHeight: 1.1,
              fontWeight: '400',
              color: 'var(--text-main)',
              marginBottom: '6px',
            }}>
              Cheeky Ceremonial Grade Matcha
            </h1>

            {/* Subtitle / Size */}
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--brand-red)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              30g Tin (30 Servings) • 1st Harvest Japanese Tencha
            </p>

            {/* Price Tag */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '24px' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-main)' }}>
                ${price.toFixed(2)}
              </span>
              {purchaseType === 'subscribe' && (
                <span style={{ fontSize: '14px', textDecoration: 'line-through', color: 'var(--text-subtle)' }}>
                  $28.00
                </span>
              )}
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Free US Shipping on orders $40+
              </span>
            </div>

            {/* Short Editorial Blurb */}
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              marginBottom: '24px',
              borderLeft: '2px solid var(--brand-red)',
              paddingLeft: '14px',
            }}>
              Crafted for everyday iced lattes and traditional hot whisks. Vibrant electric green, naturally sweet with zero astringency or bitterness.
            </p>

            {/* Purchase Type Selector (One-Time vs Subscribe) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              
              {/* One-Time Option */}
              <div
                onClick={() => setPurchaseType('one-time')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 18px',
                  border: purchaseType === 'one-time' ? '2px solid var(--border-dark)' : '1px solid var(--border-light)',
                  backgroundColor: purchaseType === 'one-time' ? 'var(--ivory)' : 'var(--bg-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '2px solid var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {purchaseType === 'one-time' && (
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-main)' }} />
                    )}
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-main)' }}>
                      One-Time Purchase
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Standard single tin delivery
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)' }}>
                  $28.00
                </span>
              </div>

              {/* Subscribe & Save Option */}
              <div
                onClick={() => setPurchaseType('subscribe')}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '14px 18px',
                  border: purchaseType === 'subscribe' ? '2px solid var(--border-dark)' : '1px solid var(--border-light)',
                  backgroundColor: purchaseType === 'subscribe' ? 'var(--ivory)' : 'var(--bg-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    border: '2px solid var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {purchaseType === 'subscribe' && (
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--text-main)' }} />
                    )}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <p style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-main)' }}>
                        Subscribe & Auto-Refill
                      </p>
                      <span style={{
                        fontSize: '9px',
                        fontWeight: '800',
                        color: 'var(--ivory)',
                        backgroundColor: 'var(--brand-red)',
                        padding: '2px 6px',
                        letterSpacing: '0.04em',
                      }}>
                        SAVE 15%
                      </span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Delivered every 30 days • Pause or cancel anytime
                    </p>
                  </div>
                </div>
                <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--brand-red)' }}>
                  $23.80
                </span>
              </div>

            </div>

            {/* Quantity Selector & Add to Bag / Buy Now Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              
              <div style={{ display: 'flex', gap: '12px' }}>
                {/* Quantity Pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-dark)',
                  width: '120px',
                  padding: '0 8px',
                  backgroundColor: 'var(--ivory)',
                }}>
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    style={{
                      border: 'none',
                      background: 'none',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: '10px',
                      color: 'var(--text-main)',
                    }}
                  >
                    -
                  </button>
                  <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-main)' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    style={{
                      border: 'none',
                      background: 'none',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      padding: '10px',
                      color: 'var(--text-main)',
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag Button */}
                <button
                  onClick={handleAddToCart}
                  className="btn-glossier-outline"
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                  }}
                >
                  Add to Bag • ${(price * quantity).toFixed(2)}
                </button>
              </div>

              {/* Buy Now CTA */}
              <button
                onClick={handleBuyNow}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  backgroundColor: 'var(--brand-red)',
                  borderColor: 'var(--brand-red)',
                }}
              >
                Buy Now — Fast Checkout
              </button>

            </div>

            {/* Feature Highlights with Icons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              padding: '24px 0',
              borderTop: '1px solid var(--border-light)',
              borderBottom: '1px solid var(--border-light)',
              marginBottom: '24px',
            }} className="pdp-features-grid">
              {features.map((feat, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '0px',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {feat.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-main)', lineHeight: 1.3 }}>
                      {feat.title}
                    </p>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: 1.4, marginTop: '2px' }}>
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accordions (Ritual, Origin, Shipping) */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Accordion Item 1 */}
              <div style={{ borderBottom: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'ritual' ? '' : 'ritual')}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
                    The 30-Second Ritual
                  </span>
                  {openAccordion === 'ritual' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'ritual' && (
                  <div style={{ paddingBottom: '16px', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    Sift 1 tsp (2g) Cheeky Matcha into 2 oz warm water (75°C). Froth with whisk for 20-30 seconds until a dense emerald foam forms. Pour over tall ice and 6 oz cold oat milk. Dust top with extra powder!
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div style={{ borderBottom: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'origin' ? '' : 'origin')}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
                    Origin & Sourcing
                  </span>
                  {openAccordion === 'origin' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'origin' && (
                  <div style={{ paddingBottom: '16px', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    Sourced directly from multi-generational heritage tea estates in Uji, Kyoto. Cultivar blend of Okumidori and Yabukita, shade-grown under straw reed covers for rich theanine concentration.
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div style={{ borderBottom: '1px solid var(--border-light)' }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'shipping' ? '' : 'shipping')}
                  style={{
                    width: '100%',
                    padding: '14px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-main)' }}>
                    Shipping & Returns
                  </span>
                  {openAccordion === 'shipping' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openAccordion === 'shipping' && (
                  <div style={{ paddingBottom: '16px', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                    Ships within 24-48 hours. Free standard shipping on orders over $40. 30-day taste guarantee: if it's not the smoothest matcha you've ever sipped, we will issue a full refund.
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .pdp-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .pdp-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
