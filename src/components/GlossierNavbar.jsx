import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const GlossierNavbar = () => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Exactly 3 menu items as requested
  const menuItems = [
    { name: 'SHOP', href: '#shop' },
    { name: 'RITUAL', href: '#ritual' },
    { name: 'STORY', href: '#story' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid var(--border-light)',
    }}>
      {/* Top micro announcement bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-light)',
        textAlign: 'center',
        padding: '8px 16px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.04em',
        color: 'var(--text-main)',
      }}>
        Free standard shipping on orders $40+ • Use code <strong>XOXOTALIA</strong> for 10% off
      </div>

      {/* Main Header */}
      <div className="glossier-container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        height: '74px',
      }}>
        {/* Left: 3 Minimalist Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.1em',
                transition: 'opacity 0.2s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Center: Clean Logo */}
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <img
              src="/assets/logo-black.png"
              alt="Cheeky Cup Of"
              style={{
                height: '52px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </a>
        </div>

        {/* Right: Search, Account, Bag */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => {
              const el = document.getElementById('shop');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="desktop-nav"
          >
            <Search size={15} />
            <span>Search</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-main)',
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.06em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <ShoppingBag size={15} />
            <span>BAG ({itemCount})</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid var(--border-light)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text-main)',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '0.08em',
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
