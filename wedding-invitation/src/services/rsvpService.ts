
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

import type {
  Invitation,
  RsvpData,
} from "../types/invitation";

export async function submitRsvp(
  invitation: Invitation,
  data: RsvpData
): Promise<void> {

  try {

    // Use the invitation slug as the unique document ID
  const rsvpRef = doc(
    db,
    "rsvps",
    invitation.slug
  );

  const payload = {
    invitation: {
      slug: invitation.slug,
      name: invitation.displayName,
      type: invitation.invitationType,
    },

    attendance: data.attendance,

    guestCount: data.guestCount,

    comment: data.comment || "",

    submittedAt: serverTimestamp(),
  };

  await setDoc(
    rsvpRef,
    payload,
    {
      merge: true,
    }
  );

  console.log(
    "RSVP saved successfully:",
    invitation.slug
  );
    
  } catch (error) {
    console.log(error)
  }
}
