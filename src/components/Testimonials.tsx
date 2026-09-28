import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marcus Vance',
      role: 'VP of Product at Apex Digital',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Aria transformed our complex multi-layered AI analytics product into an intuitive experience that our enterprise clients love. Her Figma design system speed and technical handoff precision are unmatched!',
    },
    {
      name: 'Elena Rostova',
      role: 'Co-Founder & CEO at FinPulse',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Working with Aria was seamless. She didn’t just design beautiful screens — she conducted thorough user research that uncovered conversion blockers we hadn’t even noticed. Our active user retention skyrocketed 185%!',
    },
    {
      name: 'David K. Chen',
      role: 'Head of Engineering at Vanguard Tech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'As a frontend engineering lead, I rarely meet designers who understand component architecture, design tokens, and accessibility as deeply as Aria does. Handoff was 100% bug-free!',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{ padding: '7rem 1.5rem', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem' }}>
          <span className="badge" style={{ marginBottom: '0.75rem' }}>
            <Sparkles size={14} /> Client Recommendations
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
            What People <span className="gradient-text">Say</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Feedback from product executives, founders, and engineering partners.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="glass-card" style={{ padding: '3rem 2.5rem', position: 'relative', borderRadius: 'var(--radius-lg)' }}>
          <Quote size={48} color="var(--accent-glow)" style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.5 }} />

          <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
            ))}
          </div>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic' }}>
            "{testimonials[activeIndex].text}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-primary)' }}
              />
              <div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {testimonials[activeIndex].name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {testimonials[activeIndex].role}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={prevTestimonial}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
