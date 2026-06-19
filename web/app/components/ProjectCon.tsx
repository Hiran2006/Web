"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiLayers } from "react-icons/fi";

const categories = ["All", "Web Dev", "Game Dev"];

export default function ProjectCon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const projectWrapper = container.querySelector('[data-project-list]') as HTMLElement;
      if (projectWrapper && projectWrapper.children[index]) {
        const project = projectWrapper.children[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const projectLeft = project.offsetLeft;
        const projectWidth = project.offsetWidth;

        container.scrollTo({
          left: projectLeft - containerWidth / 2 + projectWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768) {
      scrollToIndex(currentIndex);
    }
  }, [currentIndex]);

  // Reset current index when category changes
  useEffect(() => {
    setCurrentIndex(0);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  return (
    <section 
      id="projects" 
      className="relative py-24 bg-gray-50/50 dark:bg-[#060608]/40 border-y border-gray-200/50 dark:border-gray-900/50 transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-[20%] right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              A curated selection of game development replication projects and modern web applications.
            </p>
          </motion.div>

          {/* Category Filter Bar */}
          <motion.div 
            className="flex justify-center gap-2 mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative w-full mt-4 lg:mt-8 group">
          <div
            ref={containerRef}
            className="flex pb-8 pt-2 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            <div 
              data-project-list
              className="flex gap-6 px-4 md:px-12 lg:px-16 w-max items-stretch"
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
                    className="snap-center flex-shrink-0 w-[85vw] sm:w-[340px] md:w-[420px]"
                  >
                    <ProjectItem
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      image={project.image}
                      githubUrl={project.githubUrl}
                      liveUrl={project.liveUrl}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Fade effects on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-28 bg-gradient-to-r from-gray-50 dark:from-[#030303] to-transparent pointer-events-none z-10 transition-colors duration-300"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-28 bg-gradient-to-l from-gray-50 dark:from-[#030303] to-transparent pointer-events-none z-10 transition-colors duration-300"></div>

          {/* Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <div className="hidden md:block">
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                  scrollToIndex(newIndex);
                }}
                className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-800 dark:text-white transition-all hover:scale-110 hover:border-emerald-500/30 z-20 shadow-xl opacity-0 group-hover:opacity-100"
                aria-label="Previous project"
              >
                <FiChevronLeft className="w-6 h-6 text-emerald-500 dark:text-cyan-400" />
              </button>
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
                  setCurrentIndex(newIndex);
                  scrollToIndex(newIndex);
                }}
                className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl glass-panel border border-gray-200/50 dark:border-gray-800/80 flex items-center justify-center text-gray-800 dark:text-white transition-all hover:scale-110 hover:border-emerald-500/30 z-20 shadow-xl opacity-0 group-hover:opacity-100"
                aria-label="Next project"
              >
                <FiChevronRight className="w-6 h-6 text-emerald-500 dark:text-cyan-400" />
              </button>
            </div>
          )}
        </div>

        {/* Navigation Dots */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2.5">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-3.5 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-emerald-500 to-cyan-500"
                    : "bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white dark:bg-black/40 border border-gray-200 dark:border-gray-800/80 text-gray-800 dark:text-gray-200 font-bold rounded-2xl hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-md shadow-black/5 hover:-translate-y-0.5"
          >
            <FiLayers className="text-emerald-500 dark:text-cyan-400" />
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
