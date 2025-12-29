import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://emarketingparadice.lk";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/case-studies`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/creative-posters`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/mobile-apps`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }, {
            url: `${baseUrl}/services/social-media-management`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }, {
            url: `${baseUrl}/services/web-development`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services/mobile-apps/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }, {
            url: `${baseUrl}/services/social-media-management/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }, {
            url: `${baseUrl}/services/web-development/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
