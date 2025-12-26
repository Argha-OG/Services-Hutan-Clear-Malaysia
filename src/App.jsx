import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import ExtraServices from './components/home/ExtraServices';
import CTABanner from './components/home/CTABanner';
import Gallery from './components/home/Gallery';
import Videos from './components/home/Videos';
import Testimonials from './components/home/Testimonials';
import Locations from './components/home/Locations';
import About from './components/home/About';
import FAQ from './components/home/FAQ';
import WhatsAppButton from './components/common/WhatsAppButton';
import CursorFollower from './components/ui/CursorFollower';
import ScrollEffects from './components/ui/ScrollEffects';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-primary/30">
      <ScrollEffects>
        <CursorFollower />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <ExtraServices />
          <Gallery />
          <Videos />
          <Testimonials />
          <Locations />
          <FAQ />
          <CTABanner />
        </main>

        <Footer />
        <WhatsAppButton />
      </ScrollEffects>
    </div>
  );
}

export default App;
