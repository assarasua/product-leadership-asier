import React from 'react';
import { Calendar, MapPin, Trophy, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Journey = () => {
  const { t } = useTranslation();
  
  const timelineItems = [
    {
      year: "2002",
      title: t('journey.items.spark.title'),
      subtitle: t('journey.items.spark.subtitle'),
      description: t('journey.items.spark.description'),
      icon: <MapPin size={24} />,
      color: "bg-red-500"
    },
    {
      year: "Karmacracy Era",
      title: t('journey.items.foundation.title'),
      subtitle: t('journey.items.foundation.subtitle'),
      description: t('journey.items.foundation.description'),
      detailed: t('journey.items.foundation.detailed'),
      icon: <Target size={24} />,
      color: "bg-purple-500",
      special: true
    },
    {
      year: "2019",
      title: t('journey.items.summit.title'),
      subtitle: t('journey.items.summit.subtitle'),
      description: t('journey.items.summit.description'),
      icon: <Trophy size={24} />,
      color: "bg-orange-500"
    },
    {
      year: "2022",
      title: t('journey.items.leadership.title'),
      subtitle: t('journey.items.leadership.subtitle'),
      description: t('journey.items.leadership.description'),
      icon: <Calendar size={24} />,
      color: "bg-green-500"
    },
    {
      year: "2025",
      title: t('journey.items.mission.title'),
      subtitle: t('journey.items.mission.subtitle'),
      description: t('journey.items.mission.description'),
      icon: <Target size={24} />,
      color: "bg-blue-500"
    },
    {
      year: "Future",
      title: t('journey.items.vision.title'),
      subtitle: t('journey.items.vision.subtitle'),
      description: t('journey.items.vision.description'),
      icon: <Eye size={24} />,
      color: "bg-indigo-500",
      current: true
    }
  ];

  return (
    <section id="journey" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('journey.title')}</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-purple-500 via-orange-500 via-green-500 via-blue-500 to-indigo-500"></div>

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