import React, { useState } from 'react';
import { Copy, Check, Sparkles, Palette, MousePointerClick, Layers } from 'lucide-react';

export const DesignSystemShowcase: React.FC = () => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [switchActive, setSwitchActive] = useState(true);

  const colors = [
    { name: 'Cyber Purple', hex: '#8b5cf6', role: 'Primary Accent / CTA' },
    { name: 'Neon Cyan', hex: '#06b6d4', role: 'Secondary Glow' },
    { name: 'Emerald Mint', hex: '#10b981', role: 'Success / Metric' },
    { name: 'Rose Red', hex: '#f43f5e', role: 'Alert / Destructive' },
    { name: 'Midnight Dark', hex: '#0b0f19', role: 'Surface Base' },
    { name: 'Slate Gray', hex: '#64748b', role: 'Secondary Typography' },
  ];

  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const simulateLoading = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <section id="design-system" style={{ padding: '7rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Layers size={14} /> Modular Component Architecture
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Design System <span className="gradient-text">& UI Tokens</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A glimpse into the reusable UI components, color variables, and interactive states I build for design systems.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {/* Column 1: Color Tokens */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Palette size={20} color="var(--accent-primary)" /> Color Tokens
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {colors.map((c) => (
                <div
                  key={c.hex}
                  onClick={() => copyHex(c.hex)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: c.hex, border: '1px solid rgba(255,255,255,0.2)' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{c.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.role}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    <span>{c.hex}</span>
                    {copiedHex === c.hex ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Interactive Component Gallery */}
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MousePointerClick size={20} color="var(--accent-primary)" /> Button & State Gallery
            </h3>

            {/* Primary Button */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>PRIMARY GLOW BUTTON</div>
              <button className="glow-btn" style={{ width: '100%', justifyContent: 'center' }}>
                <Sparkles size={16} /> Interactive Primary Button
              </button>
            </div>

            {/* Loading State Button */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>ASYNC STATE BUTTON (CLICK TO TEST)</div>
              <button
                onClick={simulateLoading}
                className="outline-btn"
                style={{ width: '100%', justifyContent: 'center', borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
              >
                {buttonLoading ? 'Processing Request...' : 'Trigger Async Action'}
              </button>
            </div>

            {/* Micro-interaction Switch */}
            <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>Micro-Interaction Toggle</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Smooth spring transition</div>
              </div>
              <button
                onClick={() => setSwitchActive(!switchActive)}
                style={{
                  width: '52px',
                  height: '28px',
                  borderRadius: 'var(--radius-full)',
                  background: switchActive ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                  padding: '3px',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: '#fff',
                    transform: switchActive ? 'translateX(24px)' : 'translateX(0)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
