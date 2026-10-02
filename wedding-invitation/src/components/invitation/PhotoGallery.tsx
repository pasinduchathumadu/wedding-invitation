import { motion } from "motion/react";
import type { GalleryImage } from "../../types/wedding";
export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  return (
    <section className="section cream center">
      <span className="eyebrow">Our memories</span>
      <h2>A Few Moments</h2>
      <div className="gallery">
        {images.map((x, i) => (
          <motion.figure
            className={`gallery-${i}`}
            key={x.src}
            whileHover={{ y: -4 }}
          >
            <img src={x.src} alt={x.alt} />
            <figcaption>{x.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
