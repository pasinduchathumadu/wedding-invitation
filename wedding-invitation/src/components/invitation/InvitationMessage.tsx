import type { Invitation } from "../../types/invitation";
import type { WeddingConfig } from "../../types/wedding";
import { description } from "../../utils/invitation";
export function InvitationMessage({
  invitation,
  config,
}: {
  invitation: Invitation;
  config: WeddingConfig;
}) {
  return (
    <section className="section cream center">
      <span className="eyebrow">With joyful hearts</span>
      <h2>We are getting married</h2>
      <p className="lead">{description(invitation)}</p>
      <p>{config.message}</p>
      <span className="flourish">✦</span>
    </section>
  );
}
