"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.0 }}
      className="items-center justify-center flex flex-col gap-y-5 mb-10"
    >
      <Link href="/projects">
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)",
          }}
          whileTap={{ scale: 0.9 }}
          className="text-xl mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
        >
          View My Projects
        </motion.button>
      </Link>
    </motion.div>
  );
}
