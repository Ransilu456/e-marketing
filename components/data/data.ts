export interface Project {
  title: string;
  categories: Category[];
  result: string;
  image: string;
  link: string;
  description: string;
  tags: Tag[];
  technologies?: string[];
}

export enum Category {
  Technology = "Technology",
  WebDevelopment = "Web Development",
  WebApp = "Web App",
  MobileDevelopment = "Mobile Development",
  GraphicDesign = "Graphic Design",
  FacebookDesign = "Facebook Design",
}

export type Tag =
  | "Web App"
  | "Marketing"
  | "Branding"
  | "Social Media"
  | "Next.js"
  | "UI/UX"
  | "SEO"
  | "React"
  | "Node.js"
  | "Database"
  | "React Native"
  | "MongoDB"
  | "UI Design"
  | "Facebook Ads"
  | "Canva"
  | "Brand Design"
  | "Figma"
  | "Post Design";

export const projects: Project[] = [
  {
    title: "Company Website & Web Presence",
    categories: [Category.WebDevelopment, Category.Technology],
    result: "Increased Online Visibility & Client Inquiries",
    image: "/data/our_site.png",
    description:
      "Designed and developed the official company website with a modern UI, responsive layout, and optimized performance to effectively showcase services and projects.",
    tags: ["Next.js", "UI/UX", "SEO", "Web App"],
    link: "https://emarketing-paradice.netlify.app/",
    technologies: ["React Native", "MongoDB", "Node.js", "GitHub"],

  },

  {
    title: "QR-Based Attendance Management System",
    categories: [Category.WebApp, Category.Technology],
    result: "Attendance Marking Time Reduced by 70%",
    image: "/data/attendance.png",
    description:
      "Developed a web-based attendance marking system using QR codes, enabling fast, accurate, and paperless attendance tracking for schools and institutions.",
    tags: ["React", "Node.js", "Database", "UI/UX"],
    link: "https://dp-qr.netlify.app/",
  },

  {
    title: "Thripitaka Exam Past Papers Mobile App",
    categories: [Category.MobileDevelopment, Category.Technology],
    result: "Improved Exam Preparation Accessibility",
    image: "/data/thripitaka-assets/ss2.png",
    description:
      "Built a mobile application that allows students to browse, download, and manage Thripitaka exam past papers with a clean, senior-friendly user interface.",
    tags: ["React Native", "MongoDB", "UI Design"],
    link: "https://play.google.com/store/apps/details?id=com.emarketing_thripitaka.application&pcampaignid=web_share",
  },

  {
    title: "Facebook Marketing Poster Designs",
    categories: [Category.GraphicDesign, Category.FacebookDesign],
    result: "Higher Engagement on Social Media Campaigns",
    image: "/data/social-media.jpg",
    description:
      "Designed high-converting Facebook marketing posters and promotional creatives focused on clear messaging, brand consistency, and audience engagement.",
    tags: ["Facebook Ads", "Canva", "Brand Design", "Post Design"],
    link: "/under_development_200",
  },

  {
    title: "Festival Promotion Poster Designs",
    categories: [Category.FacebookDesign, Category.GraphicDesign],
    result: "Strong Reach During Seasonal Campaigns",
    image: "/data/fes.jpg",
    description:
      "Created festival-themed promotional poster designs for Sri Lankan seasonal campaigns, optimized for social media visibility and conversions.",
    tags: ["Social Media", "Canva", "Figma", "Post Design"],
    link: "/under_development_200",
  },
];