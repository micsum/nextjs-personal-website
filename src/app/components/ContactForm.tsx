"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ContactForm = () => {
  const personalInfo = [
    { media: "email", link: "mailto:micsum@connect.hku.hk" },
    { media: "github", link: "https://github.com/micsum" },
    { media: "linkedin", link: "https://www.linkedin.com/in/michaelsum" },
  ];

  const getIcon = (media: string) => {
    switch (media) {
      case "email":
        return faEnvelope;
      case "github":
        return faGithub;
      case "linkedin":
        return faLinkedin;
    }
  };

  return (
    <section>
      <div className="socials flex flex-row gap-2">
        {personalInfo.map((contact, index) => (
          <Link key={index} href={contact.link} target="_blank">
            <FontAwesomeIcon
              icon={getIcon(contact.media) ?? faBug}
              className="text-3xl hover:animate-pulse hover:text-gray-400 mx-1 mt-1"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ContactForm;
