import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Exactly 3 menu items as requested by user
  const navLinks = [
    { name: 'SHOP', href: '#shop' },
    { name: 'RITUAL', href: '#ritual' },
    { name: 'STORY', href: '#story' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backgroundColor: 'rgba(253, 251, 247, 0.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
    }}>
      <div className="cheeky-container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}>
        {/* Left: 3 Minimalist Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'var(--tyrian-purple)',
                fontWeight: '700',
                fontSize: '0.8rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--rusty-red)')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--tyrian-purple)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle on left */}
        <div style={{ display: 'none' }} className="mobile-toggle-wrapper">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--tyrian-purple)',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Center: Brand Logo */}
        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{ display: 'inline-block', textDecoration: 'none' }}>
            <img
              src="/assets/logo-black.png"
              alt="Cheeky Cup Of Logo"
              style={{
                height: '42px',
                width: 'auto',
                display: 'block',
              }}
            />
          </a>
        </div>

        {/* Right: Cart Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'transparent',
              border: '1px solid var(--tyrian-purple)',
              borderRadius: 'var(--radius-full)',
              padding: '0.5rem 1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer',
              color: 'var(--tyrian-purple)',
              fontFamily: 'var(--font-sans)',
              fontWeight: '700',
              fontSize: '0.76rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              transition: 'var(--transition)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--rusty-red)';
              e.currentTarget.style.color = 'var(--ivory)';
              e.currentTarget.style.borderColor = 'var(--rusty-red)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--tyrian-purple)';
              e.currentTarget.style.borderColor = 'var(--tyrian-purple)';
            }}
          >
            <ShoppingBag size={14} />
            <span>BAG ({itemCount})</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--cream)',
          borderTop: '1px solid rgba(88, 3, 42, 0.1)',
          padding: '1.5rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--tyrian-purple)',
                fontWeight: '700',
                fontSize: '0.9rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-wrapper {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};
