import React from 'react';
import { Code, Cpu, Layout, Languages, UserCheck } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const skillCategories = [
    {
      title: 'UI/UX & Visual Design Software',
      icon: Layout,
      skills: [
        { name: 'Figma Prototyping & Design Systems', level: 96 },
        { name: 'Adobe Photoshop Vector & Graphic Assets', level: 92 },
        { name: 'Adobe Illustrator Asset Creation', level: 88 },
        { name: 'Canva & Brand Templates', level: 94 },
      ],
    },
    {
      title: 'Web & Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML5 Semantic Markup', level: 98 },
        { name: 'CSS3 / Flexbox & Grid Styling', level: 96 },
        { name: 'Responsive Media Queries', level: 95 },
        { name: 'Bootstrap 5 Framework', level: 90 },
        { name: 'JavaScript & Interactive Logic', level: 85 },
      ],
    },
    {
      title: 'Soft Skills & Leadership',
      icon: UserCheck,
      skills: [
        { name: 'Creative Problem Solving', level: 96 },
        { name: 'Team Collaboration & Communication', level: 94 },
        { name: 'Time & Deadline Management', level: 95 },
        { name: 'Client Expectation Alignment', level: 92 },
      ],
    },
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', note: 'UI/UX Design' },
    { name: 'Adobe Photoshop', icon: '🖼️', note: 'Photo & Mockups' },
    { name: 'Adobe Illustrator', icon: '✏️', note: 'Vector Art' },
    { name: 'Canva', icon: '⚡', note: 'Quick Branding' },
    { name: 'HTML5 & CSS3', icon: '🌐', note: 'Web Markup' },
    { name: 'Bootstrap', icon: '📐', note: 'Grid Layouts' },
    { name: 'JavaScript', icon: '💛', note: 'Web Scripting' },
    { name: 'VS Code & Sublime', icon: '💻', note: 'Development' },
  ];

  const languages = [
    { name: 'Gujarati', level: 'Native / Fluent' },
    { name: 'Hindi', level: 'Full Professional' },
    { name: 'English', level: 'Professional Working' },
  ];

  return (
    <section id="skills" style={{ padding: '7rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Cpu size={14} /> Core Skillsets & Software
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            Skills & <span className="gradient-text">Design Tools</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A versatile combination of visual UI/UX design tools and responsive web frontend code skills.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CatIcon size={20} color="var(--accent-primary)" /> {cat.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {cat.skills.map((s, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        <span>{s.name}</span>
                        <span style={{ color: 'var(--accent-primary)' }}>{s.level}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${s.level}%`,
                            height: '100%',
                            background: 'var(--accent-gradient)',
                            borderRadius: 'var(--radius-full)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Software Toolchain & Languages Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Software Tools */}
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              Software & Environment
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
              {tools.map((t, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '0.85rem 0.6rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.6rem', marginBottom: '0.2rem' }}>{t.icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{t.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Spoken Languages Card */}
          <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Languages size={20} color="var(--accent-primary)" /> Languages Spoken
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                    {lang.name}
                  </div>
                  <span className="badge" style={{ fontSize: '0.78rem' }}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
