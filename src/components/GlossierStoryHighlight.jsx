import React from 'react';

export const GlossierStoryHighlight = () => {
  return (
    <section id="story" style={{
      padding: '70px 0',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="story-split-grid">
          
          {/* Left Text Block */}
          <div style={{ maxWidth: '440px' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: '700',
              color: 'var(--brand-red)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}>
              ABOUT
            </p>

            <h2 style={{
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: 1.3,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}>
              FIND OUT WHAT HAPPENS WHEN QUALITY MEETS REAL VIBES: <br />
              Cheeky is our take on everyday ceremonial matcha.
            </h2>

            <p style={{
              fontSize: '13px',
              lineHeight: '1.6',
              color: 'var(--text-muted)',
              marginBottom: '24px',
            }}>
              Created by beverage critic Talia after reviewing hundreds of cafes. We set out to craft matcha that is playful on the outside, but serious where it counts — 100% single-origin Japanese tencha with zero bitterness.
            </p>

            <a
              href="#ritual"
              className="btn-glossier-outline"
            >
              The Ritual
            </a>
          </div>

          {/* Right Image Block */}
          <div style={{
            position: 'relative',
            aspectRatio: '1 / 1.1',
            backgroundColor: 'var(--bg-secondary)',
            overflow: 'hidden',
          }}>
            <img
              src="/assets/section-lifestyle.png"
              alt="Cheeky Cup Of Lifestyle"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .story-split-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
