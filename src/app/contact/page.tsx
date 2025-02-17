import { MapProvider } from "../provider/Map-provider";
import { MapComponent } from "../components/Map";

export default function ContactPage() {
  return (
    <MapProvider>
      <MapComponent />
    </MapProvider>
  );
}
