import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/younes.jpg',
    name: 'Younes El GUERRAOUI',
    category: 'Coding Club',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'intilaka',
      logo: '/images/clubs/logos-05.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/karim.jpg',
    name: 'Karim AIT BENSAID',
    category: 'Kepler Astro Club',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Google',
      logo: '/images/clubs/logos-04.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/oussama.jpg',
    name: 'Oussama BOUFARRA',
    category: 'Gutenberg Club',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Airbnb',
      logo: '/images/clubs/logos-06.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/omar.jpg',
    name: 'Omar CHANA',
    category: 'PopCorn Club',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    company: {
      name: 'Microsoft',
      logo: '/images/clubs/logos-03.png',
    },
  },
]
