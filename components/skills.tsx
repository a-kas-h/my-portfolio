"use client"

import { Code2, Database, Globe, Palette, Server, Smartphone, GitBranch, Container, Flame, Zap, Box, Monitor, Cpu, Layers } from "lucide-react"

const skillsData = {
  "technical-skills": {
    title: "Technical Skills",
    skills: [
      { name: "HTML", icon: Code2, color: "#E34F26" },
      { name: "CSS", icon: Palette, color: "#1572B6" },
      { name: "JavaScript", icon: Zap, color: "#F7DF1E" },
      { name: "React JS", icon: Globe, color: "#61DAFB" },
      { name: "TypeScript", icon: Code2, color: "#3178C6" },
      { name: "Python", icon: Cpu, color: "#3776AB" },
      { name: "Node.js", icon: Server, color: "#339933" },
      { name: "Next.js", icon: Layers, color: "#000000" },
    ],
  },
  tools: {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: GitBranch, color: "#181717" },
      { name: "VS Code", icon: Monitor, color: "#007ACC" },
      { name: "Figma", icon: Box, color: "#F24E1E" },
      { name: "Postman", icon: Zap, color: "#FF6C37" },
      { name: "Chrome DevTools", icon: Globe, color: "#4285F4" },
      { name: "Terminal", icon: Server, color: "#000000" },
    ],
  },
  frameworks: {
    title: "Frameworks",
    skills: [
      { name: "React", icon: Globe, color: "#61DAFB" },
      { name: "Next.js", icon: Layers, color: "#000000" },
      { name: "Express.js", icon: Server, color: "#000000" },
      { name: "Firebase", icon: Flame, color: "#FFCA28" },
      { name: "MongoDB", icon: Database, color: "#47A248" },
      { name: "Docker", icon: Container, color: "#2496ED" },
      { name: "Tailwind CSS", icon: Palette, color: "#06B6D4" },
      { name: "Framer Motion", icon: Smartphone, color: "#0055FF" },
    ],
  },
}

export default function SkillsSection() {
  return (
    <section className="w-full bg-transparent text-gray-100 py-24 min-h-screen relative z-10 mt-50">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-400 mb-8 text-center">
          Skills
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 text-center">
          The tools and technologies I've learned from development
        </p>
        {Object.values(skillsData).map((section) => (
          <div key={section.title} className="mb-20 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-400 mb-8 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 flex flex-col items-center text-center space-y-4 min-h-[140px] relative z-10"
                >
                  <div className="p-4 rounded-full bg-gray-800 mb-2 flex items-center justify-center">
                    <skill.icon
                      className="w-8 h-8 text-primary-400"
                      style={{ color: skill.color, zIndex: 10, position: 'relative' }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-100">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-transparent" />
    </section>
  )
}
