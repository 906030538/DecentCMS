import en from './locales/en';
import ja from './locales/ja';
import zhCN, { type MessageKey } from './locales/zh-CN';
import zhTW from './locales/zh-TW';

export type { MessageKey };

export type Locale = 'zh-CN' | 'zh-TW' | 'en' | 'ja';

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
];

export const DEFAULT_LOCALE: Locale = 'zh-CN';

/** 带路径前缀的非默认语言（[locale] 路由树使用） */
export const NON_DEFAULT_LOCALES: Locale[] = ['zh-TW', 'en', 'ja'];

const dicts: Record<Locale, Record<MessageKey, string>> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  en,
  ja,
};

export function normalizeLocale(locale: string | undefined): Locale {
  if (locale && locale in dicts) return locale as Locale;
  return DEFAULT_LOCALE;
}

export function t(locale: Locale, key: MessageKey): string {
  return dicts[locale][key];
}

/** 生成带语言前缀的路径（默认语言不带前缀） */
export function localePath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? normalized : `/${locale}${normalized}`;
}
