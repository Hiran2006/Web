import ProjectItem, { type ProjectItemProps } from "./ProjectItem";

const projects: ProjectItemProps[] = [
  {
    title: "Minecraft",
    description: "Replicated actual Minecraft game using Unity",
    tags: ["C#", "Unity", "ShaderLab"],
    image: "/images/projects/minecraft.png",
    githubUrl: "https://github.com/Hiran2006/Minecraft",
  },
  {
    title: "Task Management App",
    description:
      "Real-time task management application with drag-and-drop functionality",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    image: "/images/projects/taskapp.jpg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with modern web technologies",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/projects/portfolio.jpg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast",
    tags: ["JavaScript", "OpenWeather API", "CSS3"],
    image: "/images/projects/weather.jpg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export default function ProjectCon() {
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
        <div className="relative">
          <div className="flex pb-6 -mx-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 px-4">
              {projects.map((project, index) => (
                <ProjectItem
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>

          {/* Fade effect on the right side */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-colors">
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
          </button>
        </div>
      </div>
    </section>
  );
}
