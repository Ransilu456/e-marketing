import { LucideIcon } from "lucide-react";

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
  icon: LucideIcon;
}

export const portfolioProjects: Project[] = [
  {
    title: "Attendance Management System",
    description: "A fast and responsive web application with modern design for streamlined employee attendance tracking and reporting.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&h=720&fit=crop",
    link: "#contact",
    slug: "attendance-management-system",
  },
  {
    title: "HR Management",
    description: "A sleek, high-impact dashboard for HR professionals featuring comprehensive employee management and analytics.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&h=720&fit=crop",
    link: "#contact",
    slug: "hr-management",
  },
  {
    title: "Business Landing Page",
    description: "High‑converting landing page featuring clean UI/UX and clear calls-to-action designed to maximize conversions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&h=720&fit=crop",
    link: "#contact",
    slug: "business-landing-page",
  },
];
