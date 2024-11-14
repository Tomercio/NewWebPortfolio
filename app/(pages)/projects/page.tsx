import React from "react";
import Link from "next/link";
import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import SocialLinks from "../socialinks/page";
import { SiMongodb } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Next Nest",
    description:
      "Next Nest is the final project from our Elevation Fullstack Bootcamp. We collaborated as a team, using GitHub for code management and Trello for tracking tasks. The app is designed to simplify how agents connect with buyers and renters, allowing them to list, filter, and manage properties seamlessly.",
    imageUrl: "/realestate.png",
    link: "https://github.com/TomKondat/next-nest",
    technologies: [
      <FaReact />,
      <FaJsSquare />,
      <FaCss3Alt />,
      <FaBootstrap />,
      <FaNodeJs />,
      <SiMongodb />,
    ],
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "Welcome to my web profile portfolio! This project showcases my personal and professional journey, skills, and work. It serves as a digital resume and a platform to connect with potential employers, clients, and collaborators.",
    imageUrl: "/mywebsite.png",
    link: "https://github.com/Tomercio/TA-WebStudio",
    technologies: [
      <FaReact />,
      <FaHtml5 />,
      <FaJsSquare />,
      <RiNextjsFill />,
      <RiTailwindCssFill />,
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
      <FaReact />,
      <FaJsSquare />,
      <FaCss3Alt />,
      <FaHtml5 />,
      <RiTailwindCssFill />,
      <RiNextjsFill />,
    ],
  },
  {
    id: 4,
    title: "Todo List App",
    description: "A To Do List App built with React and Tailwind CSS.",
    imageUrl: "/todolist.png",
    link: "https://github.com/Tomercio/TodoList",
    technologies: [
      <FaReact />,
      <FaJsSquare />,
      <FaHtml5 />,
      <FaCss3Alt />,
      <RiTailwindCssFill />,
    ],
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center lg:mt-[-65] justify-center min-h-screen text-white animate-fadeIn px-4 pt-20 sm:pt-28 md:pt-32 lg:pt-20">
      {/* Social Icons on the Left */}
      <SocialLinks />

      <h1 className="text-4xl font-bold mb-10 text-center text-emerald-300">
        My Projects
      </h1>

      {/* Project Cards */}
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-8 gap-y-6 lg:max-w-screen-xl px-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black bg-opacity-40 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex flex-col justify-between w-full sm:w-72 md:w-80 lg:w-2/5"
          >
            {/* Main Content */}
            <div className="flex-grow">
              {/* Project Image */}
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg mb-2"
                />
              </Link>

              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-1">{project.title}</h2>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="flex space-x-3 text-lg mt-4">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-emerald-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
