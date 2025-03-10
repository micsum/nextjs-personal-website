"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SkillsSection from "./SkillsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Tooltip } from "./ui/Tooltip";
import Image from "next/image";

export default function TopSkills() {
  const topSkillsSvg = [
    { name: "React", src: "/tech_icons/react.svg" },
    { name: "NextJs", src: "/tech_icons/nextjs.svg" },
    { name: "NodeJs", src: "/tech_icons/nodejs.svg" },
    { name: "ExpressJs", src: "/tech_icons/express.svg" },
    { name: "JavaScript", src: "/tech_icons/js.svg" },
    { name: "TypeScript", src: "/tech_icons/ts.svg" },
    { name: "C#", src: "/tech_icons/c_sharp.svg" },
    { name: "SQL Server", src: "/tech_icons/msftsql.svg" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="items-center justify-center flex flex-col gap-y-5 py-10"
    >
      <h3 className="text-3xl font-bold text-white mb-1 flex items-center sm:text-4xl">
        Top Skills
        <Dialog>
          <DialogTrigger asChild>
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 0, 255, 0.8)",
              }}
              whileTap={{ scale: 0.9 }}
              className="text-sm mx-3 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
            >
              All Skills
            </motion.button>
          </DialogTrigger>
          <DialogContent className="flex max-h-auto max-w-[55vw] sm:max-w-auto flex-col  bg-gray-800 text-white p-5 border-cyan-700">
            <DialogHeader className="pb-0">
              <DialogTitle className="text-2xl flex items-center text-white">
                All Skills
                <FontAwesomeIcon icon={faLaptopCode} className="ml-2" />
              </DialogTitle>
              <div className="py-5">
                <SkillsSection />
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </h3>
      <div className="grid grid-cols-4 sm:flex gap-5 cursor-pointer">
        {topSkillsSvg.map((topSkills, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.2,
              delay: index * 0.2,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.8,
              }}
              whileTap={{
                scale: 1.0,
              }}
            >
              <Tooltip name={topSkills.name}>
                <Image
                  src={topSkills.src}
                  title={topSkills.name}
                  alt={topSkills.name}
                  width={48}
                  height={48}
                />
              </Tooltip>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
