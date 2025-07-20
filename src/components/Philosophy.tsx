import React from 'react';
import { Users, Eye, HandHeart, Zap, RotateCcw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Philosophy = () => {
  const { t } = useTranslation();
  
  const basqueValues = [
    {
      term: t('philosophy.values.lanEgiati.term'),
      meaning: t('philosophy.values.lanEgiati.meaning'),
      application: t('philosophy.values.lanEgiati.application'),
      icon: <HandHeart size={32} />
    },
    {
      term: t('philosophy.values.gardentasuna.term'),
      meaning: t('philosophy.values.gardentasuna.meaning'),
      application: t('philosophy.values.gardentasuna.application'),
      icon: <Eye size={32} />
    },
    {
      term: t('philosophy.values.auzolan.term'),
      meaning: t('philosophy.values.auzolan.meaning'),
      application: t('philosophy.values.auzolan.application'),
      icon: <Users size={32} />
    }
  ];

  const frameworks = [
    {
      name: t('philosophy.frameworks.slowDown.name'),
      description: t('philosophy.frameworks.slowDown.description'),
      icon: <Zap size={32} />
    },
    {
      name: t('philosophy.frameworks.backwardThinking.name'),
      description: t('philosophy.frameworks.backwardThinking.description'),
      icon: <RotateCcw size={32} />
    }
  ];

  return (
    <section id="philosophy" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('philosophy.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Basque Values */}
          <div>
            <h3 className="text-3xl font-bold text-orange-400 mb-8 text-center">{t('philosophy.basqueValues')}</h3>
            <div className="space-y-6">
              {basqueValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-700/30 rounded-xl p-6"
                >
                  <div className="flex items-start">
                    <div className="text-orange-400 mr-4 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-300 mb-2">{value.term}</h4>
                      <p className="text-orange-200 font-medium mb-3">{value.meaning}</p>
                      <p className="text-gray-300 leading-relaxed">{value.application}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Frameworks */}
          <div>
            <h3 className="text-3xl font-bold text-blue-400 mb-8 text-center">{t('philosophy.leadershipFrameworks')}</h3>
            <div className="space-y-6">
              {frameworks.map((framework, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-700/30 rounded-xl p-6"
                >
                  <div className="flex items-start">
                    <div className="text-blue-400 mr-4 mt-1">{framework.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-blue-300 mb-4">{framework.name}</h4>
                      <p className="text-gray-300 leading-relaxed">{framework.description}</p>
                    </div>
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

export default Philosophy;