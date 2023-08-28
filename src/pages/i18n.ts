// i18n.ts
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../locales/en/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationAR from '../locales/ar/translation.json';
import { initReactI18next } from 'react-i18next'; // Import initReactI18next

i18n.use(LanguageDetector)
  .use(initReactI18next) // Initialize react-i18next
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      ar: { translation: translationAR },
    },
    fallbackLng: 'en',
    debug: true, // Set to false in production
  });

export default i18n;
