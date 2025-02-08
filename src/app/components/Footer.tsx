import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex items-center justify-center gap-4">
        <span className="text-slate-600">
          <FontAwesomeIcon icon={faCode} />
        </span>
        <p className="text-slate-600">Built by Michael Sum</p>
      </div>
    </footer>
  );
}
