import Link from "next/link";
import {
  Smartphone,
  Layers,
  Cloud,
  Shield,
  Code,
  Rocket,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { mobileProjects } from "./projects";
import Image from "next/image";

export default function MobileAppsPage() {
  const features = [
    {
      icon: <Smartphone className="text-emerald-500" size={32} />,
      title: "Cross-Platform Excellence",
      desc: "Seamless apps for Android and iOS built with Flutter and React Native.",
    },
    {
      icon: <Layers className="text-emerald-500" size={32} />,
      title: "Modern UI/UX Design",
      desc: "Elegant and functional designs that captivate users and drive engagement.",
    },
    {
      icon: <Cloud className="text-emerald-500" size={32} />,
      title: "Cloud Integration",
      desc: "Real-time syncing, scalable APIs, and seamless cloud data connections.",
    },
    {
      icon: <Shield className="text-emerald-500" size={32} />,
      title: "Enterprise Security",
      desc: "Data encryption, secure authentication, and compliance-ready apps.",
    },
    {
      icon: <Code className="text-emerald-500" size={32} />,
      title: "Clean, Efficient Code",
      desc: "Fast, maintainable, and scalable code for future-ready applications.",
    },
    {
      icon: <Rocket className="text-emerald-500" size={32} />,
      title: "Launch & Maintenance",
      desc: "We handle deployment, updates, and post-launch optimization.",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-emerald-50/30">
      {/* HERO SECTION */}
      <section className="relative px-6 md:px-16 pt-32 pb-24 max-w-7xl mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div

            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-6">
              <Sparkles className="text-emerald-600" size={18} />
              <span className="text-emerald-700">Mobile Development Experts</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              Building{" "}
              <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Mobile Apps
              </span>{" "}
              That Define Categories
            </h1>
            
            <p className="text-gray-600 text-xl mb-10 max-w-xl">
              We transform your ambitious ideas into high-performing mobile
              experiences that inspire users and scale businesses.
            </p>
            
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white rounded-full hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 group"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div

            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-900">
                <div className="w-full h-full bg-linear-to-br from-emerald-500/20 via-white to-teal-500/20 rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                  <Smartphone size={120} className="text-emerald-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 md:px-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div
            
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Our Mobile Development Advantage
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Cutting-edge technology meets exceptional design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, i) => (
              <div
                key={i}
               
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-500/30 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div
          
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">
            Recent Projects & Use Cases
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Real-world applications built for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mobileProjects.map((app, i) => (
            <div
              key={i}
             
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl mb-3 group-hover:text-emerald-600 transition-colors">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {app.description}
                </p>

                <Link
                  href={`/services/mobile-apps/projects/${app.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-600 group-hover:gap-3 transition-all"
                >
                  View Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white py-24 px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6TTI0IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0xMiAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div

          >
            <h2 className="text-4xl lg:text-6xl mb-6">
              Ready to Launch Your Vision?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-emerald-50">
              Let&apos;s build a stunning, feature-rich mobile app tailored to your
              business goals.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-2xl group"
            >
              Request a Free Quote
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
