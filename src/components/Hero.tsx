
import React from 'react';
import { ChevronDown, Award, Building2, GraduationCap } from 'lucide-react';
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
            Building Bridges Between<br />
            <span className="text-primary-contrast">Basque Heritage</span>,{' '}
            <span className="text-accent-contrast">Silicon Valley Tech</span> and{' '}
            <span className="text-secondary-contrast">African Innovation</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8 animate-fade-in-delay">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-16 animate-fade-in-delay-2 max-w-5xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-delay-3">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10+</div>
              <div className="text-muted-foreground">{t('hero.stats.experience')}</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">6</div>
              <div className="text-muted-foreground">{t('hero.stats.companies')}</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5</div>
              <div className="text-muted-foreground">{t('hero.stats.countries')}</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-4">
            <a
              href="#contact"
              className="glass-button px-8 py-4 text-foreground font-medium rounded-xl transition-all duration-300 hover-lift"
            >
              {t('hero.cta1')}
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl transition-all duration-300 hover-lift"
            >
              {t('hero.cta2')}
              <ChevronDown size={20} className="ml-2" />
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
