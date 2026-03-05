import { LucideIcon } from "lucide-react";
import { Zap, LayoutGrid, BarChart, Settings, Smartphone, Cpu } from "lucide-react";

export interface Tech {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  link: string;
  slug: string;
  category: string;
  page_link: string;
  techStack: Tech[];
}

export interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const portfolioProjects: Project[] = [
  {
    title: "Attendance Management System",
    description:
      "A fast and responsive web application for streamlined employee attendance tracking.",
    longDescription: `The Attendance Management System is designed for HR teams and employees to log, track, and manage attendance efficiently.
It features QR-based check-ins, real-time reporting dashboards, and automated alerts for absences or late arrivals. The modern UI ensures a smooth experience across mobile and desktop devices, making attendance tracking effortless.`,
    image: "/data/attendance.png",
    link: "https://dp-qr.netlify.app",
    slug: "attendance-management-system",
    page_link: "/services/web-development/projects/attendance-management-system",
    category: "Web App",
    techStack: [
      { name: "React.js", color: "text-blue-600" },
      { name: "TypeScript", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-teal-500" },
      { name: "Framer Motion", color: "text-purple-500" },
      { name: "Node.js", color: "text-green-600" },
      { name: "Express.js", color: "text-gray-700" },
      { name: "MongoDB", color: "text-green-500" },
    ],
  },
  /*
    {
      title: "HR Management Dashboard",
      description:
        "A sleek, high-impact dashboard for HR professionals with employee analytics.",
      longDescription: `The HR Management Dashboard centralizes employee information, payroll, leave management, and performance tracking in one place.
  Interactive charts, real-time metrics, and automated notifications help HR teams make informed decisions quickly. Designed to scale with growing organizations while maintaining intuitive usability.`,
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080&h=720&fit=crop",
      link: "#contact",
      slug: "hr-management",
      page_link: "/services/web-development/projects/hr-management",
      category: "Web App",
      techStack: [
        { name: "React.js", color: "text-blue-600" },
        { name: "Next.js", color: "text-black" },
        { name: "Tailwind CSS", color: "text-teal-500" },
        { name: "Framer Motion", color: "text-purple-500" },
        { name: "Chart.js", color: "text-red-500" },
        { name: "Node.js", color: "text-green-600" },
      ],
    },
    {
      title: "Business Landing Page",
      description:
        "High-converting landing page with clear calls-to-action designed to maximize conversions.",
      longDescription: `The Business Landing Page is a fully responsive, modern web page built for lead generation and brand awareness.
  It includes hero sections, feature highlights, testimonials, and contact forms. Optimized for speed, SEO, and user engagement, it ensures visitors have a smooth and persuasive experience across devices.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&h=720&fit=crop",
      link: "#contact",
      slug: "business-landing-page",
      page_link: "/services/web-development/projects/business-landing-page",
      category: "Web App",
      techStack: [
        { name: "Next.js", color: "text-black" },
        { name: "Tailwind CSS", color: "text-teal-500" },
        { name: "Framer Motion", color: "text-purple-500" },
        { name: "Vercel", color: "text-purple-600" },
      ],
    },
   */
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
