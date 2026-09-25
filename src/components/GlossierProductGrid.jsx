import React from 'react';
import { useCart } from '../context/CartContext';

export const GlossierProductGrid = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 'single-tin',
      name: 'Cheeky Ceremonial Matcha Tin',
      category: '1st Harvest Japanese Tencha',
      price: 28,
      image: '/assets/tin-closeup.png',
      badge: 'Bestseller',
      swatches: ['#FAA7E0', '#58032A', '#E1233C'],
    },
    {
      id: 'starter-bundle',
      name: 'The Ritual Starter Kit',
      category: 'Tin + Electric Whisk + Spoon',
      price: 46,
      image: '/assets/starter-bundle.png',
      badge: 'Most Loved',
      swatches: ['#FFE0F5', '#FAA7E0', '#58032A'],
    },
    {
      id: 'duo-pack',
      name: 'Double Trouble Duo',
      category: '2x 30g Tins (60 Servings)',
      price: 49,
      image: '/assets/section-lifestyle.png',
      badge: 'Save 23%',
      swatches: ['#58032A', '#FAA7E0', '#E1233C'],
    },
    {
      id: 'cup-stickers',
      name: 'Cheeky Daily Glass & Stickers',
      category: 'Iced Matcha Tumbler + Decals',
      price: 16,
      image: '/assets/matcha-glass.png',
      badge: 'Limited Drop',
      swatches: ['#FFFFF1', '#E1233C', '#FAA7E0'],
    },
  ];

  return (
    <section id="shop" style={{
      padding: '60px 0',
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '24px',
        }}>
          <h2 style={{
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
          }}>
            The Collection
          </h2>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: 'var(--text-muted)',
            cursor: 'pointer',
          }}>
            4 Products
          </span>
        </div>

        {/* 4 Columns Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }} className="product-four-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              
              {/* Product Image Frame */}
              <div className="product-card-img-wrap">
                {product.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontSize: '10px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-red)',
                  }}>
                    {product.badge}
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              {/* Product Info */}
              <div style={{ padding: '16px 0 12px' }}>
                <h3 style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  lineHeight: 1.3,
                  marginBottom: '2px',
                }}>
                  {product.name}
                </h3>

                <p style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                }}>
                  {product.category}
                </p>

                <p style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--text-main)',
                  marginBottom: '12px',
                }}>
                  ${product.price}
                </p>

                {/* Swatches */}
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                  {product.swatches.map((color, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: color,
                        border: '1px solid rgba(0,0,0,0.2)',
                      }}
                    />
                  ))}
                </div>

                {/* Add To Bag Button */}
                <button
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      subtitle: product.category,
                      price: product.price,
                      quantity: 1,
                      image: product.image,
                      option: 'Standard Order',
                      isSubscription: false,
                    });
                  }}
                  className="btn-add-card"
                >
                  Add to Bag
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-four-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .product-four-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
