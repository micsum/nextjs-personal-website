"use client";

import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import SkillsSection from "../components/SkillsSection";

const AboutPage = () => {
  return (
    <motion.section
      className="lg:py-16 pt-20 sm:pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-5">
        <h1 className="text-4xl sm:mt-3 md:mt-8 lg:mt-8 text-center font-bold text-white">
          About Me
        </h1>
        <p className="mt-3 text-lg text-white mx-5 leading-relaxed">
          Experienced Software Engineer and Business Analyst with
          <span className="font-bold text-cyan-400"> over 4 years</span> in
          software development, bridging business needs with technical
          solutions. Skilled in JavaScript, React, Node.js, C#, and SQL etc...
          <br />
          <br />I excel in building user-focused applications and collaborating
          with diverse stakeholders. Passionate about continuous learning and
          innovation, I&apos;m eager to transition fully into a development
          role.
        </p>

        <section>
          <div className="mt-10 font-semibold mx-5">
            <h2 className="text-2xl mb-5 flex items-center text-white">
              Work Experiences
              <FontAwesomeIcon icon={faBriefcase} className="ml-2" />
            </h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white">
                Software Engineer<br></br>
                <a
                  href="https://www.takaratomy.co.jp/english/"
                  target="_blank"
                  className="text-lg hover:text-slate-300"
                >
                  @TOMY Company Ltd
                </a>
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
              <h3 className="text-xl font-bold text-white">
                Business Analyst<br></br>
                <a
                  href="https://www.reo.gov.hk/en/"
                  target="_blank"
                  className="text-lg hover:text-slate-300"
                >
                  @Registration and Electoral Office
                </a>
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
            <h2 className="text-2xl mb-5 flex items-center text-white">
              Skills
              <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
            </h2>
            <SkillsSection />
          </div>
        </section>
      </div>
    </motion.section>
  );
};

export default AboutPage;
