export interface ContentBlock {
  type: "paragraph" | "heading" | "list" | "blockquote" | "image";
  content?: string | string[];
  level?: number;
  src?: string;
  alt?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: ContentBlock[];
  preview?: boolean;
}

export const BLOG_IS_PREVIEW = false;

export const blogPosts: BlogPost[] = [
  {
    slug: "death-of-keywords-topic-clusters",
    title: "The Death of Keywords: Why Topic Clusters Win SEO",
    excerpt: "Search engines have evolved. We break down how to structure your content architecture to establish topical authority in the Sri Lankan market.",
    category: "Technical SEO",
    date: "2026-01-10",
    readTime: "5 min read",
    image: "/images/seo-topic-clusters.png",
    author: {
      name: "Ransilu",
      role: "SEO Strategist",
      avatar: "https://ui-avatars.com/api/?name=Ransilu&background=0D8ABC&color=fff",
    },
    tags: ["SEO", "Content Marketing", "Digital Strategy"],
    content: [
      { type: "paragraph", content: "In 2026, if you are still just chasing individual keywords, your SEO strategy is outdated. Google's transition from 'strings' to 'things' means it now prioritizes topical authority over simple keyword density." },
      { type: "heading", level: 2, content: "The Shift to Topical Authority" },
      { type: "paragraph", content: "Instead of writing 10 different articles about 'best shoes in Sri Lanka', 'buy shoes online', and 'cheap shoes', you should build one 'Pillar' page about Footwear and link it to 'Cluster' pages covering specific sub-topics." },
      { type: "image", src: "/images/seo-topic-clusters.png", alt: "Visual representation of SEO Topic Clusters and Pillow Pages" },
      { type: "blockquote", content: "Topic clusters tell Google: We are experts on this entire subject, not just trying to rank for a single phrase." },
      { type: "heading", level: 2, content: "Implementing Clusters for Your Brand" },
      {
        type: "list", content: [
          "Audit existing content for overlaps",
          "Identify core 'Pillar' topics representing your main services",
          "Create sub-topics that answer specific user questions",
          "Link everything back to the Pillar page using consistent anchor text"
        ]
      }
    ],
    preview: false,
  },
  {
    slug: "high-converting-facebook-posters",
    title: "The Anatomy of a High-Converting Facebook Poster",
    excerpt: "Design matters for ROI. See the visual principles we use to create Facebook posters that actually stop the scroll and drive clicks.",
    category: "Graphic Design",
    date: "2026-01-12",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200",
    author: {
      name: "Sarasaviya",
      role: "Creative Director",
      avatar: "https://ui-avatars.com/api/?name=Sarasaviya&background=f43f5e&color=fff",
    },
    tags: ["Facebook Ads", "Graphic Design", "Growth"],
    content: [
      { type: "paragraph", content: "Facebook is a visual battleground. Your audience is scrolling fast, and you have less than 2 seconds to make them stop. Here is how we design posters at E Marketing Paradice to maximize engagement." },
      { type: "heading", level: 2, content: "Rule #1: The Power of Hierarchy" },
      { type: "paragraph", content: "Your main offer should be the first thing people see. Use bold typography and contrasting colors to make your primary CTA pop. Avoid clutter at all costs." },
      { type: "image", src: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800", alt: "Example of visual hierarchy in design" },
      { type: "heading", level: 2, content: "Emotional Resonance" },
      { type: "paragraph", content: "Colors trigger emotions. Blue for trust, red for urgency, green for growth. For Sri Lankan businesses, using culturally relevant imagery alongside modern design trends creates a powerful connection." }
    ],
    preview: false,
  },
  {
    slug: "nextjs-vs-wordpress-for-seo",
    title: "Next.js vs WordPress: Which is Better for SEO in 2026?",
    excerpt: "A deep dive into why performance-first frameworks like Next.js are replacing traditional CMS for competitive search rankings.",
    category: "Web Development",
    date: "2026-01-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1200",
    author: {
      name: "Kevin",
      role: "Full Stack Dev",
      avatar: "https://ui-avatars.com/api/?name=Kevin&background=10b981&color=fff",
    },
    tags: ["Next.js", "WordPress", "Core Web Vitals"],
    content: [
      { type: "paragraph", content: "Speed is a ranking factor, and nothing beats a static-generated site. While WordPress is easy, Next.js offers total control over Page Speed and Core Web Vitals." },
      { type: "heading", level: 2, content: "Core Web Vitals Performance" },
      { type: "paragraph", content: "Next.js sites automatically optimize images and handle routing with minimal JavaScript, leading to better LCP scores compared to heavy WordPress themes and plugins." }
    ],
    preview: false,
  },
  {
    slug: "social-media-marketing-mistakes",
    title: "5 Social Media Marketing Mistakes Sri Lankan Brands Make",
    excerpt: "Stop wasting your ad budget. We identify the common pitfalls in local social media strategies and how to fix them.",
    category: "Marketing Strategy",
    date: "2026-01-12",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200",
    author: {
      name: "Ransilu",
      role: "Digital Strategist",
      avatar: "https://ui-avatars.com/api/?name=Ransilu&background=0D8ABC&color=fff",
    },
    tags: ["Digital Marketing", "Social Media", "Business tips"],
    content: [
      { type: "paragraph", content: "Most businesses in Sri Lanka boost posts without a clear funnel. This is the fastest way to lose money." },
      { type: "heading", level: 2, content: "Mistake #1: Boosting instead of Ad Manager" },
      { type: "paragraph", content: "Ads Manager allows for detailed targeting, lookalike audiences, and conversion tracking. Boosting is just for reach, not ROI." }
    ],
    preview: false,
  },
  {
    slug: "future-of-ai-branding",
    title: "The Future of AI in Branding and Creativity",
    excerpt: "Is AI replacing designers? How we use Generative AI tools to speed up branding workflows without losing the human touch.",
    category: "Branding",
    date: "2026-01-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    author: {
      name: "Sarasaviya",
      role: "Brand Strategist",
      avatar: "https://ui-avatars.com/api/?name=Sarasaviya&background=f43f5e&color=fff",
    },
    tags: ["AI", "Design Trends", "Future"],
    content: [
      { type: "paragraph", content: "AI is a tool, not a replacement. It helps us iterate faster." }
    ],
    preview: false,
  },
  {
    slug: "mastering-google-ads-2026",
    title: "Mastering Google Ads: The 2026 Growth Playbook",
    excerpt: "Learn the advanced bidding strategies and keyword targeting that drive high-quality leads for our clients.",
    category: "Paid Search",
    date: "2026-02-01",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200",
    author: { name: "Ransilu", role: "Ads Expert", avatar: "https://ui-avatars.com/api/?name=Ransilu&background=0D8ABC&color=fff" },
    tags: ["Google Ads", "Lead Gen", "SEM"],
    content: [],
    preview: true,
  },
  {
    slug: "building-scalable-design-systems",
    title: "Building Scalable Design Systems for Startups",
    excerpt: "Why consistency is key to scaling your digital product. A guide to building a component library that lasts.",
    category: "UI/UX Design",
    date: "2026-02-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1200",
    author: { name: "Sarasaviya", role: "UI Architect", avatar: "https://ui-avatars.com/api/?name=Sarasaviya&background=f43f5e&color=fff" },
    tags: ["Design Systems", "Product Design", "Scalability"],
    content: [],
    preview: true,
  },
  {
    slug: "server-side-rendering-deep-dive",
    title: "SSR vs SSG vs ISR: Choosing the Right Strategy",
    excerpt: "Performance and SEO depend on your rendering choice. We break down the technical trade-offs for Next.js users.",
    category: "Web Development",
    date: "2026-02-15",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    author: { name: "Kevin", role: "Senior Engineer", avatar: "https://ui-avatars.com/api/?name=Kevin&background=10b981&color=fff" },
    tags: ["Next.js", "React", "Server Side"],
    content: [],
    preview: true,
  },
  {
    slug: "whatsapp-marketing-for-small-business",
    title: "WhatsApp Marketing: The Untapped Secret in Sri Lanka",
    excerpt: "How to use WhatsApp Business to automate sales and build loyalty with your local customers.",
    category: "Digital Marketing",
    date: "2026-02-20",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=1200",
    author: { name: "Ransilu", role: "Growth Hacker", avatar: "https://ui-avatars.com/api/?name=Ransilu&background=0D8ABC&color=fff" },
    tags: ["WhatsApp", "Sales", "Business LK"],
    content: [],
    preview: true,
  },
  {
    slug: "dark-mode-design-psychology",
    title: "The Psychology of Dark Mode Design",
    excerpt: "More than just a trend. Why dark mode improves user focus and luxury status for high-end digital brands.",
    category: "UI Design",
    date: "2026-03-01",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506143925201-0252c51780b0?q=80&w=1200",
    author: { name: "Sarasaviya", role: "Experience Designer", avatar: "https://ui-avatars.com/api/?name=Sarasaviya&background=f43f5e&color=fff" },
    tags: ["Dark Mode", "UX", "Psychology"],
    content: [],
    preview: true,
  }
];
