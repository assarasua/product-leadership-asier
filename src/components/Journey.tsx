
import React from 'react';
import { Calendar, MapPin, Trophy, Target } from 'lucide-react';

const Journey = () => {
  const timelineItems = [
    {
      year: "2002",
      title: "The Spark",
      subtitle: "First African Journey",
      description: "At age 8, traveled to Kenya and Tanzania with parents, sparking a lifelong connection to Africa that would later define my professional mission.",
      icon: <MapPin size={24} />,
      color: "bg-red-500"
    },
    {
      year: "Karmacracy Era",
      title: "The Foundation",
      subtitle: "Discovering Product Sense Through Gamification",
      description: "My journey into understanding user behavioral change began at Karmacracy, a pioneering Spanish startup founded by Alex Dolara. Working alongside Alex, I discovered the profound impact of game mechanics on user engagement and behavior modification.",
      detailed: "At Karmacracy, I learned to be a power user of gamification principles, understanding how elements like karma points, levels, badges, and social competition could drive authentic user engagement. Alex Dolara became an instrumental mentor who brought product sense and gamification expertise into my professional development.",
      icon: <Target size={24} />,
      color: "bg-purple-500",
      special: true
    },
    {
      year: "2019",
      title: "The Summit",
      subtitle: "Zegama Aizkorri Marathon",
      description: "Completed the prestigious World Cup mountain marathon in 7:49:46, finishing 395th overall. This 42.2km race with 2,853m elevation gain exemplifies my philosophy: 'No mountain is high enough when you combine authentic leadership with strategic vision.'",
      icon: <Trophy size={24} />,
      color: "bg-orange-500"
    },
    {
      year: "2022",
      title: "Leadership Forged",
      subtitle: "Diani Beach Workshop",
      description: "During a transformative workshop in Kenya, established core leadership principles through interactions with local mentors like Omari and Nouha. Learned the critical importance of listening to local perspectives and understanding daily realities.",
      icon: <Calendar size={24} />,
      color: "bg-green-500"
    },
    {
      year: "2025",
      title: "The Mission",
      subtitle: "African Fintech Innovation",
      description: "Leading payment infrastructure development across Africa at KingMakers, building frictionless deposit and withdrawal experiences that serve diverse markets while respecting local contexts.",
      icon: <Target size={24} />,
      color: "bg-blue-500",
      current: true
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Journey</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-purple-500 via-orange-500 via-green-500 to-blue-500"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline marker */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white shadow-lg ${
                  item.current ? 'ring-4 ring-blue-400 ring-opacity-50' : ''
                }`}>
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
              }`}>
                <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 ${
                  item.special ? 'border-purple-500/50 bg-purple-900/20' : ''
                }`}>
                  <div className="text-sm text-gray-400 font-medium mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <h4 className="text-lg text-blue-400 font-medium mb-4">{item.subtitle}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                  {item.detailed && (
                    <p className="text-gray-400 text-sm leading-relaxed italic">{item.detailed}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
