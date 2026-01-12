import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://emarketingparadice.lk";

    const lastModified = new Date("2026-01-10");

    return [
        {
            url: `${baseUrl}/`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: lastModified,
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: lastModified,
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio/projects`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services/creative-posters`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services/mobile-apps`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services/social-media-management`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/services/web-development`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/not-found`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/under_development_200`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/thank-you`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
