"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative z-10 border-t border-gray-700 bg-gray-800/50 py-12 px-4 backdrop-blur-sm md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">akash.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-700 p-3 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-700 p-3 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:email@example.com"
              className="rounded-full bg-gray-700 p-3 text-gray-300 transition-colors hover:bg-gray-600 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © {currentYear} Akash Saminathan. All rights reserved.
        </div>
      </div>
    </motion.footer>
  )
}
