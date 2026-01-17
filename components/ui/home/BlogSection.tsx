import Link from "next/link";
import Image from "next/image";
import { blogPosts, BLOG_IS_PREVIEW } from "@/components/data/blog";
import { formatDate } from "@/components/utils/date";

interface BlogSectionProps {
    limit?: number;
    showTitle?: boolean;
}

export default function BlogSection({ limit, showTitle = true }: BlogSectionProps) {
    // Show all posts if limit is not set or respect the limit
    const displayedPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

    return (
        <section id="blog" className="py-24 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                {showTitle && (
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 mb-4">
                            Insights & Engineering
                        </h2>

                        <p className="text-lg text-slate-500">
                            Deep dives into the mechanics of growth. We write about what works in modern SEO,
                            design systems, and conversion optimization.
                        </p>

                        {BLOG_IS_PREVIEW && (
                            <p className="text-sm text-slate-400 mt-6 max-w-2xl">
                                This is a preview of the insights we’re preparing to publish—focused on practical
                                engineering, performance optimization, and scalable design systems.
                            </p>
                        )}
                    </div>
                )}

                <div className="grid md:grid-cols-3 gap-8">
                    {displayedPosts.map((post) => (
                        <article key={post.slug} className={`flex flex-col group h-full ${post.preview ? "opacity-75 grayscale-[0.5]" : ""}`}>
                            {BLOG_IS_PREVIEW || post.preview ? (
                                <div className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]">
                                    <div className="absolute inset-0 bg-slate-900/0 transition-colors z-10" />
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {post.preview && (
                                        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-black text-white z-20">
                                            Coming Soon
                                        </span>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]"
                                >
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10" />
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={250}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </Link>
                            )}

                            <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                                    {post.category}
                                </span>
                                <time>{formatDate(post.date)}</time>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>

                            <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                                {BLOG_IS_PREVIEW || post.preview ? (
                                    post.title
                                ) : (
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="group-hover:text-indigo-600 transition-colors"
                                    >
                                        {post.title}
                                    </Link>
                                )}
                            </h3>

                            <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                                {post.excerpt}
                            </p>

                            {!BLOG_IS_PREVIEW && !post.preview && (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 inline-flex items-center mt-auto"
                                >
                                    Read Article
                                </Link>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
