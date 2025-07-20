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
    }
  ];

  return (
    <section id="mission" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('mission.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mission Overview */}
          <div>
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-700/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Building2 size={40} className="text-blue-400 mr-4" />
                <div>
                  <h3 className="text-3xl font-bold text-blue-300">{t('mission.company')}</h3>
                  <p className="text-xl text-gray-300">{t('mission.role')}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('mission.description')}
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-blue-600/20 rounded-lg p-4">
                  <Globe size={32} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
                <div className="bg-green-600/20 rounded-lg p-4">
                  <Users size={32} className="text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">PCI Compliance</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">{t('mission.achievements')}</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 hover:bg-gray-800/70 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <div className="text-blue-400 mr-3 mt-1">{achievement.icon}</div>
                    <p className="text-gray-300 leading-relaxed">{achievement.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;