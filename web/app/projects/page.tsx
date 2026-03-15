import { projects } from "@/data/projects";
import ProjectItem from "@/app/components/ProjectItem";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4 transition-colors">
            My Projects
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
            A collection of my personal and professional projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="h-full">
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
    </main>
  );
}
