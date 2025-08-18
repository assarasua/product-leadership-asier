import React from 'react';
import { Building2, Award, GraduationCap, Shield, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
  const { t } = useTranslation();
  
  const achievements = [
    {
      text: t('mission.achievementsList.0'),
      icon: <Award size={20} />
    },
    {
      text: t('mission.achievementsList.1'),
      icon: <GraduationCap size={20} />
    },
    {
      text: t('mission.achievementsList.2'),
      icon: <Shield size={20} />
    },
    {
      text: t('mission.achievementsList.3'),
      icon: <Award size={20} />
    },
    {
      text: t('mission.achievementsList.4'),
      icon: <Building2 size={20} />
    },
    {
      text: t('mission.achievementsList.5'),
      icon: <Award size={20} />
    },
    {
      text: t('mission.achievementsList.6'),
      icon: <Users size={20} />
    },
    {
      text: t('mission.achievementsList.7'),
      icon: <Award size={20} />
    },
    {
      text: t('mission.achievementsList.8'),
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="mission" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('mission.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {achievements.slice(0, 4).map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-200 mb-4"
              >
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">{achievement.icon}</div>
                  <p className="text-gray-300 text-lg leading-relaxed">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {achievements.slice(4, 8).map((achievement, index) => (
              <div
                key={index + 4}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-colors duration-200 mb-4"
              >
                <div className="flex items-start">
                  <div className="text-blue-400 mr-4 mt-1">{achievement.icon}</div>
                  <p className="text-gray-300 text-lg leading-relaxed">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* YouTube Video Embed */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative aspect-video bg-gray-800/50 rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/lHFQYvocWf8"
              title="Webit Festival 2016 - Speaker Video"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;