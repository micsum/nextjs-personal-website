"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip } from "./ui/Tooltip";

const SkillsSection = () => {
  const frontendSvg = [
    { name: "JavaScript", src: "/tech_icons/js.svg" },
    { name: "TypeScript", src: "/tech_icons/ts.svg" },
    { name: "React", src: "/tech_icons/react.svg" },
    { name: "NextJs", src: "/tech_icons/nextjs.svg" },
    { name: "React Native", src: "/tech_icons/react_native.svg" },
    { name: "Expo", src: "/tech_icons/expo.svg" },
    { name: "Tailwind CSS", src: "/tech_icons/tailwindcss.svg" },
    { name: "Redux", src: "/tech_icons/redux.svg" },
    { name: "jQuery", src: "/tech_icons/jquery.svg" },
    { name: "HTML", src: "/tech_icons/html.svg" },
    { name: "CSS", src: "/tech_icons/css.svg" },
  ];

  const backendSvg = [
    { name: "NodeJS", src: "/tech_icons/nodejs.svg" },
    { name: "ExpressJS", src: "/tech_icons/express.svg" },
    { name: "NestJS", src: "/tech_icons/nestjs.svg" },
    { name: "C#", src: "/tech_icons/c_sharp.svg" },
    { name: ".NET", src: "/tech_icons/net.svg" },
    { name: "Adobe ColdFusion", src: "/tech_icons/cf.svg" },
    { name: "Python", src: "/tech_icons/python.svg" },
    { name: "Django", src: "/tech_icons/django.svg" },
    { name: "GO", src: "/tech_icons/go.svg" },
  ];

  const dbSvg = [
    { name: "Microsoft SQL Server", src: "/tech_icons/msftsql.svg" },
    { name: "PostgreSQL", src: "/tech_icons/psql.svg" },
  ];

  const toolsSvg = [
    { name: "AWS", src: "/tech_icons/aws.svg" },
    { name: "AWS-EC2", src: "/tech_icons/aws-ec2.svg" },
    { name: "AWS-Route 53", src: "/tech_icons/aws-route53.svg" },
    { name: "Docker", src: "/tech_icons/docker.svg" },
    { name: "Nginx", src: "/tech_icons/nginx.svg" },
    { name: "Ubuntu", src: "/tech_icons/ubuntu.svg" },
    { name: "Git", src: "/tech_icons/git.svg" },
    { name: "SQL Server Reporting Services", src: "/tech_icons/ssrs.png" },
    { name: "Epicor ERP System", src: "/tech_icons/epicor.png" },
    { name: "Window Server", src: "/tech_icons/windowserver.svg" },
    { name: "Postman", src: "/tech_icons/postman.svg" },
    { name: "Insomnia", src: "/tech_icons/insomnia.svg" },
    { name: "Jira", src: "/tech_icons/jira.svg" },
    { name: "Figma", src: "/tech_icons/figma.svg" },
  ];

  return (
    <ul className="text-xl">
      <li
        id="frontend"
        className="list-none flex justify-between items-center mt-3"
      >
        <p className="text-lg text-cyan-300">Frontend</p>
        <div className="flex gap-2 cursor-pointer">
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
        <div className="flex gap-2 cursor-pointer">
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
        <div className="flex gap-2 cursor-pointer">
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
        <div className="flex gap-2 cursor-pointer">
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
  );
};

export default SkillsSection;
