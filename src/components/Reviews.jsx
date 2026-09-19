import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const Reviews = () => {
  return (
    <section className="section-spacing" style={{
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
    }}>
      <div className="cheeky-container">
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 6.0 ) VERIFIED REVIEWS</span>
          <span className="meta-tag">4.94 OUT OF 5 STARS</span>
          <span className="meta-tag">2,480+ SIPPERS</span>
        </div>

        {/* Minimal Score Banner */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3.5rem',
          padding: '2rem',
          backgroundColor: 'var(--cream)',
          border: '1px solid rgba(88, 3, 42, 0.15)',
          borderRadius: 'var(--radius-md)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
              <span className="italic-serif" style={{ fontSize: '3.5rem', color: 'var(--rusty-red)', lineHeight: 1 }}>
                4.94
              </span>
              <div style={{ display: 'flex', gap: '3px', color: 'var(--rusty-red)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--rusty-red)" color="var(--rusty-red)" />
                ))}
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(88, 3, 42, 0.8)', fontWeight: '600', marginTop: '0.3rem' }}>
              Overall rating based on 2,480+ verified customers
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>98%</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(88, 3, 42, 0.7)' }}>Would recommend</p>
            </div>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>0%</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(88, 3, 42, 0.7)' }}>Bitterness reported</p>
            </div>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>100%</p>
              <p style={{ fontSize: '0.75rem', color: 'rgba(88, 3, 42, 0.7)' }}>Japanese Tencha</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
        }} className="reviews-editorial-grid">
          {PRODUCT_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              style={{
                border: '1px solid rgba(88, 3, 42, 0.15)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--cream)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1.2rem',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '2px', color: 'var(--rusty-red)' }}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="var(--rusty-red)" color="var(--rusty-red)" />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(88, 3, 42, 0.6)' }}>
                    {rev.date}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--tyrian-purple)', marginBottom: '0.5rem' }}>
                  "{rev.title}"
                </h4>

                <p style={{ fontSize: '0.92rem', color: 'rgba(88, 3, 42, 0.8)', lineHeight: '1.6' }}>
                  {rev.text}
                </p>
              </div>

              <div style={{
                borderTop: '1px solid rgba(88, 3, 42, 0.1)',
                paddingTop: '0.75rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.78rem',
              }}>
                <span style={{ fontWeight: '700', color: 'var(--tyrian-purple)' }}>
                  {rev.name} — <span style={{ opacity: 0.7, fontWeight: '400' }}>{rev.location}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', color: 'var(--matcha-deep)', fontWeight: '600' }}>
                  <CheckCircle size={12} /> Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
