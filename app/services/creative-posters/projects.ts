export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
  features: string[];
  technologies: string[];
}

export const posterProjects: Project[] = [
  // --- 1. Photo Framing Service ---
  {
    title: "Artisan Frames Holiday Collection Poster",
    description:
      "A sophisticated, visually textured poster to advertise custom framing services, highlighting premium materials and preserving cherished memories.",
    image: "https://images.unsplash.com/photo-1598771441838-89c566a5040f?w=800&h=450&fit=crop",
    slug: "photo-framing-holiday-ad",
    features: [
      "Showcasing product textures (wood, metal)",
      "Elegant, clean typography",
      "Print and social media formats",
    ],
    technologies: ["Adobe Photoshop", "Mockup Creation", "Vector Graphics"],
  },
  // --- 2. Job Marketing / Recruitment Agency ---
  {
    title: "SwiftHire Career Fair Campaign",
    description:
      "A dynamic, bold poster series designed for a recruitment agency's career fair, using strong calls-to-action and a modern geometric layout.",
    image: "https://images.unsplash.com/photo-1517430852953-2394d0c1537b?w=800&h=450&fit=crop",
    slug: "job-marketing-recruitment",
    features: [
      "High-impact color scheme",
      "Hierarchical information design (clear CTAs)",
      "Digital billboard adaptation",
    ],
    technologies: ["Adobe Illustrator", "Motion Graphics (for digital)", "UX/UI Principles"],
  },
  // --- 3. Vehicle Repair Shop ---
  {
    title: "Precision Auto Service Promotional Poster",
    description:
      "An industrial and trustworthy poster design for an auto repair shop, emphasizing reliability, speed, and technical expertise.",
    image: "https://images.unsplash.com/photo-1621905252507-b3b3558f3312?w=800&h=450&fit=crop",
    slug: "vehicle-repair-promo",
    features: [
      "Use of mechanical textures and imagery",
      "Limited, strong color palette (red/black)",
      "Clear service price listings",
    ],
    technologies: ["Adobe Photoshop", "Texturing", "Contrast Theory"],
  },
  // --- 4. Animal Farm / Agricultural Business ---
  {
    title: "Green Pastures Farm-to-Table Event Poster",
    description:
      "A rustic, wholesome poster design for an organic animal farm promoting a public event, using earthy tones and pastoral imagery.",
    image: "https://images.unsplash.com/photo-1558774780-f04620f3299c?w=800&h=450&fit=crop",
    slug: "animal-farm-event",
    features: [
      "Hand-drawn/sketch elements",
      "Earthy and natural color palette",
      "Focus on authenticity and heritage",
    ],
    technologies: ["Adobe Illustrator", "Procreate", "Organic Typography"],
  },
  // --- 5. Food Company (Packaged Goods) ---
  {
    title: "Crispy Delight Snack Product Launch",
    description:
      "A fun, energetic poster campaign for a new line of snacks, focusing on appetite appeal, vibrant colors, and product visualization.",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a5c1?w=800&h=450&fit=crop",
    slug: "food-company-snack-launch",
    features: [
      "High-quality food photography integration",
      "Vibrant and eye-catching layout",
      "Retail point-of-sale adaptation",
    ],
    technologies: ["Adobe Photoshop", "Image Manipulation", "Color Psychology (Appetite)"],
  },
];