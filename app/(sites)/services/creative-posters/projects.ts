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
    title: "Eco-Tech Summit 2024 Keynote Poster",
    description: "A futuristic, minimalist poster for a leading sustainability conference, focusing on clean lines and bold typography to convey innovation.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    slug: "eco-tech-summit",
    features: [
      "Geometric vector patterns",
      "High-contrast color palette",
      "Event-specific QR integration"
    ],
    technologies: ["Illustrator", "Figma", "Typography"],
  },
  {
    title: "Luxe Timepieces Holiday Ad",
    description: "Sophisticated print and digital campaign visuals for a luxury watch brand, highlighting texture and premium craftsmanship.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    slug: "luxe-timepieces",
    features: [
      "Product-focused layout",
      "Subtle lighting effects",
      "Premium serif typography"
    ],
    technologies: ["Photoshop", "Lightroom", "Color Grading"],
  },
  {
    title: "Urban Beats Music Festival",
    description: "Vibrant, high-energy poster for a city-wide music festival, utilizing grit, grain, and dynamic compositions to attract a younger audience.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    slug: "urban-beats",
    features: [
      "Dynamic photo manipulation",
      "Custom street-art style brushes",
      "Multi-format export (Social/Print)"
    ],
    technologies: ["Digital Art", "Mixed Media", "Poster Design"],
  },
  {
    title: "Fresh Harvest Organic Market",
    description: "Friendly and approachable branding poster for a local organic market, using hand-drawn elements and earthy tones.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
    slug: "fresh-harvest",
    features: [
      "Hand-illustrated icons",
      "Warm, inviting color scheme",
      "Readable info-hierarchy"
    ],
    technologies: ["Procreate", "Canva", "Illustration"],
  },
  {
    title: "Neon Nights E-Sports Tournament",
    description: "Cyberpunk-inspired poster for a competitive gaming event, featuring glowing effects and futuristic design elements.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
    slug: "neon-nights",
    features: [
      "Neon glow effects",
      "Action-packed composition",
      "Sponsor logo placement system"
    ],
    technologies: ["Figma", "After Effects (Still)", "Branding"],
  },
  {
    title: "Corporate Excellence Awards",
    description: "Professional and elegant poster for a corporate recognition ceremony, emphasizing prestige and tradition.",
    image: "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=800",
    slug: "corporate-excellence",
    features: [
      "Minimalist gold-foil simulation",
      "Standardised design templates",
      "Formal font pairing"
    ],
    technologies: ["InDesign", "Print Tech", "Corporate Design"],
  },
];