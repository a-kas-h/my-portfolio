"use client"

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		description:
			"A full-stack e-commerce platform with user authentication, product catalog, and payment integration.",
		image: "/placeholder.svg?height=600&width=800",
		technologies: ["React", "Node.js", "MongoDB", "Stripe"],
	},
	{
		id: 2,
		title: "Task Management App",
		description:
			"A collaborative task management application with real-time updates and team workspaces.",
		image: "/placeholder.svg?height=600&width=800",
		technologies: ["Next.js", "Firebase", "Tailwind CSS"],
	},
	{
		id: 3,
		title: "Weather Dashboard",
		description:
			"An interactive weather dashboard that displays current and forecasted weather data.",
		image: "/placeholder.svg?height=600&width=800",
		technologies: ["JavaScript", "Weather API", "Chart.js"],
	},
]

export default function Projects() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.1 })

	// Only create refs once per project
	const projectRefs = useRef(projects.map(() => React.createRef<HTMLDivElement>()))
	const projectInViewStates = projectRefs.current.map((ref) => useInView(ref, { once: true, amount: 0.3 }))

	return (
		<section
			ref={ref}
			id="projects"
			className="relative min-h-screen flex items-center justify-center snap-start snap-always py-24 px-4 md:px-8"
		>
			<div className="mx-auto max-w-6xl w-full">
				<motion.h2
					className="mb-12 text-center text-3xl font-bold"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5 }}
				>
					Projects
				</motion.h2>

				<div className="space-y-24">
					{projects.map((project, index) => {
						const projectRef = projectRefs.current[index]
						const isProjectInView = projectInViewStates[index]

						return (
							<motion.div
								key={project.id}
								ref={projectRef}
								className="flex flex-col rounded-xl bg-gray-800/90 backdrop-blur-sm border border-gray-700/30 md:flex-row"
								initial={{ opacity: 0, y: 50 }}
								animate={isProjectInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
							>
								<div className="relative h-64 w-full overflow-hidden rounded-t-xl md:h-auto md:w-1/2 md:rounded-l-xl md:rounded-tr-none">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										fill
										className="object-cover"
									/>
								</div>

								<div className="flex flex-col justify-center p-6 md:w-1/2 md:p-8">
									<h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
									<p className="mb-6 text-gray-200">{project.description}</p>

									<div className="mb-6 flex flex-wrap gap-2">
										{project.technologies.map((tech) => (
											<span
												key={tech}
												className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-200"
											>
												{tech}
											</span>
										))}
									</div>

									<Button className="w-fit bg-gray-700 hover:bg-gray-600 text-white">
										<ExternalLink className="mr-2 h-4 w-4" />
										View Project
									</Button>
								</div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
