"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="socialicons fixed top-1/3 left-2 md:left-4 flex flex-col space-y-4 text-white text-2xl">
      <a href="mailto:amitayy4@gmail.com" aria-label="Email">
        <FaEnvelope className="cursor-pointer hover:text-emerald-300 transition-colors duration-300" />
      </a>
      <a
        href="https://www.linkedin.com/in/tomerai"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="cursor-pointer hover:text-emerald-300 transition-colors duration-300" />
      </a>
      <a
        href="https://www.github.com/Tomercio"
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="cursor-pointer hover:text-emerald-300 transition-colors duration-300" />
      </a>
      <a
        href="https://www.wa.me/+972524260338"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="cursor-pointer hover:text-emerald-300 transition-colors duration-300" />
      </a>
    </div>
  );
};

export default SocialLinks;
