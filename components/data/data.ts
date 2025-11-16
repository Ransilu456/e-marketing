export interface Project {
  title: string;
  categories: Category[];
  result: string;
  image: string;
  description: string;
  tags: Tag[];
}

export enum Category {
  Technology = "Technology",
  Fashion = "Fashion",
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
    title: "SaaS Startup Launch",
    categories: [Category.Technology, Category.WebApp], 
    result: "10K Users in 6 Months",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    description:
      "Developed a scalable SaaS platform with a marketing website and social media strategy for user acquisition.",
    tags: ["Web App", "Marketing"],
  },
  {
    title: "Brand Revival Campaign",
    categories: [Category.Fashion, Category.GraphicDesign],
    result: "500% Social Engagement",
    image:
      "/data/brand.jpg",
    description:
      "Reimagining a fashion brand for the digital age through content, design, and influencer marketing.",
    tags: ["Branding", "Social Media"],
  },
  {
    title: "Restaurant Website Redesign",
    categories: [Category.WebDevelopment, Category.WebApp],
    result: "2x Online Orders",
    image:
      "/data/res.jpg",
    description:
      "Modern, mobile-friendly restaurant website with menu management and online ordering for a Colombo-based client.",
    tags: ["Next.js", "UI/UX", "SEO"],
  },
  {
    title: "School Management System",
    categories: [Category.WebApp, Category.Technology],
    result: "Improved Efficiency by 80%",
   image:
      "/Attendance.png",
    description:
      "Built a web-based system for managing attendance, grades, and communications for local schools.",
    tags: ["React", "Node.js", "Database"],
  },
  {
    title: "Delivery App for Local Stores",
    categories: [Category.MobileDevelopment, Category.Technology],
    result: "Launched Across 3 Cities",
    image:
      "/data/del.jpg",
    description:
      "Developed a React Native-based delivery app for local grocery stores with real-time tracking and push notifications.",
    tags: ["React Native", "MongoDB", "UI Design"],
  },
  {
    title: "Social Media Campaign – Local Cafe",
    categories: [Category.GraphicDesign, Category.FacebookDesign],
    result: "Tripled Engagement in 2 Weeks",
    image:
      "/data/social-media.jpg",
    description:
      "Created eye-catching Facebook and Instagram post designs with daily engagement content.",
    tags: ["Facebook Ads", "Canva", "Brand Design", "Figma"],
  },
  {
    title: "Festival Promo Post Design",
    categories: [Category.FacebookDesign, Category.GraphicDesign],
    result: "High Conversion Campaign",
    image:
      "/data/fes.jpg",
    description:
      "Designed promotional post templates for seasonal offers and digital campaigns in Sri Lanka.",
    tags: ["Post Design", "Social Media", "Canva", "Figma"],
  },
];
