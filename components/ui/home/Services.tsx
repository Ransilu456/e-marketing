"use client";

import Link from "next/link";
import SectionHeading from "../tools/SectionHeading";
import { ImageWithFallback } from "../../error/ImageWithFallback";
import { Icon } from "../tools/Icon";


type ServiceFeature = {
  label: string;
  icon: keyof typeof import("lucide-react");
};

interface Service {
  title: string;
  image: string;
  description: string;
  features: ServiceFeature[];
  link: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    title: "Web Development",
    image:
      "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.",
    features: [
      { label: "Responsive design", icon: "MonitorSmartphone" },
      { label: "SEO optimized", icon: "Search" },
      { label: "Scalable architecture", icon: "Layers" },
    ],
    link: "/services/web-development",
  },
  {
    title: "Mobile Apps",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080",
    description:
      "Native and cross-platform mobile apps with seamless performance and user experience.",
    features: [
      { label: "iOS & Android", icon: "Smartphone" },
      { label: "Cross-platform", icon: "PanelsTopLeft" },
      { label: "High Performance", icon: "Rocket" },
    ],
    link: "/services/mobile-apps",
  },
  {
    title: "Brand Identity",
    image:
      "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Crafting memorable visual identities that make your brand stand out across platforms.",
    features: [
      { label: "Logo & Mark", icon: "Brush" },
      { label: "Brand Guidelines", icon: "NotepadText" },
      { label: "Visual Assets", icon: "Palette" },
    ],
    link: "/#contact",
  },
  {
    title: "Creative Posters",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1080&auto=format&fit=crop",
    description:
      "Eye-catching poster and social designs to amplify your campaigns' visual impact.",
    features: [
      { label: "Campaign visuals", icon: "Megaphone" },
      { label: "Social Ready", icon: "Share2" },
      { label: "Print Ready", icon: "Printer" },
    ],
    link: "/services/creative-posters",
  },
  {
    title: "Social Media Management",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1080&auto=format&fit=crop",
    description:
      "We build and manage your brand's social presence to drive engagement and growth.",
    features: [
      { label: "Content Calendar Strategy", icon: "Calendar" },
      { label: "Community Engagement", icon: "Users" },
      { label: "Analytics & Reporting", icon: "BarChart3" },
    ],
    featured: true,
    link: "/under_development_200",
  },
] as const;

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Our Services"
          title="What We Offer"
          subtitle="Explore our range of web, mobile, branding, and social media services designed to grow your business."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 ${service.featured ? "md:col-span-2 lg:col-span-2" : ""
                }`}
            >
              <div
                className={`flex flex-col ${service.featured ? "md:flex-row" : ""
                  } h-full`}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden rounded-xl bg-gray-100 relative mb-4 md:mb-0 ${service.featured
                    ? "md:w-1/2 h-full"
                    : "aspect-video"
                    }`}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={1000}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div
                  className={`px-3 pb-3 flex flex-col ${service.featured ? "md:w-1/2 justify-center" : ""
                    }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-8">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600 font-medium"
                      >
                        <Icon
                          name={feature.icon}
                          size={16}
                          className="text-indigo-600 shrink-0"
                        />
                        {feature.label}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="mt-auto inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
