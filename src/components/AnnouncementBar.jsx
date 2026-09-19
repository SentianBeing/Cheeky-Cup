import React from 'react';

export const AnnouncementBar = () => {
  return (
    <div style={{
      backgroundColor: 'var(--rusty-red)',
      color: 'var(--ivory)',
      padding: '0.5rem 1rem',
      fontSize: '0.72rem',
      fontWeight: '700',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      overflow: 'hidden',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    }}>
      <div className="ticker-track">
        <div className="ticker-content" style={{ gap: '3rem', display: 'inline-flex', alignItems: 'center' }}>
          <span>Free US Shipping on Orders $40+</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>100% First Harvest Kagoshima Ceremonial Matcha</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>Talia-Approved • Zero Bitterness, No Jitters</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>Use Code <strong>XOXOTALIA</strong> for 10% Off</span>
          <span style={{ opacity: 0.6 }}>—</span>
        </div>
        <div className="ticker-content" style={{ gap: '3rem', display: 'inline-flex', alignItems: 'center' }} aria-hidden="true">
          <span>Free US Shipping on Orders $40+</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>100% First Harvest Kagoshima Ceremonial Matcha</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>Talia-Approved • Zero Bitterness, No Jitters</span>
          <span style={{ opacity: 0.6 }}>—</span>
          <span>Use Code <strong>XOXOTALIA</strong> for 10% Off</span>
          <span style={{ opacity: 0.6 }}>—</span>
        </div>
      </div>
    </div>
  );
};
