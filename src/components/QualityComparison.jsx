import React from 'react';
import { Check, X, Sparkles, Award, Leaf, Zap, ShieldCheck } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const QualityComparison = () => {
  return (
    <section id="quality-section" className="section-padding" style={{
      backgroundColor: 'var(--cream-soft)',
      borderBottom: '2px solid var(--tyrian-purple)',
      position: 'relative',
    }}>
      <div className="cheeky-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
          <div style={{ display: 'inline-flex', marginBottom: '0.8rem' }}>
            <span className="cheeky-badge badge-green">
              <Award size={13} /> SAGE EXPERTISE × JESTER PERSONALITY
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '0.8rem',
            color: 'var(--tyrian-purple)'
          }}>
            SERIOUS ON THE INSIDE, PLAYFUL ON THE OUTSIDE
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(88, 3, 42, 0.85)',
            lineHeight: '1.6'
          }}>
            Most matcha on social media is low-grade culinary dust that tastes like lawn clippings. Here is why Cheeky is in a different universe.
          </p>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '4rem',
        }} className="comparison-grid">
          
          {/* Cheeky Card (The Winner) */}
          <div style={{
            background: 'var(--ivory)',
            border: '3px solid var(--tyrian-purple)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '8px 8px 0px var(--tyrian-purple)',
            padding: '2.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'var(--matcha-vibrant)',
              color: 'var(--charcoal)',
              fontSize: '0.75rem',
              fontWeight: '900',
              padding: '0.3rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--tyrian-purple)',
              textTransform: 'uppercase'
            }}>
              ★ Talia Standard
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--matcha-badge-bg)',
                border: '2px solid var(--tyrian-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={22} color="var(--matcha-deep)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--tyrian-purple)', textTransform: 'uppercase' }}>
                  Cheeky Ceremonial
                </h3>
                <p style={{ fontSize: '0.82rem', fontWeight: '700', color: 'var(--rusty-red)' }}>
                  1st Spring Harvest Kagoshima & Uji Tencha
                </p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Electric Emerald Green', desc: 'Packed with live chlorophyll from 28-day bamboo shade-growing' },
                { title: 'Zero Bitterness & Naturally Sweet', desc: 'Smooth, creamy, and sweet without needing a cup of syrup' },
                { title: 'Ultra-Fine Granite Stone Grind', desc: 'Whisks effortlessly into dense, silky cafe micro-foam' },
                { title: 'High L-Theanine Zen Energy', desc: '6-8 hours of calm, jitter-free focus with zero afternoon crash' },
                { title: 'Direct Farm Sourcing in Japan', desc: 'Small-batch harvested, tested for heavy metals and pesticides' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--matcha-deep)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Check size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.98rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(88, 3, 42, 0.75)', lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Regular Culinary Matcha Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.5)',
            border: '2px dashed rgba(88, 3, 42, 0.4)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
            opacity: 0.85,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#EAEAEA',
                border: '2px solid rgba(88, 3, 42, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <X size={22} color="#888888" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'rgba(88, 3, 42, 0.6)', textTransform: 'uppercase' }}>
                  Standard / Culinary Matcha
                </h3>
                <p style={{ fontSize: '0.82rem', fontWeight: '600', color: '#777' }}>
                  Late Harvest / Mass Commercial Blends
                </p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Dull Yellow-Brown Color', desc: 'Late autumn harvest with degraded leaf quality' },
                { title: 'Sharp, Bitter, Astringent', desc: 'Forces cafes to mask with tablespoons of sugary syrups' },
                { title: 'Gritty, Sandy Mouthfeel', desc: 'Machine ground with high heat friction that burns the leaf' },
                { title: 'Caffeine Spikes & Crash', desc: 'Low L-theanine ratio causes racing heart and 2pm fatigue' },
                { title: 'Mysterious Warehouse Origins', desc: 'Blended with cheap dust and left sitting in warehouses for months' }
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#CCCCCC',
                    color: '#666666',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <X size={15} strokeWidth={3} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.95rem', fontWeight: '700', color: 'rgba(88, 3, 42, 0.6)' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Taste Profile Metric Bars */}
        <div style={{
          background: 'var(--mimi-pink)',
          border: '3px solid var(--tyrian-purple)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '6px 6px 0px var(--tyrian-purple)',
          padding: '2.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="cheeky-badge badge-white" style={{ marginBottom: '0.3rem' }}>
                FLAVOR SPECTRUM
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--tyrian-purple)' }}>
                The Cheeky Flavor Architecture
              </h3>
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--rusty-red)' }}>
              ★ Evaluated by Certified Japanese Tea Sommeliers
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PRODUCT_DATA.flavorProfile.map((stat, idx) => (
              <div key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: '800', fontSize: '0.95rem', color: 'var(--tyrian-purple)' }}>
                    {stat.label}
                  </span>
                  <span style={{ fontWeight: '900', fontSize: '1rem', color: 'var(--rusty-red)' }}>
                    {stat.value}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '14px',
                  background: 'var(--pure-white)',
                  borderRadius: 'var(--radius-full)',
                  border: '1.5px solid var(--tyrian-purple)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    width: `${stat.value}%`,
                    height: '100%',
                    background: stat.label.includes('Bitterness') ? '#58032A' : 'linear-gradient(90deg, var(--matcha-vibrant) 0%, var(--rusty-red) 100%)',
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  }} />
                </div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(88,3,42,0.7)', marginTop: '0.25rem' }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
