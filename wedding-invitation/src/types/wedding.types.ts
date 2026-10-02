export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  startTime: string;
  endTime: string;
  description?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface WeddingConfig {
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  address: string;
  quote: string;
  invitationMessage: string;
  mapsUrl: string;
  heroImage: string;
  previewImage: string;
  music: string;
  gallery: GalleryImage[];
  events: WeddingEvent[];
}