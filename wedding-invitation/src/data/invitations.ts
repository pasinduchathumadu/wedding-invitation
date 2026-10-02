import type { Invitation } from "../types/invitation.types";

export const invitations: Invitation[] = [
  {
    slug: "kasun",
    displayName: "Kasun",
    invitationType: "individual",
    maxGuests: 1,
  },
  {
    slug: "kasun-nadeesha",
    displayName: "Kasun & Nadeesha",
    invitationType: "couple",
    maxGuests: 2,
  },
  {
    slug: "perera-family",
    displayName: "Perera Family",
    invitationType: "family",
    maxGuests: 5,
  },
];

export function getInvitationBySlug(
  slug?: string
): Invitation | undefined {
  if (!slug) {
    return undefined;
  }

  return invitations.find(
    (invitation) => invitation.slug === slug
  );
}