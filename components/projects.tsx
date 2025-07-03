import ClassPro from "@/components/projectsf/p1"
import P2 from "./projectsf/p2"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Add some content before to enable scrolling */}
      <section className="h-[80vh] flex items-center justify-center sticky top-0 bg-transparent z-10">
        <h1 className="text-4xl font-bold text-white-900">Featured Projects</h1>
      </section>
      <ClassPro />
      <P2/>
      {/* Add some content after to enable scrolling */}
      <div className="h-screen flex items-center justify-center sticky">
        <h2 className="text-2xl text-white-600">Other projects</h2>
      </div>
    </main>
  )
}
