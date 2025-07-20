import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import eu from './locales/eu.json';
import es from './locales/es.json';
import gl from './locales/gl.json';
import ca from './locales/ca.json';

const resources = {
  en: { translation: en },
  eu: { translation: eu },
  es: { translation: es },
  gl: { translation: gl },
  ca: { translation: ca },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;