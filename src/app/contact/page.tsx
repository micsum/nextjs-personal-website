import { MapProvider } from "../provider/Map-provider";
import { MapComponent } from "../components/Map";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:h-screen lg:py-15 pt-10 sm:pt-16">
      <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
        <ContactForm />
      </div>
      <div className="w-full lg:w-1/2 h-64 lg:h-full">
        <MapProvider>
          <MapComponent />
        </MapProvider>
      </div>
    </section>
  );
};

export default ContactPage;
