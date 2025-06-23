
import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            John <span className="text-blue-400">Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-delay-2">
            I create beautiful, functional, and user-centered digital experiences
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
          <a
            href="https://github.com"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-white" />
          </a>
          <a
            href="mailto:john@example.com"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={24} className="text-white" />
          </a>
        </div>

        <div className="animate-fade-in-delay-4">
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get to know me
            <ChevronDown size={20} className="ml-2" />
          </a>
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
