export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  technologies: string[];
}

export const posterProjects: Project[] = [
  {
    title: "Artisan Frames Holiday Collection Poster",
    description:
      "A sophisticated, visually textured poster to advertise custom framing services, highlighting premium materials and preserving cherished memories.",
    image: "/data/frame.jpg",
    slug: "photo-framing-holiday-ad",
    features: [
      "Showcasing product textures (wood, metal)",
      "Elegant, clean typography",
      "Print and social media formats",
    ],
    technologies: ["Canva", "Figma", "Vector Graphics"],
  },
];