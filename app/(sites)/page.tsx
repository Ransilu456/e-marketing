import Link from "next/link";
import Image from "next/image";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { blogPosts, BLOG_IS_PREVIEW } from "@/components/data/blog";
import { formatDate } from "@/components/utils/date";

import Hero from "@/components/Hero";
import ContactForm from "@/components/ui/home/Contact";
import SectionHeading from "@/components/ui/tools/SectionHeading";
import Process from "@/components/ui/home/Proccess";
import Methodology from "@/components/ui/home/Methodology";
import WorkList from "@/components/ui/home/WorkList";
import Projects from "@/components/ui/home/Projects";
import Services from "@/components/ui/home/Services";
import InteractiveFAQs from "@/components/ui/home/InteractiveFAQs";

function Contact() {

  const contactInfo = [
    { icon: Mail, label: "Email", value: "emarketingparadice@gmail.com", link: "mailto:emarketingparadice@gmail.com" },
    { icon: Phone, label: "Phone", value: "+94 76 346 0514", link: "tel:+947123456789" },
    { icon: MapPin, label: "Location", value: "Kuliyapitiya, Sri Lanka" },
    { icon: Clock, label: "Hours", value: "Mon - Sat: 9:00 AM - 6:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-grid">
      <div className="max-w-5xl mx-auto text-center">
        <SectionHeading
          badge="Contact"
          title="Start Your Project"
          subtitle="Let's create something amazing together. Fill out the form and we'll be in touch within 24 hours."
        />

        <div className="grid md:grid-cols-2 gap-8 w-full bg-white p-4 border border-black/10 rounded-2xl">

          {/* LEFT */}
          <div className="space-y-4 text-left">
            <h3 className="font-semibold text-slate-900 mb-6">Contact Information</h3>
            {contactInfo.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mt-1"
                  style={{ backgroundColor: "var(--color-primary-10)" }}
                >
                  <item.icon style={{ color: "var(--color-primary)" }} size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-red-900 hover:text-(--color-primary)">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-red-900">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Insights & Engineering
          </h2>

          <p className="text-lg text-slate-500">
            Deep dives into the mechanics of growth. We write about what works in modern SEO,
            design systems, and conversion optimization.
          </p>

          {BLOG_IS_PREVIEW && (
            <p className="text-sm text-slate-400 mt-6 max-w-2xl">
              This is a preview of the insights we’re preparing to publish—focused on practical
              engineering, performance optimization, and scalable design systems.
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="flex flex-col group h-full">
              {BLOG_IS_PREVIEW ? (
                <div className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]">
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full bg-white/90 text-slate-600 border border-slate-200">
                    Preview
                  </span>
                </div>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden rounded-xl bg-slate-100 mb-6 border border-slate-100 relative aspect-[1.6]"
                >
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10" />
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
              )}

              <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {post.category}
                </span>
                <time>{formatDate(post.date)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                {BLOG_IS_PREVIEW ? (
                  post.title
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group-hover:text-indigo-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                )}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>

              {!BLOG_IS_PREVIEW && (
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 inline-flex items-center mt-auto"
                >
                  Read Article
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="bg-white antialiased w-full min-h-screen overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <WorkList />
      <Methodology />
      <Process />
      <InteractiveFAQs />
      <BlogSection />
      <Contact />
    </main>
  );
}