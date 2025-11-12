import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Zap, Smartphone, Code, Layers, HardHat, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { mobileProjects } from "../../projects";

const PRIMARY_COLOR = "#4AEA45";
const PRIMARY_ACCENT = "#10b981"; 
const TEXT_COLOR = "#1f2937";
const HEADING_COLOR = "#0f172a";
const LIGHT_BG = "#f7f9fc"; 

export async function generateStaticParams() {
  return mobileProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = mobileProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const currentIndex = mobileProjects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? mobileProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < mobileProjects.length - 1 ? mobileProjects[currentIndex + 1] : null;


  const projectDetails = [
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Platform",
      description: "Built for seamless native performance on both iOS and Android.",
    },
    {
      icon: <Zap size={24} />,
      title: "Real-Time Updates",
      description: "Implemented instant data syncing using cloud technologies.",
    },
    {
      icon: <Code size={24} />,
      title: "Secure Architecture",
      description: "Robust data protection and authentication protocols applied.",
    },
    {
      icon: <Layers size={24} />,
      title: "Intuitive UI/UX",
      description: "Designed following mobile design guidelines for ease of use.",
    },
  ];

  const techStack = project.technologies.map(tech => ({
    name: tech,
    icon: tech.toLowerCase().includes('react') || tech.toLowerCase().includes('flutter') ? <Code size={20} /> : <HardHat size={20} />,
  }));

  return (
    <main className={`min-h-screen bg-white text-[${TEXT_COLOR}] `}>

      <section className={`px-6 md:px-16 pt-24 pb-16 max-w-7xl mx-auto`} style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/services/mobile-apps"
              className={`inline-flex items-center gap-2 text-[${PRIMARY_ACCENT}] font-semibold hover:gap-3 transition-all duration-300`}
            >
              <ArrowLeft size={20} />
              Back to Mobile Apps Projects
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
              className="object-cover w-full h-full" 
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t from-black/5 to-transparent"></div>
          </div>
        </div>
      </section>


      <section className={`px-6 md:px-16 py-24 bg-white`}>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold mb-16 text-[${HEADING_COLOR}] text-center`}
          >
            Mobile App Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectDetails.map((detail, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-[${PRIMARY_ACCENT}15] hover:border-[${PRIMARY_COLOR}]`}
                style={{ background: "white" }}
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

      <section className={`px-6 md:px-16 py-24`} style={{ background: LIGHT_BG }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          <div className="lg:col-span-2">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 text-[${HEADING_COLOR}]`}
            >
              Key Mobile App Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 leading-relaxed text-lg"
                >
                  <CheckCircle2
                    size={22}
                    className={`text-[${PRIMARY_ACCENT}] mt-1 shrink-0`}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

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
      <section
        className="px-6 md:px-16 py-32 text-center"
        style={{
          background: `linear-gradient(to right, ${PRIMARY_COLOR}, ${PRIMARY_ACCENT})`,
          color: 'white', 
        }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className={`text-5xl md:text-6xl font-extrabold mb-5`}>
            Ready to Build Your App?
          </h3>
          <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto">
            Let&apos;s discuss how we can bring the features of <b>{project.title}</b> or an entirely new app—to life.
          </p>
          <Link
            href="/#contact" 
            className={`inline-flex items-center gap-3 px-10 py-5 bg-white text-lg font-bold rounded-full transition-all duration-300 hover:scale-[1.05] shadow-2xl group`}
            style={{
              color: HEADING_COLOR, 
              boxShadow: `0 15px 30px rgba(0, 0, 0, 0.2), 0 5px 15px ${PRIMARY_COLOR}60`,
            }}
            rel="noopener noreferrer"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}