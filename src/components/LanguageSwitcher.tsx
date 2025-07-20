import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', flag: 'gb' },
    { code: 'eu', name: 'Euskera', flag: 'es-pv' },
    { code: 'es', name: 'Español', flag: 'es' },
    { code: 'gl', name: 'Galego', flag: 'es-ga' },
    { code: 'ca', name: 'Català', flag: 'es-ct' },
  ];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-800 ${
            i18n.language === lang.code
              ? 'bg-gray-800 text-white'
              : 'text-gray-400 hover:text-white'
          }`}
          title={lang.name}
        >
          <img
            src={`https://flagicons.lipis.dev/flags/4x3/${lang.flag}.svg`}
            alt={`${lang.name} flag`}
            className="w-5 h-4 object-cover rounded-sm"
          />
          <span className="text-sm font-medium">{lang.name}</span>
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;