
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Building Bridges Between<br />
            <span className="text-orange-400">Basque Heritage</span>, <span className="text-blue-400">Silicon Valley Tech</span> and{' '}
            <span className="text-red-400">African Innovation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay max-w-4xl mx-auto">
            Senior Staff Product Manager at KingMakers, crafting frictionless payment experiences across Africa
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
            <span className="inline-block px-6 py-3 bg-blue-600/80 text-white rounded-full font-medium backdrop-blur-sm">
              Product Leader
            </span>
            <span className="inline-block px-6 py-3 bg-gray-700/80 text-white rounded-full font-medium backdrop-blur-sm">
              NYU Stern Lecturer
            </span>
            <span className="inline-block px-6 py-3 bg-orange-600/80 text-white rounded-full font-medium backdrop-blur-sm">
              23 Years Connected to Africa
            </span>
          </div>

          <div className="animate-fade-in-delay-3">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-lg"
            >
              Explore My Journey
              <ChevronDown size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
