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
    image: "/projects/minecraft.png",
    githubUrl: "https://github.com/Hiran2006/Minecraft",
  },
  {
    title: "GRED",
    description:
      "A start up focused connecting customers for buying, selling and renting products",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    image: "/projects/gred.png",
    liveUrl: "https://gred-nine.vercel.app/",
  },
  {
    title: "Waste Management",
    description: "A trash collector alerter, with location tracking",
    tags: ["React", "Express", "MongoDB"],
    image: "/projects/waste-manager.avif",
    githubUrl: "https://github.com/Hiran2006/waste-manager",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with 5-day forecast",
    tags: ["JavaScript", "OpenWeather API", "CSS"],
    image: "/projects/weather.jpg",
    githubUrl: "https://github.com/Hiran2006/Weather-App",
  },
  {
    title: "Authentication",
    description: "Made a Web that uses both JWT and Session authentication techniques",
    tags: ["html", "Javascript", "Express", "Postgres"],
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/legacy/assets/swa/img/anchor-info/what-is-user-authentication-628x353.png",
    githubUrl: "https://github.com/Hiran2006/authentication",
  }
];
