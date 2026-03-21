"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";

export default function ProjectCon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const project = container.children[0]?.children[index] as HTMLElement;
      
      if (project) {
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

  return (
    <section id="projects" className="mt-20 pb-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-3 transition-colors">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            Check out some of my recent work and personal projects
          </p>
        </div>

        {/* Horizontal scrollable container */}
        <div className="relative w-full mt-4 lg:mt-8 group">
          <div
            ref={containerRef}
            className="flex pb-8 pt-2 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            <div className="flex gap-6 px-4 md:px-10 lg:px-12 w-max items-stretch">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[85vw] sm:w-[320px] md:w-[400px]"
                >
                  <ProjectItem
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="hidden md:flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  scrollToIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index
                    ? "bg-green-500"
                    : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Fade effects on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10 transition-colors duration-300 rounded-l-xl"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none z-10 transition-colors duration-300 rounded-r-xl"></div>

          {/* Navigation Arrows */}
          {projects.length > 1 && (
            <div className="hidden md:block">
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                }}
                className="absolute left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700 flex items-center justify-center text-gray-800 dark:text-white transition-all hover:scale-110 z-20 shadow-md md:opacity-0 md:group-hover:opacity-100"
                aria-label="Previous project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
                  setCurrentIndex(newIndex);
                }}
                className="absolute right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700 flex items-center justify-center text-gray-800 dark:text-white transition-all hover:scale-110 z-20 shadow-md md:opacity-0 md:group-hover:opacity-100"
                aria-label="Next project"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-green-500 text-green-600 dark:text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-colors"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
