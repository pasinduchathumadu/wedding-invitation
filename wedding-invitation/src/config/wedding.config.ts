import type { WeddingConfig } from '../types/wedding';

const base = import.meta.env.BASE_URL;

export const weddingConfig: WeddingConfig = {
  groomName: 'Pasindu',
  brideName: 'Hashini',
  weddingDate: '2027-01-20',
  weddingTime: '08:30 AM',
  startTime: '10:30 AM',
  endTime: '03:30 PM',
  venue: 'Green Shadow Wedding Hall',
  address: '44RF+537, Hikkaduwa - Baddegama Road, Pathana,, Hikkaduwa',
  quote: 'Two hearts, one journey, one beautiful beginning.',
  message: 'With joyful hearts, we invite you to share in the happiness of our wedding day and celebrate this beautiful beginning with us.',
  mapsUrl: 'https://maps.app.goo.gl/4n9j2SfLYXBmgvtv7',
  heroImage: `${base}images/hero/wedding-hero.jpeg`,
  previewImage: `${base}images/preview/wedding-preview.jpeg`,
  music: `${base}music/wedding-music.mp3`,
  events: [
    { title: 'Wedding Ceremony', date: '20 January 2027', time: '08:00 AM', venue: 'Green Shadow Wedding Hall', description: 'Join us as we begin our journey together.' },
    { title: 'Reception', date: '20 January 2027', time: '03:30 PM', venue: 'Reception Hall', description: 'Dinner, music and memories with our loved ones.' }
  ],
  gallery: [1, 2, 3, 4].map((n) => ({
    src: `${base}images/gallery/photo-${n}.jpeg`,
    alt: `Wedding photo ${n}`,
    caption: ['A beautiful beginning', 'Together, always', 'Our journey', 'The moment'][n - 1]
  }))
};
