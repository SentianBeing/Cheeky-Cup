import React from 'react';

export const GlossierLookbook = () => {
  const images = [
    { src: '/assets/latte-art.png', alt: 'Velvet Microfoam Pour' },
    { src: '/assets/whisk-ritual-1.png', alt: 'Morning Whisking Ritual' },
    { src: '/assets/matcha-iced-pour.png', alt: 'Iced Cloud Matcha' },
  ];

  return (
    <section id="ritual" style={{
      padding: '60px 0 80px',
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        
        {/* Section Title */}
        <p style={{
          fontSize: '11px',
          fontWeight: '700',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--text-main)',
          marginBottom: '20px',
        }}>
          SEE MORE
        </p>

        {/* 3 Columns Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }} className="lookbook-three-grid">
          {images.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                aspectRatio: '1 / 1.25',
                backgroundColor: 'var(--bg-secondary)',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .lookbook-three-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
