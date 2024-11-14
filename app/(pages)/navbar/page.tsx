"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenuAndScrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 w-full flex justify-center z-50 p-4 bg-opacity-70">
      <div
        className="navbarh flex items-center bg-opacity-70 text-white shadow-lg px-6 py-3 rounded-lg space-x-8 w-full max-w-3xl justify-between"
        ref={navRef}
      >
        {/* Logo and Name */}
        <Link href="/">
          <div className="flex items-center">
            <Image src="/avatar.png" alt="Logo" width={50} height={50} />
            <span className="ml-1 text-2xl font-semibold">TomerAmitai</span>
          </div>
        </Link>
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full text-white focus:outline-none"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links with .navl styling for Desktop and Dropdown for Mobile */}
        <nav
          className={`navl ${
            menuOpen ? "flex" : "hidden md:flex"
          } flex-col md:flex-row bg-black bg-opacity-50 items-center md:items-center absolute md:static right-0 top-16 md:top-auto md:bg-transparent rounded-lg p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}
          style={{ transformOrigin: "top right" }}
        >
          <Link href="/">
            <span
              onClick={closeMenuAndScrollToTop}
              className="p-2 hover:bg-emerald-100 hover:bg-opacity-25 rounded cursor-pointer"
            >
              Home
            </span>
          </Link>
          <Link href="/about">
            <span
              onClick={closeMenuAndScrollToTop}
              className="p-2 hover:bg-emerald-100 hover:bg-opacity-25 rounded cursor-pointer"
            >
              About Me
            </span>
          </Link>
          <Link href="/projects">
            <span
              onClick={closeMenuAndScrollToTop}
              className="p-2 hover:bg-emerald-100 hover:bg-opacity-25 rounded cursor-pointer"
            >
              Projects
            </span>
          </Link>
          <Link href="/contact">
            <span
              onClick={closeMenuAndScrollToTop}
              className="p-2 hover:bg-emerald-100 hover:bg-opacity-25 rounded cursor-pointer"
            >
              Contact Me
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
