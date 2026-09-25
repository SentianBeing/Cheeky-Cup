import React, { useState } from 'react';

export const GlossierFooter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--ivory)',
      padding: '70px 0 40px',
      color: 'var(--text-main)',
    }}>
      <div className="glossier-container">
        
        {/* Top Newsletter & About Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '60px',
          alignItems: 'start',
          paddingBottom: '50px',
          borderBottom: '1px solid var(--border-light)',
        }} className="footer-top-grid">
          
          {/* Left Blurb */}
          <div style={{ maxWidth: '440px' }}>
            <p style={{
              fontSize: '12px',
              lineHeight: '1.7',
              color: 'var(--text-main)',
            }}>
              Cheeky Cup Of is a ceremonial-grade Japanese matcha brand founded by beverage critic Talia. We believe great matcha should do more than just wake you up — it should reflect your mood, your fit, and your standards.
            </p>
          </div>

          {/* Right Newsletter */}
          <div>
            {submitted ? (
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--brand-red)' }}>
                ★ You're on the list! Use code <strong>XOXOTALIA</strong> for 10% off.
              </p>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      fontSize: '12px',
                      border: '1px solid var(--border-dark)',
                      outline: 'none',
                      borderRadius: '0px',
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-glossier-outline"
                    style={{ padding: '0 20px' }}
                  >
                    Submit
                  </button>
                </div>
                <p style={{ fontSize: '10px', color: 'var(--text-subtle)' }}>
                  Sign up for product releases and recipes. You can unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Links Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '30px',
          padding: '40px 0 60px',
          borderBottom: '1px solid var(--border-light)',
        }} className="footer-links-grid">
          
          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Collection
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <li><a href="#shop" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Ceremonial Tin</a></li>
              <li><a href="#shop" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Starter Bundle</a></li>
              <li><a href="#shop" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Double Trouble Duo</a></li>
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              About Cheeky
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <li><a href="#story" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Our Story</a></li>
              <li><a href="#ritual" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>The 30-Sec Ritual</a></li>
              <li><a href="#story" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Talia's Cafe Sourcing</a></li>
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Connect
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>TikTok</a></li>
              <li><a href="mailto:hello@cheekycupof.com" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>hello@cheekycupof.com</a></li>
            </ul>
          </div>

          <div>
            <p style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>
              Help
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '12px' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Shipping & Returns</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>FAQ</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Mascot & Copyright Row */}
        <div style={{
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{ fontSize: '11px', color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Cheeky Cup Of. Fun to sip, serious about taste. xoxo Talia.
          </p>

          {/* Attached Handwritten CHEEKY CUP Logo Wordmark */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/assets/cheeky-cup-wordmark.png"
              alt="Cheeky Cup"
              style={{
                height: '36px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
};
