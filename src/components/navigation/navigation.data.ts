import type { Navigation } from '@/interfaces/navigation'
interface Translations {
  ar: string;
  fr: string;
  en: string;
}

interface NavigationWithTranslations extends Navigation {
  translations: Translations;
}
// Translation object for ar
const arTranslations = {
  HOME: 'الصفحة الرئيسية',
  CLUBS: 'الأندية',
  Testimonial: 'الشهادات',
  Mentor: 'المرشدون',
}
const enTranslations = {
  HOME: 'HOME',
  CLUBS: 'CLUBS',
  Testimonial: 'Testimonial',
  Mentor: 'Mentor',
}
// Translation object for fr
const frTranslations = {
  HOME: 'ACCUEIL',
  CLUBS: 'CLUBS',
  Testimonial: 'Témoignages',
  Mentor: 'Mentor',
}

// Combine translations with paths to create the navigations array
export const navigations: NavigationWithTranslations[] = [
  {
    label:'HOME',
    path: '#',
    translations: {
      ar: arTranslations.HOME,
      fr: frTranslations.HOME,
      en: enTranslations.HOME,
    },
  },
  {
    label:'CLUBS',
    path: 'popular-course',
    translations: {
      ar: arTranslations.CLUBS,
      fr: frTranslations.CLUBS,
      en: enTranslations.CLUBS,
    },
  },
  {
    label:'Mentor',
    path: 'mentors',
    translations: {
      ar: arTranslations.Mentor,
      fr: frTranslations.Mentor,
      en: enTranslations.Mentor,
    },
  },
]

