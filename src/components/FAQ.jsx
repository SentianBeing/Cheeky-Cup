import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section-spacing" style={{
      backgroundColor: 'var(--cream)',
      borderBottom: '1px solid rgba(88, 3, 42, 0.15)',
    }}>
      <div className="cheeky-container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem',
          borderBottom: '1px solid rgba(88, 3, 42, 0.12)',
          paddingBottom: '0.75rem',
        }}>
          <span className="meta-tag">( 7.0 ) FAQ</span>
          <span className="meta-tag">COMMON QUESTIONS</span>
          <span className="meta-tag">HELP & SOURCING</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: '400',
            lineHeight: 1.05,
            color: 'var(--tyrian-purple)',
            letterSpacing: '-0.02em',
          }}>
            <span className="font-sans" style={{ fontWeight: '800', textTransform: 'uppercase', fontSize: '0.8em', display: 'block' }}>
              Frequently Asked
            </span>
            <span className="italic-serif" style={{ color: 'var(--rusty-red)' }}>
              Questions.
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          {PRODUCT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid rgba(88, 3, 42, 0.15)',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--ivory)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--tyrian-purple)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '700',
                    fontSize: '0.98rem',
                    gap: '1rem',
                  }}
                >
                  <span>{faq.question}</span>
                  <span style={{ color: 'var(--rusty-red)', flexShrink: 0 }}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.25rem 1.5rem',
                    fontSize: '0.92rem',
                    color: 'rgba(88, 3, 42, 0.8)',
                    lineHeight: '1.65',
                    borderTop: '1px dashed rgba(88, 3, 42, 0.1)',
                    paddingTop: '1rem',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
