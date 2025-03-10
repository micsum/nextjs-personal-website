import React from "react";
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro";
import ContactForm from "./components/ContactForm";
import Spotify from "./components/Spotify";
import TopSkills from "./components/TopSkills";
import ProjectButton from "./components/ProjectButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="flex-grow">
        <Intro />
        <TopSkills />
        <ProjectButton />
        <Spotify />
        <ContactForm />
      </div>
    </main>
  );
}
