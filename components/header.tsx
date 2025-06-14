"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function Header() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">akash.</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4">
          <div className="text-sm text-zinc-400">Chennai, India</div>
          <div className="h-4 w-px bg-zinc-700" />
          <div className="text-sm text-zinc-400">{currentTime}</div>
        </div>

        <Button variant="outline" size="sm" className="border-zinc-700 hover:bg-zinc-800 cursor:pointer">
          <FileText className="mr-2 h-4 w-4" />
          Résumé
        </Button>
      </div>
    </motion.header>
  )
}
