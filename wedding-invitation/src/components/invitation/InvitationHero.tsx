// [AI] - START
import { motion, useReducedMotion, type Transition } from "motion/react";
// [AI] - END
import type { Invitation } from "../../types/invitation";
import type { WeddingConfig } from "../../types/wedding";
import { greeting } from "../../utils/invitation";

// [AI] - START
// Fixed pseudo-random spreads so the layout is stable across renders.
const PETALS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 10 + (i % 4) * 3,
  delay: `${(i * 1.3) % 9}s`,
  duration: `${9 + (i % 5) * 1.5}s`,
}));

const SPARKLES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${(i * 29) % 100}%`,
  delay: `${(i * 0.7) % 4}s`,
}));

// One loop: come together (2.2s), hold (5s), withdraw to the corners (1.5s).
const MEET_S = 2.2;
const HOLD_S = 5;
const WITHDRAW_S = 1.5;
const LOOP_S = MEET_S + HOLD_S + WITHDRAW_S;

const COUPLE_TRANSITION: Transition = {
  duration: LOOP_S,
  times: [0, MEET_S / LOOP_S, (MEET_S + HOLD_S) / LOOP_S, 1],
  ease: "easeInOut",
  delay: 0.6,
  repeat: Infinity,
};

const APART = { y: "18%", scale: 0.85, opacity: 0 };
const TOGETHER = { x: "0%", y: "0%", scale: 1, opacity: 1 };

function coupleKeyframes(apartX: string) {
  return {
    x: [apartX, TOGETHER.x, TOGETHER.x, apartX],
    y: [APART.y, TOGETHER.y, TOGETHER.y, APART.y],
    scale: [APART.scale, TOGETHER.scale, TOGETHER.scale, APART.scale],
    opacity: [APART.opacity, TOGETHER.opacity, TOGETHER.opacity, APART.opacity],
  };
}
const TEXT_DELAY_S = 2.4;
// [AI] - END

export function InvitationHero({
  invitation,
  config,
}: {
  invitation: Invitation;
  config: WeddingConfig;
}) {
  // [AI] - START
  const reduceMotion = useReducedMotion();
  // [AI] - END
  return (
    <section className="hero">
      {
        // [AI] - START
        // The painting is split at the couple's joined hands; each half glides
        // in from its lower corner so the groom and bride meet in the middle.
      }
      <div className="hero-couple">
        <motion.img
          className="hero-half hero-half-groom"
          src={config.heroImage}
          alt="Wedding couple"
          initial={reduceMotion ? false : { x: "-45%", ...APART }}
          animate={reduceMotion ? TOGETHER : coupleKeyframes("-45%")}
          transition={COUPLE_TRANSITION}
        />
        <motion.img
          className="hero-half hero-half-bride"
          src={config.heroImage}
          alt=""
          initial={reduceMotion ? false : { x: "45%", ...APART }}
          animate={reduceMotion ? TOGETHER : coupleKeyframes("45%")}
          transition={COUPLE_TRANSITION}
        />
      </div>
      {
        // [AI] - END
      }
      <div className="hero-overlay" />
      {
        // [AI] - START
      }
      <div className="hero-effects" aria-hidden="true">
        {PETALS.map((petal, i) => (
          <span
            key={`petal-${i}`}
            className="petal"
            style={{
              left: petal.left,
              width: petal.size,
              height: petal.size,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
        {SPARKLES.map((sparkle, i) => (
          <span
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
            }}
          />
        ))}
      </div>
      {
        // [AI] - END
      }
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        // [AI] - START
        transition={{ duration: 1, delay: reduceMotion ? 0 : TEXT_DELAY_S }}
        // [AI] - END
      >
        <span className="eyebrow light">Together with our families</span>
        <h1>
          {config.groomName}
          <em>&</em>
          {config.brideName}
        </h1>
        <p>{greeting(invitation)}</p>
        <small>
          {new Intl.DateTimeFormat("en-LK", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(config.weddingDate))}
        </small>
      </motion.div>
    </section>
  );
}