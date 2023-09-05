import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n';
import defaultMessages from '@/locales/en.json';
const locale = import.meta.env.VITE_LOCALE || 'en';
const fallbackLocale = import.meta.env.VITE_FALLBACK_LOCALE || 'en';
const loadedLocales: { [locale: string]: boolean } = {};

export async function loadLocaleMessages(locale: string): Promise<LocaleMessages<VueMessageType> | undefined> {
  if (loadedLocales[locale]) return;

  try {
    const { default: messages } = await import(`../locales/${locale}.json`);
    loadedLocales[locale] = true;
    return messages;
  } catch (error: unknown) {
    //  TODO: rewrite after decide what we deal with log
    console.warn('Unable to retrieve localization messages', (error as Error).message);
    return;
  }
}

export default createI18n({
  legacy: false,
  globalInjection: false,
  locale,
  fallbackLocale,
  messages: { [locale]: defaultMessages },
});
