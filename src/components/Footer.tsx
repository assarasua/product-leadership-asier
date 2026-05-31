
import React from 'react';
import { Github, Linkedin, Mail, Heart, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Asier Sarasua Amundarain</h3>
            <p className="text-gray-400">{t('footer.subtitle')}</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/assarasua"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/asarasua/"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/assarasua"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="X"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:asier@bizkardolab.eu"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="mb-6">
            <LanguageSwitcher />
          </div>
          <p className="text-gray-400 flex items-center justify-center text-center">
            {t('footer.tagline')} <Heart size={16} className="mx-2 text-red-500" /> © 2025 Asier Sarasua Amundarain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
