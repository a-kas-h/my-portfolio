"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.div
      className="fixed right-2 top-0 w-1 h-screen bg-zinc-700/20 z-50 overflow-hidden rounded-full"
    >
      <motion.div
        className="w-full bg-gradient-to-b from-purple-400 to-blue-500 rounded-full"
        style={{
          height,
        }}
      />
    </motion.div>
  )
}
