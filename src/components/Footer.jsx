import React, { useState } from 'react';
import { ArrowRight, Heart, Sparkles, Send } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--tyrian-purple)',
      color: 'var(--ivory)',
      borderTop: '3px solid var(--charcoal)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="cheeky-container">
        
        {/* Top Newsletter Card */}
        <div style={{
          background: 'var(--mimi-pink)',
          border: '3px solid var(--charcoal)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '8px 8px 0px var(--charcoal)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }} className="newsletter-grid">
          
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '0.5rem' }}>
              <span className="cheeky-badge badge-red">
                <Sparkles size={12} /> GET 10% OFF YOUR FIRST ORDER
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: '900', color: 'var(--tyrian-purple)', textTransform: 'uppercase', lineHeight: 1.1 }}>
              JOIN THE CHEEKY SIPPERS CLUB
            </h3>
            <p style={{ fontSize: '0.98rem', color: 'rgba(88, 3, 42, 0.85)', marginTop: '0.4rem', fontWeight: '500' }}>
              Secret product drops, Talia's secret cafe spots, recipes, and memes delivered straight to your inbox. No spam, just vibes.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{
                background: 'var(--ivory)',
                border: '2px solid var(--tyrian-purple)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem',
                textAlign: 'center',
                color: 'var(--tyrian-purple)',
                fontWeight: '800'
              }}>
                🎉 You’re on the list! Check your inbox for code <strong>XOXOTALIA</strong>.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="email"
                    required
                    placeholder="ENTER YOUR EMAIL..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '2px solid var(--tyrian-purple)',
                      fontSize: '0.85rem',
                      fontWeight: '700',
                      outline: 'none',
                      background: 'var(--pure-white)',
                      color: 'var(--tyrian-purple)'
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-cheeky"
                    style={{ padding: '0.85rem 1.4rem', fontSize: '0.85rem' }}
                  >
                    <Send size={15} />
                    <span>Join</span>
                  </button>
                </div>
                <p style={{ fontSize: '0.72rem', color: 'rgba(88,3,42,0.6)', fontWeight: '600' }}>
                  By signing up you agree to receive emails from Cheeky Cup Of.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Brand & Links Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '2.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
        }} className="footer-links-grid">
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              background: 'var(--ivory)',
              padding: '0.5rem 0.85rem',
              borderRadius: 'var(--radius-md)',
              width: 'fit-content',
              border: '2px solid var(--pale-pink)'
            }}>
              <img
                src="/assets/logo-black.png"
                alt="Cheeky Cup Of"
                style={{ height: '36px', width: 'auto' }}
              />
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--mimi-pink)', lineHeight: '1.5', maxWidth: '320px' }}>
              “If it doesn’t match your vibe, your fit, and your coping mechanism, it’s not Cheeky.”
            </p>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              color: 'var(--pale-pink)',
              letterSpacing: '0.04em'
            }}>
              xoxo Talia
            </p>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '900', color: 'var(--matcha-glow)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              The Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#product-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Ceremonial Tin (30g)</a></li>
              <li><a href="#product-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>The Starter Bundle</a></li>
              <li><a href="#product-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Double Trouble Duo</a></li>
              <li><a href="#cup-builder" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Emotional Support Builder</a></li>
            </ul>
          </div>

          {/* Column 2: Brand */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '900', color: 'var(--matcha-glow)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              The Brand
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#talia-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Talia's Story</a></li>
              <li><a href="#quality-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Sage Sourcing & Farms</a></li>
              <li><a href="#ritual-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>How to Whisk</a></li>
              <li><a href="#ugc-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>#CaughtTheCheek</a></li>
              <li><a href="#reviews-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>2,480+ Reviews</a></li>
            </ul>
          </div>

          {/* Column 3: Help & Socials */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '900', color: 'var(--matcha-glow)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Connect
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li><a href="#faq-section" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>FAQ & Help Center</a></li>
              <li><a href="mailto:hello@cheekycupof.com" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>hello@cheekycupof.com</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>TikTok @cheekycupof</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ivory)', textDecoration: 'none', opacity: 0.85 }}>Instagram @cheekycupof</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.78rem',
          color: 'rgba(255, 255, 255, 0.6)',
        }}>
          <p>© {new Date().getFullYear()} Cheeky Cup Of LLC. All rights reserved. Playful on the outside, serious on the inside.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>Shipping & Returns</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-links-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 550px) {
          .footer-links-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
