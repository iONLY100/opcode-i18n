import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@/locales/en.json';
import zhCN from '@/locales/zh-CN.json';

export const resources = {
  en: { translation: en },
  'zh-CN': { translation: zhCN },
};

export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文' },
] as const;

export type SupportedLanguage = typeof supportedLanguages[number]['code'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages.map(l => l.code),
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'opcode-language',
    },
  });

export default i18n;

/**
 * Get current language code
 */
export const getCurrentLanguage = (): SupportedLanguage => {
  return i18n.language as SupportedLanguage;
};

/**
 * Change language and persist to localStorage
 */
export const changeLanguage = async (lang: SupportedLanguage) => {
  await i18n.changeLanguage(lang);
  localStorage.setItem('opcode-language', lang);
};

/**
 * Get display name for current language
 */
export const getCurrentLanguageDisplayName = () => {
  const lang = supportedLanguages.find(l => l.code === i18n.language);
  return lang?.nativeName || 'English';
};
