export interface ProjectItemProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: ProjectItemProps[] = [
  {
    title: "Minecraft",
    description: "Replicated actual Minecraft game using Unity",
    tags: ["C#", "Unity", "ShaderLab"],
    image: "/images/minecraft.png",
    githubUrl: "https://github.com/Hiran2006/Minecraft",
  },
  {
    title: "GRED",
    description:
      "A start up focused connecting costumers for buying, selling and renting products",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    image: "https://gred-nine.vercel.app/",
    liveUrl: "https://gred-nine.vercel.app/",
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
