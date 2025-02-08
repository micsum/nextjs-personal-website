import Image from "next/image";
import React from "react";
import { AboutPage } from "./about/page";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div>
        <AboutPage />
      </div>
      <Footer />
    </main>
  );
}
