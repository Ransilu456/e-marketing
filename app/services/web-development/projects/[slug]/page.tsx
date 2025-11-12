import { notFound } from "next/navigation";
import { portfolioProjects } from "../../projects";
import Image from "next/image";
import Link from "next/link";
// Import ChevronRight and ChevronLeft for navigation buttons
import { ArrowLeft, Zap, Smartphone, Settings, Code, Layers, HardHat, ChevronLeft, ChevronRight } from "lucide-react";

const PRIMARY_COLOR = "#4AEA45";
const PRIMARY_ACCENT = "#10b981"; 
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";
const LIGHT_BG = "#f7f9fc"; 

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const currentIndex = portfolioProjects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

  const projectDetails = [
    {
      icon: <Zap size={24} />,
      title: "Performance Grade",
      description: "Achieved A+ Lighthouse scores for speed, ensuring sub-second load times.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Device Fluidity",
      description: "Pixel-perfect responsiveness across all screens (mobile, tablet, desktop).",
    },
    {
      icon: <Settings size={24} />,
      title: "Future-Proof Architecture",
      description: "Modular and scalable foundation built for easy feature expansion.",
    },
    {
      icon: <Layers size={24} />,
      title: "Clean UI/UX Design",
      description: "Intuitive interfaces designed to maximize visitor engagement and conversions.",
    },
  ];

  const techStack = [
    { name: "Next.js", icon: <Code size={20} /> },
    { name: "TypeScript", icon: <Code size={20} /> },
    { name: "Tailwind CSS", icon: <HardHat size={20} /> },
    { name: "Framer Motion", icon: <Zap size={20} /> },
  ];

  return (
    <main className={`min-h-screen bg-white text-[${TEXT_COLOR}] `}>

      {/* ========================================
        PROJECT HERO & IMAGE SECTION
        ========================================
      */}
      <section className={`px-6 md:px-16 pt-24 pb-16 max-w-7xl mx-auto`} style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto">
          
          {/* TOP NAVIGATION BLOCK */}
          <div className="flex justify-between items-center mb-12">
            {/* Back to Service Link */}
            <Link
              href="/services/web-development"
              className={`inline-flex items-center gap-2 text-[${PRIMARY_ACCENT}] font-semibold hover:gap-3 transition-all duration-300`}
            >
              <ArrowLeft size={20} />
              Back to Web Development
            </Link>

            <div className="flex gap-4">
              {prevProject && (
                <Link 
                  href={`/services/web-development/projects/${prevProject.slug}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[${PRIMARY_COLOR}] hover:text-[${PRIMARY_COLOR}] transition-colors duration-200`}
                >
                  <ChevronLeft size={20} />
                  Prev
                </Link>
              )}
              
              {nextProject && (
                <Link 
                  href={`/services/web-development/projects/${nextProject.slug}`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-[${PRIMARY_COLOR}] hover:text-[${PRIMARY_COLOR}] transition-colors duration-200`}
                >
                  Next
                  <ChevronRight size={20} />
                </Link>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <div className="mb-12">
            <h1 className={`text-5xl md:text-6xl font-extrabold text-[${HEADING_COLOR}] mb-4 max-w-4xl`}>
              {project.title}
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-gray-100 flex items-center justify-center" 
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4 "
              priority
            />
            {/* Subtle gradient overlay at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/5 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}

      {/* ========================================
        PROJECT DETAILS/FEATURES SECTION 
        ========================================
      */}
      <section className={`px-6 md:px-16 py-24 bg-white`}>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-[${HEADING_COLOR}] text-center`}
          >
            Project Highlights & Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectDetails.map((detail, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-[${PRIMARY_ACCENT}15] hover:border-[${PRIMARY_COLOR}]`}
                style={{
                  background: "white",
                }}
              >
                <div
                  className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-lg`}
                  style={{
                    background: `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_ACCENT})`,
                    color: 'white',
                  }}
                >
                  {detail.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 text-[${HEADING_COLOR}]`}>
                  {detail.title}
                </h3>
                <p className="text-gray-600">
                  {detail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}


      {/* ========================================
        PROJECT SUMMARY & TECH STACK
        ========================================
      */}
      <section className={`px-6 md:px-16 py-24`} style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Summary */}
          <div className="lg:col-span-2">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-[${HEADING_COLOR}]`}
            >
              Project Summary & Impact
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-12">
              This project demonstrates our commitment to delivering **high-impact digital solutions**.
              By focusing on performance, responsive design, and clean UI/UX, we crafted a web experience built for
              **conversion and long-term reliability**. The system&apos;s ability to handle complex logic while maintaining a seamless user interface is a testament to our technical rigor.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1">
            <h3 className={`text-2xl font-bold mb-6 text-[${HEADING_COLOR}]`}>
              Technology Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm border-2 border-[${PRIMARY_COLOR}]`}
                  style={{
                    backgroundColor: `${PRIMARY_COLOR}10`,
                    color: HEADING_COLOR
                  }}
                >
                  {tech.icon}
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- */}

      {/* ========================================
        FINAL CTA SECTION
        ========================================
      */}
      <section
        className="px-6 md:px-16 py-32 text-center"
        style={{
          background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_ACCENT})`,
          color: 'white', 
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className={`text-5xl md:text-6xl font-extrabold mb-5`}>
            Ready to See the Results?
          </h3>
          <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto">
            Explore the live implementation of the **{project.title}**—experience the speed and design firsthand.
          </p>
          <Link
            href={project.link}
            className={`inline-flex items-center gap-3 px-10 py-5 bg-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-[1.05] shadow-2xl group`}
            style={{
              color: HEADING_COLOR, 
              boxShadow: `0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px ${PRIMARY_COLOR}60`,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Project
            <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}