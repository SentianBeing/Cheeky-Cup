import React from 'react';

export const GlossierTileRow = () => {
  const tiles = [
    {
      img: '/assets/shop-matcha-tile.jpg',
      quote: 'your daily ritual.',
      label: 'Shop Matcha',
      href: '#shop',
    },
    {
      img: '/assets/how-to-make-it-tile.jpg',
      quote: 'froth it up.',
      label: 'How To Make It',
      href: '#ritual',
    },
    {
      img: '/assets/hero-image.png',
      quote: 'know your grade.',
      label: 'Matcha 101',
      href: '#learn',
    },
    {
      img: '/assets/latte-art.png',
      quote: 'meet Talia.',
      label: 'Our Story',
      href: '#story',
    },
  ];

  return (
    <section style={{
      padding: '40px 0 60px',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
        }} className="four-tile-grid">
          {tiles.map((tile, idx) => (
            <a
              key={idx}
              href={tile.href}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                color: 'var(--text-main)',
              }}
            >
              {/* Square Image Box with Overlay Quote */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1 / 1',
                backgroundColor: 'var(--bg-secondary)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={tile.img}
                  alt={tile.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Subtle text overlay inside tile */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.15)',
                  pointerEvents: 'none',
                }}>
                  <p style={{
                    color: '#FFFFFF',
                    fontSize: '13px',
                    fontWeight: '600',
                    textAlign: 'center',
                    padding: '0 8px',
                    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
                  }}>
                    {tile.quote}
                  </p>
                </div>
              </div>

              {/* Bottom Label */}
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.02em',
                color: 'var(--text-main)',
              }}>
                {tile.label}
              </p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .four-tile-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .four-tile-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
