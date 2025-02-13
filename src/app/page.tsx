import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Intro } from "./components/Intro";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="flex-grow">
        <Intro />
      </div>
      <Footer />
    </main>
  );
}
