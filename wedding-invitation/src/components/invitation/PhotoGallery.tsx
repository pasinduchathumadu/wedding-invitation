// [AI] - START
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
// [AI] - END
import type { GalleryImage } from "../../types/wedding";

// [AI] - START
const ROTATE_INTERVAL_MS = 4000;
const MOVE_TRANSITION = { duration: 1, ease: "easeInOut" } as const;
// [AI] - END

export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  // [AI] - START
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState(images);

  useEffect(() => {
    setOrder(images);
  }, [images]);

  // Every few seconds the last photo moves into the first slot and the rest shift along.
  useEffect(() => {
    if (reduceMotion || images.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setOrder((current) => [current[current.length - 1], ...current.slice(0, -1)]);
    }, ROTATE_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [images, reduceMotion]);
  // [AI] - END

  return (
    <section className="section cream center">
      <span className="eyebrow">Our memories</span>
      <h2>A Few Moments</h2>
      <div className="gallery">
        {
          // [AI] - START
        }
        {order.map((x, i) => (
          <motion.figure
            className={`gallery-${i}`}
            key={x.src}
            layout
            transition={MOVE_TRANSITION}
            whileHover={{ y: -4 }}
          >
            {
              // [AI] - START
            }
            <motion.img layout transition={MOVE_TRANSITION} src={x.src} alt={x.alt} />
            <motion.figcaption layout="position" transition={MOVE_TRANSITION}>
              {x.caption}
            </motion.figcaption>
            {
              // [AI] - END
            }
          </motion.figure>
        ))}
        {
          // [AI] - END
        }
      </div>
    </section>
  );
}