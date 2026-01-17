import { posterProjects } from "../projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Share2, Download, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/ui/tools/SectionHeading";
import CTA from "@/components/ui/home/CTA";

export default async function PosterDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = posterProjects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            {/* Navigation Header */}
            <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link
                        href="/services/creative-posters"
                        className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">Back to Gallery</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <section className="pt-40 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Visual Column */}
                        <div className="relative group">
                            <div className="relative rounded-[2rem] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-2xl">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1000}
                                    height={1250}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />

                                {/* Zoom Trigger (Decorative) */}
                                <div className="absolute bottom-6 right-6 p-4 rounded-full bg-white/90 backdrop-blur shadow-lg opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <Maximize2 className="w-5 h-5 text-zinc-900" />
                                </div>
                            </div>

                            {/* Specifications Card */}
                            <div className="mt-8 p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Technical Specs</h4>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-xs text-zinc-400 mb-1">Dimensions</p>
                                        <p className="text-sm font-bold text-zinc-900">A Series / Custom</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 mb-1">Color Space</p>
                                        <p className="text-sm font-bold text-zinc-900">CMYK / RGB</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 mb-1">Resolution</p>
                                        <p className="text-sm font-bold text-zinc-900">300 DPI High-Res</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-400 mb-1">File Formats</p>
                                        <p className="text-sm font-bold text-zinc-900">PSD, AI, PDF</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="lg:sticky lg:top-32">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-red-100">
                                Case Study: Premium Visuals
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 mb-8 leading-tight">
                                {project.title}
                            </h1>

                            <p className="text-lg text-zinc-500 leading-relaxed mb-12">
                                {project.description}
                            </p>

                            <div className="space-y-12">
                                {/* Key Features */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Strategic Features</h3>
                                    <div className="grid gap-4">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:border-zinc-200 transition-colors">
                                                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <span className="font-medium text-zinc-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-900 mb-6">Tooling & Process</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="px-5 py-2.5 rounded-xl bg-zinc-900 text-white text-xs font-bold tracking-wide">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Engagement CTA */}
                                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="flex-1 inline-flex items-center justify-center gap-3 bg-red-600 text-white px-8 py-5 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200 hover:-translate-y-1"
                                    >
                                        Discuss Similar Project
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </Link>
                                    <button className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full border border-zinc-200 text-zinc-600 font-bold hover:bg-zinc-50 transition-all">
                                        <Download className="w-4 h-4" />
                                        Save Preview
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Projects - Simple Strip */}
            <section className="py-24 bg-zinc-50 border-y border-zinc-100">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading
                        badge="Explore More"
                        title="Curated Work"
                        align="left"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
                        {posterProjects.filter(p => p.slug !== slug).slice(0, 5).map((p, i) => (
                            <Link key={i} href={`/services/creative-posters/${p.slug}`} className="group block">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-4 shadow-sm border border-zinc-100 group-hover:shadow-lg transition-all">
                                    <Image
                                        src={p.image}
                                        alt={p.title}
                                        width={300}
                                        height={375}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h4 className="text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors line-clamp-1">{p.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </main>
    );
}
