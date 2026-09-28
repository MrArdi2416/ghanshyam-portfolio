import React, { useState, useRef } from 'react';
import { SlidersHorizontal, Feather, Smartphone } from 'lucide-react';

export const WireframeComparison: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="wireframe-compare" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Feather size={14} /> UX Craftsmanship
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Wireframe <span className="gradient-text">to High-Fi UI</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Drag the slider to see how raw low-fidelity structural user flows transform into pixel-perfect high-fidelity interface components.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          style={{
            position: 'relative',
            height: '480px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-md)',
            cursor: 'ew-resize',
            userSelect: 'none',
          }}
        >
          {/* HIGH-FI SIDE (RIGHT - Base Layer) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #0b0f19 0%, #172036 100%)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'rgba(19, 27, 46, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid var(--accent-primary)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>PayPulse Mobile Checkout</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-secondary)' }}>High-Fidelity Component System</div>
                  </div>
                </div>
                <span className="badge" style={{ background: '#10b98120', color: '#10b981', borderColor: '#10b98140' }}>
                  🟢 Live Token
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Payment Method</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginTop: '0.2rem' }}>Apple Pay / Visa</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Amount</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.2rem' }}>$249.00 USD</div>
                </div>
              </div>

              <button className="glow-btn" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
                Confirm & Authorize Payment
              </button>
            </div>
            <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-primary)', background: 'rgba(0,0,0,0.6)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
              ✨ High-Fidelity UI
            </div>
          </div>

          {/* LOW-FI WIREFRAME SIDE (LEFT - Clipped Overlay) */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: `${sliderPos}%`,
              overflow: 'hidden',
              background: '#e2e8f0',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '2px solid #64748b',
            }}
          >
            <div
              style={{
                width: '680px',
                minWidth: '680px',
                background: '#ffffff',
                border: '2px dashed #94a3b8',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                fontFamily: 'monospace',
                color: '#334155',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '4px', border: '2px solid #64748b', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                    [ICON]
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>[WIRE_HEADER: Mobile Checkout]</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Low-Fidelity UX Structure</div>
                  </div>
                </div>
                <div style={{ border: '1px solid #94a3b8', padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}>[STATUS]</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div style={{ border: '1px dashed #94a3b8', padding: '1rem', background: '#f8fafc' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>[SELECT_PAYMENT_OPTION]</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>[RADIO_GROUP_1]</div>
                </div>
                <div style={{ border: '1px dashed #94a3b8', padding: '1rem', background: '#f8fafc' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>[TOTAL_PRICE]</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700 }}>[$000.00]</div>
                </div>
              </div>

              <div style={{ width: '100%', height: '44px', background: '#cbd5e1', border: '2px solid #475569', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                [CTA_BTN: SUBMIT_FORM]
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', background: 'rgba(255,255,255,0.85)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
              ✏️ UX Wireframe Flow
            </div>
          </div>

          {/* Slider Divider Handle */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${sliderPos}%`,
              transform: 'translateX(-50%)',
              width: '4px',
              background: '#fff',
              boxShadow: '0 0 15px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px var(--accent-glow)',
                border: '2px solid #fff',
              }}
            >
              <SlidersHorizontal size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
