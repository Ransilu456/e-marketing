import { BlogPost } from "../types";

export const optimize_core_web_vitals_ecommerce: BlogPost = {
  slug: "optimize-core-web-vitals-ecommerce",
  title: "How to Achieve 90+ Lighthouse Scores for E-commerce Websites",
  excerpt: "Slow load times kill conversions before a customer reads a single word. The advanced Core Web Vitals tactics we use to build blazing-fast e-commerce sites.",
  category: "Web Performance",
  date: "2026-02-04",
  readTime: "9 min read",
  image: "/images/blog-digital-marketing.png",
  author: {
    name: "Keshan Samarasekara",
    role: "Performance Engineer",
    avatar: "https://ui-avatars.com/api/?name=Keshan+S&background=0D8ABC&color=fff"
  },
  tags: ["Core Web Vitals", "Performance", "E-commerce", "Lighthouse", "SEO"],
  preview: false,
  content: [
    {
      type: "paragraph",
      content: "Google's research is unambiguous: every 100ms increase in load time reduces conversion rate by approximately 1%. For an online store generating Rs. 500,000 per month, a 2-second slower page load could be costing Rs. 100,000 monthly. Core Web Vitals — LCP, CLS, and INP — are now confirmed Google ranking factors, which means slow performance hurts both your conversions and your SEO simultaneously."
    },
    {
      type: "heading",
      level: 2,
      content: "Why E-commerce Sites Struggle with Core Web Vitals"
    },
    {
      type: "paragraph",
      content: "E-commerce sites have structural challenges that marketing sites don't face: large product image galleries, third-party payment scripts, customer review widgets, live inventory APIs, and complex cart state management. Each of these adds weight, JavaScript, and potential layout instability that drags down Vitals scores. A typical WooCommerce store with 8 plugins scores 35–55 on mobile PageSpeed — well into the 'needs improvement' or 'poor' range."
    },
    {
      type: "blockquote",
      content: "The 90+ Lighthouse score is not a vanity metric — it's a signal that your technical implementation respects your users' time and device constraints."
    },
    {
      type: "heading",
      level: 2,
      content: "Fixing Largest Contentful Paint (LCP)"
    },
    {
      type: "paragraph",
      content: "LCP measures how long it takes for the largest visible content element (usually a hero image or product photo) to fully render. Google's 'good' threshold is under 2.5 seconds. The biggest LCP killers are unoptimised images and render-blocking resources. The fix is three-pronged: serve images in WebP/AVIF format (40–60% smaller than JPEG at equivalent quality), use `fetchpriority='high'` on your hero image to signal priority to the browser, and preload critical fonts and CSS."
    },
    {
      type: "list",
      content: [
        "Convert all product images to WebP — Next.js does this automatically via next/image",
        "Add fetchpriority='high' to above-the-fold hero images",
        "Preload critical fonts with <link rel='preload' as='font'>",
        "Defer all non-critical JavaScript with <script defer> or dynamic imports",
        "Use a CDN with edge caching for product images (Cloudflare, Vercel Edge)"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Eliminating Cumulative Layout Shift (CLS)"
    },
    {
      type: "paragraph",
      content: "CLS measures visual instability — elements jumping around as the page loads. For e-commerce, the most common CLS culprits are images without explicit width/height dimensions (causing reflow when loaded), dynamically injected banners from ad networks, and fonts causing FOUT (Flash of Unstyled Text). The fix for images is simple: always specify width and height attributes, or use a CSS aspect-ratio container. For ads, reserve space with a min-height container before the ad loads."
    },
    {
      type: "image",
      src: "/images/blog-digital-marketing.png",
      alt: "Google Lighthouse score panel showing 90+ performance, SEO, and accessibility scores"
    },
    {
      type: "heading",
      level: 2,
      content: "Optimising Interaction to Next Paint (INP)"
    },
    {
      type: "paragraph",
      content: "INP replaced FID in March 2024 and measures the latency of all user interactions throughout the page visit — not just the first one. Poor INP is caused by long JavaScript tasks that block the main thread. For e-commerce, the culprits are typically heavy React re-renders on cart updates, synchronous third-party analytics scripts, and complex client-side filtering. Fix by breaking work into smaller tasks with `setTimeout`, using `useTransition` in React for non-urgent state updates, and auditing third-party scripts with Coverage in Chrome DevTools."
    },
    {
      type: "heading",
      level: 2,
      content: "The Role of Edge CDNs and On-Demand ISR"
    },
    {
      type: "paragraph",
      content: "For product pages with thousands of SKUs, building them all statically is impractical. The solution is ISR (Incremental Static Regeneration) combined with an edge CDN. When a product page is first requested, it's rendered once, cached at the edge, and served instantly to all subsequent visitors. Vercel's infrastructure deploys this to 50+ global edge locations, meaning a user in Colombo gets the same sub-100ms response as a user in London. For inventory or price changes, set `revalidate: 300` (5 minutes) to keep pages fresh without full rebuilds."
    },
    {
      type: "heading",
      level: 2,
      content: "Continuous Monitoring: Don't Set and Forget"
    },
    {
      type: "paragraph",
      content: "Core Web Vitals degrade over time as new features, third-party scripts, and content are added. Set up automated monitoring with Vercel Speed Insights, Google Search Console's Core Web Vitals report, or Datadog. Alert on regressions before they affect your rankings. A CI/CD check that fails the build if Lighthouse mobile performance drops below 85 is a powerful guardrail that keeps your team honest about performance costs as the codebase grows."
    }
  ]
};
