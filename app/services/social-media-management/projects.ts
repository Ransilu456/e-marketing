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
    title: "Viral Brand Campaign",
    description: "A TikTok growth campaign that reached over 1M views in under a week.",
    image: "https://images.unsplash.com/photo-1625602818607-3d90353a1f4a?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "viral-brand-campaign",
  },
  {
    title: "Instagram Growth Strategy",
    description: "Increased engagement rate by 300% for a local brand through storytelling posts.",
    image: "https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "instagram-growth",
  },
  {
    title: "YouTube Channel Revamp",
    description: "Optimized channel branding and SEO to triple video watch time in 2 months.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    link: "#contact",
    slug: "youtube-revamp",
  },
];
