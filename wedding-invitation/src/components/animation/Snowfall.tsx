// [AI] - START
import type { CSSProperties } from "react";

// Fixed pseudo-random spreads so the layout is stable across renders.
const FLAKES = Array.from({ length: 30 }, (_, i) => ({
  left: `${(i * 41) % 100}%`,
  size: 3 + (i % 5),
  delay: `${-((i * 1.7) % 12)}s`,
  duration: `${10 + (i % 6) * 2}s`,
  drift: `${(i % 2 === 0 ? 1 : -1) * (15 + (i % 4) * 10)}px`,
}));

const HEARTS = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 23 + 7) % 100}%`,
  size: 12 + (i % 3) * 4,
  delay: `${-((i * 2.3) % 14)}s`,
  duration: `${13 + (i % 4) * 2}s`,
  drift: `${(i % 2 === 0 ? -1 : 1) * (20 + (i % 3) * 10)}px`,
}));

// Decorative falling snow and hearts; place it as a child of an element with the `has-snow` class.
export function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {HEARTS.map((heart, i) => (
        <span
          key={`heart-${i}`}
          className="snow-heart"
          style={
            {
              left: heart.left,
              fontSize: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              "--drift": heart.drift,
            } as CSSProperties
          }
        >
          ♥
        </span>
      ))}
      {FLAKES.map((flake, i) => (
        <span
          key={i}
          className="snowflake"
          style={
            {
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animationDelay: flake.delay,
              animationDuration: flake.duration,
              "--drift": flake.drift,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
// [AI] - END