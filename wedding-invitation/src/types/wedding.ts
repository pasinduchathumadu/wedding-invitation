export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
}
export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}
export interface WeddingConfig {
  groomName: string;
  brideName: string;
  weddingDate: string;
  weddingTime: string;
  startTime:string;
  endTime:string;
  venue: string;
  address: string;
  quote: string;
  message: string;
  mapsUrl: string;
  heroImage: string;
  previewImage: string;
  music: string;
  events: WeddingEvent[];
  gallery: GalleryImage[];
}
