import BlogSection from "@/components/ui/home/BlogSection";
import SectionHeading from "@/components/ui/tools/SectionHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Our Blogs | E Marketing Paradice"
    },
    description: "Deep dive into the latest trends in digital marketing, web development, SEO, and social media design in Sri Lanka.",
    keywords: ["digital marketing blog sri lanka", "SEO tips", "web development insights", "facebook poster design tips"],
};

export default function BlogListingPage() {
    return (
        <main className="bg-white antialiased w-full min-h-screen pt-24">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <SectionHeading
                    badge="Our Blog"
                    title="Insights & Engineering"
                    subtitle="Deep dives into the mechanics of growth. We write about what works in modern SEO, design systems, and conversion optimization."
                />

                <div className="mt-12">
                    <BlogSection showTitle={false} />
                </div>
            </div>
        </main>
    );
}
