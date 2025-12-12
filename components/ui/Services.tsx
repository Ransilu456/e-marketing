import { CheckCircle } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    image:
      "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.",
    features: ["Responsive design", "SEO optimized", "Scalable architecture"],
  },
  {
    title: "Mobile Apps",
    image:
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Native and cross-platform mobile apps with seamless performance and user experience.",
    features: ["iOS & Android", "Cross-platform", "High Performance"],
  },
  {
    title: "Brand Identity",
    image:
      "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Crafting memorable visual identities that make your brand stand out across platforms.",
    features: ["Logo & Mark", "Brand Guidelines", "Visual Assets"],
  },
  {
    title: "Creative Posters",
    image:
      "https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Eye-catching poster and social designs to amplify your campaigns' visual impact.",
    features: ["Campaign visuals", "Social Ready", "Print Ready"],
  },
  {
    title: "Social Media Management",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "We build and manage your brand's social presence to drive engagement and growth.",
    features: [
      "Content Calendar Strategy",
      "Community Engagement",
      "Analytics & Reporting",
    ],
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full bg-emerald-100 border border-emerald-200 text-sm font-semibold text-red-700 uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            What we do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise spans digital products, branding, marketing, and
            analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-3 border border-gray-200 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 ${
                service.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div
                className={`${
                  service.featured
                    ? "flex flex-col md:flex-row gap-4"
                    : "flex flex-col"
                }`}
              >
                <div
                  className={`overflow-hidden rounded-xl bg-gray-100 relative mb-4 md:mb-0 ${
                    service.featured
                      ? "md:w-1/2 aspect-video md:aspect-auto"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div
                  className={`px-3 pb-3 flex flex-col ${
                    service.featured ? "md:w-1/2 justify-center" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
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
                        <CheckCircle className="text-emerald-500 w-4 h-4 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
