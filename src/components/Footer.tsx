import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Clock, Phone } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#060712', borderTop: '1px solid rgba(255, 255, 255, 0.08)', padding: '4rem 2.5rem 2.5rem', color: '#ffffff' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #e056fd, #8a2be2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1rem',
                }}
              >
                G
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff' }}>Ghanshyam</span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#9aa1c2', maxWidth: '450px', lineHeight: 1.6 }}>
              UI/UX Designer & Graphic Designer specializing in clean, responsive mobile apps, luxury e-commerce platforms, and creative digital designs.
            </p>
          </div>

          {/* Local Time Widget */}
          <div style={{ padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-full)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
            <Clock size={16} color="#e056fd" />
            <span style={{ color: '#9aa1c2' }}>Local Time:</span>
            <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#ffffff' }}>{time || '12:00 PM'}</span>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="mailto:ghadiyaghanshyam646@gmail.com"
              title="Email Ghanshyam"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:+919265809759"
              title="Call Ghanshyam"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <Phone size={18} />
            </a>
            <a
              href="https://instagram.com/uiux.ghanshyam"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#62698d' }}>
          <div>
            © {new Date().getFullYear()} Ghanshyam. All rights reserved. UI/UX & Graphic Design Portfolio.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 700,
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={16} color="#e056fd" />
          </button>
        </div>
      </div>
    </footer>
  );
};
