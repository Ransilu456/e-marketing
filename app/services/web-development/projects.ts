import { LucideIcon } from "lucide-react";
import { Zap, LayoutGrid, BarChart, Settings, Smartphone, Cpu } from "lucide-react";

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
    image: "/Attendance.png",
    link: "https://dp-qr.netlify.app",
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

export const features: Feature[] = [
  {
    title: "Performance Optimized",
    desc: "Built with modern frameworks for lightning-fast loading speeds and smooth user interaction.",
    icon: Zap,
  },
  {
    title: "Intuitive UI/UX",
    desc: "Designed with a focus on simplicity and ease of use, ensuring a minimal learning curve.",
    icon: LayoutGrid,
  },
  {
    title: "Advanced Analytics",
    desc: "Integrated reporting tools to transform raw data into actionable business insights.",
    icon: BarChart,
  },
  {
    title: "Customizable",
    desc: "Flexible architecture allows for easy customization and integration into existing systems.",
    icon: Settings,
  },
  {
    title: "Fully Responsive",
    desc: "Seamless experience across all devices, from desktop monitors to mobile phones.",
    icon: Smartphone,
  },
  {
    title: "Robust Backend",
    desc: "Secure and scalable server-side implementation built for reliability under high load.",
    icon: Cpu,
  },
];