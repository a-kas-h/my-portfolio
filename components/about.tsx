"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function About() {
  const ref = useRef(null)

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Animate path drawing
  const pathLength = useTransform(scrollYProgress, [0.25, 0.45, 0.7], [0, 1, 1])
  const pathOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1])

  // Animate content fade-in/out and scale
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.1, 0.4], [30, 0])
  const contentScale = useTransform(scrollYProgress, [0.1, 0.4], [0.95, 1])

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-4xl relative">
        {/* Top Left Curved Line */}
        <motion.svg
          className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40"
          viewBox="0 0 160 160"
          fill="none"
        >
          <motion.path
            d="M20 140 Q20 20 140 20"
            stroke="white"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength, opacity: pathOpacity }}
          />
        </motion.svg>

        {/* Bottom Right Curved Line */}
        <motion.svg
          className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40"
          viewBox="0 0 160 160"
          fill="none"
        >
          <motion.path
            d="M140 20 Q140 140 20 140"
            stroke="white"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength, opacity: pathOpacity }}
          />
        </motion.svg>

        {/* Content Container */}
        <motion.div
          className="relative z-10 bg-transparent p-8 md:p-12"
          style={{
            opacity: contentOpacity,
            y: contentY,
            scale: contentScale,
          }}
        >
          <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="space-y-6 text-zinc-300 leading-relaxed">
            {[
              "I am Akash Saminathan, a Computer Science student at SRM Institute of Science and Technology. I specialize in creating visually appealing, user-centered web interfaces that bridge the gap between design and functionality.",
              "I focus on building full-stack applications that are accessible and practical. My passion lies in combining elegant design with efficient code to create meaningful digital experiences that solve real-world problems.",
              "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sketching out ideas for my next creative endeavor.",
            ].map((text, i) => (
              <motion.p
                key={i}
                className="text-lg md:text-xl"
                style={{
                  opacity: contentOpacity,
                  y: contentY,
                }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="flex justify-center mt-8 space-x-2"
            style={{
              opacity: contentOpacity,
              scale: contentScale,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
