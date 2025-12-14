export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  isPreview?: boolean;
}

export const BLOG_IS_PREVIEW = true;

export const blogPosts: BlogPost[] = [
  {
    slug: "death-of-keywords-topic-clusters",
    title: "The Death of Keywords: Why Topic Clusters Win",
    excerpt:
      "Search engines have evolved. We break down how to structure your content architecture to establish topical authority rather than chasing volume.",
    category: "Technical SEO",
    date: "2023-10-12",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    isPreview: true,
  },
  {
    slug: "optimizing-core-web-vitals-nextjs-14",
    title: "Optimizing Core Web Vitals in Next.js 14",
    excerpt:
      "Speed is a ranking factor. A technical guide to reducing LCP and CLS scores using the latest features in the Next.js app router.",
    category: "Development",
    date: "2023-09-28",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    isPreview: true,
  },
  {
    slug: "roi-of-micro-interactions",
    title: "The ROI of Micro-Interactions",
    excerpt:
      "Why small animations matter for trust. How we used Framer Motion to increase session duration for our SaaS clients.",
    category: "Design Strategy",
    date: "2023-09-15",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&w=800&auto=format&fit=crop",
    isPreview: true,
  },
];
