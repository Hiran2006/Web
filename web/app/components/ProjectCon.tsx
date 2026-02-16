"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "@/data/projects";

export default function ProjectCon() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    // Auto-scroll for desktop
    let interval: NodeJS.Timeout;
    if (!isMobile && !isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
        );
      }, 5000);
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (interval) clearInterval(interval);
    };
  }, [isHovered, isMobile]);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const project = container.children[0]?.children[index] as HTMLElement;
      if (project) {
        container.scrollTo({
          left: project.offsetLeft - 16, // 16px for padding
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (!isMobile) {
      scrollToIndex(currentIndex);
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="projects" className="mt-20 pb-12 md:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-3">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </div>

        {/* Horizontal scrollable container */}
        <div
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={containerRef}
            className="flex pb-6 -mx-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            <div className="flex gap-6 px-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="snap-center flex-shrink-0 w-[300px] md:w-[400px]"
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
          {!isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
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
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Fade effects on the sides - full viewport width */}
          <div className="fixed left-0 top-0 bottom-0 w-[calc(50vw-50%+0.5rem)] bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="fixed right-0 top-0 bottom-0 w-[calc(50vw-50%+0.5rem)] bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>

          {/* Navigation Arrows */}
          {!isMobile && projects.length > 1 && (
            <>
              <button
                onClick={() => {
                  const newIndex =
                    currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
                  setCurrentIndex(newIndex);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white transition-all hover:scale-110 z-10"
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
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-700/80 flex items-center justify-center text-white transition-all hover:scale-110 z-10"
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
            </>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-colors"
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
