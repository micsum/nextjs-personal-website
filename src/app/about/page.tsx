"use client";

import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons/faLaptop";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";

const AboutPage = () => {
  return (
    <section className="lg:py-16 pt-20 sm:pt-16">
      <div>
        <h1 className="text-4xl mt-3 text-center font-bold">About Me</h1>
        <p className="mt-3 text-pretty mx-5">
          Experienced Software Engineer and Business Analyst with
          <span className="font-bold text-cyan-400"> over 4 years</span> in
          software development, bridging business needs with technical
          solutions. Skilled in JavaScript, React, Node.js, C#, and SQL etc...
          <br></br>
          <br></br>I excel in building user-focused applications and
          collaborating with diverse stakeholders. Passionate about continuous
          learning and innovation, I'm eager to transition fully into a
          development role.
        </p>
        <div className="mt-5 font-semibold mx-5">
          <h1 className="text-xl">
            Skills
            <FontAwesomeIcon icon={faLaptopCode} className="mx-1" />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
