"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import BackgroundPattern from "@/components/background-pattern"
import ScrollProgressBar from "@/components/ScrollProgressBar"

export default function Home() {
  return (

    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black">
    <ScrollProgressBar />
      <BackgroundPattern />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  )
}
