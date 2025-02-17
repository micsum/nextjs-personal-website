"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Tooltip } from "../styles/Tooltip";

const AboutPage = () => {
  const frontendSvg = [
    { name: "JavaScript", src: "/js.svg" },
    { name: "TypeScript", src: "/ts.svg" },
    { name: "React", src: "/react.svg" },
    { name: "NextJs", src: "/nextjs.svg" },
    { name: "React Native", src: "/react_native.svg" },
    { name: "Expo", src: "/expo.svg" },
    { name: "Tailwind CSS", src: "/tailwindcss.svg" },
    { name: "Redux", src: "/redux.svg" },
    { name: "jQuery", src: "/jquery.svg" },
  ];

  const backendSvg = [
    { name: "NodeJS", src: "/nodejs.svg" },
    { name: "ExpressJS", src: "/express.svg" },
    { name: "NestJS", src: "/nestjs.svg" },
    { name: "C#", src: "/c_sharp.svg" },
    { name: ".NET", src: "/net.svg" },
    { name: "Adobe ColdFusion", src: "/cf.svg" },
    { name: "Python", src: "/python.svg" },
    { name: "django", src: "/django.svg" },
    { name: "GO", src: "/go.svg" },
  ];

  const dbSvg = [
    { name: "Microsoft SQL Server", src: "/msftsql.svg" },
    { name: "PostgreSQL", src: "/psql.svg" },
  ];

  const toolsSvg = [
    { name: "AWS", src: "/aws.svg" },
    { name: "AWS-EC2", src: "/aws-ec2.svg" },
    { name: "AWS-Route 53", src: "/aws-route53.svg" },
    { name: "Docker", src: "/docker.svg" },
    { name: "Nginx", src: "/nginx.svg" },
    { name: "Ubuntu", src: "/ubuntu.svg" },
    { name: "Git", src: "/git.svg" },
    { name: "SQL Server Reporting Services", src: "/ssrs.png" },
    { name: "Epicor ERP System", src: "/epicor.png" },
    { name: "Window Server", src: "/windowserver.svg" },
    { name: "Postman", src: "/postman.svg" },
    { name: "Insomnia", src: "/insomnia.svg" },
    { name: "Jira", src: "/jira.svg" },
    { name: "Figma", src: "/figma.svg" },
  ];

  return (
    <motion.section
      className="lg:py-16 pt-20 sm:pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-5">
        <h1 className="text-4xl sm:mt-3 md:mt-8 lg:mt-8 text-center font-bold text-white-800">
          About Me
        </h1>
        <p className="mt-3 text-lg text-white-700 mx-5 leading-relaxed">
          Experienced Software Engineer and Business Analyst with
          <span className="font-bold text-cyan-400"> over 4 years</span> in
          software development, bridging business needs with technical
          solutions. Skilled in JavaScript, React, Node.js, C#, and SQL etc...
          <br />
          <br />I excel in building user-focused applications and collaborating
          with diverse stakeholders. Passionate about continuous learning and
          innovation, I'm eager to transition fully into a development role.
        </p>

        <section>
          <div className="mt-10 font-semibold mx-5">
            <h2 className="text-2xl mb-5 flex items-center text-white-800">
              Work Experiences
              <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
            </h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white-800">
                Software Engineer | TOMY Company Ltd
              </h3>
              <p className="text-gray-400">
                1 year of experience in full-stack development, ERP system
                customization, and database management
              </p>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li className="mt-1">
                  Developed & maintained 5+ web applications using React,
                  JavaScript, ColdFusion, C#, VBA, and SQL Server, improving
                  efficiency by 25%
                </li>
                <li>
                  Optimized ERP system by reducing manual data handling and
                  streamlining operations
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white-800">
                Business Analyst | Registration and Electoral Office
              </h3>
              <p className="text-gray-400">
                4+ years of experience in IT system development, data analysis,
                and stakeholder communication
              </p>
              <ul className="list-disc ml-5 mt-2 text-gray-600">
                <li className="mt-1">
                  Contributed to IT system development for voter registration,
                  processing 400,000+ form applications
                </li>
                <li>
                  Led testing efforts in staging and UAT environments to ensure
                  system reliability & delivery user training programs and
                  documentation
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="mt-10 font-semibold mx-5">
            <h2 className="text-2xl mb-5 flex items-center text-white-800">
              Skills
              <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
            </h2>
            <ul className="text-xl">
              <li
                id="frontend"
                className="list-none flex justify-between items-center mt-3"
              >
                <p className="text-lg text-cyan-300">Frontend</p>
                <div className="flex gap-2">
                  {frontendSvg.map((frontend, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.8 }}
                      whileTap={{ scale: 1.0 }}
                    >
                      <Tooltip name={frontend.name}>
                        <Image
                          src={frontend.src}
                          title={frontend.name}
                          alt={frontend.name}
                          width={32}
                          height={32}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </li>
              <div
                className="w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                role="progressbar"
              >
                <motion.div
                  className="bg-cyan-600 h-2.5 rounded-full dark:bg-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2 }}
                ></motion.div>
              </div>
              <li
                id="backend"
                className="list-none flex justify-between items-center mt-5"
              >
                <p className="text-lg text-green-300">Backend</p>
                <div className="flex gap-2">
                  {backendSvg.map((backend, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.8 }}
                      whileTap={{ scale: 1.0 }}
                    >
                      <Tooltip name={backend.name}>
                        <Image
                          src={backend.src}
                          title={backend.name}
                          alt={backend.name}
                          width={32}
                          height={32}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </li>
              <div
                className="w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                role="progressbar"
              >
                <motion.div
                  className="bg-green-600 h-2.5 rounded-full dark:bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2 }}
                ></motion.div>
              </div>
              <li
                id="database"
                className="list-none flex justify-between items-center mt-5"
              >
                <p className="text-lg text-indigo-300">Database</p>
                <div className="flex gap-2">
                  {dbSvg.map((db, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.8 }}
                      whileTap={{ scale: 1.0 }}
                    >
                      <Tooltip name={db.name}>
                        <Image
                          src={db.src}
                          title={db.name}
                          alt={db.name}
                          width={32}
                          height={32}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </li>
              <div
                className="w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                role="progressbar"
              >
                <motion.div
                  className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: "80%" }}
                  transition={{ duration: 2 }}
                ></motion.div>
              </div>
              <li
                id="tools"
                className="list-none flex justify-between items-center mt-5"
              >
                <p className="text-lg text-orange-300">Tools</p>
                <div className="flex gap-2">
                  {toolsSvg.map((tools, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.8 }}
                      whileTap={{ scale: 1.0 }}
                    >
                      <Tooltip name={tools.name}>
                        <Image
                          src={tools.src}
                          title={tools.name}
                          alt={tools.name}
                          width={32}
                          height={32}
                        />
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </li>
              <div
                className="w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
                role="progressbar"
              >
                <motion.div
                  className="bg-orange-500 h-2.5 rounded-full dark:bg-orange-400"
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 2 }}
                ></motion.div>
              </div>
            </ul>
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default AboutPage;
