"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectItem from "@/app/components/ProjectItem";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card popping up
      delayChildren: 0.1,
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4 transition-colors drop-shadow-sm">
            My Projects
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors text-lg">
            A collection of my personal and professional projects
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <ProjectItem
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
