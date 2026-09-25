import React from 'react';

export const GlossierRitual = () => {
  const steps = [
    {
      num: '01',
      title: 'Sift & Measure',
      desc: 'Start with 1 teaspoon (2g) of Cheeky Matcha. Sifting ensures a perfectly smooth, clump-free bowl.',
    },
    {
      num: '02',
      title: 'Add Water',
      desc: 'Pour in 2 oz of warm water (around 175°F / 80°C). Avoid boiling water to protect the delicate flavor.',
    },
    {
      num: '03',
      title: 'The Whisk',
      desc: 'Using a bamboo chasen, whisk vigorously in a W-motion for 20-30 seconds until a thick, emerald microfoam forms.',
    },
    {
      num: '04',
      title: 'Pour & Enjoy',
      desc: 'Pour your freshly frothed matcha over iced oat milk, or top with hot water for a traditional experience.',
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="ritual-grid">
          
          {/* Left Column: Content */}
          <div>
            <p style={{
              fontSize: '11px',
              fontWeight: '700',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--brand-red)',
              marginBottom: '12px',
            }}>
              The Daily Ritual
            </p>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              color: 'var(--text-main)',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}>
              How to make<br />the perfect cup
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {steps.map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: '400',
                    color: 'var(--brand-red)',
                    fontStyle: 'italic',
                    marginTop: '-4px',
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '6px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '380px' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <a
              href="#shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 28px',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                backgroundColor: 'var(--brand-red)',
                color: 'var(--ivory)',
                textDecoration: 'none',
                marginTop: '40px',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-main)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-red)';
              }}
            >
              Get Your Matcha
            </a>
          </div>

          {/* Right Column: Image */}
          <div style={{
            position: 'relative',
            aspectRatio: '3 / 4',
            backgroundColor: 'var(--bg-secondary)',
            overflow: 'hidden',
          }}>
            <img 
              src="/assets/CHEEKY-PHOTOSHOOT/7TH_IMG.png" 
              alt="Making Matcha" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ritual-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
