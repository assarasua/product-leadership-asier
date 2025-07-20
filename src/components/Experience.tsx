import React from 'react';
import { Building2, Calendar, MapPin, Award, CreditCard, Shield } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Creative Farmer",
      company: "Bizkardo Lab (Stealth mode)",
      period: "2025 - Present",
      location: "Ibarra & Globally",
      description: "Digital and physical artisan, developing e2e solutions to impact local and globally",
      highlights: ["Innovation", "Product Strategy", "Stealth Development"],
      current: true
    },
    {
      title: "Senior Staff Product Manager, Payments",
      company: "KingMakers",
      period: "2024 - 2025",
      location: "Madrid, Spain",
      description: "Led payments team and product strategy for African markets, focusing on frictionless payment experiences across multiple countries",
      highlights: ["African Markets", "Payment Strategy", "Team Leadership"]
    },
    {
      title: "Global Lecturer",
      company: "NYU Stern School of Business",
      period: "2018 - Present",
      location: "New York, NY",
      description: "Teaching Information Technology in Business and Society, focusing on the intersection of technology and society",
      highlights: ["Education", "Technology & Society", "Business Innovation"],
      current: true
    },
    {
      title: "Group Product Manager",
      company: "CoverWallet (Aon company)",
      period: "2020 - 2024",
      location: "Madrid, Spain",
      description: "Launched scalable payment solutions across multiple countries in the highly regulated insurance industry: Argentina, USA, Spain, Portugal, and France. Implemented diverse payment methods including paper check, cards, bank transfer, ACH, and Apple Pay for both agents and customers. Ensured PCI compliance across 30+ brands with multiple operation models and regulations.",
      highlights: ["5 Countries", "30+ Brands", "6 Payment Methods", "PCI Compliance"],
      achievement: true
    },
    {
      title: "Head of Customer Success & Product Manager",
      company: "Graphext",
      period: "2018 - 2020",
      location: "Madrid, Spain",
      description: "Among the first employees at this data visualization platform, managed product development and customer success",
      highlights: ["Early Employee", "Data Visualization", "Customer Success"]
    },
    {
      title: "Chief Marketing Officer",
      company: "MainTool",
      period: "2014 - 2017",
      location: "Madrid, Spain",
      description: "Among the first employees, led marketing strategy and brand development for IoT and technology solutions",
      highlights: ["Early Employee", "Marketing Strategy", "Brand Development"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-headline text-foreground mb-6">Professional Experience</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Building innovative products across global markets
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
                            Current
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
                    <span className="font-semibold">Key Achievement</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">5</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">30+</div>
                      <div className="text-xs text-muted-foreground">Brands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">6</div>
                      <div className="text-xs text-muted-foreground">Payment Methods</div>
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