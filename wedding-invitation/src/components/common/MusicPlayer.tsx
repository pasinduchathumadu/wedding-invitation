import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
export function MusicPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  // [AI] - START
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [on, setOn] = useState(false);

  // Music is on by default. If the browser blocks autoplay, start it on the
  // guest's next tap or key press, except a tap on the music button itself,
  // which the guest uses to choose on or off.
  useEffect(() => {
    const audio = ref.current;
    if (!audio) return;

    const removeRetry = () => {
      window.removeEventListener("pointerdown", retry);
      window.removeEventListener("keydown", retry);
    };

    function retry(event: Event) {
      if (buttonRef.current?.contains(event.target as Node)) {
        removeRetry();
        return;
      }
      audio?.play().then(removeRetry).catch(() => {});
    }

    audio.play().catch(() => {
      window.addEventListener("pointerdown", retry);
      window.addEventListener("keydown", retry);
    });

    return () => {
      removeRetry();
      audio.pause();
    };
  }, []);

  function toggle() {
    const audio = ref.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }

  return (
    <>
      <audio
        ref={ref}
        src={src}
        loop
        onPlay={() => setOn(true)}
        onPause={() => setOn(false)}
      />
      <button
        ref={buttonRef}
        className="music"
        aria-label={on ? "Turn music off" : "Turn music on"}
        onClick={toggle}
      >
        {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
    </>
  );
  // [AI] - END
}