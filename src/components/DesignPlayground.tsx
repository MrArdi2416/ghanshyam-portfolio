import React, { useState } from 'react';
import { Sliders, Copy, Check, Sparkles, Type, Code2 } from 'lucide-react';

export const DesignPlayground: React.FC = () => {
  const [blurAmount, setBlurAmount] = useState<number>(16);
  const [cardOpacity, setCardOpacity] = useState<number>(75);
  const [borderWidth, setBorderWidth] = useState<number>(1);
  const [selectedFont, setSelectedFont] = useState<'sans' | 'jakarta' | 'mono'>('jakarta');
  const [activePreset, setActivePreset] = useState<'glass' | 'neon' | 'minimal'>('glass');
  const [copied, setCopied] = useState(false);

  const applyPreset = (preset: 'glass' | 'neon' | 'minimal') => {
    setActivePreset(preset);
    if (preset === 'glass') {
      setBlurAmount(20);
      setCardOpacity(60);
      setBorderWidth(1);
    } else if (preset === 'neon') {
      setBlurAmount(10);
      setCardOpacity(90);
      setBorderWidth(2);
    } else if (preset === 'minimal') {
      setBlurAmount(0);
      setCardOpacity(95);
      setBorderWidth(1);
    }
  };

  const fontFamilies = {
    jakarta: "'Plus Jakarta Sans', sans-serif",
    sans: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  };

  const cssSnippet = `/* Custom Live UI Glass Component */
.interactive-glass-node {
  background: rgba(19, 27, 46, ${cardOpacity / 100});
  backdrop-filter: blur(${blurAmount}px);
  border: ${borderWidth}px solid rgba(139, 92, 246, 0.3);
  font-family: ${fontFamilies[selectedFont]};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(cssSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Design Token Laboratory
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Interactive UI <span className="gradient-text">Customizer</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Test design tokens in real time. Adjust glassmorphism depth, font pairings, and component state variables below.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Controls Panel */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sliders size={18} color="var(--accent-primary)" /> Component Controls
              </h3>
              <div style={{ display: 'flex', gap: '0.35rem' }}>
                {(['glass', 'neon', 'minimal'] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => applyPreset(p)}
                    style={{
                      padding: '0.3rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: activePreset === p ? 'var(--accent-primary)' : 'rgba(255,255,255,0.05)',
                      color: activePreset === p ? '#fff' : 'var(--text-secondary)',
                      textTransform: 'capitalize',
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 1: Blur Amount */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                <span>Backdrop Blur Filter</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{blurAmount}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={blurAmount}
                onChange={(e) => setBlurAmount(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 2: Card Opacity */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                <span>Surface Opacity</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{cardOpacity}%</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={cardOpacity}
                onChange={(e) => setCardOpacity(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 3: Border Width */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                <span>Border Width</span>
                <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{borderWidth}px</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value={borderWidth}
                onChange={(e) => setBorderWidth(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
              />
            </div>

            {/* Font Pair Selector */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Type size={14} /> Typography Scale Token
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                {[
                  { id: 'jakarta', label: 'Plus Jakarta' },
                  { id: 'sans', label: 'Inter' },
                  { id: 'mono', label: 'JetBrains' },
                ].map((font) => (
                  <button
                    key={font.id}
                    onClick={() => setSelectedFont(font.id as any)}
                    style={{
                      padding: '0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-color)',
                      background: selectedFont === font.id ? 'var(--accent-primary)' : 'rgba(0,0,0,0.2)',
                      color: selectedFont === font.id ? '#fff' : 'var(--text-secondary)',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                  >
                    {font.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Component & Code Inspector */}
          <div>
            {/* Live Card Output */}
            <div
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                background: `rgba(19, 27, 46, ${cardOpacity / 100})`,
                backdropFilter: `blur(${blurAmount}px)`,
                WebkitBackdropFilter: `blur(${blurAmount}px)`,
                border: `${borderWidth}px solid var(--accent-primary)`,
                boxShadow: 'var(--shadow-glow)',
                fontFamily: fontFamilies[selectedFont],
                marginBottom: '1.5rem',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge">Active Design Component</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tokens: AAA Verified</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                FinTech Executive Analytics Card
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                This live component renders dynamically using your tuned parameters. Notice how text contrast and glass refraction adapt seamless to background content.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button className="glow-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
                  Action CTA
                </button>
                <button className="outline-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
                  View Spec
                </button>
              </div>
            </div>

            {/* Code Output Box */}
            <div
              className="glass-card"
              style={{
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Code2 size={15} color="var(--accent-primary)" /> Exportable CSS Spec
                </div>
                <button
                  onClick={copyCode}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.75rem',
                    color: copied ? '#10b981' : 'var(--accent-primary)',
                    fontWeight: 600,
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy CSS'}</span>
                </button>
              </div>
              <pre style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', overflowX: 'auto', whiteSpace: 'pre-wrap' }}>
                {cssSnippet}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
