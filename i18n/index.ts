import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './resources/en';
import { fr } from './resources/fr';

i18n.use(initReactI18next).init({
  resources: {
    en,
    fr,
  },
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
