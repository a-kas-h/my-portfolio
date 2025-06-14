"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillsData = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "Java", "C++"],
  frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Vue.js", "Django"],
  tools: ["Git", "Docker", "AWS", "Figma", "VS Code", "Jest", "GitHub Actions"],
}

export default function Skills() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-10%" })

  const categoryVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.3 },
    }),
  }

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  }

  return (
    <div className="min-h-screen bg-transparent text-white">

      {/* Technical Skills Section */}
      <section ref={sectionRef} className="relative px-4 md:px-8 py-16 bg-transparent text-white">
        <div className="max-w-4xl mx-auto">
          {/* Sticky header */}
          <motion.div
            ref={headerRef}
            className="sticky top-0 z-20 bg-transparent py-6 mb-8"
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-3 rounded-full" />
          </motion.div>

          {/* Vertically stacked skill categories */}
          <motion.div
            className="space-y-20 pb-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, staggerChildren: 0.3 } },
            }}
          >
            {/* Languages */}
            <motion.div 
              custom={0} 
              variants={categoryVariants}
              className="relative"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-300 flex items-center">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-4"></span>
                Languages
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {skillsData.languages.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={skillItemVariants}
                    className="flex items-center p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-200 border border-gray-800 hover:border-purple-400/30"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Frameworks */}
            <motion.div 
              custom={1} 
              variants={categoryVariants}
              className="relative"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300 flex items-center">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-4"></span>
                Frameworks
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {skillsData.frameworks.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={skillItemVariants}
                    className="flex items-center p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-200 border border-gray-800 hover:border-blue-400/30"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Tools */}
            <motion.div 
              custom={2} 
              variants={categoryVariants}
              className="relative"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-green-300 flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-4"></span>
                Tools
              </h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {skillsData.tools.map((skill, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={skillItemVariants}
                    className="flex items-center p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors duration-200 border border-gray-800 hover:border-green-400/30"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content after skills section */}
      
    </div>
  )
}