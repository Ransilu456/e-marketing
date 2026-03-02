import { BlogPost } from "../types";

export const ssr_vs_ssg_isr: BlogPost = {
  slug: "ssr-vs-ssg-isr",
  title: "SSR vs SSG vs ISR: Choosing the Right Rendering Strategy in Next.js",
  excerpt: "Your rendering choice directly affects SEO scores, page speed, and hosting costs. Here's the definitive technical breakdown with real-world guidance on when to use each.",
  category: "Web Development",
  date: "2026-02-03",
  readTime: "12 min read",
  image: "/images/blog-seo-nextjs.png",
  author: {
    name: "Keshan Samarasekara",
    role: "Full Stack Developer",
    avatar: "https://ui-avatars.com/api/?name=Keshan+S&background=10b981&color=fff"
  },
  tags: ["Next.js", "SSR", "SSG", "ISR", "Web Performance"],
  preview: false,
  content: [
    {
      type: "paragraph",
      content: "When building a website with Next.js, one of the most consequential architectural decisions you'll make is choosing how your pages render. Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) each have distinct performance profiles, SEO implications, and infrastructure costs. Getting this decision wrong can mean slower pages, higher server bills, or stale content — all of which hurt your business."
    },
    {
      type: "heading",
      level: 2,
      content: "Server-Side Rendering (SSR): Real-Time HTML Generation"
    },
    {
      type: "paragraph",
      content: "With SSR (using `export async function generateMetadata` or `fetch()` with no caching in Next.js App Router), a new HTML document is generated on the server for every request. This means the page always reflects the latest data — perfect for personalised dashboards, real-time stock prices, or user-specific content. The trade-off is latency: every request must wait for the server to query a database or API before sending HTML."
    },
    {
      type: "paragraph",
      content: "From an SEO perspective, SSR is excellent — Googlebot receives fully rendered HTML with no JavaScript execution needed. The downside is your Time to First Byte (TTFB) will be higher than SSG, which affects your Largest Contentful Paint (LCP) score. Use SSR for pages that must show unique, user-specific, or real-time data."
    },
    {
      type: "blockquote",
      content: "SSR is the right choice when the cost of showing stale data exceeds the performance cost of server round-trips. For most marketing pages, that trade-off doesn't make sense."
    },
    {
      type: "heading",
      level: 2,
      content: "Static Site Generation (SSG): The Performance Champion"
    },
    {
      type: "paragraph",
      content: "SSG pre-builds all your HTML files at build time and serves them from a CDN. When a user requests a page, the CDN delivers a pre-built HTML file in milliseconds — there's no server computation, no database query, no runtime overhead. This produces exceptional Core Web Vitals scores: TTFB under 50ms from a properly configured CDN, LCP under 1 second, and zero layout shift from pre-sized assets."
    },
    {
      type: "list",
      content: [
        "Best for: Marketing pages, blog posts, portfolios, documentation, landing pages",
        "Hosting cost: Near-zero — serve from Vercel, Netlify, or Cloudflare Pages free tier",
        "Trade-off: Content is only updated when you rebuild and redeploy",
        "SEO: Excellent — Googlebot gets instant, fully rendered HTML from CDN edge nodes"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Incremental Static Regeneration (ISR): The Best of Both Worlds"
    },
    {
      type: "paragraph",
      content: "ISR, configured in Next.js with `revalidate` time in seconds, allows statically generated pages to be updated in the background without a full rebuild. When a page's revalidation time expires, the next request serves the stale cached page while Next.js regenerates a fresh version in the background. Subsequent requests serve the new version."
    },
    {
      type: "paragraph",
      content: "For a blog with daily posts, an e-commerce site with changing product prices, or a news site — ISR is transformative. You get near-SSG performance with content that can be refreshed every 60 seconds, 1 hour, or 24 hours depending on your needs. This is how the E Marketing Paradice website is architected: marketing pages are SSG, blog posts use ISR with a 24-hour revalidation."
    },
    {
      type: "image",
      src: "/images/blog-seo-nextjs.png",
      alt: "Comparison chart showing SSR vs SSG vs ISR performance metrics and use cases"
    },
    {
      type: "heading",
      level: 2,
      content: "The Decision Framework: Which to Choose"
    },
    {
      type: "paragraph",
      content: "Follow this decision tree. If your page content is identical for all users and doesn't change often → use SSG. If your page content changes frequently but doesn't need to be personalised → use ISR with an appropriate revalidation time. If your page must show real-time or user-specific data → use SSR. If your page shows user-authenticated content → use SSR or client-side fetching after load."
    },
    {
      type: "list",
      content: [
        "Homepage, About, Services, Contact → SSG (rebuild on content change)",
        "Blog posts, Portfolio items → ISR (revalidate: 3600 = 1 hour)",
        "Product pages with live inventory → ISR (revalidate: 60 = 1 minute)",
        "User dashboard, Cart, Account → SSR or Client-side fetch"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Practical Implementation in Next.js 15 App Router"
    },
    {
      type: "paragraph",
      content: "In Next.js 15's App Router, control rendering by configuring `fetch()` cache options. Use `fetch(url, { cache: 'force-cache' })` for SSG behaviour. Use `fetch(url, { next: { revalidate: 3600 } })` for ISR. Use `fetch(url, { cache: 'no-store' })` for SSR. For route-level control, export `export const revalidate = 3600` or `export const dynamic = 'force-dynamic'` from your page file. Understanding these options lets you mix rendering strategies at the component level — the most powerful architectural pattern in Next.js."
    }
  ]
};
