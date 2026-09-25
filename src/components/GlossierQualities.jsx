import React from 'react';
import { Leaf, Zap, Sparkles, ShieldCheck } from 'lucide-react';

export const GlossierQualities = () => {
  const qualities = [
    {
      icon: <Leaf size={20} color="var(--brand-red)" />,
      title: 'First Harvest Quality',
      desc: 'Shade-grown in Uji, Japan for maximum umami and vibrant color.',
    },
    {
      icon: <Zap size={20} color="var(--brand-red)" />,
      title: 'Clean Energy',
      desc: 'No jitters, no crash. Just smooth, sustained focus throughout the day.',
    },
    {
      icon: <Sparkles size={20} color="var(--brand-red)" />,
      title: 'Zero Bitterness',
      desc: 'Naturally sweet and creamy. Perfect for iced lattes or traditional whisking.',
    },
    {
      icon: <ShieldCheck size={20} color="var(--brand-red)" />,
      title: '100% Ceremonial',
      desc: 'Stone-milled to order, ensuring peak freshness in every single cup.',
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: 'var(--cream)',
      borderBottom: '1px solid var(--border-light)',
    }}>
      <div className="glossier-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }} className="qualities-grid">
          
          {/* Left Column: Image */}
          <div style={{
            position: 'relative',
            aspectRatio: '3 / 4',
            backgroundColor: 'var(--bg-secondary)',
            overflow: 'hidden',
          }}>
            <img 
              src="/assets/CHEEKY-PHOTOSHOOT/4TH_IMG.png" 
              alt="Cheeky Quality" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Right Column: Content */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              color: 'var(--text-main)',
              marginBottom: '12px',
              letterSpacing: '-0.02em',
            }}>
              The Cheeky Standard
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              marginBottom: '40px',
              maxWidth: '400px',
            }}>
              We don't compromise on quality. Every aspect of our matcha is designed to give you the perfect daily ritual.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {qualities.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--ivory)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .qualities-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .qualities-grid > div:first-child {
            order: 2;
          }
          .qualities-grid > div:last-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
};
