
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and scalable code following best practices."
    },
    {
      icon: <Palette size={32} />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces that enhance user experience."
    },
    {
      icon: <Zap size={32} />,
      title: "Fast Performance",
      description: "Building lightning-fast applications optimized for speed and performance."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <p className="text-gray-400 mb-4">
              Started my journey in web development 5 years ago, and I've been passionate about
              creating amazing digital experiences ever since. I specialize in React, Node.js,
              and modern web technologies.
            </p>
            <p className="text-gray-400 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open source projects, or sharing knowledge with the developer community.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Let's Work Together
            </a>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-bold text-white mb-2">John Doe</h4>
                <p className="text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-colors duration-200"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
