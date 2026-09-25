import React from 'react';

export const GlossierEditorialLookbook = () => {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: 'var(--bg-secondary)', // slightly darker than ivory to make images pop
      padding: '120px 0',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-light)',
    }}>
      
      {/* Massive Background Typography */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        textAlign: 'center',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(5rem, 15vw, 15rem)',
          lineHeight: 0.85,
          color: 'var(--ivory)',
          margin: 0,
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          letterSpacing: '-0.04em',
        }}>
          ARCHIVE
        </h2>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(5rem, 15vw, 15rem)',
          lineHeight: 0.85,
          color: 'var(--ivory)',
          margin: 0,
          whiteSpace: 'nowrap',
          textTransform: 'uppercase',
          letterSpacing: '-0.04em',
        }}>
          001
        </h2>
      </div>

      <div className="glossier-container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Top Meta Tag */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '60px',
        }}>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            border: '1px solid var(--border-dark)',
            padding: '6px 12px',
            backgroundColor: 'var(--ivory)',
          }}>
            THE CHEEKY FILES
          </span>
          <span style={{
            fontSize: '11px',
            fontWeight: '700',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}>
            VOL. 1
          </span>
        </div>

        {/* Zine Masonry Grid */}
        <div className="zine-grid">
          
          <div className="zine-item item-1">
            <img src="/assets/CHEEKY-PHOTOSHOOT/2ND_IMG.png" alt="Editorial 1" />
            <div className="zine-caption">01 // STREET</div>
          </div>
          
          <div className="zine-item item-2">
            <img src="/assets/CHEEKY-PHOTOSHOOT/3RD_IMG.png" alt="Editorial 2" />
            <div className="zine-caption">02 // VIBE</div>
          </div>
          
          <div className="zine-item item-3">
            <img src="/assets/CHEEKY-PHOTOSHOOT/8TH_IMG.png" alt="Editorial 3" />
            <div className="zine-caption">03 // ENERGY</div>
          </div>
          
          <div className="zine-item item-4">
            <img src="/assets/CHEEKY-PHOTOSHOOT/10TH_IMG.png" alt="Editorial 4" />
            <div className="zine-caption">04 // MATCHAMADNESS</div>
          </div>
          
          <div className="zine-item item-5">
            <img src="/assets/CHEEKY-PHOTOSHOOT/5TH_IMG.png" alt="Editorial 5" />
            <div className="zine-caption">05 // LIFESTYLE</div>
          </div>

        </div>

      </div>

      <style>{`
        .zine-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 80px;
          gap: 20px;
          padding: 0 20px;
        }

        .zine-item {
          position: relative;
          backgroundColor: var(--ivory);
          border: 1px solid var(--border-light);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .zine-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .zine-item:hover img {
          transform: scale(1.05);
        }

        .zine-caption {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-main);
          border: 1px solid rgba(0,0,0,0.1);
        }

        /* Desktop Positioning */
        .item-1 { grid-column: 1 / 6; grid-row: 1 / 7; }
        .item-2 { grid-column: 7 / 11; grid-row: 2 / 6; z-index: 2; margin-left: -40px; }
        .item-3 { grid-column: 5 / 9; grid-row: 6 / 10; z-index: 3; margin-top: -30px; }
        .item-4 { grid-column: 9 / 13; grid-row: 5 / 11; }
        .item-5 { grid-column: 2 / 6; grid-row: 7 / 12; margin-right: -20px; z-index: 4; }

        @media (max-width: 900px) {
          .zine-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: minmax(200px, auto);
            gap: 16px;
            padding: 0;
          }
          .zine-item {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            margin: 0 !important;
            aspect-ratio: 3/4;
          }
          .item-1 { grid-column: span 2 !important; aspect-ratio: 16/9; }
        }
      `}</style>
    </section>
  );
};
