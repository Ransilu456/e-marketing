import { BlogPost } from "../types";

export const schema_markup_rich_snippets: BlogPost = {
  slug: "schema-markup-rich-snippets",
  title: "Unlocking Rich Snippets: A Complete JSON-LD Schema Markup Guide",
  excerpt: "Star ratings, FAQ dropdowns, breadcrumbs, and price information in Google search results — all powered by Schema markup. Here's how to implement it correctly.",
  category: "Technical SEO",
  date: "2026-02-05",
  readTime: "7 min read",
  image: "/images/blog-seo-nextjs.png",
  author: {
    name: "Keshan Samarasekara",
    role: "SEO Strategist",
    avatar: "https://ui-avatars.com/api/?name=Keshan+S&background=0D8ABC&color=fff"
  },
  tags: ["Schema Markup", "Rich Snippets", "Technical SEO", "JSON-LD"],
  preview: false,
  content: [
    {
      type: "paragraph",
      content: "A rich snippet is Google displaying additional information alongside your standard search result — star ratings, price ranges, FAQs, event dates, or review counts. Rich snippets consistently achieve 20–40% higher click-through rates than standard blue links. They're powered entirely by structured data (Schema markup) that you add to your pages, and they cost nothing beyond the time to implement them correctly."
    },
    {
      type: "heading",
      level: 2,
      content: "What is Structured Data and Why JSON-LD?"
    },
    {
      type: "paragraph",
      content: "Structured data is a standardised vocabulary (schema.org) that lets you describe your page content in a machine-readable format. There are three formats — JSON-LD, Microdata, and RDFa — but Google strongly recommends JSON-LD, and it's the only one worth using in 2026. JSON-LD is embedded in a `<script type='application/ld+json'>` tag and doesn't interfere with your HTML structure, making it easy to implement and maintain."
    },
    {
      type: "blockquote",
      content: "Schema markup doesn't directly boost rankings — it gives Google the confidence to display your result with rich features, which dramatically increases click-through rate, which does improve rankings."
    },
    {
      type: "heading",
      level: 2,
      content: "The 5 Most Impactful Schema Types for Businesses"
    },
    {
      type: "list",
      content: [
        "LocalBusiness: Name, address, phone, hours, geo-coordinates — enables Google Maps rich cards and knowledge panels",
        "Article/BlogPosting: Author, published date, modified date — enables article rich results in news and discover",
        "FAQPage: Question and answer pairs — shows FAQ dropdowns directly in search results, doubling SERP real estate",
        "Product: Price, availability, review — essential for e-commerce, enables price and stock rich snippets",
        "BreadcrumbList: Hierarchical page path — replaces URL with readable breadcrumb trail in results"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Implementing LocalBusiness Schema for Sri Lankan Businesses"
    },
    {
      type: "paragraph",
      content: "For any business serving a local area, LocalBusiness schema is the highest-priority implementation. It tells Google your exact business name, categories, location, contact information, and operating hours — the same information displayed in Google Maps and the local knowledge panel. Correct LocalBusiness schema combined with a verified Google Business Profile is the most impactful one-time SEO action a local business can take."
    },
    {
      type: "image",
      src: "/images/blog-seo-nextjs.png",
      alt: "Google search results page showing FAQ rich snippets and star rating rich results for a business"
    },
    {
      type: "heading",
      level: 2,
      content: "FAQPage Schema: Double Your SERP Real Estate"
    },
    {
      type: "paragraph",
      content: "FAQPage schema is the most visually impactful schema type available in 2026. When Google displays your result with FAQ dropdowns, your listing can occupy 3x the vertical space of a standard result — effectively pushing competitors below the fold. Implementation is straightforward: list 3–7 question-and-answer pairs that genuinely match what users search for, add the JSON-LD schema to your page, and validate with Google's Rich Results Test. Focus FAQ content on questions users actually ask, not questions that promote your business."
    },
    {
      type: "heading",
      level: 2,
      content: "Testing, Validating, and Monitoring Your Schema"
    },
    {
      type: "paragraph",
      content: "Always validate schema implementation with Google's Rich Results Test (search.google.com/test/rich-results) before deploying. This tool tells you exactly which rich snippets your schema qualifies for and highlights any errors or warnings. After deployment, monitor Google Search Console's Rich Results Status report — it shows which pages have valid rich results and flags any issues that prevent display. Schema that's technically valid but contains inaccurate information can lead to a manual action penalty, so keep business details current."
    },
    {
      type: "list",
      content: [
        "Use Google's Rich Results Test to validate before deploying any schema",
        "Include all required properties for each schema type — optional properties improve eligibility",
        "Never use schema to mark up content that isn't visible on the page (Google's explicit guideline)",
        "Update LocalBusiness schema whenever your hours, location, or phone number changes",
        "Monitor Search Console 'Rich Results' report monthly for errors and new opportunities"
      ]
    }
  ]
};
