import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-slate-600">
          <FontAwesomeIcon icon={faCode} className="mx-1" />
          Built by Michael Sum
        </p>
      </div>
    </footer>
  );
};
