"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [isOpen, SetIsOpen] = useState(false);
  const toggleMenu = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="md:text-5xl text-white font-semibold hover:text-cyan-500"
        >
          <FontAwesomeIcon className="text-3xl" icon={faHouse} />
        </Link>

        {/*Desktop Menu*/}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0  hover:text-cyan-500"
                  href={link.href}
                  title={link.title}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-slate-200 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              className="text-2xl"
              icon={isOpen ? faXmark : faBars}
            />
          </button>
        </div>

        {/* Mobile Menu Items */}
        {isOpen && (
          <div className="md:hidden w-full">
            <ul className="flex flex-col items-center space-y-4 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[#ADB7BE] text-lg hover:text-cyan-500"
                    href={link.href}
                    onClick={toggleMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
