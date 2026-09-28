import React from 'react';
import { Mail } from 'lucide-react';

interface HeroProps {
  onOpenHireModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '85vh',
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0b1a',
      }}
    >
      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(138, 43, 226, 0.22) 0%, rgba(10, 11, 26, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
        className="animate-glow"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(224, 86, 253, 0.18) 0%, rgba(10, 11, 26, 0) 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(60px)',
        }}
        className="animate-glow"
      />

      <div
        style={{
          maxWidth: '1440px',
          width: '100%',
          margin: '0 auto',
          padding: '0 2.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Widescreen Layout */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.75rem, 4.5vw, 4.5rem)',
                fontWeight: 900,
                color: '#ffffff',
                marginBottom: '1.5rem',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                maxWidth: '920px',
              }}
            >
              Hi, I am Ghanshyam <br />
              <span className="gradient-text">A UI/UX Designer and Graphic Designer.</span>
            </h1>

            <p
              style={{
                fontSize: '1.18rem',
                color: '#a0a5c0',
                marginBottom: '2.25rem',
                maxWidth: '780px',
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              I'm a UI/UX Designer with over 3+ years of experience creating digital products, web apps, mobile apps, and graphic designs. Focused on crafting intuitive, engaging, and user-centric designs.
            </p>

            {/* Email Contact Pill */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <a
                href="mailto:ghadiyaghanshyam646@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.7rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#e056fd';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(224, 86, 253, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00d2ff, #3a7bd5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={16} color="#ffffff" />
                </div>
                <span>ghadiyaghanshyam646@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: Proportional 3D Graphic */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div
              style={{
                position: 'relative',
                maxWidth: '460px',
                width: '100%',
              }}
            >
              <img
                src="/assets/hero_avatar.jpg"
                alt="Ghanshyam UI/UX Designer 3D Character Illustration"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 'var(--radius-xl)',
                  display: 'block',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 50px rgba(224, 86, 253, 0.25)',
                }}
                className="animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
