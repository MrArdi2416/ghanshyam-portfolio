import React, { useState } from 'react';
import { Search, Compass, Layout, Palette, CheckCircle2, Sparkles } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'Empathize & Discover',
      icon: Search,
      deliverables: ['User Interviews', 'Competitive Audit', 'Persona Mapping', 'Heuristic Evaluation'],
      description: 'Uncovering deep user pains and business goals through contextual user interviews, analytics review, and competitive benchmark auditing.',
    },
    {
      number: '02',
      title: 'Define & Architecture',
      icon: Compass,
      deliverables: ['Information Architecture', 'User Journey Maps', 'Core User Flows', 'Problem Statements'],
      description: 'Mapping out structural user flows, tree tests, and card sorting to eliminate cognitive load before opening Figma.',
    },
    {
      number: '03',
      title: 'Wireframe & Prototype',
      icon: Layout,
      deliverables: ['Low-Fi Sketches', 'Interactive Wireframes', 'Usability Testing', 'Clickable Prototypes'],
      description: 'Rapidly prototyping interactive low-fidelity wireframes in Figma to validate key interaction hypotheses with real users.',
    },
    {
      number: '04',
      title: 'Visual Design & System',
      icon: Palette,
      deliverables: ['Figma Token Library', 'High-Fi UI Mockups', 'Micro-interactions', 'WCAG AAA Audit'],
      description: 'Crafting pixel-perfect interface design systems, glassmorphism components, dark/light modes, and custom micro-animations.',
    },
    {
      number: '05',
      title: 'Handoff & Measure',
      icon: CheckCircle2,
      deliverables: ['Storybook Handoff', 'Figma Dev Spec', 'A/B Testing Review', 'Conversion Tracking'],
      description: 'Partnering closely with frontend developers for flawless implementation, auditing live builds, and iterating based on telemetry.',
    },
  ];

  return (
    <section id="process" style={{ padding: '6rem 1.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Proven UX Methodology
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            My Design <span className="gradient-text">Process</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A battle-tested 5-stage framework that transforms user research into scalable digital products.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className="glass-card"
                style={{
                  padding: '1.25rem 1rem',
                  textAlign: 'left',
                  borderColor: isActive ? 'var(--accent-primary)' : 'var(--border-color)',
                  background: isActive ? 'rgba(139, 92, 246, 0.15)' : 'var(--bg-card)',
                  boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)' }}>
                    PHASE {step.number}
                  </span>
                  <Icon size={18} color={isActive ? 'var(--accent-primary)' : 'var(--text-muted)'} />
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Display */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            background: 'var(--bg-primary)',
            borderRadius: 'var(--radius-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>
              Phase {steps[activeStep].number} Focus
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {steps[activeStep].title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {steps[activeStep].description}
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', padding: '1.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Key Artifacts & Deliverables
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {steps[activeStep].deliverables.map((del, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
