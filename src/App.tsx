import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0b1a', color: '#ffffff' }}>
      {/* Navigation Bar */}
      <Navbar onOpenHireModal={handleOpenContact} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero onOpenHireModal={handleOpenContact} />
        <CaseStudies />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
