import React from 'react';
import { Building2, Calendar, MapPin, Award, CreditCard, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation();
  
  const experiences = [
    {
      title: t('experience.roles.creativeFarmer'),
      company: t('experience.companies.bizkardo'),
      period: "2025 - Present",
      location: "Ibarra & Globally",
      description: t('experience.descriptions.bizkardo'),
      highlights: ["Innovation", "Product Strategy", "Product Execution"],
      current: true
    },
    {
      title: t('experience.roles.headProductIncubationOps'),
      company: t('experience.companies.hutech'),
      period: "2025 - Present",
      location: "San Diego, United States",
      description: t('experience.descriptions.hutech'),
      highlights: ["Product Incubation", "Operations", "Venture Building"],
      current: true
    },
    {
      title: t('experience.roles.b2bPartnerships'),
      company: t('experience.companies.ultrahuman'),
      period: "2025 - Present",
      location: "Global",
      description: t('experience.descriptions.ultrahuman'),
      highlights: ["B2B Partnerships", "HealthTech", "Growth"],
      current: true
    },
    {
      title: t('experience.roles.globalLecturer'),
      company: t('experience.companies.nyu'),
      period: "2018 - Present",
      location: "Madrid, Spain",
      description: t('experience.descriptions.nyu'),
      highlights: ["Education", "Technology & Society", "Business Innovation"],
      current: true
    },
    {
      title: t('experience.roles.seniorStaffPM'),
      company: t('experience.companies.kingmakers'),
      period: "2024 - 2025",
      location: "Madrid, Spain",
      description: t('experience.descriptions.kingmakers'),
      highlights: ["African Markets", "Payment Strategy", "Team Leadership"]
    },
    {
      title: t('experience.roles.groupPM'),
      company: t('experience.companies.coverwallet'),
      period: "2020 - 2024",
      location: "Madrid, Spain",
      description: t('experience.descriptions.coverwallet'),
      highlights: ["5 Countries", "30+ Brands", "6 Payment Methods", "PCI Compliance"],
      achievement: true
    },
    {
      title: t('experience.roles.headCustomerSuccess'),
      company: t('experience.companies.graphext'),
      period: "2018 - 2020",
      location: "Madrid, Spain",
      description: t('experience.descriptions.graphext'),
      highlights: ["Early Employee", "Data Visualization", "Customer Success"]
    },
    {
      title: t('experience.roles.cmo'),
      company: t('experience.companies.maintool'),
      period: "2014 - 2017",
      location: "Madrid, Spain",
      description: t('experience.descriptions.maintool'),
      highlights: ["IoT Products", "Go-to-Market", "B2B Growth"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-headline text-foreground mb-6">{t('experience.title')}</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl hover-lift animate-fade-in-delay-${index + 1} ${
                exp.achievement ? 'border-primary/30' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-3">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                        {exp.current && (
                          <span className="ml-2 px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                            {t('experience.current')}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{exp.period}</span>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    {exp.achievement && (
                      <div className="flex items-center text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.achievement 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-muted/50 text-muted-foreground'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {exp.achievement && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center text-primary mb-3">
                    <Shield className="w-5 h-5 mr-2" />
                    <span className="font-semibold">{t('experience.keyAchievement')}</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">5</div>
                      <div className="text-xs text-muted-foreground">{t('experience.countries')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">30+</div>
                      <div className="text-xs text-muted-foreground">{t('experience.brands')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">6</div>
                      <div className="text-xs text-muted-foreground">{t('experience.paymentMethods')}</div>
                    </div>
                    <div className="text-center flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
