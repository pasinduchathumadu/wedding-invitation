import { motion } from "motion/react";
import type { Invitation } from "../../types/invitation";
import type { WeddingConfig } from "../../types/wedding";
import { greeting } from "../../utils/invitation";
export function InvitationHero({
  invitation,
  config,
}: {
  invitation: Invitation;
  config: WeddingConfig;
}) {
  return (
    <section className="hero">
      <img src={config.heroImage} alt="Wedding couple" />
      <div className="hero-overlay" />
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
