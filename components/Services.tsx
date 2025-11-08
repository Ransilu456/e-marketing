"use client";
import { motion } from "framer-motion";
import ServiceCard from "./card/ServiceCard";

const services = [
  {
    title: "Web Development",
    description: "We create responsive, fast-loading websites tailored to your brand. Our websites are built with modern technologies ensuring scalability, SEO optimization, and cross-browser compatibility. Perfect for businesses looking to make a strong digital presence.",
    features: [
      "Responsive and mobile-friendly design",
      "SEO optimized",
      "Fast loading and high performance",
      "Custom CMS integration",
      "E-commerce and blog functionality",
    ],
    buttonText: "Learn More",
  },
  {
    title: "Mobile Apps",
    description: "From iOS to Android, we build intuitive mobile applications that enhance user experience. Our apps are designed to engage users, improve conversions, and integrate seamlessly with your business processes.",
    features: [
      "iOS and Android apps",
      "Intuitive user experience (UX)",
      "Smooth performance and animations",
      "Push notifications and analytics",
      "Integration with existing platforms",
    ],
    buttonText: "Explore Apps",
  },
  {
    title: "UI/UX Design",
    description: "We craft visually stunning interfaces with a focus on usability and engagement. Our designs turn complex processes into simple, delightful experiences, helping users interact seamlessly with your digital products.",
    features: [
      "Wireframes and prototypes",
      "User-centric interface design",
      "Consistent brand identity integration",
      "High-fidelity mockups",
      "Interactive prototypes for testing",
    ],
    buttonText: "See Designs",
  },
  {
    title: "Brand Identity",
    description: "We help businesses establish a strong, recognizable brand identity. From logo design to complete brand guidelines, we ensure your brand communicates your values effectively and resonates with your audience.",
    features: [
      "Logo and brand design",
      "Typography and color palettes",
      "Brand guidelines and style guides",
      "Visual assets for social media",
      "Consistent messaging across platforms",
    ],
    buttonText: "Discover Identity",
  },
  {
    title: "SEO & Marketing",
    description: "Boost your online visibility and drive targeted traffic to your website. Our strategies combine SEO, content marketing, and paid campaigns to maximize reach, engagement, and conversions.",
    features: [
      "Search engine optimization (SEO)",
      "Content strategy and copywriting",
      "Social media marketing",
      "PPC campaigns",
      "Analytics and reporting",
    ],
    buttonText: "Get Started",
  },
  {
    title: "Creative Posters",
    description: "We design eye-catching posters and social media graphics that make your campaigns stand out. Perfect for Facebook, Instagram, and offline promotions, our designs help you connect with your audience visually.",
    features: [
      "Custom poster designs",
      "Social media optimized graphics",
      "Event and campaign visuals",
      "Print-ready and digital formats",
      "High engagement-focused designs",
    ],
    buttonText: "View Examples",
  },
  {
    title: "E-Commerce Solutions",
    description: "We develop online stores that are not only visually appealing but also optimized for conversions. From product listings to secure checkout, we ensure your e-commerce platform drives sales efficiently.",
    features: [
      "Custom e-commerce websites",
      "Payment gateway integration",
      "Inventory management systems",
      "User-friendly product catalogs",
      "Conversion-focused design",
    ],
    buttonText: "Shop Now",
  },
  {
    title: "Digital Strategy Consulting",
    description: "Our experts analyze your digital presence and craft tailored strategies to help you achieve business goals. From market research to implementation plans, we provide actionable insights for success.",
    features: [
      "Market and competitor analysis",
      "Digital roadmap creation",
      "Conversion rate optimization",
      "Growth strategy consulting",
      "Performance tracking and analytics",
    ],
    buttonText: "Consult Now",
  },
  {
    title: "Social Media Management",
    description: "We manage your social media presence to grow engagement and brand loyalty. From content creation to campaign management, we ensure your social channels are active and impactful.",
    features: [
      "Content creation and scheduling",
      "Audience engagement strategies",
      "Campaign management",
      "Analytics and reporting",
      "Brand-consistent messaging",
    ],
    buttonText: "Manage Accounts",
  },
];


export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center text-center py-28 px-6 lg:px-12 bg-white overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-end justify-center gap-3"
        >
          <h2 className="section-header-main leading-none">Our</h2>
          <h2 className="section-header text-secondary-text leading-none">Services</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          At <span className="font-semibold text-[#4AEA45]">E Marketing Paradice</span>, we craft digital excellence.
          From <span className="font-medium text-black">custom websites</span> and 
          <span className="font-medium text-black"> mobile apps</span> to 
          <span className="font-medium text-black"> creative poster designs</span> — we build experiences that inspire and perform.
        </motion.p>
      </div>

      {/* Service Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
      >
        {services.map((service, idx) => (
          <motion.div key={idx} variants={cardVariants} className="flex justify-center">
            <ServiceCard
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mt-16 text-gray-800 italic text-lg sm:text-xl max-w-2xl"
      >
        “Your all-in-one partner for <span className="text-[#4AEA45] font-semibold">web</span>, <span className="text-[#4AEA45] font-semibold">mobile</span>, and <span className="text-[#4AEA45] font-semibold">creative</span> solutions.”
      </motion.div>
    </section>
  );
}
