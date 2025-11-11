
export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: React.ElementType;
}

export const portfolioProjects: Project[] = [
  {
    title: "Attendace Managemnt System",
    description: "A fast and responsive web application with modern design.",
    image: "https://picsum.photos/id/1051/1080/720",
    link: "#contact",
    slug: "attendance-management-system",
  },
  {
    title: "HR Managment",
    description: "A sleek, high-impact dashboard for creative professionals.",
    image: "https://picsum.photos/id/218/1080/720",
    link: "#contact",
    slug: "hr-management",
  },
  {
    title: "Business Landing Page",
    description: "High‑converting landing page featuring clean UI/UX and clear calls-to-action.",
    image: "https://picsum.photos/id/200/1080/720",
    link: "#contact",
    slug: "business-landing-page",
  },
];