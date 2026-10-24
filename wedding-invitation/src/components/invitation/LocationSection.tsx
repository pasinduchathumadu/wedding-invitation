import { ExternalLink, MapPin } from "lucide-react";
// [AI] - START
import { Snowfall } from "../animation/Snowfall";
// [AI] - END

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
    // [AI] - START
    <section className="section center has-snow">
      <Snowfall />
      {
        // [AI] - END
      }
      <div className="location">
        <MapPin size={30} />

        <span className="eyebrow">Join us here</span>

        <h2>{venue}</h2>

        <p>{address}</p>

        {
          // [AI] - START
        }
        <button
          type="button"
          className="primary"
          onClick={handleOpenMaps}
        >
          Open in Google Maps
          <ExternalLink size={16} />
        </button>
        {
          // [AI] - END
        }
      </div>
    </section>
  );
}