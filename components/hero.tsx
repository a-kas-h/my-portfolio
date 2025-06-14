"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start px-4 py-42">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Decorative elements 
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400/50 to-blue-500/50" />
        <div className="absolute top-1/3 right-1/3 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400/50 to-blue-500/50" />
        <div className="absolute bottom-1/4 right-1/4 h-2 w-2 rounded-full bg-gradient-to-r from-purple-400/50 to-blue-500/50" />
        <div className="absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full bg-gradient-to-r from-purple-400/50 to-blue-500/50" />*/}
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="mb-8 relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/me.png"
            alt="Akash Saminathan"
            fill
            priority
            className="object-contain"
          />
        </div>

        <motion.h1
          className="mb-4 text-center text-4xl font-bold tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Akash Saminathan
        </motion.h1>

        <motion.div
          className="text-center text-xl text-zinc-400 md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Designer ✦ Developer
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        {/*<div className="flex flex-col items-center">
          <span className="text-sm text-zinc-500">Scroll to explore</span>
          <div className="mt-2 h-10 w-1 rounded-full bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>*/}
      </motion.div>
    </section>
  )
}
