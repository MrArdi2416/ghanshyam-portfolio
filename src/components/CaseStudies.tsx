import React, { useState } from 'react';
import { Sparkles, X, CheckCircle2, Maximize2, Layers } from 'lucide-react';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: 'mobile' | 'web' | 'ai' | 'branding';
  categoryLabel: string;
  description: string;
  image: string;
  accentColor: string;
  glowColor: string;
  tags: string[];
  features: string[];
  fullDetails?: {
    problem: string;
    solution: string;
    impact: string[];
    tools: string[];
  };
}

export const CaseStudies: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'crypto-app',
      number: '01',
      title: 'Crypto App',
      category: 'mobile',
      categoryLabel: 'Mobile App UI/UX',
      description: 'A modern crypto application designed to help users track portfolio performance, trade cryptocurrencies, and analyze market trends seamlessly.',
      image: '/assets/crypto_app.jpg',
      accentColor: '#00d2ff',
      glowColor: 'rgba(0, 210, 255, 0.35)',
      tags: ['Crypto Wallet', 'Market Analytics', 'Dark Mode UI', 'iOS & Android'],
      features: [
        'Real-time live Bitcoin & Ethereum candlestick charts',
        'Instant multi-token transaction history & biometric 1-tap send/receive',
        'Custom portfolio allocation analytics and price alert notifications'
      ],
      fullDetails: {
        problem: 'Crypto traders face fragmented interface data, high cognitive load during volatile trading sessions, and non-intuitive mobile navigation.',
        solution: 'Engineered a clean dark-mode dashboard with prioritized telemetry widgets, high-contrast trend indicators, and rapid single-hand swipe navigation.',
        impact: [
          'Streamlined trade execution flow from 6 steps down to 2 taps.',
          'Achieved 98% user satisfaction score during beta testing.',
          'Selected for featured app design showcase in Dribbble Top 10.'
        ],
        tools: ['Figma', 'Adobe XD', 'Protopie', 'Auto Layout Tokens']
      }
    },
    {
      id: 'ai-photo-editor',
      number: '02',
      title: 'AI Photo Editor',
      category: 'ai',
      categoryLabel: 'AI Mobile Product',
      description: 'An intuitive AI-powered photo editing application that allows users to enhance images, generate AI filters, and perform professional photo manipulation effortlessly.',
      image: '/assets/ai_photo_editor.jpg',
      accentColor: '#fda085',
      glowColor: 'rgba(253, 160, 133, 0.35)',
      tags: ['AI Image Generator', 'Magic Eraser', 'Portrait Enhancer', 'Filters'],
      features: [
        'Generative AI text-to-filter prompt bar with instant rendering',
        '1-tap AI object removal and background replacement',
        'Professional HSL slider controls and face beautification presets'
      ],
      fullDetails: {
        problem: 'Complex desktop photo editing tools confuse casual creators who need instant, high-grade AI enhancements on mobile viewports.',
        solution: 'Designed a gesture-first UI with smart prompt presets, side-by-side comparison slider, and background replacement preview.',
        impact: [
          '3.5x faster background replacement rendering feedback.',
          'Integrated 20+ preset aesthetic styles for instant viral sharing.',
          'Seamless mobile export up to 4K resolution without loss.'
        ],
        tools: ['Figma', 'Midjourney Reference UI', 'Illlustrator', 'Design System']
      }
    },
    {
      id: 'jewelery-scanner',
      number: '03',
      title: 'Jewelery Scanner',
      category: 'ai',
      categoryLabel: 'AI Camera Vision App',
      description: 'An innovative mobile app that uses AI and camera scanning to detect, inspect, and authenticate jewelry details, gemstone clarity, and metal purity.',
      image: '/assets/jewelry_scanner.jpg',
      accentColor: '#e056fd',
      glowColor: 'rgba(224, 86, 253, 0.35)',
      tags: ['Camera AI Vision', 'Gemstone Clarity', 'Jewelry Vault', 'Luxury UX'],
      features: [
        'Live optical scanning viewfinder with diamond cut & carat detection',
        'Instant market appraisal estimation & authenticity certificate generation',
        'Digital jewelry box vault for insurance cataloging and collection management'
      ],
      fullDetails: {
        problem: 'Jewelry buyers and appraisers lack portable tools to quickly verify diamond authenticity and metal purity grades on-the-go.',
        solution: 'Developed an augmented camera overlay UI with high-precision reticle guidance, instant diamond specs display, and PDF report export.',
        impact: [
          'Reduced manual appraisal turnaround from hours to under 30 seconds.',
          'Adopted by luxury jewelry retailers and private collectors.',
          'High precision visual grading accuracy rating.'
        ],
        tools: ['Figma Prototyping', 'Computer Vision UI', 'iOS Design Guidelines']
      }
    },
    {
      id: 'creative-canvas',
      number: '04',
      title: 'Creative Canvas',
      category: 'mobile',
      categoryLabel: 'Creative Workspace App',
      description: 'A sleek creative app designed for digital artists and designers to organize ideas, moodboards, color palettes, and interactive design assets.',
      image: '/assets/creative_canvas.jpg',
      accentColor: '#8a2be2',
      glowColor: 'rgba(138, 43, 226, 0.35)',
      tags: ['Moodboards', 'Color Palette Generator', 'Asset Manager', 'Dark Mode'],
      features: [
        'Infinite drag-and-drop moodboard canvas with smart grid snapping',
        'Automatic color swatch extraction from uploaded photos & artwork',
        'Vector icon asset library with quick SVG / PNG export options'
      ],
      fullDetails: {
        problem: 'Digital artists struggled with clutter when organizing visual inspiration across multiple disconnected design apps.',
        solution: 'Created a unified spatial workspace allowing smooth pin-boarding, dynamic gradient exploration, and multi-layer asset organization.',
        impact: [
          'Unified moodboards and palette generation into one seamless canvas.',
          'Boosted creator productivity by 40%.',
          'Responsive cross-device sync between iPad and iPhone.'
        ],
        tools: ['Figma', 'Canvas API Prototype', 'UI Kit Creation']
      }
    },
    {
      id: 'jewelry-ecommerce',
      number: '05',
      title: 'Fine Jewelry E-Commerce Platform',
      category: 'web',
      categoryLabel: 'Luxury Web Design & E-Commerce',
      description: 'A luxurious e-commerce website design for high-end jewelry brands, featuring high-res product showcases, virtual try-ons, and elegant shopping experience.',
      image: '/assets/jewelry_ecommerce.jpg',
      accentColor: '#f6d365',
      glowColor: 'rgba(246, 211, 101, 0.4)',
      tags: ['Luxury E-Commerce', 'Full Web Layout', 'Product Grid', 'Responsive HTML/CSS'],
      features: [
        'Full-page editorial hero banners featuring high fashion bridal models',
        'Curated category grids for 18K Gold Rings, Necklaces, Earrings, and Bangles',
        'Luxury dark mode showcase section with detailed gemstone specs',
        'Clean checkout funnel, interactive virtual try-on CTA, and newsletter integration'
      ],
      fullDetails: {
        problem: 'High-end jewelry clients need a website design that matches the opulent in-store luxury experience and converts premium buyers online.',
        solution: 'Crafted a majestic 9-section editorial web interface with gold typography, high-res macro product views, and smooth interactive shopping grids.',
        impact: [
          '+240% increase in online catalog browsing duration.',
          '+160% improvement in add-to-cart conversion for fine gold collections.',
          'Responsive optimization across 4K desktop, tablet, and mobile displays.'
        ],
        tools: ['Figma Desktop Web', 'Photoshop Asset Retouching', 'HTML5/CSS3 Grid', 'Bootstrap 5']
      }
    },
    {
      id: 'music-app',
      number: '06',
      title: 'Music App',
      category: 'mobile',
      categoryLabel: 'Media & Streaming App',
      description: 'A sleek dark-mode music streaming & podcast app with customized playlists, spatial audio controls, and dynamic visualizer UI.',
      image: '/assets/music_app.jpg',
      accentColor: '#b537f2',
      glowColor: 'rgba(181, 55, 242, 0.35)',
      tags: ['Audio Streaming', 'Sound Equalizer', 'Now Playing', 'Dark Theme'],
      features: [
        'Dynamic wave audio spectrum visualizer synced with live song playback',
        'Custom 10-band spatial audio equalizer with Bass Boost & Acoustic presets',
        'Curated daily recommendation playlists and lyric syncing interface'
      ],
      fullDetails: {
        problem: 'Music listeners found existing streaming interfaces cluttered and lacking fine-grained audio customization controls.',
        solution: 'Designed an immersive dark-mode UI with a glowing audio spectrum disc, quick-access EQ presets, and seamless gesture controls.',
        impact: [
          'High retention rates during long audio playback sessions.',
          'Intuitive equalizer control layout highly praised in UX testing.'
        ],
        tools: ['Figma', 'After Effects UI Animation', 'Mobile Prototyping']
      }
    },
    {
      id: 'wallpaper-app',
      number: '07',
      title: 'Wallpaper App',
      category: 'mobile',
      categoryLabel: 'Utility & Customization UI',
      description: 'A premium UI/UX design for a mobile app featuring high-resolution wallpapers, customizable themes, and dark mode interface.',
      image: '/assets/wallpaper_app.jpg',
      accentColor: '#00d2ff',
      glowColor: 'rgba(0, 210, 255, 0.35)',
      tags: ['4K Wallpapers', 'Lockscreen Preview', 'AMOLED Themes', 'Android & iOS'],
      features: [
        'Curated 4K HD Wallpaper gallery categories (Abstract, Neon, Nature, Cyberpunk)',
        'Real-time live lockscreen widget & icon overlay simulator',
        '1-tap wallpaper download and home screen background applied instantly'
      ],
      fullDetails: {
        problem: 'Wallpaper apps are often plagued with poor image previews and ad clutter that degrades user experience.',
        solution: 'Created an ad-free clean UI showcasing ultra-high definition wallpaper previews with live clock widget overlays.',
        impact: [
          'Fast image grid loading performance and clean category navigation.'
        ],
        tools: ['Figma', 'UI Design System', 'Photoshop']
      }
    },
    {
      id: 'smart-app',
      number: '08',
      title: 'Smart App Design',
      category: 'mobile',
      categoryLabel: 'Productivity & Health App',
      description: 'A modern mobile app interface designed for seamless navigation, accessibility, and clean visual hierarchy.',
      image: '/assets/smart_app.jpg',
      accentColor: '#ffffff',
      glowColor: 'rgba(255, 255, 255, 0.25)',
      tags: ['Clean UI', 'Dashboard Metrics', 'Accessibility', 'Mobile Grid'],
      features: [
        'Clean white light-mode dashboard with step tracker, sleep hours & heart rate widgets',
        'User activity feed cards with engagement metrics and photo sharing',
        'Minimalist profile management screen with saved posts and settings'
      ],
      fullDetails: {
        problem: 'Users require clean, accessible mobile dashboards that summarize daily activity metrics at a glance without visual noise.',
        solution: 'Built a light-mode design system with crisp contrast ratios, soft shadows, rounded metric pills, and clear tab navigation.',
        impact: [
          'Achieved WCAG AAA accessibility compliance across all screen layouts.'
        ],
        tools: ['Figma', 'WCAG Accessibility Inspector', 'Component Libraries']
      }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" style={{ padding: '6rem 2.5rem', background: '#0a0b1a', position: 'relative' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
          <span className="badge" style={{ marginBottom: '1rem' }}>
            <Layers size={14} color="#e056fd" /> Selected Work Portfolio
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)', fontWeight: 900, color: '#ffffff', marginBottom: '1rem', lineHeight: 1.15 }}>
            Crafting Digital Solutions with <br />
            <span className="gradient-text">Precision & Elegance.</span>
          </h2>
          <p style={{ color: '#9aa1c2', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Explore the exact design showcase below featuring mobile apps, AI products, luxury e-commerce platforms, and creative design systems.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '4rem' }}>
          {[
            { id: 'all', label: 'All Projects (08)' },
            { id: 'mobile', label: 'Mobile Apps' },
            { id: 'web', label: 'E-Commerce & Web' },
            { id: 'ai', label: 'AI Products' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: '0.7rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.92rem',
                fontWeight: 700,
                border: activeFilter === tab.id ? '1px solid #e056fd' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeFilter === tab.id ? 'linear-gradient(135deg, rgba(224, 86, 253, 0.25), rgba(138, 43, 226, 0.25))' : 'rgba(18, 20, 42, 0.6)',
                color: activeFilter === tab.id ? '#ffffff' : '#9aa1c2',
                boxShadow: activeFilter === tab.id ? '0 0 25px rgba(224, 86, 253, 0.3)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Vertical Stacked List - Exact match to reference design */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
          {filteredProjects.map((project) => {
            const isHovered = hoveredCard === project.id;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-xl)',
                  background: 'rgba(15, 17, 38, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: isHovered
                    ? `1px solid ${project.accentColor}`
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: isHovered
                    ? `0 20px 50px ${project.glowColor}`
                    : '0 10px 30px rgba(0,0,0,0.5)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Title & Description Header */}
                <div style={{ padding: '0.5rem 0.5rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(1.75rem, 3vw, 2.3rem)',
                        fontWeight: 900,
                        color: project.accentColor,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {project.number}. {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.3rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: '#a0a5c0',
                      maxWidth: '900px',
                      lineHeight: 1.6,
                      marginBottom: '1rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tag Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          padding: '0.25rem 0.75rem',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: '#e2e8f0',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Full Mockup Card Display */}
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    background: '#070814',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} UI UX Design Mockup`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: project.id === 'jewelry-ecommerce' ? '900px' : '650px',
                      objectFit: project.id === 'jewelry-ecommerce' ? 'cover' : 'contain',
                      display: 'block',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                    }}
                  />

                  {/* Hover Overlay Button */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(10, 11, 26, 0.4)',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    <button
                      className="glow-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      style={{
                        padding: '0.9rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 800,
                      }}
                    >
                      <Maximize2 size={18} />
                      <span>Explore Case Study & Hi-Res UI</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal Deep Dive */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(6, 7, 18, 0.88)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              position: 'relative',
              background: '#0d0f22',
              border: `1px solid ${selectedProject.accentColor}`,
              boxShadow: `0 0 60px ${selectedProject.glowColor}`,
              color: '#ffffff',
            }}
          >
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = selectedProject.accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
            >
              <X size={22} />
            </button>

            {/* Header Title */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '1rem', fontWeight: 800, color: selectedProject.accentColor, marginBottom: '0.4rem' }}>
                {selectedProject.number} — {selectedProject.categoryLabel}
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.75rem', lineHeight: 1.15 }}>
                {selectedProject.title}
              </h2>
              <p style={{ color: '#a0a5c0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {selectedProject.description}
              </p>
            </div>

            {/* Full Image Preview */}
            <div
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                marginBottom: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: '#000000',
              }}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            {/* Features List */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Sparkles size={20} color={selectedProject.accentColor} /> Key Design Features & Capabilities
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {selectedProject.features.map((feat, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                  >
                    <CheckCircle2 size={18} color={selectedProject.accentColor} style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.95rem', color: '#e2e8f0', lineHeight: 1.5 }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Details: Problem & Impact */}
            {selectedProject.fullDetails && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
                <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ff6b6b', marginBottom: '0.75rem' }}>
                    UX Problem & Research
                  </h4>
                  <p style={{ color: '#a0a5c0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {selectedProject.fullDetails.problem}
                  </p>
                </div>

                <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: selectedProject.accentColor, marginBottom: '0.75rem' }}>
                    Design Solution & Architecture
                  </h4>
                  <p style={{ color: '#a0a5c0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {selectedProject.fullDetails.solution}
                  </p>
                </div>
              </div>
            )}

            {/* Action Bottom */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button
                onClick={() => setSelectedProject(null)}
                className="glow-btn"
                style={{ padding: '0.8rem 2rem' }}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
