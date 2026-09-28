import React from 'react';
import { User, Award, CheckCircle, Building } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Years Experience', val: '3+', icon: Award },
    { label: 'Projects Completed', val: '35+', icon: CheckCircle },
    { label: 'Client Satisfaction', val: '100%', icon: User },
    { label: 'Current Role', val: 'Kavach Global', icon: Building },
  ];

  return (
    <section id="about" style={{ padding: '7rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          {/* Left Column: Headline & Bio */}
          <div>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>
              About Ghanshyam
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              A designer focused on <span className="gradient-text">clarity, creativity</span> and usability.
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Hi! I'm <strong>Ghanshyam Ghadiya</strong>, a Web & UI/UX Designer based in Ahmedabad, Gujarat. With over 3+ years of experience across leading IT agencies including <strong>Kavach Global</strong>, <strong>WebCodeGenie</strong>, and <strong>WebTech Evolution</strong>, I specialize in designing and building clean, responsive, and user-friendly web interfaces.
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Whether conceptualizing Figma wireframes, designing visual assets in Photoshop & Illustrator, or coding responsive HTML/CSS/JavaScript frontend templates, I focus on meeting deadlines while maintaining high-quality design standards.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="glow-btn">
                <span>Let's Discuss a Project</span>
              </a>
              <a href="#experience" className="outline-btn">
                <span>View Full Experience</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards matching photo layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {stats.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(225,29,72,0.12)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1 }} className="gradient-text">
                      {st.val}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem', fontWeight: 700 }}>
                      {st.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
