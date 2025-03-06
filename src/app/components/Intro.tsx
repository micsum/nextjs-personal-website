"use client";

import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";

export const Intro = () => {
  const downloadCV = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open("/profile/Resume of Michael Sum.docx");
  }, []);

  return (
    <section className="lg:py-3 pt-12 sm:mt-8 md:mt-2 flex items-center justify-center">
      <div className="flex flex-col py-2 lg:mt-20 mt-5 items-center">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-screen-xl px-4 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-7 place-self-center text-center sm:text-left"
          >
            <h1 className="text-white mb-2 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m
              </span>
              <br />
              <span className="inline-block w-[300px] sm:w-[400px] lg:w-[500px] overflow-hidden whitespace-nowrap">
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
              </span>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
              <Link href="/about" className="hover:text-white hover:underline">
                Over 4 years experience in software development ... Read More
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center hover:from-secondary-500 hover:to-primary-500 "
              >
                Contact Me
              </Link>
              <button
                type="button"
                onClick={downloadCV}
                className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
              >
                <span className="bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-2 flex items-center justify-center gap-2">
                  Download CV
                  <FontAwesomeIcon icon={faFileArrowDown} />
                </span>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 flex justify-center lg:justify-end"
          >
            <Image
              src="/profile/profile_pic.jpeg"
              alt="profile picture"
              className="rounded-full"
              width={220}
              height={220}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
