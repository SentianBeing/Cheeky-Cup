import React from 'react';

export const MarqueeTicker = () => {
  const items = [
    "FUN TO SIP, SERIOUS ABOUT TASTE",
    "IF IT DOESN'T MATCH YOUR VIBE, IT'S NOT CHEEKY",
    "100% FIRST HARVEST KAGOSHIMA TENCHA",
    "A LITTLE LOUD. A LOT OF FLAVOR",
    "#CAUGHTTHECHEEK",
    "BARISTA-LEVEL BREWS • ZERO GATEKEEPING",
  ];

  return (
    <div style={{
      backgroundColor: 'var(--tyrian-purple)',
      color: 'var(--mimi-pink)',
      padding: '0.85rem 0',
      borderTop: '1px solid var(--tyrian-purple)',
      borderBottom: '1px solid var(--tyrian-purple)',
      overflow: 'hidden',
    }}>
      <div className="ticker-track">
        <div className="ticker-content" style={{ gap: '2.5rem', display: 'inline-flex', alignItems: 'center' }}>
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}>
                {item}
              </span>
              <span style={{ color: 'var(--rusty-red)', fontSize: '1rem' }}>✦</span>
            </React.Fragment>
          ))}
        </div>

        <div className="ticker-content" style={{ gap: '2.5rem', display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={idx}>
              <span style={{
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}>
                {item}
              </span>
              <span style={{ color: 'var(--rusty-red)', fontSize: '1rem' }}>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
