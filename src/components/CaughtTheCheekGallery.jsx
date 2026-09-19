import React from 'react';
import { PRODUCT_DATA } from '../data/productData';

export const CaughtTheCheekGallery = () => {
  const photos = [
    { src: '/assets/banner-lifestyle.png', title: 'The Daily Vibe', tag: '#CaughtTheCheek', span: 'col-span-2' },
    { src: '/assets/latte-art.png', title: 'Velvet Micro-Foam', tag: 'Barista Standard' },
    { src: '/assets/matcha-glass.png', title: 'Iced Cloud Foam', tag: 'Morning Ritual' },
    { src: '/assets/section-lifestyle.png', title: 'Cheeky Moments', tag: 'Talia Approved' },
  ];

  return (
    <section className="section-spacing" style={{
      backgroundColor: 'var(--cream)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
    }}>
      <div className="cheeky-container">
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 5.0 ) LIFESTYLE</span>
          <span className="meta-tag">#CAUGHTTHECHEEK</span>
          <span className="meta-tag">COMMUNITY</span>
        </div>

        <div style={{ maxWidth: '650px', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.6rem)',
            fontWeight: '400',
            lineHeight: 1.05,
            color: 'var(--tyrian-purple)',
            letterSpacing: '-0.02em',
          }}>
            <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8em', display: 'block' }}>
              Caught The Cheek
            </span>
            <span className="italic-serif" style={{ color: 'var(--rusty-red)' }}>
              In the wild.
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(88, 3, 42, 0.8)', marginTop: '0.6rem', lineHeight: '1.6' }}>
            That instant your first sip hits and resets your entire day. Tag <strong>@cheekycupof</strong> to be featured.
          </p>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }} className="lifestyle-grid">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                border: '1px solid rgba(88, 3, 42, 0.15)',
                backgroundColor: 'var(--ivory)',
                height: '320px',
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                className="img-editorial"
              />

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1rem',
                right: '1rem',
                background: 'rgba(253, 251, 247, 0.9)',
                backdropFilter: 'blur(6px)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.6rem 0.85rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid rgba(88, 3, 42, 0.12)',
              }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--tyrian-purple)' }}>
                  {photo.title}
                </span>
                <span className="meta-tag" style={{ color: 'var(--rusty-red)', opacity: 1, fontSize: '0.68rem' }}>
                  {photo.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .lifestyle-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 550px) {
          .lifestyle-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
