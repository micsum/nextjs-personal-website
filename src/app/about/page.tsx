"use client";

import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import Image from "next/image";

const AboutPage = () => {
  const frontendSvg = [
    "/js.svg",
    "/ts.svg",
    "/react.svg",
    "/react_native.svg",
    "/nextjs.svg",
    "/expo.svg",
    "/jquery.svg",
    "/redux.svg",
    "/tailwindcss.svg",
  ];

  const backendSvg = [
    "/nodejs.svg",
    "/express.svg",
    "/nestjs.svg",
    "/c_sharp.svg",
    "/net.svg",
    "/python.svg",
    "/django.svg",
    "/go.svg",
    "/cf.svg",
  ];

  const dbSvg = ["/msftsql.svg", "/psql.svg"];
  const toolsSvg = [
    "/aws.svg",
    "/aws-ec2.svg",
    "/aws-route53.svg",
    "/docker.svg",
    "/nginx.svg",
    "/ubuntu.svg",
    "/git.svg",
    "/ssrs.png",
    "/jira.svg",
    "/figma.svg",
    "/postman.svg",
    "/insomnia.svg",
    "/epicor.png",
    "/windowserver.svg",
  ];

  return (
    <motion.section
      className="lg:py-16 pt-20 sm:pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-4xl sm:mt-3 md:mt-8 lg:mt-8 text-center font-bold">
          About Me
        </h1>
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
          <ul className="text-xl">
            Skills
            <FontAwesomeIcon icon={faLaptopCode} className="mx-1" />
            <li
              id="frontend"
              className="list-none flex justify-between items-center"
            >
              <p className="text-lg">Frontend</p>
              <div className="flex gap-2">
                {frontendSvg.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.8 }}
                    whileTap={{ scale: 1.0 }}
                  >
                    <Image src={src} alt="frontend" width={32} height={32} />
                  </motion.div>
                ))}
              </div>
            </li>
            <li
              id="backend"
              className="list-none flex justify-between items-center mt-3"
            >
              <p className="text-lg">Backend</p>
              <div className="flex gap-2">
                {backendSvg.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.8 }}
                    whileTap={{ scale: 1.0 }}
                  >
                    <Image src={src} alt="frontend" width={32} height={32} />
                  </motion.div>
                ))}
              </div>
            </li>
            <li
              id="database"
              className="list-none flex justify-between items-center mt-3"
            >
              <p className="text-lg">Database</p>
              <div className="flex gap-2">
                {dbSvg.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.8 }}
                    whileTap={{ scale: 1.0 }}
                  >
                    <Image src={src} alt="frontend" width={32} height={32} />
                  </motion.div>
                ))}
              </div>
            </li>
            <li
              id="tools"
              className="list-none flex justify-between items-center mt-3"
            >
              <p className="text-lg">Tools</p>
              <div className="flex gap-2">
                {toolsSvg.map((src, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.8 }}
                    whileTap={{ scale: 1.0 }}
                  >
                    <Image src={src} alt="frontend" width={32} height={32} />
                  </motion.div>
                ))}
              </div>
            </li>
          </ul>
          <p></p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
