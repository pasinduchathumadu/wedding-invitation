import { motion } from "motion/react";
import type { Invitation } from "../../types/invitation";
import type { WeddingConfig } from "../../types/wedding";
import { greeting, description } from "../../utils/invitation";
export function InvitationPreview({
  invitation,
  config,
  onOpen,
}: {
  invitation: Invitation;
  config: WeddingConfig;
  onOpen: () => void;
}) {
  return (
    <main className="preview">
      <motion.section
        className="preview-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="preview-image">
          <img src={config.previewImage} alt="Wedding" />
        </div>
        <div className="preview-body">
          <span className="eyebrow">A Special Invitation</span>
          <h1>{greeting(invitation)}</h1>
          <p>{description(invitation)}</p>
          <blockquote>“{config.quote}”</blockquote>
          <strong>
            {new Intl.DateTimeFormat("en-LK", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(config.weddingDate))}
          </strong>
          <button className="primary" onClick={onOpen}>
            View Invitation
          </button>
          <small>Tap to open your invitation</small>
        </div>
      </motion.section>
    </main>
  );
}
