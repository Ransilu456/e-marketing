export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  link: string;
  technologies: string[];
}

export const mobileProjects: Project[] = [
  {
    title: "Thripitaka Exam Past Papers",
    description:
      "A mobile application designed to help students easily access, download, and manage Thripitaka examination past papers. The app focuses on simplicity, accessibility, and a clean reading experience, making it especially suitable for older users and long study sessions.",
    image: "/data/thripitaka-assets/ss2.png",
    slug: "thripitaka-exam-pastpapers",
    features: [
      "Browse and download past exam papers by year",
      "Offline access to saved papers",
      "Print and share PDF documents",
      "Regular yearly content updates",
      "Accessible and senior-friendly UI/UX design",
    ],
    link: "/services/mobile-apps/projects/thripitaka-exam-pastpapers",
    technologies: ["React Native", "MongoDB", "Node.js", "GitHub"],
  },
];

