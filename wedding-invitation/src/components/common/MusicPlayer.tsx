import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
export function MusicPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    ref.current
      ?.play()
      .then(() => setOn(true))
      .catch(() => {});
  }, []);
  return (
    <>
      <audio ref={ref} src={src} loop />
      <button
        className="music"
        onClick={() => {
          if (!ref.current) return;
          if (ref.current.paused) {
            ref.current.play();
            setOn(true);
          } else {
            ref.current.pause();
            setOn(false);
          }
        }}
      >
        {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
}
