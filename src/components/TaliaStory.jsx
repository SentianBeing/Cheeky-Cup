import React from 'react';
import { ArrowRight } from 'lucide-react';

export const TaliaStory = () => {
  return (
    <section id="story" className="section-spacing" style={{
      backgroundColor: 'var(--ivory)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
    }}>
      <div className="cheeky-container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 4.0 ) FOUNDER'S LETTER</span>
          <span className="meta-tag">BY TALIA</span>
          <span className="meta-tag">THE STORY</span>
        </div>

        {/* Editorial Story Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: '4.5rem',
          alignItems: 'center',
        }} className="story-editorial-grid">
          
          {/* Left: Talia Photo Frame */}
          <div>
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid rgba(88, 3, 42, 0.2)',
              backgroundColor: 'var(--cream)',
            }}>
              <img
                src="/assets/hero-talia.png"
                alt="Talia - Founder of Cheeky Cup Of"
                style={{
                  width: '100%',
                  height: '520px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                className="img-editorial"
              />
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '0.85rem',
            }}>
              <span className="meta-tag">TALIA — FOUNDER & CRITIC</span>
              <span className="meta-tag">100+ CAFES REVIEWED</span>
            </div>
          </div>

          {/* Right: The Letter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
            
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: '400',
              lineHeight: 1.05,
              color: 'var(--tyrian-purple)',
              letterSpacing: '-0.02em',
            }}>
              <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8em', display: 'block' }}>
                Why I Created
              </span>
              <span className="italic-serif" style={{ color: 'var(--rusty-red)' }}>
                Cheeky Cup Of.
              </span>
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              fontSize: '1.1rem',
              lineHeight: '1.7',
              color: 'rgba(88, 3, 42, 0.85)',
            }}>
              <p>
                I started Cheeky Cup Of because I wanted matcha that didn’t make me choose between good vibes and great quality. I’m all about the fun, the flavor, and the feeling that your daily cup should be something you actually look forward to.
              </p>
              <p>
                As a beverage reviewer, I tried hundreds of matcha brands. Most were either gatekept and pretentious, or trendy on social media but tasted like bitter grass.
              </p>
              <p>
                So I set out to make matcha that is <strong>playful on the outside but serious where it counts</strong>. High-quality Japanese ingredients, no shortcuts, and flavors that hit every single time. Just really good matcha with a cheeky little twist.
              </p>
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(88, 3, 42, 0.12)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p className="italic-serif" style={{ fontSize: '2rem', color: 'var(--rusty-red)', lineHeight: 1 }}>
                  xoxo Talia
                </p>
                <p className="meta-tag" style={{ marginTop: '0.3rem' }}>FOUNDER, CHEEKY CUP OF</p>
              </div>

              <a href="#shop" className="btn-primary">
                <span>Shop Talia's Blend</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
