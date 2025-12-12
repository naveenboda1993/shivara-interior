import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
