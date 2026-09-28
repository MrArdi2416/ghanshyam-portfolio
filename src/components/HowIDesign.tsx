import React from 'react';
import { Search, Compass, Layout, Smartphone, Code, Rocket, Sparkles } from 'lucide-react';

export const HowIDesign: React.FC = () => {
  const steps = [
    {
      num: '01',
      name: 'Discover',
      icon: Search,
      desc: 'Understanding client goals, target audience requirements, and project scope.',
    },
    {
      num: '02',
      name: 'Define',
      icon: Compass,
      desc: 'Structuring information architecture, user journeys, and structural wireframes.',
    },
    {
      num: '03',
      name: 'Design',
      icon: Layout,
      desc: 'Crafting modern Figma UI layouts, color palettes, and typography systems.',
    },
    {
      num: '04',
      name: 'Prototype',
      icon: Smartphone,
      desc: 'Building interactive micro-interactions and clickable component flows.',
    },
    {
      num: '05',
      name: 'Develop',
      icon: Code,
      desc: 'Writing clean, responsive HTML5, CSS3, Media Queries, and JavaScript code.',
    },
    {
      num: '06',
      name: 'Deliver',
      icon: Rocket,
      desc: 'Performing QA testing, cross-browser audits, and final project handoff.',
    },
  ];

  return (
    <section id="process" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Design Workflow
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            How I <span className="gradient-text">Design</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            My systematic 6-step workflow that transforms client concepts into high-quality digital experiences.
          </p>
        </div>

        {/* 6-Stage Pipeline Grid matching reference photo */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="glass-card"
                style={{
                  padding: '1.75rem 1.25rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>
                    {step.num}
                  </span>
                  <div
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: 'rgba(225,29,72,0.12)',
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {step.name}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
