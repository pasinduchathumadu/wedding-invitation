export type InvitationType = "individual" | "couple" | "family";
export interface Invitation {
  slug: string;
  displayName: string;
  invitationType: InvitationType;
  maxGuests: number;
  sections?: {
    countdown?: boolean;
    gallery?: boolean;
    location?: boolean;
    rsvp?: boolean;
  };
}
export interface RsvpData {
  attendance: "yes" | "no";
  guestCount: number;
  comment: string;
}
