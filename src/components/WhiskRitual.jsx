import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const WhiskRitual = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'SIFT & SCOOP',
      time: '10 SECONDS',
      desc: 'Add 1 to 1.5g (about 1 rounded spoon) of ceremonial matcha powder into your cup or bowl. Sifting guarantees instant clump-free silkiness.',
      tip: '“Never skip the sift — it creates that dreamy velvet micro-texture.”',
      image: '/assets/whisk-ritual-1.png',
    },
    {
      num: '02',
      title: 'SPLASH & FROTH',
      time: '15 SECONDS',
      desc: 'Add 50-60ml of warm water (around 70°C / 160°F — hot, but never boiling). Froth with an electric whisk or bamboo chasen in a rapid "W" motion until emerald foam appears.',
      tip: '“Boiling water scorches the tea! Warm water brings out the natural sweet umami.”',
      image: '/assets/whisk-ritual-2.png',
    },
    {
      num: '03',
      title: 'POUR & SIP',
      time: '5 SECONDS',
      desc: 'Pour over fresh ice with 150ml of your favorite barista oat or almond milk. Take your first sip and catch the cheeky moment.',
      tip: '“Tag @cheekycupof with your #CaughtTheCheek sip face.”',
      image: '/assets/matcha-iced-pour.png',
    },
  ];

  return (
    <section id="ritual" className="section-spacing" style={{
      backgroundColor: 'var(--cream)',
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
          <span className="meta-tag">( 3.0 ) THE RITUAL</span>
          <span className="meta-tag">30-SECOND CAFE PREP</span>
          <span className="meta-tag">NO GATEKEEPING</span>
        </div>

        {/* Title */}
        <div style={{ maxWidth: '650px', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            fontWeight: '400',
            lineHeight: 1.05,
            color: 'var(--tyrian-purple)',
            letterSpacing: '-0.02em',
          }}>
            <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8em', display: 'block' }}>
              How to Whisk
            </span>
            <span className="italic-serif" style={{ color: 'var(--rusty-red)' }}>
              Like Talia.
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(88, 3, 42, 0.8)', marginTop: '0.6rem', lineHeight: '1.6' }}>
            Barista-level quality in 3 effortless steps. No pretension, no specialized bar tools required.
          </p>
        </div>

        {/* 3 Step Editorial Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }} className="ritual-grid">
          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                border: '1px solid rgba(88, 3, 42, 0.15)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--ivory)',
                padding: '1.5rem',
                overflow: 'hidden',
              }}
            >
              {/* Photo */}
              <div style={{
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                height: '240px',
                border: '1px solid rgba(88, 3, 42, 0.1)',
              }}>
                <img
                  src={step.image}
                  alt={step.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  className="img-editorial"
                />
              </div>

              {/* Number & Duration */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="italic-serif" style={{ fontSize: '1.8rem', color: 'var(--rusty-red)', lineHeight: 1 }}>
                  {step.num}
                </span>
                <span className="meta-tag">{step.time}</span>
              </div>

              {/* Text */}
              <div>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: 'var(--tyrian-purple)',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(88, 3, 42, 0.8)', lineHeight: '1.55' }}>
                  {step.desc}
                </p>
              </div>

              {/* Tip */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '0.85rem',
                borderTop: '1px dashed rgba(88, 3, 42, 0.15)',
                fontSize: '0.78rem',
                fontStyle: 'italic',
                color: 'var(--tyrian-purple)',
                opacity: 0.85,
              }}>
                {step.tip}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .ritual-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
