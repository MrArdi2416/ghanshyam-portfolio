import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, GraduationCap, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'UI-UX Designer',
      company: 'KAVACH GLOBAL',
      period: '03/2026 — PRESENT',
      location: 'Ahmedabad, Gujarat',
      badge: 'Current Role',
      achievements: [
        'Conceptualized, designed, and implemented visually appealing, user-friendly security dashboards and web interfaces.',
        'Translated complex functional specifications into responsive HTML/CSS/JS web designs with high accessibility standards.',
        'Maintained rapid turnarounds and high-quality design deliverables across cross-functional team sprints.',
      ],
    },
    {
      role: 'Web Designer / UI-UX Designer',
      company: 'WEBCODEGENIE',
      period: '06/2024 — 03/2026',
      location: 'Ahmedabad, Gujarat',
      achievements: [
        'Created high-fidelity UI mockups in Figma, Adobe Photoshop, and Illustrator for web and mobile clients.',
        'Developed clean, responsive frontend web templates utilizing HTML5, CSS3, Media Queries, Bootstrap, and JavaScript.',
        'Worked in Visual Studio Code and Sublime Text to deliver optimized cross-browser compatible layouts.',
      ],
    },
    {
      role: 'Web Designer',
      company: 'WEBTECH EVOLUTION',
      period: '01/2023 — 06/2024',
      location: 'Ahmedabad, Gujarat',
      achievements: [
        'Designed client-tailored websites and landing pages from scratch with Canva and Photoshop visual assets.',
        'Ensured 100% mobile responsiveness across smartphones, tablets, and desktop displays using CSS grid & flexbox.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Web Designer Specialist',
      institution: 'Creative Multimedia Institute',
      year: '1 Year Intensive Course',
    },
    {
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Saurashtra University',
      year: 'Graduated 2022 • CGPA 6.70',
    },
  ];

  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Briefcase size={14} /> Career Milestone Journey
          </span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Work <span className="gradient-text">Experience</span> & Education
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            3+ years of professional Web & UI/UX design experience across top IT agencies in Ahmedabad.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="badge" style={{ fontSize: '0.75rem' }}>
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                    <Building2 size={16} /> {exp.company}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    <Calendar size={14} color="var(--accent-primary)" /> {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul style={{ listStyle: 'disc', paddingLeft: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section Cards */}
        <div style={{ background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <GraduationCap size={22} color="var(--accent-primary)" /> Academic & Professional Education
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                  <Award size={16} /> Qualification
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {edu.degree}
                </h4>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
