import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Language mapping based on regions
const getLanguageByCountry = (country: string): string => {
  const countryToLanguage: { [key: string]: string } = {
    'ES': 'es', // Spain
    'AD': 'ca', // Andorra (Catalan)
    'FR': 'eu', // France (for Basque regions)
    'US': 'en', // United States
    'GB': 'en', // United Kingdom
    'IE': 'en', // Ireland
    'CA': 'en', // Canada
    'AU': 'en', // Australia
    'NZ': 'en', // New Zealand
    'ZA': 'en', // South Africa
    'MX': 'es', // Mexico
    'AR': 'es', // Argentina
    'CL': 'es', // Chile
    'CO': 'es', // Colombia
    'PE': 'es', // Peru
    'VE': 'es', // Venezuela
    'EC': 'es', // Ecuador
    'BO': 'es', // Bolivia
    'PY': 'es', // Paraguay
    'UY': 'es', // Uruguay
    'CR': 'es', // Costa Rica
    'PA': 'es', // Panama
    'GT': 'es', // Guatemala
    'HN': 'es', // Honduras
    'SV': 'es', // El Salvador
    'NI': 'es', // Nicaragua
    'CU': 'es', // Cuba
    'DO': 'es', // Dominican Republic
    'PR': 'es', // Puerto Rico
  };

  return countryToLanguage[country] || 'en'; // Default to English
};

export const useGeolocation = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if language is already set in localStorage
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && savedLanguage !== 'en') {
      return; // Don't override user's choice
    }

    // Try to get IP geolocation
    const detectLocation = async () => {
      try {
        // Use ipapi.co for geolocation (free tier)
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const detectedLanguage = getLanguageByCountry(data.country_code);
          
          // Only change language if it's different from current and not already set by user
          if (detectedLanguage !== i18n.language && !savedLanguage) {
            i18n.changeLanguage(detectedLanguage);
          }
        }
      } catch (error) {
        // Fallback: try to detect from browser language
        const browserLang = navigator.language.split('-')[0];
        const supportedLanguages = ['en', 'es', 'eu', 'gl', 'ca'];
        
        if (supportedLanguages.includes(browserLang) && browserLang !== i18n.language) {
          i18n.changeLanguage(browserLang);
        }
      }
    };

    detectLocation();
  }, [i18n]);
};