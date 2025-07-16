
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Journey from '../components/Journey';
import Philosophy from '../components/Philosophy';
import Mission from '../components/Mission';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Journey />
      <Philosophy />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
