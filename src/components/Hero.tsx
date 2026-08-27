
import React from 'react';
import { ChevronDown, Award, Building2, GraduationCap, Linkedin, Twitter, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gen Z Africa-inspired animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container-wide z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 animate-fade-in leading-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 animate-fade-in-delay">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-delay-2 max-w-5xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

          {/* Social links */}
          <div className="flex gap-4 justify-center mb-16 animate-fade-in-delay-2">
            <a
              href="https://www.linkedin.com/in/asier-sarasua/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-button text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://x.com/assarasua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-button text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Twitter / X"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://github.com/assarasua"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass-button text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <a
              href="#contact"
              className="glass-button px-8 py-4 text-foreground font-medium rounded-xl transition-all duration-300 hover-lift"
            >
              {t('hero.cta1')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
