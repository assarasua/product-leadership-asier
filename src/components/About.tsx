
import React from 'react';
import { Award, Users, Globe, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-headline text-foreground mb-6">{t('about.title')}</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-6">
            {t('about.subtitle')}
          </p>
          <blockquote className="text-xl font-medium text-primary italic max-w-4xl mx-auto border-l-4 border-primary/30 pl-6 bg-primary/5 rounded-lg p-6">
            "{t('about.quote')}"
          </blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-lg leading-relaxed">
                {t('about.paragraph2')}
              </p>
              
              <p className="text-lg leading-relaxed">
                {t('about.paragraph3')}
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-delay-2">
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">10+</div>
                <div className="text-muted-foreground text-sm">{t('about.stats.experience')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">6</div>
                <div className="text-muted-foreground text-sm">{t('about.stats.companies')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">3</div>
                <div className="text-muted-foreground text-sm">{t('about.stats.languages')}</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">5</div>
                <div className="text-muted-foreground text-sm">{t('about.stats.countries')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
