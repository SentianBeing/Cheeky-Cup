import React from 'react';

export const GlossierFeatureDuo = () => {
  return (
    <section style={{
      padding: '0 0 60px',
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }} className="duo-grid">
          
          {/* Centered Badge Logo */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            width: '100px',
            height: '100px',
            pointerEvents: 'none', // so it doesn't block clicks on links
          }}>
            <img 
              src="/assets/cheeky-badge.png" 
              alt="Cheeky Cup Badge" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
          </div>

          {/* Left Card: The Tin */}
          <div style={{
            position: 'relative',
            aspectRatio: '1.2 / 1',
            backgroundColor: 'var(--bg-secondary)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/assets/CHEEKY-PHOTOSHOOT/9TH_IMG.png"
              alt="Cheeky Ceremonial Matcha Tin"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            <a
              href="#shop"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--ivory)',
                color: 'var(--text-main)',
                padding: '10px 22px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid var(--border-dark)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                zIndex: 2,
              }}
            >
              Discover The Grade
            </a>
          </div>

          {/* Right Card: The Starter Kit */}
          <div style={{
            position: 'relative',
            aspectRatio: '1.2 / 1',
            backgroundColor: 'var(--bg-secondary)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img
              src="/assets/starter-bundle.png"
              alt="The Ritual Starter Bundle"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            <a
              href="#shop"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'var(--ivory)',
                color: 'var(--text-main)',
                padding: '10px 22px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid var(--border-dark)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                zIndex: 2,
              }}
            >
              The Daily Ritual
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .duo-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
