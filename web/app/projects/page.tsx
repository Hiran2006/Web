import { projects } from "@/data/projects";
import ProjectItem from "@/app/components/ProjectItem";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my personal and professional projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
