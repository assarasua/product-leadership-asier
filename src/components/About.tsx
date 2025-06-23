
import React from 'react';
import { MapPin, Heart, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Ibarra to Africa</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Born in the rolling hills of <strong className="text-orange-400">Ibarra, Basque Country</strong>, my journey began at the family farm <em>Bizkardo baserria</em>, where my mother and grandmother taught me the essence of customer excellence through their authentic dedication to their craft.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                My father built resilience into my character, preparing me for the challenges that would define my path. These early lessons in <em className="text-orange-400">Lan Egiati</em> (honest work) became the foundation for everything that followed.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                For <strong className="text-red-400">23 years, Africa has been calling my name</strong>. What started as a transformative journey to Kenya and Tanzania in 2002 has evolved into a mission to revolutionize financial experiences across the continent, shaped by formative experiences in gamification and user behavioral change.
              </p>
            </div>
            <a
              href="#journey"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Discover The Journey
            </a>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 backdrop-blur-sm border border-orange-700/30">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">AS</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Asier Sarasua</h4>
                <p className="text-gray-300 mb-4">Product Leader & Innovation Catalyst</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    Madrid, Spain • Basque Heritage
                  </div>
                  <div className="flex items-center justify-center text-gray-400">
                    <Heart size={16} className="mr-2" />
                    23 Years Connected to Africa
                  </div>
                  <div className="flex items-center justify-center text-gray-400">
                    <Mountain size={16} className="mr-2" />
                    Zegama Aizkorri Finisher
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
