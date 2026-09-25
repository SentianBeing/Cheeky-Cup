import React, { useState, useEffect } from 'react';

const slides = [
  {
    type: 'split',
    image: "/assets/hero-image.png",
    subtitle: "A Little Loud. A Lot of Flavor.",
    title: "Fun to sip,\nserious about taste.",
    bgColor: "var(--tyrian-purple)",
    buttons: [
      { text: "Shop Ceremonial Tin", href: "#shop", primary: true },
      { text: "The Ritual", href: "#ritual", primary: false }
    ]
  },
  {
    type: 'full',
    image: "/assets/CHEEKY-PHOTOSHOOT/1ST_IMG.png",
    subtitle: "The Cheeky Way",
    title: "Sip, Smile,\nRepeat.",
    bgColor: "var(--rusty-red)",
    ctaText: "Get Cheeky",
    buttons: [
      { text: "Shop Matcha", href: "#shop", primary: true }
    ]
  },
  {
    type: 'full',
    image: "/assets/CHEEKY-PHOTOSHOOT/2ND_IMG.png",
    subtitle: "Matcha Made Easy",
    title: "Quality Sourced,\nExpertly Crafted.",
    bgColor: "var(--pale-pink)",
    ctaText: "Find Your Flow",
    buttons: [
      { text: "Learn More", href: "#ritual", primary: true }
    ]
  }
];

