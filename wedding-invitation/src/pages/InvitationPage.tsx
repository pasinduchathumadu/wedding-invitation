import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { InvitationPreview } from "../components/landing/InvitationPreview";
import { InvitationOpening } from "../components/animation/InvitationOpening";
import { MusicPlayer } from "../components/common/MusicPlayer";
import { InvitationHero } from "../components/invitation/InvitationHero";
import { InvitationMessage } from "../components/invitation/InvitationMessage";
import { WeddingEvents } from "../components/invitation/WeddingEvents";
import { Countdown } from "../components/invitation/Countdown";
import { PhotoGallery } from "../components/invitation/PhotoGallery";
import { LocationSection } from "../components/invitation/LocationSection";
import { RsvpSection } from "../components/invitation/RsvpSection";
import { getInvitationBySlug } from "../data/invitations";
import { weddingConfig } from "../config/wedding.config";

export function InvitationPage() {
  const { slug } = useParams();
  const invitation = getInvitationBySlug(slug);

  const [opened, setOpened] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    if (!opened) {
      return;
    }

    const timer = window.setTimeout(() => {
      document.getElementById("invitation")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 700);

    return () => {
      window.clearTimeout(timer);
    };
  }, [opened]);

  if (!invitation) {
    return (
      <main className="not-found">
        <div className="not-found-card">
          <p className="eyebrow">Wedding Invitation</p>
          <h1>Invitation not found</h1>
          <p>Please check the invitation link.</p>
        </div>
      </main>
    );
  }

  const sections = invitation.enabledSections;

  function handleOpen() {
    setOpened(true);
    setMusicStarted(true);
  }

  return (
    <div className="invitation-app">
      {!opened && (
        <InvitationPreview
          invitation={invitation}
          config={weddingConfig}
          onOpen={handleOpen}
        />
      )}

      {opened && (
        <>
          <InvitationOpening />

          {musicStarted && <MusicPlayer src={weddingConfig.music} />}

          <main id="invitation">
            <InvitationHero invitation={invitation} config={weddingConfig} />

            <InvitationMessage invitation={invitation} config={weddingConfig} />

            <WeddingEvents  />

            {sections?.countdown !== false && (
              <Countdown targetDate={weddingConfig.weddingDate} />
            )}

            {sections?.gallery !== false && (
              <PhotoGallery images={weddingConfig.gallery} />
            )}

            {sections?.location !== false && (
              <LocationSection
                venue={weddingConfig.venue}
                address={weddingConfig.address}
                mapsUrl={weddingConfig.mapsUrl}
              />
            )}

            {sections?.rsvp !== false && (
              <RsvpSection invitation={invitation} />
            )}
          </main>

          <footer className="site-footer">
            <span>{weddingConfig.groomName}</span>
            <span>♥</span>
            <span>{weddingConfig.brideName}</span>
          </footer>
        </>
      )}
    </div>
  );
}
