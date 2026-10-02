import type { Invitation } from "../types/invitation";
export function greeting(i: Invitation) {
  return `Dear ${i.displayName},`;
}
export function description(i: Invitation) {
  return i.invitationType === "family"
    ? "We would be delighted to celebrate this special day with you and your family."
    : i.invitationType === "couple"
      ? "We would be delighted to celebrate this special day with both of you."
      : "We would be delighted to have you with us on our special day.";
}