export const GlossierHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '82vh',
      overflow: 'hidden',
      backgroundColor: 'var(--ivory)',
    }} className="hero-slider-container">
      
      {slides.map((slide, idx) => {
        const isActive = currentSlide === idx;
        const layoutClass = slide.type === 'split' ? 'split-desktop' : 'full-desktop';
        
        return (
          <div key={idx} className={`slide-wrapper ${layoutClass}`} style={{
            opacity: isActive ? 1 : 0,
            zIndex: isActive ? 5 : 0,
            pointerEvents: isActive ? 'auto' : 'none',
            backgroundColor: slide.bgColor,
          }}>
            
            {/* The Solid Color Block (Left on Desktop-Split, Bottom on Mobile) */}
            <div className="color-block" style={{ backgroundColor: slide.bgColor }}>
              <div className="mobile-cta">
                {slide.ctaText && (
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                    color: 'var(--ivory)',
                    marginBottom: '16px',
                    lineHeight: '1',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                  }}>
                    {slide.ctaText}
                  </h3>
                )}
                <div className="hero-cta-group-inner">
                  {slide.buttons.map((btn, bIdx) => (
                    <a
                      key={bIdx}
                      href={btn.href}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 22px',
                        fontSize: '11px',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        backgroundColor: btn.primary ? 'var(--ivory)' : 'transparent',
                        color: btn.primary ? slide.bgColor : 'var(--ivory)',
                        textDecoration: 'none',
                        border: '1px solid var(--ivory)',
                        transition: 'all 0.2s ease',
                        pointerEvents: 'auto',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = btn.primary ? 'transparent' : 'var(--ivory)';
                        e.currentTarget.style.color = btn.primary ? 'var(--ivory)' : slide.bgColor;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = btn.primary ? 'var(--ivory)' : 'transparent';
                        e.currentTarget.style.color = btn.primary ? slide.bgColor : 'var(--ivory)';
                      }}
                    >
                      {btn.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* The Image Block */}
            <div className="image-block">
              <img
                src={slide.image}
                alt="Cheeky Hero"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
              />
              <div className="full-overlay" />
            </div>

            {/* The Center Text Block */}
            <div className="text-overlay">
              <p style={{
                fontFamily: "var(--font-body)",
                fontWeight: '700',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ivory)',
                marginBottom: '10px',
                opacity: 0.9,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
              }}>
                {slide.subtitle}
              </p>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                fontStyle: 'italic',
                fontWeight: '400',
                color: 'var(--ivory)',
                letterSpacing: '-0.01em',
                textShadow: '0 2px 24px rgba(0, 0, 0, 0.4)',
                whiteSpace: 'pre-line',
              }}>
                {slide.title}
              </h1>
              
              {/* Buttons for Full Screen Desktop */}
              <div className="hero-cta-group desktop-full-cta">
                {slide.buttons.map((btn, bIdx) => (
                  <a
                    key={bIdx}
                    href={btn.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 28px',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      backgroundColor: btn.primary ? slide.bgColor : 'transparent',
                      color: 'var(--ivory)',
                      textDecoration: 'none',
                      border: btn.primary ? `1px solid ${slide.bgColor}` : '1px solid var(--ivory)',
                      transition: 'all 0.2s ease',
                      pointerEvents: 'auto',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = btn.primary ? 'transparent' : slide.bgColor;
                      e.currentTarget.style.borderColor = slide.bgColor;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = btn.primary ? slide.bgColor : 'transparent';
                      e.currentTarget.style.borderColor = btn.primary ? slide.bgColor : 'var(--ivory)';
                    }}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        );
      })}

      {/* Navigation Dots */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
        display: 'flex',
        gap: '8px',
        zIndex: 10,
      }} className="slider-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--ivory)',
              opacity: currentSlide === idx ? 1 : 0.4,
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <style>{`
        .slide-wrapper {
          position: absolute;
          inset: 0;
          transition: opacity 0.8s ease-in-out;
        }

        /* --- SPLIT DESKTOP --- */
        .split-desktop {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .split-desktop .color-block {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 60px 40px;
          position: relative;
        }
        .split-desktop .image-block {
          position: relative;
          overflow: hidden;
        }
        .split-desktop .full-overlay {
          display: none;
        }
        .split-desktop .text-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
          pointer-events: none;
          width: auto;
          max-width: 92%;
        }
        .split-desktop .text-overlay h1 {
          font-size: clamp(2.8rem, 6.2vw, 5.8rem);
          line-height: 1.08;
          margin-bottom: 0;
        }
        .split-desktop .text-overlay p {
          font-size: 12px;
        }
        .split-desktop .desktop-full-cta {
          display: none;
        }
        .split-desktop .mobile-cta {
          position: absolute;
          bottom: 40px;
          left: 40px;
          display: block;
          z-index: 5;
        }
        .split-desktop .mobile-cta .hero-cta-group-inner {
          display: flex;
          gap: 12px;
        }

        /* --- FULL DESKTOP --- */
        .full-desktop {
          display: block;
        }
        .full-desktop .color-block {
          display: none; /* Hide solid block on full desktop */
        }
        .full-desktop .image-block {
          position: absolute;
          inset: 0;
        }
        .full-desktop .full-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.25);
        }
        .full-desktop .text-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          z-index: 10;
          width: 100%;
          padding: 0 20px;
          pointer-events: none;
        }
        .full-desktop .text-overlay h1 {
          font-size: clamp(3rem, 7vw, 6rem);
          line-height: 1.1;
          margin-bottom: 30px;
        }
        .full-desktop .text-overlay p {
          font-size: 14px;
        }
        .full-desktop .desktop-full-cta {
          display: flex;
          gap: 12px;
          justify-content: center;
          pointer-events: auto;
        }
        .full-desktop .mobile-cta {
          display: none;
        }

        /* --- MOBILE (ALL SLIDES BEHAVE LIKE SPLIT) --- */
        @media (max-width: 768px) {
          .slide-wrapper {
            display: flex !important;
            flex-direction: column !important;
          }
          .slide-wrapper .color-block {
            display: flex !important;
            order: 2;
            min-height: 250px;
            justify-content: center !important;
            padding: 30px 20px 40px !important;
            position: relative;
          }
          .slide-wrapper .image-block {
            position: relative !important;
            order: 1;
            flex: 1;
          }
          .slide-wrapper .full-overlay {
            display: none !important;
          }
          .slide-wrapper .text-overlay {
            position: absolute !important;
            top: 35% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 100% !important;
            padding: 0 16px !important;
            pointer-events: none !important;
          }
          .slide-wrapper .text-overlay h1 {
            font-size: clamp(2.8rem, 6.2vw, 5.8rem) !important;
            margin-bottom: 0 !important;
          }
          .slide-wrapper .text-overlay p {
            font-size: 12px !important;
          }
          .slide-wrapper .desktop-full-cta {
            display: none !important;
          }
          .slide-wrapper .mobile-cta {
            display: block !important;
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: 100% !important;
          }
          .slide-wrapper .mobile-cta h3 {
            text-align: center !important;
          }
          .slide-wrapper .mobile-cta .hero-cta-group-inner {
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
          }
          .slide-wrapper .mobile-cta a {
            width: 100% !important;
            padding: 16px 20px !important;
            font-size: 13px !important;
          }
          
          .slider-dots {
            bottom: 20px !important;
            right: 50% !important;
            transform: translateX(50%) !important;
          }
        }
      `}</style>
    </section>
  );
};

