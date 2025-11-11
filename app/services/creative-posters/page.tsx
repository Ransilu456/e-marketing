"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap, Palette, Feather, Target, ImageIcon } from "lucide-react"; 

const PRIMARY_COLOR = "#4AEA45"; 
const HEADING_COLOR = "#0f172a"; 
const SECONDARY_BG = "#f8fafc";

const features = [
  {
    title: "High-Impact Visuals",
    desc: "Designs crafted to immediately capture attention in crowded feeds or on the street.",
    icon: Zap,
  },
  {
    title: "Brand Harmony",
    desc: "Posters that seamlessly integrate with your existing brand identity and messaging.",
    icon: Palette,
  },
  {
    title: "Print & Digital Ready",
    desc: "Optimized files delivered in all necessary formats (RGB/CMYK) for any platform.",
    icon: ImageIcon,
  },
  {
    title: "Conversion Focused",
    desc: "Strategic placement of CTAs and information to drive specific user actions.",
    icon: Target,
  },
];

export default function CreativePostersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800" style={{ fontFamily: "Poppins, sans-serif" }}>
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-28 lg:py-40 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Subtle Background Shape */}
        <div className={`absolute -top-10 -right-10 w-48 h-48 bg-[${PRIMARY_COLOR}]/10 rounded-full blur-3xl pointer-events-none`}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-[${HEADING_COLOR}]`}>
            Creative Poster <br />
            <span className={`text-[${PRIMARY_COLOR}]`}>Design That Gets Noticed</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-10">
            We transform your message into **attention-grabbing visual assets** perfect for events, promotions, and digital campaigns.
          </p>
          <Link
            href="/#contact"
            className={`inline-flex items-center gap-3 px-10 py-4 text-lg font-bold text-white bg-[${PRIMARY_COLOR}] rounded-full hover:bg-[#3ec93b] transition-all duration-300 shadow-xl shadow-[${PRIMARY_COLOR}]/40 uppercase tracking-wider`}
          >
            Start Your Poster Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Benefits/Features Section */}
      <section className={`py-20 px-6 md:px-16 bg-[${SECONDARY_BG}] border-t border-b border-gray-100`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center text-[${HEADING_COLOR}]`}>
            Why Choose Our Poster Design?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg flex items-start space-x-5 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-0.5 border border-gray-100"
              >
                <div className={`p-3 rounded-full bg-[${PRIMARY_COLOR}] text-white shrink-0`}>
                  <feature.icon size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-2 text-[${HEADING_COLOR}]`}>{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Use Cases Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-10 text-center text-[${HEADING_COLOR}]`}>
          Our Design Scope
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {['Event Posters', 'Product Launches', 'Social Media Ads', 'Print Campaigns', 'Infographics', 'Flyers & Leaflets'].map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-6 bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:border-[${PRIMARY_COLOR}] hover:shadow-md`}
                >
                    <Feather size={36} className={`mx-auto mb-3 text-[${PRIMARY_COLOR}]`} />
                    <p className="font-semibold text-lg text-gray-700">{item}</p>
                </motion.div>
            ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`bg-[${PRIMARY_COLOR}] text-white py-16 px-6 md:px-16`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready for a Visual Masterpiece?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Tell us about your campaign, and we&apos;ll handle the stunning design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[${PRIMARY_COLOR}] rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl shadow-black/20"
            >
              Request a Design
              <ArrowRight size={22} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}