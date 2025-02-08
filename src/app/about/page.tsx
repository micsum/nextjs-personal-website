"use client";

import React, { use, useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const AboutPage = () => {
  const downloadCV = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open("/Resume of Michael Sum.docx");
  }, []);

  return (
    <section className="lg:py-16">
      <div className="flex flex-col py-4 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Michael",
                1500,
                "Full Stack Developer",
                1500,
                "Software Engineer",
                1500,
                "Business Analyst",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
        <div>
          <Link
            href="#contact"
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
          >
            Contact Me
          </Link>
          <Link
            href="#"
            onClick={downloadCV}
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
        <div>
          <Image
            src="/profile_pic.png"
            alt="profile_pic"
            className="rounded-full mt-8"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};
