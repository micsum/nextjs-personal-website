import { MapProvider } from "../provider/Map-provider";
import { MapComponent } from "../components/Map";

export default function ContactPage() {
  return (
    <section className="flex h-screen">
      <div className="w-1/2 p-10 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Contact me</h1>
        <p className="text-lg mb-4">
          Feel free to reach out to us for any inquiries or questions.
        </p>
      </div>
      <div className="w-1/2 h-full">
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </section>
  );
}
