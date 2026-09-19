import React from 'react';
import videoSrc from '../../gemini_generated_video_e09e4fa3.mp4';

export const GlossierVideoSection = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'flex-end',
      backgroundColor: '#1A1A1A',
      overflow: 'hidden',
    }}>
      
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Subtle gradient vignette to ensure text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)',
        }} />
      </div>

      {/* Foreground Overlapping Text - Bottom Left */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '60px 40px',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          maxWidth: '500px',
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            marginBottom: '12px',
            opacity: 0.9,
          }}>
            The Vibe Check
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.05,
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            marginBottom: '16px',
            textShadow: '0 2px 14px rgba(0,0,0,0.4)',
          }}>
            Main Character Energy.<br />
            <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Zero crash.</span>
          </h2>
          <p style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: '#F4F4F4',
            marginBottom: '28px',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}>
            We swapped the jitters for sustained flow state. Our ceremonial grade matcha hits different.
          </p>
          <a
            href="#shop"
            style={{
              display: 'inline-block',
              padding: '12px 28px',
              backgroundColor: '#FFFFFF',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get The Kit
          </a>
        </div>
      </div>

    </section>
  );
};
