import type { WeddingEvent } from "../../types/wedding";
interface WeddingEventsProps {
  events: WeddingEvent[];
}

export function WeddingEvents({ events }: WeddingEventsProps) {
  return (
    <section className="section events-section">
      <div className="section-inner">
        <p className="eyebrow">The Celebration</p>
        <p className="eyebrow-sub">Wedding Events</p>

        <div className="events-grid">
          {events.map((event, index) => (
            <article className="event-card" key={`${event.title}-${index}`}>
              <h3>{event.title}</h3>

              <p className="event-date">{event.date}</p>

              <p className="event-time">{event.time}</p>

              <p className="event-venue">{event.venue}</p>

              <p className="event-description">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}