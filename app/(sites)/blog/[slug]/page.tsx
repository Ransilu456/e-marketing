import { blogPosts } from "@/components/data/blog";
import { ContentBlock } from "@/components/data/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatDate } from "@/components/utils/date";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, ChevronRight } from "lucide-react";

import React from "react";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | E Marketing Paradice Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [post.image],
        },
    };
}

function RenderContent({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case "paragraph":
            return <p className="text-slate-600 leading-relaxed mb-6 text-lg">{block.content}</p>;
        case "heading":
            const Tag = `h${block.level || 2}` as React.ElementType;
            return <Tag className="text-2xl md:text-3xl font-bold text-slate-900 mt-12 mb-6">{block.content}</Tag>;
        case "list":
            return (
                <ul className="list-disc pl-6 space-y-3 mb-8 text-slate-600 text-lg">
                    {(block.content as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
        case "blockquote":
            return (
                <blockquote className="border-l-4 border-(--color-primary) pl-6 my-10 italic text-slate-800 bg-slate-50 py-6 pr-8 rounded-r-2xl shadow-sm text-xl leading-relaxed">
                    &ldquo;{block.content}&quot;
                </blockquote>
            );
        case "image":
            return (
                <figure className="my-12">
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                        <Image src={block.src!} alt={block.alt || ""} fill className="object-cover" />
                    </div>
                    {block.alt && <figcaption className="text-center text-sm text-slate-400 mt-4">{block.alt}</figcaption>}
                </figure>
            );
        default:
            return null;
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post || post.preview) {
        notFound();
    }

    const index = blogPosts.findIndex((p) => p.slug === slug);
    const relatedPosts = blogPosts.filter((p, i) => i !== index && !p.preview).slice(0, 2);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author.name,
        },
        "publisher": {
            "@type": "Organization",
            "name": "E Marketing Paradice",
            "logo": {
                "@type": "ImageObject",
                "url": "https://emarketingparadice.lk/og-image.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://emarketingparadice.lk/blog/${post.slug}`
        },
        "wordCount": post.content.reduce((acc, block) => acc + (typeof block.content === 'string' ? block.content.split(' ').length : 0), 0),
        "keywords": post.tags.join(", ")
    };

    return (
        <article className="bg-[#FCFCFD] min-h-screen pt-24 pb-24">
            {/* JSON-LD for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            <div className="max-w-4xl mx-auto px-6">
                {/* Navigation Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-400 mb-12">
                    <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-slate-900 font-medium truncate">{post.title}</span>
                </nav>

                {/* Header Section */}
                <header className="mb-12">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="bg-(--color-primary)/10 text-(--color-primary) px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                            <time className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.date)}
                            </time>
                            <span>•</span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-8 leading-[1.15] tracking-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between pb-8 border-b border-slate-100">
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-slate-900 text-base">{post.author.name}</p>
                                <p className="text-slate-500 font-medium">{post.author.role}</p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="hidden sm:inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-medium hover:bg-slate-200 transition-colors cursor-default">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="relative aspect-video md:aspect-21/9 rounded-3xl overflow-hidden mb-16 shadow-2xl shadow-slate-200/60 border border-slate-100">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Main Content Area */}
                <div className="max-w-3xl mx-auto">
                    <div className="mb-12">
                        <p className="text-2xl text-slate-600 leading-relaxed font-serif italic border-l-4 border-slate-100 pl-8">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="prose-custom">
                        {post.content.map((block, i) => (
                            <RenderContent key={i} block={block} />
                        ))}
                    </div>

                    {/* Tags for mobile */}
                    <div className="mt-12 flex flex-wrap gap-2 sm:hidden pb-12 border-b border-slate-100">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-medium">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Author Bio Section */}
                    <section className="mt-16 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-slate-50">
                            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 text-center md:text-left">Written by {post.author.name}</h3>
                            <p className="text-slate-500 leading-relaxed mb-4 text-center md:text-left">
                                Expert in {post.category.toLowerCase()} and digital transformation at E Marketing Paradice. Helping brands scale through data-driven strategies and technical excellence.
                            </p>
                            <div className="flex justify-center md:justify-start">
                                <Link href="/about-us" className="text-(--color-primary) font-semibold text-sm hover:underline">View profile & stories</Link>
                            </div>
                        </div>
                    </section>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <section className="mt-24">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-(--color-primary) rounded-full"></span>
                                Continue Reading
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-8">
                                {relatedPosts.map((rPost) => (
                                    <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group block h-full">
                                        <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-4 border border-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
                                            <Image src={rPost.image} alt={rPost.title} fill className="object-cover" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 group-hover:text-(--color-primary) transition-colors line-clamp-2 text-lg leading-snug">
                                            {rPost.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* CTA Section */}
                <section className="mt-32 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-primary) opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need expert help with your digital strategy?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            Join 50+ successful brands growing with E Marketing Paradice. Let&apos;s discuss your next project today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="bg-(--color-primary) text-white font-bold py-4 px-10 rounded-full hover:shadow-xl hover:shadow-(--color-primary)/30 transition-all flex items-center justify-center gap-2 group">
                                Start a Conversation
                                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/services" className="bg-white/10 text-white backdrop-blur-md font-bold py-4 px-10 rounded-full hover:bg-white/20 transition-all">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.addEventListener('scroll', () => {
              const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrolled = (winScroll / height) * 100;
              const bar = document.getElementById('scroll-progress');
              if (bar) bar.style.width = scrolled + '%';
            });
          `,
                }}
            />
        </article>
    );
}
