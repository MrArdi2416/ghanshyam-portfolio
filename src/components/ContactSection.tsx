import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6.5rem 2.5rem 7.5rem',
        background: 'linear-gradient(180deg, #0a0b1a 0%, #060712 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Lighting */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(224, 86, 253, 0.15) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Balanced 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Title & 3 Contact Pills */}
          <div>
            <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
              <h2
                style={{
                  fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)',
                  fontWeight: 900,
                  marginBottom: '1rem',
                  letterSpacing: '-0.03em',
                }}
                className="gradient-text"
              >
                Contact Me
              </h2>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#a0a5c0',
                  lineHeight: 1.65,
                }}
              >
                Feel free to reach out for design collaborations, freelance projects, or just a friendly chat!
              </p>
            </div>

            {/* 3 Contact Pills Stacked Evenly */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Email Option */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.2rem 1.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(18, 20, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                className="glass-card"
              >
                <a
                  href="mailto:ghadiyaghanshyam646@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00d2ff, #3a7bd5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0, 210, 255, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} color="#ffffff" />
                  </div>
                  <span style={{ wordBreak: 'break-all' }}>ghadiyaghanshyam646@gmail.com</span>
                </a>

                <button
                  onClick={() => handleCopy('ghadiyaghanshyam646@gmail.com', 'email')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: copiedField === 'email' ? '#00ff88' : '#a0a5c0',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  {copiedField === 'email' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedField === 'email' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone / Call Option */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.2rem 1.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(18, 20, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                className="glass-card"
              >
                <a
                  href="tel:+919265809759"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981, #059669)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={20} color="#ffffff" />
                  </div>
                  <span>+91 92658 09759</span>
                </a>

                <button
                  onClick={() => handleCopy('+919265809759', 'phone')}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: copiedField === 'phone' ? '#00ff88' : '#a0a5c0',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  {copiedField === 'phone' ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedField === 'phone' ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Instagram Option */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1.2rem 1.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(18, 20, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                className="glass-card"
              >
                <a
                  href="https://instagram.com/uiux.ghanshyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(220, 39, 67, 0.4)',
                      flexShrink: 0,
                    }}
                  >
                    <InstagramIcon size={20} color="#ffffff" />
                  </div>
                  <span>instagram.com/uiux.ghanshyam</span>
                </a>

                <a
                  href="https://instagram.com/uiux.ghanshyam"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#e056fd',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(224, 86, 253, 0.3)',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                    marginLeft: '0.5rem',
                  }}
                >
                  <span>Visit Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Balanced Message Form Card */}
          <div
            style={{
              padding: '2.5rem',
              borderRadius: 'var(--radius-xl)',
              background: 'rgba(15, 17, 38, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ marginBottom: '1.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Sparkles size={22} color="#e056fd" />
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff' }}>
                Send an Instant Message
              </h3>
            </div>

            {formSubmitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  lineHeight: 1.6,
                }}
              >
                ✨ Thank you! Your message has been sent successfully to Ghanshyam.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.35rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#a0a5c0', marginBottom: '0.45rem' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.15rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#e056fd')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#a0a5c0', marginBottom: '0.45rem' }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1.15rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#ffffff',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#e056fd')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#a0a5c0', marginBottom: '0.45rem' }}>
                    Project Details / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Ghanshyam, I'd like to talk about a new mobile app / website design..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.15rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#e056fd')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
                  />
                </div>

                <div style={{ paddingTop: '0.5rem' }}>
                  <button type="submit" className="glow-btn" style={{ width: '100%', justifyContent: 'center', padding: '0.95rem 2rem' }}>
                    <span>Send Message</span>
                    <Send size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
