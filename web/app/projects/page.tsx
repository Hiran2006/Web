"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectItem from "@/app/components/ProjectItem";

const categories = ["All", "Web Dev", "Game Dev"];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Game Dev") {
      return project.tags.some(tag => ["Unity", "C#", "ShaderLab"].includes(tag));
    }
    if (selectedCategory === "Web Dev") {
      return project.tags.some(tag => 
        ["Next.js", "React", "TypeScript", "Tailwind", "Supabase", "Express", "MongoDB", "JavaScript", "html", "Postgres"].includes(tag)
      );
    }
    return true;
  });

  return (
    <main className="relative min-h-screen bg-white dark:bg-[#030303] py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[25rem] h-[25rem] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A collection of replication games, database management utilities, and real-time frontend/backend web applications.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex justify-center gap-2 mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex glass-panel p-1 rounded-2xl border border-gray-200/60 dark:border-gray-800/80 shadow-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 relative
                  ${selectedCategory === cat 
                    ? "text-white" 
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                <span className="relative z-10">{cat}</span>
                {selectedCategory === cat && (
                  <motion.span
                    layoutId="projectsPageCategory"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.title} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <ProjectItem
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  index={index}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
