"use client";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "beHealthy (Health Management App",
    techStack: [
      { name: "React Native", src: "/tech_icons/react_native.svg" },
      { name: "Redux", src: "/tech_icons/redux.svg" },
      { name: "TypeScript", src: "/tech_icons/ts.svg" },
      { name: "Expo", src: "/tech_icons/expo.svg" },
      { name: "NestJS", src: "/tech_icons/nestjs.svg" },
      { name: "PostgreSQL", src: "/tech_icons/psql.svg" },
      { name: "Tailwind CSS", src: "/tech_icons/tailwindcss.svg" },
      { name: "Open AI API", src: "/tech_icons/chatgpt.svg" },
      { name: "Apple Health", src: "/tech_icons/apple_health.webp" },
      { name: "Playwright", src: "/tech_icons/playwright.svg" },
      { name: "JWT", src: "/tech_icons/jwt.svg" },
    ],
    description:
      "beHealthy is a mobile app for managing health, nutrition, and fitness. It offers calorie tracking, meal planning, weight monitoring, exercise logging, and AI-powered recommendations to support users’ wellness goals.",
    imageUrl: "/projects/Self Healthy Management App.png",
    githubUrl:
      "https://github.com/micsum/frd_project_native-Self-healthy-management-application-",
    googleSlideUrl:
      "https://docs.google.com/presentation/d/1ddcnx2QHhyhl8gbjr5oOTUkuaqtkrdruhHljshfpaFw/edit?usp=sharing",
  },
  {
    title: "fastdpay (OCR receipt read and split web app)",
    techStack: [
      { name: "TypeScript", src: "/tech_icons/ts.svg" },
      { name: "JavaScript", src: "/tech_icons/js.svg" },
      { name: "ExpressJS", src: "/tech_icons/express.svg" },
      { name: "Python", src: "/tech_icons/python.svg" },
      { name: "Django", src: "/tech_icons/django.svg" },
      { name: "Socket.IO", src: "/tech_icons/socketio.svg" },
      { name: "PostgreSQL", src: "/tech_icons/psql.svg" },
      { name: "Tailwind CSS", src: "/tech_icons/tailwindcss.svg" },
      { name: "AWS", src: "/tech_icons/aws.svg" },
      { name: "AWS Route 53", src: "/tech_icons/aws-route53.svg" },
      { name: "AWS EC2", src: "/tech_icons/aws-ec2.svg" },
      { name: "JWT", src: "/tech_icons/jwt.svg" },
      { name: "Tesseract OCR", src: "/tech_icons/tesseract_ocr.jpg" },
    ],
    description:
      "FastDPay is a web app for easy bill splitting and expense sharing, ideal for dining out, travel, and group costs.",
    imageUrl: "/projects/fastdpay.png",
    githubUrl: "https://github.com/micsum/BAD-Project-Python-OCR-read-receipt-",
    googleSlideUrl:
      "https://docs.google.com/presentation/d/1-Y_rXD8O-qd2xEDPVG94jUQMcvsnpWXpyDW4-3KvWLg/edit?usp=sharing",
    pageUrl: "https://fastdpay.online",
  },
  {
    title: "HR claim web system",
    techStack: [
      { name: "JavaScript", src: "/tech_icons/js.svg" },
      { name: "NodeJS", src: "/tech_icons/nodejs.svg" },
      { name: "ExpressJS", src: "/tech_icons/express.svg" },
      { name: "PostgreSQL", src: "/tech_icons/psql.svg" },
      { name: "Tailwind CSS", src: "/tech_icons/tailwindcss.svg" },
      { name: "JWT", src: "/tech_icons/jwt.svg" },
      { name: "ChartJS", src: "/tech_icons/chartjs.svg" },
    ],
    description:
      "The HR Claim System is a web app for streamlined claim submission and approval, featuring admin and user roles. Developed as a learning project, it showcases full-stack development and scalability.",
    imageUrl: "/projects/HR Claim System.png",
    githubUrl:
      "https://github.com/micsum/Tecky-Project-HR-Claim-System-?tab=readme-ov-file",
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

const ProjectPage = () => {
  return (
    <motion.div
      className="mt-20 px-4"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className="text-4xl font-bold text-white mb-2 flex justify-center pt-3">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            googleSlideUrl={project.googleSlideUrl}
            pageUrl={project.pageUrl}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectPage;
