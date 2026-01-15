import type { MetadataRoute } from "next";
import { blogPosts } from "@/components/data/blog";
import { mobileProjects } from "@/app/(sites)/services/mobile-apps/projects";
import { portfolioProjects as smmProjects } from "@/app/(sites)/services/social-media-management/projects";
import { portfolioProjects as webProjects } from "@/app/(sites)/services/web-development/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://emarketingparadice.lk";

    const lastModified = new Date();

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
            url: `${baseUrl}/about`,
            lastModified: lastModified,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...blogPosts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        ...mobileProjects.map((project) => ({
            url: `${baseUrl}/services/mobile-apps/projects/${project.slug}`,
            lastModified: lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        ...smmProjects.map((project) => ({
            url: `${baseUrl}/services/social-media-management/projects/${project.slug}`,
            lastModified: lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        ...webProjects.map((project) => ({
            url: `${baseUrl}/services/web-development/projects/${project.slug}`,
            lastModified: lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
    ];
}
