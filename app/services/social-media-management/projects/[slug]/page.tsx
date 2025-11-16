import { notFound } from "next/navigation";
import { portfolioProjects, projectDetails } from "../../projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

const PRIMARY_COLOR = "#4AEA45";
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";
const LIGHT_BG = "#f7f9fc";
const PRIMARY_ACCENT = "#10b981";



export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) return notFound();


  const detail = projectDetails[slug];

  const currentIndex = portfolioProjects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

  return (
    <main className={`min-h-screen bg-white text-[${TEXT_COLOR}]`}>

      <section className={`px-6 md:px-16 pt-24 pb-16 max-w-7xl mx-auto`} style={{ background: LIGHT_BG }}>

        <div className="flex w-full justify-between items-center">
          <Link
            href="/services/social-media-management"
            className={`inline-flex items-center gap-2 text-[${PRIMARY_ACCENT}] font-semibold hover:gap-3 transition-all duration-300`}
          >
            <ArrowLeft size={20} />
            Back to Social Media
          </Link>

          <div className="flex gap-4">
            {prevProject && (
              <Link
                href={`../projects/${prevProject.slug}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[${PRIMARY_COLOR}] hover:text-[${PRIMARY_COLOR}] transition-colors duration-200`}
              >
                <ChevronLeft size={20} />
                Prev
              </Link>
            )}

            {nextProject && (
              <Link
                href={`../projects/${nextProject.slug}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[${PRIMARY_COLOR}] hover:text-[${PRIMARY_COLOR}] transition-colors duration-200`}
              >
                Next
                <ChevronRight size={20} />
              </Link>
            )}
          </div>
        </div>

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

      <section className="px-6 md:px-16 py-28 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* --- Overview --- */}
          <div className="max-w-4xl">
            <h2
              className={`text-4xl md:text-5xl font-bold tracking-tight text-[${HEADING_COLOR}] mb-8`}
            >
              Project Overview
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {detail.overview}
            </p>
          </div>

          {/* --- Stats --- */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {detail.stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-10 hover:bg-white hover:shadow-sm transition-all duration-200"
                >
                  <Icon size={26} className={`text-[${PRIMARY_COLOR}] mb-5`} />
                  <div>
                    <p className="text-4xl font-semibold text-gray-900">{stat.value}</p>
                    <p className="text-gray-500 mt-2">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- Challenge / Solution --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-red-500/10 p-4 rounded-2xl ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {detail.challenge}
              </p>
            </div>

            <div className="bg-green-500/10 p-4 rounded-2xl ">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                The Solution
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {detail.solution}
              </p>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
