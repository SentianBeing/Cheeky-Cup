import React, { useState } from 'react';
import { Sparkles, Flame, Droplet, Coffee, Heart, ArrowRight, Check } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';
import { useCart } from '../context/CartContext';

export const CupBuilder = () => {
  const { addToCart } = useCart();
  const [selectedPreset, setSelectedPreset] = useState(0);
  
  // Customizer state
  const [temp, setTemp] = useState('iced'); // 'iced' | 'hot' | 'tonic'
  const [milk, setMilk] = useState('oat'); // 'oat' | 'almond' | 'coconut' | 'whole'
  const [sweetness, setSweetness] = useState('maple'); // 'pure' | 'maple' | 'vanilla'
  const [extraScoop, setExtraScoop] = useState(false);

  const presets = PRODUCT_DATA.emotionalSupportCups;
  const currentPreset = presets[selectedPreset];

  const handleAddCustomCup = () => {
    const milkName = milk === 'oat' ? 'Oat Milk' : milk === 'almond' ? 'Almond Milk' : milk === 'coconut' ? 'Coconut Water' : 'Whole Milk';
    const tempName = temp === 'iced' ? 'Iced Cloud Foam' : temp === 'hot' ? 'Hot Whipped' : 'Sparkling Spritz';
    const sweetName = sweetness === 'pure' ? 'Zero Sugar' : sweetness === 'maple' ? 'Maple Kiss' : 'Vanilla Cloud';

    addToCart({
      id: `custom-cup-${currentPreset.id}`,
      name: `Cheeky Tin + "${currentPreset.name}" Recipe Guide`,
      subtitle: `${tempName} • ${milkName} • ${sweetName} ${extraScoop ? '• Double Scoop' : ''}`,
      price: 28,
      originalPrice: 32,
      quantity: 1,
      image: currentPreset.image,
      option: `Custom Vibe: ${currentPreset.name}`,
      isSubscription: false,
    });
  };

  return (
    <section id="cup-builder" className="section-padding" style={{
      backgroundColor: 'var(--mimi-pink)',
      borderBottom: '2px solid var(--tyrian-purple)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Blob */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(250, 167, 224, 0.5)',
        filter: 'blur(50px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="cheeky-container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem' }}>
          <div style={{ display: 'inline-flex', marginBottom: '0.8rem' }}>
            <span className="cheeky-badge badge-red">
              <Sparkles size={13} /> INTERACTIVE VIBE CHECK
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
            WHAT'S IN YOUR EMOTIONAL SUPPORT CUP?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--tyrian-purple)',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            “If it doesn’t match your vibe, your fit, and your coping mechanism, it’s not Cheeky.” Select your drink personality below or customize your dream cup.
          </p>
        </div>

        {/* 3 Emotional Support Archetypes Selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }} className="archetypes-grid">
          {presets.map((preset, idx) => {
            const isSelected = selectedPreset === idx;
            return (
              <div
                key={preset.id}
                onClick={() => setSelectedPreset(idx)}
                style={{
                  background: isSelected ? 'var(--ivory)' : 'rgba(255, 255, 255, 0.7)',
                  border: `2.5px solid var(--tyrian-purple)`,
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '6px 6px 0px var(--tyrian-purple)' : '2px 2px 0px var(--tyrian-purple)',
                  transform: isSelected ? 'translateY(-4px) rotate(-0.5deg)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-block',
                    background: preset.color,
                    color: preset.color === 'var(--pale-pink)' || preset.color === '#FFFFF1' ? 'var(--tyrian-purple)' : 'var(--ivory)',
                    fontWeight: '900',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1.5px solid var(--tyrian-purple)',
                    marginBottom: '0.75rem'
                  }}>
                    {preset.vibe}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '900',
                    color: 'var(--tyrian-purple)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.15
                  }}>
                    {preset.name}
                  </h3>

                  <p style={{
                    fontSize: '0.86rem',
                    fontStyle: 'italic',
                    color: 'var(--rusty-red)',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    {preset.personality}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px dashed rgba(88, 3, 42, 0.25)',
                  paddingTop: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: 'var(--tyrian-purple)'
                }}>
                  <span>⚡ {preset.caffeine}</span>
                  <span style={{
                    color: isSelected ? 'var(--rusty-red)' : 'var(--tyrian-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.2rem'
                  }}>
                    {isSelected ? '✓ Selected' : 'Try This →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Customizer & Live Visualizer Box */}
        <div style={{
          background: 'var(--ivory)',
          border: '3px solid var(--tyrian-purple)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '8px 8px 0px var(--tyrian-purple)',
          padding: '2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="customizer-box-grid">
          
          {/* Left: Interactive Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            
            <div>
              <span className="cheeky-badge" style={{ marginBottom: '0.4rem' }}>
                CUSTOMIZE TALIA'S RATIO
              </span>
              <h3 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--tyrian-purple)' }}>
                Fine-Tune Your Daily Cup
              </h3>
            </div>

            {/* Temperature / Style */}
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--tyrian-purple)', display: 'block', marginBottom: '0.4rem' }}>
                1. Base Style:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {[
                  { id: 'iced', label: '🧊 Iced Cloud Foam' },
                  { id: 'hot', label: '☕ Hot Steamed' },
                  { id: 'tonic', label: '🍋 Citrus Splash' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTemp(item.id)}
                    style={{
                      background: temp === item.id ? 'var(--rusty-red)' : 'var(--pure-white)',
                      color: temp === item.id ? 'var(--ivory)' : 'var(--tyrian-purple)',
                      border: '2px solid var(--tyrian-purple)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.4rem',
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: temp === item.id ? '2px 2px 0px var(--tyrian-purple)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk Base */}
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--tyrian-purple)', display: 'block', marginBottom: '0.4rem' }}>
                2. Milk or Liquid Base:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.45rem' }}>
                {[
                  { id: 'oat', label: '🌾 Barista Oat' },
                  { id: 'almond', label: '🌰 Creamy Almond' },
                  { id: 'coconut', label: '🥥 Coconut Water' },
                  { id: 'whole', label: '🥛 Grass-Fed Dairy' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setMilk(item.id)}
                    style={{
                      background: milk === item.id ? 'var(--matcha-vibrant)' : 'var(--pure-white)',
                      color: milk === item.id ? 'var(--charcoal)' : 'var(--tyrian-purple)',
                      border: '2px solid var(--tyrian-purple)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.55rem 0.3rem',
                      fontSize: '0.74rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: milk === item.id ? '2px 2px 0px var(--tyrian-purple)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sweetness */}
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--tyrian-purple)', display: 'block', marginBottom: '0.4rem' }}>
                3. Sweetener Level:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {[
                  { id: 'pure', label: '🌿 0% (Pure Ceremonial)' },
                  { id: 'maple', label: '🍁 Touch of Pure Maple' },
                  { id: 'vanilla', label: '🍦 Vanilla Cloud Foam' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSweetness(item.id)}
                    style={{
                      background: sweetness === item.id ? 'var(--pale-pink)' : 'var(--pure-white)',
                      color: 'var(--tyrian-purple)',
                      border: '2px solid var(--tyrian-purple)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.6rem 0.4rem',
                      fontSize: '0.76rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: sweetness === item.id ? '2px 2px 0px var(--tyrian-purple)' : 'none',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra Cheeky Double Scoop Checkbox */}
            <div
              onClick={() => setExtraScoop(!extraScoop)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: extraScoop ? 'var(--mimi-pink)' : 'rgba(88, 3, 42, 0.05)',
                border: '1.5px solid var(--tyrian-purple)',
                borderRadius: 'var(--radius-md)',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '4px',
                border: '2px solid var(--tyrian-purple)',
                background: extraScoop ? 'var(--matcha-deep)' : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}>
                {extraScoop && <Check size={14} strokeWidth={3} />}
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: '800', color: 'var(--tyrian-purple)' }}>
                Double Cheeky Scoop (+1.5g extra matcha for maximum green power)
              </span>
            </div>

            {/* Add Custom Cup CTA */}
            <button
              onClick={handleAddCustomCup}
              className="btn-cheeky"
              style={{ width: '100%', marginTop: '0.5rem', padding: '1rem' }}
            >
              <span>Get Cheeky Tin & Try This Vibe ($28)</span>
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right: Live Visual Preview */}
          <div style={{
            background: 'linear-gradient(180deg, var(--mimi-pink) 0%, #FFF4FB 100%)',
            border: '2.5px solid var(--tyrian-purple)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'var(--matcha-glow)',
              color: 'var(--tyrian-purple)',
              fontWeight: '900',
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              padding: '0.3rem 0.7rem',
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--tyrian-purple)',
            }}>
              {extraScoop ? '⚡ Double Strength' : '✨ Barista Standard'}
            </div>

            <img
              src={currentPreset.image}
              alt={currentPreset.name}
              style={{
                width: '100%',
                maxHeight: '290px',
                objectFit: 'contain',
                margin: '1rem 0',
                filter: 'drop-shadow(0 10px 20px rgba(88,3,42,0.15))',
                transform: 'rotate(-1deg)',
              }}
            />

            <div style={{
              background: 'var(--pure-white)',
              border: '2px solid var(--tyrian-purple)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem',
              boxShadow: '3px 3px 0px var(--tyrian-purple)',
              textAlign: 'left'
            }}>
              <p style={{ fontSize: '0.75rem', fontWeight: '800', textTransform: 'uppercase', color: 'var(--rusty-red)' }}>
                Talia's Tasting Quote:
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--tyrian-purple)', fontStyle: 'italic' }}>
                {currentPreset.quote}
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: '700', color: 'rgba(88,3,42,0.8)' }}>
                <span>• Clean Energy: 6-8 hrs</span>
                <span>• 0 Crash / 0 Jitters</span>
                <span>• 100% Japanese Tencha</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .archetypes-grid {
            grid-template-columns: 1fr !important;
          }
          .customizer-box-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
