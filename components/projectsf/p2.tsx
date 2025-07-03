"use client"

import React, { useLayoutEffect, useRef, useState } from "react"
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

const P2: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [divTop, setDivTop] = useState(0)
  const [divHeight, setDivHeight] = useState(0)
  const numRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (divRef.current) {
      setDivTop(divRef.current.offsetTop)
      setDivHeight(divRef.current.offsetHeight)
    }
  }, [])

  // Use static width, height, borderRadius
  const width = "100vw"
  const height = "100vh"
  const borderRadius = "0px"

  return (
    <div
      ref={divRef}
      className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 mx-auto flex items-start gap-2 justify-end flex-col rounded-3xl aspect-[16/10] p-4 sm:p-8 md:p-16 lg:p-24 py-12 sm:py-24 md:py-36 lg:py-32 relative overflow-hidden mt-0"
      style={{
        width,
        height,
        borderRadius,
        backgroundImage: 'url(/lockin.jpeg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="flex flex-col gap-4 lg:flex-row items-start lg:gap-4 justify-between w-full relative z-10">
        <div>
          <h1
            className="text-white w-fit text-3xl mb-1 md:mb-2 flex items-center gap-6 md:text-4xl lg:text-5xl font-semibold"
          >
            Project2
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex w-fit items-center px-3 py-2 text-lg rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              <span>
                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              </span>
            </a>
          </h1>
          <p className="text-white/70 text-base sm:text-base md:text-lg lg:text-xl">
            Description
          </p>
        </div>
      </div>
    </div>
  )
}

export default P2
