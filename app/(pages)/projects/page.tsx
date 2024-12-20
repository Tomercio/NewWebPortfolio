"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import SocialLinks from "../../../components/socialinks/page";
import { SiMongodb } from "react-icons/si";
import SkillsCard from "@/components/skills/skills";

const projects = [
  {
    id: 1,
    title: "Next Nest",
    description:
      "Next Nest is the final project from our Elevation Fullstack Bootcamp. We collaborated as a team, using GitHub for code management and Trello for tracking tasks. The app is designed to simplify how agents connect with buyers and renters, allowing them to list, filter, and manage properties seamlessly.",
    imageUrl: "/realestate.png",
    link: "https://github.com/TomKondat/next-nest",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJsSquare key="js" />,
      <FaReact key="react" />,
      <FaBootstrap key="bootstrap" />,
      <FaNodeJs key="node" />,
      <SiMongodb key="mongodb" />,
    ],
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "Welcome to my web profile portfolio! This project showcases my personal and professional journey, skills, and work. It serves as a digital resume and a platform to connect with potential employers, clients, and collaborators.",
    imageUrl: "/mywebsite.png",
    link: "https://github.com/Tomercio/NewWebPortfolio",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJsSquare key="js" />,
      <FaReact key="react" />,
      <RiNextjsFill key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
    ],
  },
  {
    id: 3,
    title: "Cars Table App",
    description:
      "This is a Next.js project built with TypeScript and Tailwind CSS, designed to display and navigate through car details specifically for cars available in Israel.",
    imageUrl: "/carsisrael.png",
    link: "https://github.com/Tomercio/CarsTable",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJsSquare key="js" />,
      <FaReact key="react" />,
      <RiNextjsFill key="nextjs" />,
      <RiTailwindCssFill key="tailwind" />,
    ],
  },
  {
    id: 4,
    title: "Todo List App",
    description:
      "A To Do List App built with React, Tailwind, MongoDB and more. Was build as a part of a course in the bootcamp.",
    imageUrl: "/todolist.png",
    link: "https://github.com/Tomercio/TodoList",
    technologies: [
      <FaHtml5 key="html" />,
      <FaCss3Alt key="css" />,
      <FaJsSquare key="js" />,
      <FaReact key="react" />,
      <RiTailwindCssFill key="tailwind" />,
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center lg:mt-[-35] justify-center min-h-screen text-white animate-fadeIn px-4 pt-20 sm:pt-28 md:pt-32 lg:pt-20">
      <SocialLinks />
      <h1 className="mypro text-center text-emerald-300">My Projects</h1>

      <div className="card flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-y-6 lg:max-w-screen-xl px-2">
        {projects.map((project) => (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="w-full sm:w-72 md:w-80 lg:w-2/5"
          >
            <div className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between h-full cursor-pointer">
              <div className="flex-grow">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={320}
                  height={160}
                  className="w-full h-40 object-cover rounded-t-lg mb-2"
                />
                <h2 className="text-xl font-semibold mb-1">{project.title}</h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex space-x-3 text-lg mt-4">
                {project.technologies.map((tech) => (
                  <span key={tech.key} className="text-emerald-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <SkillsCard />
      <button
        onClick={async () => {
          try {
            const response = await fetch("/TomerTechCV.pdf");
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "TomerTechCV.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error("Error downloading resume:", error);
            alert("Failed to download resume. Please try again.");
          }
        }}
        className="button flex justify-center px-6 py-2 mt-12"
      >
        Download My Resume
        <Download size={16} className="ml-2" />
      </button>
    </div>
  );
};

export default Projects;
