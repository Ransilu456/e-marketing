import { notFound } from "next/navigation";
import { portfolioProjects } from "../../projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PRIMARY_COLOR = "#4AEA45";
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; 
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className={`min-h-screen bg-white text-[${TEXT_COLOR}] font-sans`}>
      <section className="px-6 md:px-16 pt-28 pb-16 max-w-6xl mx-auto">
        <Link
          href="/services/social-media"
          className={`inline-flex items-center gap-2 text-[${PRIMARY_COLOR}] font-semibold mb-10 hover:gap-3 transition-all duration-300`}
        >
          <ArrowLeft size={20} />
          Back to Social Media
        </Link>

        <h1 className={`text-4xl md:text-5xl font-bold text-[${HEADING_COLOR}] mb-4`}>
          {project.title}
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
          {project.description}
        </p>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="px-6 md:px-16 py-24 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 text-[${HEADING_COLOR}]`}>
            Project Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-12">
            This campaign showcases how strategic planning, creative storytelling, and data-driven targeting can deliver powerful brand growth across social media platforms.
          </p>

          <Link
            href={project.link}
            className={`inline-block px-8 py-4 bg-[${PRIMARY_COLOR}] text-white font-semibold rounded-full hover:bg-[#3ec93b] transition-transform duration-300 hover:scale-[1.05]`}
          >
            Visit Project
          </Link>
        </div>
      </section>
    </main>
  );
}
