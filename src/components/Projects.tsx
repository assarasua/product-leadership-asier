
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  const websites = [
    { name: "Gipuzkoa Foodie", url: "https://gipuzkoafoodie.eu/" },
    { name: "Product Digest", url: "https://productdigest.es/" },
    { name: "Belako", url: "https://belako.bizkardolab.eu/" },
    { name: "Hutech", url: "https://hutech.tech/" },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('portfolio.title')}</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio.githubTitle')}</h3>
            <p className="text-gray-400 mb-6">{t('portfolio.githubDescription')}</p>
            <a
              href="https://github.com/assarasua"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
            >
              <Github size={18} className="mr-2" />
              github.com/assarasua
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('portfolio.websitesTitle')}</h3>
            <div className="space-y-3">
              {websites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors duration-200"
                >
                  <span className="text-white font-medium">{site.name}</span>
                  <ExternalLink size={18} className="text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
