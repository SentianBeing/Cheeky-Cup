import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: 'var(--cream)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
      paddingTop: '3.5rem',
      paddingBottom: '5rem',
    }}>
      <div className="cheeky-container">
        
        {/* Editorial Top Corner Annotation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 1.0 ) BRAND INTRO</span>
          <span className="meta-tag">CEREMONIAL GRADE A • JAPAN</span>
          <span className="meta-tag">CHEEKY CUP OF</span>
        </div>

        {/* Hero Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-editorial-grid">
          
          {/* Left: Typography & Slogan */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            
            <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <span className="pill-badge" style={{ color: 'var(--rusty-red)', borderColor: 'var(--rusty-red)' }}>
                Founded by Talia
              </span>
              <span className="pill-badge" style={{ color: 'var(--matcha-deep)', borderColor: 'var(--matcha-deep)', background: 'var(--matcha-subtle)' }}>
                100% First Harvest
              </span>
            </div>

            <div>
              <h1 style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
                fontWeight: '400',
                lineHeight: '1.02',
                color: 'var(--tyrian-purple)',
                letterSpacing: '-0.02em',
                marginBottom: '1rem',
              }}>
                <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', display: 'block', fontSize: '0.75em', letterSpacing: '-0.01em', color: 'var(--tyrian-purple)' }}>
                  A Little Loud.
                </span>
                <span className="italic-serif" style={{ color: 'var(--rusty-red)', display: 'block' }}>
                  A lot of flavor.
                </span>
              </h1>
            </div>

            <p style={{
              fontSize: '1.15rem',
              lineHeight: '1.65',
              color: 'rgba(88, 3, 42, 0.82)',
              maxWidth: '500px',
              fontFamily: 'var(--font-sans)',
              fontWeight: '400',
            }}>
              Pure, stone-ground ceremonial matcha from Kagoshima & Uji. Vibrantly green, naturally sweet, with 0% bitterness. Fun on the outside, serious where it counts.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', paddingTop: '0.5rem' }}>
              <a href="#shop" className="btn-primary">
                <span>Shop Ceremonial Tin — $28</span>
                <ArrowRight size={15} />
              </a>

              <a href="#ritual" className="btn-secondary">
                <span>Explore The Ritual</span>
              </a>
            </div>

            {/* Social Proof */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(88, 3, 42, 0.1)',
            }}>
              <div style={{ display: 'flex', gap: '2px', color: 'var(--rusty-red)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="var(--rusty-red)" color="var(--rusty-red)" />
                ))}
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: '600', color: 'var(--tyrian-purple)', opacity: 0.85 }}>
                4.94 / 5 Rating from 2,480+ Daily Sippers
              </span>
            </div>

          </div>

          {/* Right: Clean Editorial Photography Frame */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid rgba(88, 3, 42, 0.2)',
              backgroundColor: 'var(--ivory)',
            }}>
              <img
                src="/assets/hero-talia.png"
                alt="Talia with Cheeky Cup"
                style={{
                  width: '100%',
                  height: '560px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                className="img-editorial"
              />

              {/* Minimal Bottom Overlay Tag */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                background: 'rgba(253, 251, 247, 0.94)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(88, 3, 42, 0.15)',
                borderRadius: 'var(--radius-sm)',
                padding: '1rem 1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <p className="meta-tag" style={{ color: 'var(--rusty-red)', opacity: 1, marginBottom: '0.1rem' }}>
                    Signature Sip
                  </p>
                  <p className="italic-serif" style={{ fontSize: '1.25rem', color: 'var(--tyrian-purple)', lineHeight: 1 }}>
                    #CaughtTheCheek
                  </p>
                </div>
                <div style={{
                  background: 'var(--rusty-red)',
                  color: 'var(--ivory)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.7rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Talia-Approved
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
