import { BlogPost } from "../types";

export const building_scalable_design_systems: BlogPost = {
  slug: "building-scalable-design-systems",
  title: "How to Build a Visual Brand System That Scales Across All Platforms",
  excerpt: "A design system is not just for big companies. Here's how to create consistent brand visuals for Facebook, Instagram, WhatsApp, and print — without hiring a full-time designer.",
  category: "Brand Design",
  date: "2026-01-20",
  readTime: "8 min read",
  image: "/images/blog-web-design.png",
  author: {
    name: "Keshan Samarasekara",
    role: "Brand Strategist",
    avatar: "https://ui-avatars.com/api/?name=Keshan+S&background=8b5cf6&color=fff"
  },
  tags: ["Branding", "Design Systems", "Visual Identity", "Canva"],
  preview: false,
  content: [
    {
      type: "paragraph",
      content: "When a customer sees your Facebook post, then visits your website, then receives a printout of your price list — do all three look like they're from the same business? For most Sri Lankan SMEs, the honest answer is no. Inconsistent branding is one of the most common and most damaging problems we fix for new clients, because it erodes trust before a single conversation happens."
    },
    {
      type: "heading",
      level: 2,
      content: "What a Brand System Actually Is"
    },
    {
      type: "paragraph",
      content: "A brand system is simply a documented set of visual rules that govern how your business looks whenever and wherever it appears. It covers: your exact logo and its variants (horizontal, stacked, icon-only), your colour palette (specific hex codes, not just 'red'), your typography (which fonts and when to use each), your image style (photography style, illustration style, or no images), and your spacing and layout principles."
    },
    {
      type: "blockquote",
      content: "Consistency is the silent indicator of professionalism. Before a customer reads your prices or reviews, they've already formed an opinion based on how your brand looks."
    },
    {
      type: "heading",
      level: 2,
      content: "Step 1: Define Your Color Palette With Hex Codes"
    },
    {
      type: "paragraph",
      content: "Your colour palette should consist of three to five colours: one primary brand colour, one or two secondary colours, and one or two neutral colours. The critical step most businesses skip is documenting the exact hex codes. 'Dark blue' is not a colour specification. #1E3A5F is a colour specification. With exact hex codes, every poster, every social media graphic, and every website element will match perfectly — whether your designer is in Colombo, Kandy, or Kurunegala."
    },
    {
      type: "list",
      content: [
        "Primary: Your dominant brand colour — used for logos, key CTAs, headers",
        "Secondary: A complementary colour for accents, highlights, and background sections",
        "Danger/Alert: Usually red — reserved for urgency, discounts, warnings",
        "Neutrals: White, light grey, dark grey — for text and backgrounds"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "Step 2: Choose Two Fonts and Stick to Them"
    },
    {
      type: "paragraph",
      content: "Typography is where most DIY designs fall apart. Using three, four, or five different fonts across your materials looks amateurish and fragmented. The professional approach is to select one display font (for headlines and titles) and one body font (for descriptions and body text), and use only those two throughout your entire brand."
    },
    {
      type: "paragraph",
      content: "Reliable free combinations: Montserrat (display) + Open Sans (body), Playfair Display (display) + Lato (body), Raleway (display) + Source Sans Pro (body). If your business uses Sinhala text, add Noto Serif Sinhala or Yaldevi as your Sinhala font pairing."
    },
    {
      type: "image",
      src: "/images/blog-web-design.png",
      alt: "Figma design system showing color palette, typography, and component library"
    },
    {
      type: "heading",
      level: 2,
      content: "Step 3: Create Template Families in Canva or Figma"
    },
    {
      type: "paragraph",
      content: "Once your colours and fonts are defined, build a family of templates for each purpose: Facebook Square Post (1080x1080px), Facebook Story (1080x1920px), WhatsApp Status (1080x1920px), A4 Flyer (portrait), and Business Card. Each template is pre-built with your brand colours and fonts. When you need a new promotion, you update the text and image content — not the design system."
    },
    {
      type: "paragraph",
      content: "This is exactly the workflow we establish for clients at E Marketing Paradice. For the DM Feed brand, we created a master template library of 12 poster formats. When a new product promotion is needed, updating takes 20 minutes rather than 3 hours, and the output is consistently on-brand every single time."
    },
    {
      type: "heading",
      level: 2,
      content: "Step 4: Document Everything in a Brand Guide PDF"
    },
    {
      type: "paragraph",
      content: "A brand guide is a simple PDF (or even a Canva document) that captures all of the above: your logo files, your colour hex codes, your font names, and examples of correct and incorrect usage. It takes a few hours to create and saves hundreds of hours over the years — whenever you hire a new designer, a printer, or a social media manager, you hand them the brand guide and they can produce consistent work from day one."
    },
    {
      type: "paragraph",
      content: "Building a visual brand system is not a luxury for large corporations. It's a practical tool that any business — no matter how small — can implement to look dramatically more professional and build lasting trust with its audience. Start this week with just your hex codes and font choices. The rest will follow."
    }
  ]
};
