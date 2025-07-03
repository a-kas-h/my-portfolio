"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"

// Simple NumberFlow replacement component
const NumberFlow: React.FC<{
  value: number
  className?: string
  format?: {
    compactDisplay?: string
    notation?: string
  }
  suffix?: string
}> = ({ value, className, format, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0)

  React.useEffect(() => {
    if (value === 0) {
      setDisplayValue(0)
      return
    }

    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, value)
      setDisplayValue(Math.floor(current))

      if (step >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  const formatNumber = (num: number) => {
    if (format?.notation === "compact") {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M"
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(0) + "K"
      }
    }
    return num.toLocaleString()
  }

  return (
    <span className={className}>
      {formatNumber(displayValue)}
      {suffix}
    </span>
  )
}

const P1: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [divTop, setDivTop] = useState(0)
  const [divHeight, setDivHeight] = useState(0)
  const numRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(numRef)

  useLayoutEffect(() => {
    const updatePosition = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect()
        setDivTop(window.scrollY + rect.top)
        setDivHeight(rect.height)
      }
    }

    // Defer layout measurement until browser paints everything
    const frame = requestAnimationFrame(() => {
      updatePosition()
    })

    window.addEventListener("resize", updatePosition)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", updatePosition)
    }
  }, [])

  const divCenter = React.useMemo(() => divTop + divHeight * 0.5, [divTop, divHeight])

  const width = useTransform(scrollY, [divTop - 300, divTop], ["70vw", "100vw"], { clamp: true })

  const height = useTransform(scrollY, [divTop - 300, divTop], ["70vh", "100vh"], { clamp: true })

  const borderRadius = useTransform(scrollY, [divTop - 300, divTop], ["38px", "0px"], { clamp: true })

  return (
    <motion.div
      ref={divRef}
      className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 mx-auto flex items-start gap-2 justify-end flex-col rounded-3xl aspect-[16/10] mt-12 p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32 relative overflow-hidden"
      style={{
        width,
        height,
        borderRadius,
        backgroundImage: 'url(/lockin.jpeg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="flex flex-col gap-4 lg:flex-row items-start lg:gap-4 justify-between w-full relative z-10">
        <div>
          <motion.h1
            className="text-white w-fit text-3xl mb-1 md:mb-2 flex items-center gap-6 md:text-4xl lg:text-5xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2,
            }}
          >
            Project1
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex w-fit items-center px-3 py-2 text-lg rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{
                scale: 0.95,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <motion.div
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                whileTap={{ x: 3, y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </motion.div>
            </motion.a>
          </motion.h1>
          <motion.p
            className="text-white/70 text-base sm:text-base md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.7, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.4,
            }}
          >
            Description
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default P1
