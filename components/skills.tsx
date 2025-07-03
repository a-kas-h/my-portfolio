"use client"

import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNode, FaGithub, FaFigma, FaJava } from "react-icons/fa"
import { FaChrome, FaDocker } from "react-icons/fa6";
import { IoLogoJavascript, IoTerminal, IoLogoFirebase } from "react-icons/io5"
import { SiTypescript, SiPostman, SiCplusplus, SiExpress, SiMongodb } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { CgFramer } from "react-icons/cg";

const skillsData = {
  "technical-skills": {
    title: "Languages",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#EBB51A" },
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Chrome DevTools", icon: FaChrome, color: "#4285F4" },
      { name: "Terminal", icon: IoTerminal, color: "#000000" },
    ],
  },
  frameworks: {
    title: "Frameworks",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: RiNextjsFill, color: "#000000" },
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "#06B6D4" },
      { name: "Framer Motion", icon: CgFramer, color: "#0055FF" },
    ],
  },
}

export default function SkillsSection() {
  return (
    <section className="w-full bg-transparent text-gray-100 py-24 min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">
          Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          The tools and technologies I've worked with
        </p>

        {Object.values(skillsData).map((section) => (
          <div key={section.title} className="mb-24">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-white">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
              {section.skills.map((skill) => {
                // If the icon color is dark (black or near-black), use white instead
                const iconColor = ["#000", "#000000", "#181717"].includes(skill.color.toLowerCase()) ? "#fff" : skill.color;
                return (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl transition hover:bg-white/10"
                  >
                    <div className="p-3 rounded-full transition-transform group-hover:scale-110">
                      <skill.icon
                        className="w-10 h-10"
                        style={{ color: iconColor }}
                      />
                    </div>
                    <p className="text-sm md:text-base text-gray-300 group-hover:text-white">
                      {skill.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
