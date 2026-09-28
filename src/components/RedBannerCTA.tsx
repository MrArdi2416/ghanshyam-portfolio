import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface RedBannerCTAProps {
  onOpenHireModal: () => void;
}

export const RedBannerCTA: React.FC<RedBannerCTAProps> = ({ onOpenHireModal }) => {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
        color: '#ffffff',
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Glow Circle */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1.25rem', letterSpacing: '-0.03em' }}>
          Let’s create something <br />
          <span style={{ textDecoration: 'underline', textDecorationColor: 'rgba(255,255,255,0.4)' }}>meaningful.</span>
        </h2>

        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Have a project in mind, need a modern responsive website redesign, or looking to hire a Lead Web & UI/UX Designer in Ahmedabad?
        </p>

        {/* CTA Button */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
          <button onClick={onOpenHireModal} className="dark-btn" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
            <span>Get in Touch Now</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Quick Contact Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)', fontSize: '0.95rem' }}>
          <a href="tel:+919265809759" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 600 }}>
            <Phone size={18} />
            <span>+91 92658-09759</span>
          </a>
          <a href="mailto:ghadiyaghanshyam646@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff', fontWeight: 600 }}>
            <Mail size={18} />
            <span>ghadiyaghanshyam646@gmail.com</span>
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>
            <MapPin size={18} />
            <span>Ahmedabad, Gujarat</span>
          </div>
        </div>
      </div>
    </section>
  );
};
