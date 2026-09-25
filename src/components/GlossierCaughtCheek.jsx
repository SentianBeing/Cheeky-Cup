import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GlossierCaughtCheek = () => {
  const sliderRef = useRef(null);

  const galleryItems = [
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/4TH_IMG.png',
      caption: 'The Daily Cold Foam Pour',
      tag: '@cheekycupof',
      offset: 'up',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/6TH_IMG.png',
      caption: '30-Second Microfoam Ritual',
      tag: '#CaughtTheCheek',
      offset: 'down',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/7TH_IMG.png',
      caption: 'Velvet Green Crema',
      tag: 'Talia’s Recipe',
      offset: 'up',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/11TH_IMG.png',
      caption: 'Morning Ritual with Double Tin',
      tag: '@cheekycupof',
      offset: 'down',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/12TH_IMG.png',
      caption: 'Cheeky Tumbler & Decals',
      tag: '#CaughtTheCheek',
      offset: 'up',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/13TH_IMG.png',
      caption: 'Single Origin Japanese Tencha',
      tag: 'Zero Bitterness',
      offset: 'down',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/14TH_IMG.png',
      caption: 'Talia sips Cheeky on set',
      tag: '@talia',
      offset: 'up',
    },
    {
      img: '/assets/CHEEKY-PHOTOSHOOT/15TH_IMG.png',
      caption: 'First Harvest Ceremonial Grade',
      tag: '#CaughtTheCheek',
      offset: 'down',
    },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let animationId;
    let isPaused = false;
    const speed = 0.8; // pixels per frame

    const animate = () => {
      if (sliderRef.current && !isPaused) {
        sliderRef.current.scrollLeft += speed;
        // Since we duplicated items, we reset when we've scrolled exactly halfway
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="ritual" style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}>
      
      {/* 2. Staggered "Up / Down" Image Slider Gallery */}
      <div style={{
        padding: '70px 0 90px',
        backgroundColor: 'var(--ivory)',
        borderBottom: '1px solid var(--border-light)',
      }}>
        <div className="glossier-container">
          
          {/* Gallery Header with Navigation Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '36px',
          }}>
            <div>
              <p style={{
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--brand-red)',
                marginBottom: '6px',
              }}>
                CHEEKY CAM
              </p>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                color: 'var(--text-main)',
              }}>
                Caught in the Wild
              </h3>
            </div>

            {/* Slider Navigation Arrows */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => scroll('left')}
                aria-label="Previous images"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '0px',
                  border: '1px solid var(--border-dark)',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--text-main)';
                  e.currentTarget.style.color = 'var(--ivory)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--ivory)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scroll('right')}
                aria-label="Next images"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '0px',
                  border: '1px solid var(--border-dark)',
                  backgroundColor: 'var(--ivory)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--text-main)';
                  e.currentTarget.style.color = 'var(--ivory)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--ivory)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Slider with Up/Down Staggered Alignments */}
          <div
            ref={sliderRef}
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              paddingBottom: '40px',
              paddingTop: '20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="staggered-slider-track"
          >
            {[...galleryItems, ...galleryItems].map((item, idx) => {
              const isDown = item.offset === 'down';
              return (
                <div
                  key={idx}
                  style={{
                    flex: '0 0 310px',
                    transform: isDown ? 'translateY(36px)' : 'translateY(0px)',
                    transition: 'transform 0.3s ease',
                  }}
                  className="staggered-slide-item"
                >
                  {/* Image Frame */}
                  <div style={{
                    position: 'relative',
                    aspectRatio: '1 / 1.28',
                    backgroundColor: 'var(--bg-secondary)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                  }}>
                    <img
                      src={item.img}
                      alt={item.caption}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />

                    {/* Tag badge in top corner */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      padding: '4px 10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(4px)',
                      fontSize: '10px',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      color: 'var(--tyrian-purple)',
                      border: '1px solid rgba(0,0,0,0.06)',
                    }}>
                      {item.tag}
                    </div>
                  </div>

                  {/* Caption */}
                  <div style={{
                    paddingTop: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}>
                    <p style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em',
                    }}>
                      {item.caption}
                    </p>
                    <span style={{
                      fontSize: '10px',
                      color: 'var(--text-subtle)',
                      fontWeight: '600',
                    }}>
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 1. Wide Cinematic "Caught the Cheek" Signature Move Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: '72vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        overflow: 'hidden',
        backgroundColor: 'var(--tyrian-purple)',
      }} className="caught-cheek-banner">
        
        {/* Background Image with Subtle Blur & Cinematic Overlay */}
        <div style={{
          position: 'absolute',
          inset: '-10px',
          zIndex: 1,
          overflow: 'hidden',
        }}>
          <img
            src="/assets/matcha-bg.jpg"
            alt="Cheeky Matcha"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 45%',
              filter: 'blur(5px) brightness(0.68) contrast(1.08)',
              transform: 'scale(1.06)',
            }}
          />
          {/* Subtle gradient vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.48) 100%)',
          }} />
        </div>

        {/* Center Big Headline */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '20px',
        }}>
          <p style={{
            fontFamily: "var(--font-heading)",
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
            color: '#FFFFF1',
            marginBottom: '12px',
            textShadow: '0 2px 14px rgba(0,0,0,0.5)',
          }}>
            Signature Matcha
          </p>

          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
            lineHeight: 1.05,
            color: '#FFFFF1',
            letterSpacing: '-0.02em',
            textShadow: '0 3px 28px rgba(0,0,0,0.6)',
          }}>
            Velvet Green Magic<br />
            <span style={{ fontStyle: 'italic', fontWeight: '400' }}>first harvest from Uji, Japan</span>
          </h2>
          
          <a
            href="#shop"
            style={{
              display: 'inline-block',
              marginTop: '32px',
              padding: '14px 32px',
              backgroundColor: 'var(--ivory)',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid var(--ivory)',
              transition: 'background-color 0.2s ease, color 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--ivory)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--ivory)';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            Shop Now
          </a>
        </div>
      </div>

      <style>{`
        .staggered-slider-track::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          .caught-cheek-banner {
            padding: 40px 20px !important;
            min-height: 55vh !important;
          }
          .staggered-slide-item {
            flex: 0 0 240px !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
