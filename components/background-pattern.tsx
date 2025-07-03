"use client"

import { useEffect, useRef } from "react"

export default function BackgroundPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const binaryRef = useRef<string[][]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const binary = ["0", "1"]
    const fontSize = 16
    let columns: number
    let rows: number
    let binaryMatrix: string[][]

    const initializeCanvas = () => {
      const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)

      canvas.width = window.innerWidth
      canvas.height = viewportHeight

      columns = Math.ceil(canvas.width / fontSize)
      rows = Math.ceil(canvas.height / fontSize)

      // Fill matrix with random 0s and 1s
      binaryMatrix = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => binary[Math.floor(Math.random() * 2)])
      )

      binaryRef.current = binaryMatrix
    }

    initializeCanvas()

    const draw = () => {
  ctx.fillStyle = "rgb(0, 0, 0)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "#1c1917"
  ctx.font = `${fontSize}px monospace`

  for (let row = 0; row < binaryRef.current.length; row++) {
    for (let col = 0; col < binaryRef.current[row].length; col++) {
      if (Math.random() < 0.01) {
        binaryRef.current[row][col] = binary[Math.floor(Math.random() * 2)]
      }

      ctx.fillText(binaryRef.current[row][col], col * fontSize, (row + 1) * fontSize)
    }
  }
}


    const interval = setInterval(draw, 50)

    const handleResize = () => {
      initializeCanvas()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" />
}
