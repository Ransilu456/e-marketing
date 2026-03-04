import { BlogPost } from "../types";

export const accessible_design_is_better_design: BlogPost = {
  slug: "accessible-design-is-better-design",
  title: "Why Accessible Design is Always Better Design — WCAG 2.2 Explained",
  excerpt: "Designing for accessibility doesn't constrain creativity — it produces cleaner, higher-performing interfaces. Here's the practical WCAG implementation guide that every designer and developer needs.",
  category: "UI/UX Design",
  date: "2026-02-18",
  readTime: "9 min read",
  image: "/images/blog-accessible_design.png",
  author: {
    name: "Ameesha",
    role: "UI/UX Designer",
    avatar: "https://ui-avatars.com/api/?name=Ameesha+S&background=0369a1&color=fff"
  },
  tags: ["Accessibility", "WCAG", "UI/UX", "Inclusive Design", "SEO"],
  preview: false,
  content: [
    {
      type: "paragraph",
      content: "There is a pervasive myth in the design industry that accessibility and aesthetics are in conflict — that designing for screen readers and keyboard navigation forces you to make ugly, overly simplified interfaces. This is not only wrong; it's backwards. The design constraints imposed by WCAG (Web Content Accessibility Guidelines) consistently produce interfaces that perform better for everyone — better contrast improves legibility in all conditions, clear labelling reduces user errors, and logical focus order creates better keyboard shortcuts. Accessibility is good design."
    },
    {
      type: "heading",
      level: 2,
      content: "The Business Case: Accessibility is Not Charity"
    },
    {
      type: "paragraph",
      content: "Approximately 15% of the world's population lives with some form of disability. In Sri Lanka, that's roughly 3.1 million people. Globally, the 'accessible market' of people with permanent disabilities plus the much larger group experiencing temporary or situational impairments (a broken arm, glare on a screen, slow internet) represents a significant portion of any business's potential customers. Inaccessible websites literally exclude paying customers. Furthermore, accessibility improvements directly impact SEO: search engines process your site like a screen reader — semantic HTML, descriptive alt text, and clear heading hierarchy all improve both accessibility scores and search rankings simultaneously."
    },
    {
      type: "blockquote",
      content: "The keyboard user is also the customer on their smart TV, the elderly person who needs larger font options, and the developer navigating your form without a mouse. Design for all of them."
    },
    {
      type: "heading",
      level: 2,
      content: "The 4 WCAG Principles and What They Mean in Practice"
    },
    {
      type: "list",
      content: [
        "Perceivable: All content must be available in forms users can perceive — alt text for images, captions for video, sufficient colour contrast (minimum 4.5:1 for normal text, 3:1 for large text)",
        "Operable: All functionality must be keyboard-accessible, no keyboard traps, users need enough time to read (no auto-expiring modals without warning)",
        "Understandable: Language should be declared in HTML, forms should have clear labels and error messages, navigation should be predictable and consistent",
        "Robust: Content should be parseable by current and future assistive technology — use semantic HTML elements instead of ARIA wherever possible"
      ]
    },
    {
      type: "heading",
      level: 2,
      content: "The Contrast Trap: How Most Designs Fail WCAG"
    },
    {
      type: "paragraph",
      content: "Colour contrast is WCAG's most commonly violated criterion and the easiest to check. WCAG 2.2 requires a minimum contrast ratio of 4.5:1 for body text and 3:1 for large text (18pt+ or 14pt+ bold). In practice: light grey text on a white background is the most common violation — a pattern prevalent in 'minimal' design trends. The fix is not to abandon minimalism but to use slightly darker greys. #767676 on white (#FFFFFF) is exactly 4.5:1 — the minimum compliant contrast. Use the Colour Contrast Analyser tool or browser DevTools' built-in contrast checker during every design review."
    },
    {
      type: "image",
      src: "/images/blog-seo-nextjs.png",
      alt: "WCAG contrast ratio checker showing compliant and non-compliant colour combinations side by side"
    },
    {
      type: "heading",
      level: 2,
      content: "Semantic HTML: The Most Impactful Accessibility Investment"
    },
    {
      type: "paragraph",
      content: "Using semantic HTML elements — `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<h1>`–`<h6>`, `<button>`, `<label>` — costs nothing beyond a slightly more thoughtful HTML structure and provides enormous accessibility benefits. Screen readers navigate by landmark regions and heading hierarchy. A page using `<div>` for everything provides no navigational structure. A page using proper semantic elements allows a screen reader user to skip directly to the `<main>` content, navigate between `<article>` elements, and understand the page structure through headings — the same experience a sighted user gets by visually scanning the layout."
    },
    {
      type: "heading",
      level: 2,
      content: "Testing Accessibility: Tools and Real User Testing"
    },
    {
      type: "paragraph",
      content: "Automated tools catch approximately 30–40% of accessibility issues. Use axe DevTools (Chrome extension), Lighthouse accessibility audit (built into Chrome DevTools), and WAVE (WebAIM's browser extension) as your baseline checks. These tools catch contrast failures, missing alt text, missing form labels, and heading hierarchy violations. But for the remaining 60% of issues — cognitive complexity, confusing navigation, screen reader announcement order — there is no substitute for testing with real assistive technology. Turn on VoiceOver (Mac/iOS) or TalkBack (Android) and navigate your site without looking at the screen. The experience will immediately reveal every assumption you made about visual navigation."
    }
  ]
};
