export interface JourneyItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export const journeyData: JourneyItem[] = [
  {
    id: "learning-web-dev",
    title: "Started Learning Web Development",
    date: "2020",
    description: "Began my journey into web development with HTML, CSS, and JavaScript.",
  },
  {
    id: "building-projects",
    title: "Building Projects",
    date: "2021",
    description:
      "Worked on various projects to hone my skills in modern web technologies.",
  },
  {
    id: "B.Tech Joined",
    title: "B.Tech Joined",
    date: "2024 - Present",
    description: "Joined B.Tech to pursue my dream of becoming a software engineer.",
  }
];

export default journeyData;
