"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tooltip } from "./ui/Tooltip";
import { ProjectCardProps } from "../types/project";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  techStack,
  description,
  imageUrl,
  githubUrl,
  googleSlideUrl,
  pageUrl,
}) => {
  return (
    <motion.div
      className="relative max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative">
        <Image
          className="w-full"
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
        />
        <motion.div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
            <a
              href={googleSlideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 hover:underline cursor-pointer"
            >
              More Info
            </a>
          </div>
        </motion.div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {pageUrl ? (
            <a
              href={pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 hover:underline"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.8 }}
              whileTap={{ scale: 1.0 }}
              className="w-1/5"
            >
              <Tooltip name={tech.name}>
                <Image
                  src={tech.src}
                  title={tech.name}
                  alt={tech.name}
                  width={48}
                  height={48}
                />
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
