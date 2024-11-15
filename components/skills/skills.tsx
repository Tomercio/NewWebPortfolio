import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const SkillsCard = () => {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <IoLogoJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaFigma />, name: "Figma" },
  ];

  return (
    <div className="skills">
      <h2 className="skillsh text-emerald-400">Technical Skills</h2>
      <div className="grid grid-cols-6 gap-4 mb-5  justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white hover:text-emerald-400 transition-colors duration-300"
          >
            <div className="skillsi text-4xl mb-2 cursor-pointer">
              {skill.icon}
            </div>
            <p className="skilln text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
