import { useState } from "react";
import { Send } from "lucide-react";

import type {
  Invitation,
  RsvpData,
} from "../../types/invitation";

import { submitRsvp } from "../../services/rsvpService";

interface RsvpSectionProps {
  invitation: Invitation;
}

export function RsvpSection({
  invitation,
}: RsvpSectionProps) {

  const [form, setForm] = useState<RsvpData>({
    attendance: "yes",
    guestCount: 1,
    comment: "",
  });

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  function updateForm(
    changes: Partial<RsvpData>
  ) {
    setForm((current) => ({
      ...current,
      ...changes,
    }));
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError(null);

    try {
      setSubmitting(true);

      await submitRsvp(
        invitation,
        form
      );

      setSubmitted(true);

    } catch (error) {

      console.error(
        "Failed to submit RSVP:",
        error
      );

      setError(
        "Unable to submit your RSVP. Please try again."
      );

    } finally {

      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="section rsvp-section">
        <div className="section-inner">

          <p className="eyebrow">
            Thank You
          </p>

          <p className="eyebrow-sub">
            RSVP Received
          </p>

          <div className="rsvp-success">
            <h3>
              Thank you, {invitation.displayName}!
            </h3>

            <p>
              Your RSVP has been successfully
              submitted.
            </p>
          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="section rsvp-section">

      <div className="section-inner">

        <p className="eyebrow">
          RSVP
        </p>

        <p className="eyebrow-sub">
          Will you join us?
        </p>

        <form
          className="rsvp-form"
          onSubmit={handleSubmit}
        >

          {/* Attendance */}

          <div className="rsvp-field">

            <label>
              Will you attend?
            </label>

            <div className="rsvp-options">

              <label className="rsvp-option">

                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={
                    form.attendance === "yes"
                  }
                  onChange={() =>
                    updateForm({
                      attendance: "yes",
                    })
                  }
                />

                <span>
                  Yes, I will attend
                </span>

              </label>

              <label className="rsvp-option">

                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={
                    form.attendance === "no"
                  }
                  onChange={() =>
                    updateForm({
                      attendance: "no",
                    })
                  }
                />

                <span>
                  Sorry, I can't attend
                </span>

              </label>

            </div>

          </div>

          {/* Guest Count */}

          {form.attendance === "yes" && (
            <div className="rsvp-field">

              <label htmlFor="guestCount">
                Number of Guests
              </label>

              <input
                id="guestCount"
                type="number"
                min="1"
                max="10"
                value={form.guestCount}
                onChange={(event) =>
                  updateForm({
                    guestCount: Number(
                      event.target.value
                    ),
                  })
                }
              />

            </div>
          )}

          {/* Comment */}

          <div className="rsvp-field">

            <label htmlFor="comment">
              Additional Message
            </label>

            <textarea
              id="comment"
              value={form.comment}
              onChange={(event) =>
                updateForm({
                  comment: event.target.value,
                })
              }
              placeholder="Leave a message..."
              rows={4}
            />

          </div>

          {/* Error */}

          {error && (
            <p className="rsvp-error">
              {error}
            </p>
          )}

          {/* Submit */}

          <button
            type="submit"
            className="rsvp-submit"
            disabled={submitting}
          >

            <Send size={18} />

            {submitting
              ? "Submitting..."
              : "Submit RSVP"}

          </button>

        </form>

      </div>

    </section>
  );
}
