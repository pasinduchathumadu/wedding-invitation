import { weddingConfig } from "../../config/wedding.config";
export function WeddingEvents() {
  return (
    <section className="section events-section">
      <div className="section-inner">
        <p className="eyebrow">The Celebration</p>

        <p className="eyebrow-sub">Wedding Events</p>

        <div className="wedding-info-grid">
          <div className="wedding-info-card">
            <h3>Wedding Date</h3>
            <p>{weddingConfig.weddingDate}</p>
          </div>

          <div className="wedding-info-card">
            <h3>Poruwa Start Time</h3>
            <p>{weddingConfig.weddingTime}</p>
          </div>

          <div className="wedding-info-card">
            <h3>Wedding Start Time</h3>
            <p>{weddingConfig.startTime}</p>
          </div>

          <div className="wedding-info-card">
            <h3>Wedding End Time</h3>
            <p>{weddingConfig.endTime}</p>
          </div>

          <div className="wedding-info-card">
            <h3>Hotel Location</h3>
            <p>{weddingConfig.venue}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
