
import React from 'react';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-headline text-foreground mb-6">About Me</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-6">
            Passionate about building products that make a difference
          </p>
          <blockquote className="text-xl font-medium text-primary italic max-w-4xl mx-auto border-l-4 border-primary/30 pl-6 bg-primary/5 rounded-lg p-6">
            "I believe in the power of technology to solve complex problems and create meaningful impact."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a seasoned 360 product manager and entrepreneur with over a decade of experience building innovative solutions
                across fintech, data analytics, and IoT industries. My expertise spans the full spectrum from coding to business 
                strategy and marketing. I recently completed my role leading the payments team at KingMakers in 2025, and I'm 
                currently Creative Farmer at Bizkardo Lab (Stealth mode), where I'm working on the next generation of innovative solutions.
              </p>
              
              <p className="text-lg leading-relaxed">
                As a Global Lecturer at NYU Stern School of Business, I'm passionate about bridging the gap between
                technology and society, teaching the next generation of innovators about the transformative power of technology.
              </p>
              
              <p className="text-lg leading-relaxed">
                My entrepreneurial journey spans multiple successful ventures, from co-founding Graphext, a no-code data
                visualization platform, to serving as Group Product Manager at CoverWallet, a data-driven insurtech platform 
                that accelerates and modernizes insurance acquisition, placement and servicing utilizing purely digital tools 
                for the 2nd largest insurance brokerage firm in the world, Aon. There, I led multiple product groups focused 
                on data analytics and digital transformation.
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
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">6</div>
                <div className="text-muted-foreground text-sm">Companies</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">3</div>
                <div className="text-muted-foreground text-sm">Languages</div>
              </div>
              
              <div className="glass-card p-6 rounded-2xl text-center hover-lift">
                <div className="flex justify-center mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">5</div>
                <div className="text-muted-foreground text-sm">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
