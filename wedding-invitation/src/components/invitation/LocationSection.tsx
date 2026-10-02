import { ExternalLink, MapPin } from "lucide-react";

export function LocationSection({
  venue,
  address,
  mapsUrl,
}: {
  venue: string;
  address: string;
  mapsUrl: string;
}) {
  const handleOpenMaps = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section center">
      <div className="location">
        <MapPin size={30} />

        <span className="eyebrow">Join us here</span>

        <h2>{venue}</h2>

        <p>{address}</p>

        <button
          type="button"
          className="secondary"
          onClick={handleOpenMaps}
        >
          Open in Google Maps
          <ExternalLink size={16} />
        </button>
      </div>
    </section>
  );
}