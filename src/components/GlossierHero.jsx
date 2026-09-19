import React from 'react';

export const GlossierHero = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '82vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      backgroundColor: '#E1233C',
    }} className="split-hero-container">
      
      {/* Left Half: Bold Rusty Red Solid Color Block */}
      <div style={{
        backgroundColor: '#E1233C',
        width: '100%',
        height: '100%',
        minHeight: '82vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '60px 40px',
      }}>
        {/* Sleek Action Buttons in Left Block */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          display: 'flex',
          gap: '12px',
          zIndex: 5,
        }} className="hero-cta-group">
          <a
            href="#shop"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 22px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backgroundColor: '#FFFFFF',
              color: '#E1233C',
              textDecoration: 'none',
              border: '1px solid #FFFFFF',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#E1233C';
            }}
          >
            Shop Ceremonial Tin
          </a>

          <a
            href="#ritual"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 22px',
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              textDecoration: 'none',
              border: '1px solid #FFFFFF',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.color = '#E1233C';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            The Ritual
          </a>
        </div>
      </div>

      {/* Right Half: Hero Image (Talia with Cheeky Matcha Cup) */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '82vh',
        backgroundColor: '#F7F5F0',
        overflow: 'hidden',
      }}>
        <img
          src="/assets/hero-image.png"
          alt="Cheeky Ceremonial Matcha by Talia"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 20%',
            display: 'block',
          }}
        />
      </div>

      <div className="hero-center-text" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 10,
        pointerEvents: 'none',
        width: 'auto',
        maxWidth: '92%',
      }}>
        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: '12px',
          fontWeight: '700',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          marginBottom: '10px',
          opacity: 0.9,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}>
          A Little Loud. A Lot of Flavor.
        </p>

        <h1 style={{
          fontFamily: "'Instrument Serif', 'Cormorant Garamond', Georgia, serif",
          fontStyle: 'italic',
          fontWeight: '400',
          fontSize: 'clamp(2.8rem, 6.2vw, 5.8rem)',
          lineHeight: '1.08',
          color: '#FFFFFF',
          letterSpacing: '-0.01em',
          textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
          whiteSpace: 'pre-line',
        }}>
          Fun to sip,{'\n'}serious about taste.
        </h1>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .split-hero-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: 85vh !important;
          }
          .split-hero-container > div:first-child {
            /* Left/Top Block - Red Background & Buttons */
            order: 2 !important;
            min-height: auto !important;
            height: auto !important;
            padding: 30px 20px 40px !important;
            justify-content: center !important;
            background-color: #E1233C !important;
          }
          .split-hero-container > div:nth-child(2) {
            /* Right/Bottom Block - Image */
            order: 1 !important;
            min-height: 60vh !important;
            width: 100% !important;
          }
          .hero-cta-group {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
            justify-content: center !important;
            flex-direction: column !important;
            gap: 12px !important;
          }
          .hero-cta-group a {
            width: 100% !important;
            padding: 16px 20px !important;
            font-size: 13px !important;
          }
          .hero-center-text {
            top: 35% !important;
            width: 100% !important;
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
};
