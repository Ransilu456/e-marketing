import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { posterProjects } from "../../projects";

const PRIMARY_COLOR = "#4AEA45";
const HEADING_COLOR = "#0f172a";
const TEXT_COLOR = "#374151";

export async function generateStaticParams() {
  return posterProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = posterProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center text-center px-6 `}
      >
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link
          href="/services/mobile-apps"
          className="text-[#4AEA45] font-semibold hover:underline"
        >
          ← Back 
        </Link>
      </div>
    );
  }

  return (
    <main
      className={`min-h-screen bg-white text-[${TEXT_COLOR}] py-24 px-6 md:px-16 `}
    >
      {/* Back Button */}
      <Link
        href="/services/mobile-apps"
        className={`inline-flex items-center gap-2 text-[${PRIMARY_COLOR}] font-semibold hover:gap-3 transition-all duration-300 mb-10`}
      >
        <ArrowLeft size={20} /> Back to Projects
      </Link>

      {/* Project Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1
          className={`text-5xl font-extrabold mb-6 text-[${HEADING_COLOR}] leading-tight`}
        >
          {project.title}
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          {project.description}
        </p>
      </div>

      {/* Project Image */}
      <div className="relative max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="object-cover w-full h-auto"
        />
      </div>

      {/* Features & Technologies */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2
            className={`text-3xl font-bold mb-6 text-[${HEADING_COLOR}] border-b-4 border-[${PRIMARY_COLOR}] inline-block pb-1`}
          >
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-gray-700 text-lg"
              >
                <CheckCircle2
                  size={22}
                  className={`text-[${PRIMARY_COLOR}] mt-1`}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className={`text-3xl font-bold mb-6 text-[${HEADING_COLOR}] border-b-4 border-[${PRIMARY_COLOR}] inline-block pb-1`}
          >
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-5 py-2 rounded-full bg-[${PRIMARY_COLOR}]/10 text-[${PRIMARY_COLOR}] font-semibold`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`mt-24 bg-[${PRIMARY_COLOR}] text-white py-16 rounded-3xl shadow-xl text-center`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want a Similar App for Your Business?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Let’s bring your mobile app idea to life with powerful tech and
          creative design.
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[${PRIMARY_COLOR}] rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl uppercase tracking-wide"
        >
          Get a Free Quote
          <ArrowLeft size={22} className="rotate-180" />
        </Link>
      </section>
    </main>
  );
}
