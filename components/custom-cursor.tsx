"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isOverText, setIsOverText] = useState(false)
  const [isOverLink, setIsOverLink] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const rafRef = useRef<number | undefined>(undefined)
  const lastStateRef = useRef<string>('default')

  const isTextElement = useCallback((target: HTMLElement): boolean => {
    if (!target) return false
    
    const textTags = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "DIV", "SECTION", "INPUT", "TEXTAREA", "LABEL"]
    const computedStyle = window.getComputedStyle(target)

    // For input/textarea, always return true
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
      return true
    }

    // Check for contentEditable
    if (target.isContentEditable) {
      return true
    }

    // Check for text cursor style
    if (computedStyle.cursor === "text" || computedStyle.cursor === "text-vertical") {
      return true
    }

    // For other elements, check if they have text content and are text tags
    if (textTags.includes(target.tagName)) {
      return !!(target.textContent && target.textContent.trim().length > 0)
    }

    return false
  }, [])

  const isInteractiveElement = useCallback((target: HTMLElement): boolean => {
    if (!target) return false
    
    const computedStyle = window.getComputedStyle(target)

    return !!(
      target.tagName === "BUTTON" ||
      target.closest("button") ||
      target.getAttribute("role") === "button" ||
      target.closest('[role="button"]') ||
      computedStyle.cursor === "pointer" ||
      target.style.cursor === "pointer" ||
      target.classList.contains("cursor-pointer") ||
      target.closest(".cursor-pointer")
    )
  }, [])

  const isLinkElement = useCallback((target: HTMLElement): boolean => {
    if (!target) return false
    return target.tagName === "A" || !!target.closest("a")
  }, [])

  const updateCursorState = useCallback((x: number, y: number) => {
    // Cancel any pending updates
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      const target = document.elementFromPoint(x, y) as HTMLElement
      if (!target) return

      let newState = 'default'
      
      // Priority order: Link > Text > Interactive
      if (isLinkElement(target)) {
        newState = 'link'
      } else if (isTextElement(target)) {
        newState = 'text'
      } else if (isInteractiveElement(target)) {
        newState = 'interactive'
      }

      // Only update if state actually changed
      if (newState !== lastStateRef.current) {
        lastStateRef.current = newState
        
        // Reset all states first
        setIsOverLink(false)
        setIsOverText(false)
        setIsHovering(false)

        // Set new state
        switch (newState) {
          case 'link':
            setIsOverLink(true)
            break
          case 'text':
            setIsOverText(true)
            break
          case 'interactive':
            setIsHovering(true)
            break
        }
      }
    })
  }, [isTextElement, isInteractiveElement, isLinkElement])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
      
      updateCursorState(e.clientX, e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseLeave = () => {
      setIsVisible(false)
      setIsOverLink(false)
      setIsOverText(false)
      setIsHovering(false)
      lastStateRef.current = 'default'
    }

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Hide default cursor
    document.body.style.cursor = "none"
    document.documentElement.style.cursor = "none"

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.body.style.cursor = "auto"
      document.documentElement.style.cursor = "auto"
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [isVisible, updateCursorState])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isOverText ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Text cursor */}
      <AnimatePresence>
        {isOverText && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
            style={{
              x: mousePosition.x - 1,
              y: mousePosition.y - 10,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: 1,
              scaleY: 1,
            }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="w-0.5 h-5 bg-white rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        animate={{
          scale: isOverLink ? 2.2 : isHovering ? 1.5 : isClicking ? 0.8 : 1,
          opacity: isOverText ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full mix-blend-difference ${
            isOverLink ? "border-2 border-purple-400/70" : "border border-white/30"
          }`}
        />
      </motion.div>

      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        animate={{
          scale: isOverLink ? 3.2 : isHovering ? 2 : 1,
          opacity: isOverLink ? 0.2 : isHovering ? 0.1 : isOverText ? 0.02 : 0.05,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 25,
          mass: 1,
        }}
      >
        <div
          className={`w-6 h-6 rounded-full blur-sm ${
            isOverLink ? "bg-gradient-to-r from-purple-400 to-pink-500" : "bg-gradient-to-r from-purple-400 to-blue-500"
          }`}
        />
      </motion.div>

      {/* Link indicator */}
      <AnimatePresence>
        {isOverLink && (
          <motion.div
            className="fixed top-0 left-0 z-[9996] pointer-events-none"
            style={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.9,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <div className="w-4 h-4 border-2 border-purple-400/90 rounded-full bg-purple-400/15" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}