export type InvitationType = "individual" | "couple" | "family";

export interface Invitation {
  slug: string;
  displayName: string;
  invitationType: InvitationType;
  maxGuests: number;

  enabledSections?: {
    story?: boolean;
    gallery?: boolean;
    countdown?: boolean;
    location?: boolean;
    rsvp?: boolean;
  };
}

export interface RsvpFormData {
  attendance: "yes" | "no";
  guestCount: number;
  comment: string;
}

export interface RsvpPayload extends RsvpFormData {
  invitation: Invitation;
  submittedAt: string;
}