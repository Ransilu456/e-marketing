import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Layout, TrendingUp, Palette } from 'lucide-react';

// --- Utility Components & Data ---

const PRIMARY_COLOR = 'black';
const ACCENT_COLOR = '#4AEA45'; // Your defined secondary color

// --- NEW/UPDATED Utility Components ---

/**
 * UPDATED: Feature Card
 * - Uses Prata font for the title.
 * - Uses a cleaner framer-motion hover (scale, y, boxShadow).
 * - Bolder icon.
 */
const FeatureCard = ({ title, desc, icon: Icon }) => (
  <motion.div 
    className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start gap-4 transition-all duration-300"
    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
  >
    <div className="p-3 rounded-xl shadow-md" style={{ backgroundColor: ACCENT_COLOR }}>
      {Icon && <Icon size={28} color={PRIMARY_COLOR} />}
    </div>
    <h3 className="text-2xl font-bold font-prata" style={{ color: PRIMARY_COLOR }}>{title}</h3>
    <p className="text-gray-600 text-base">{desc}</p>
  </motion.div>
);

/**
 * NEW: Portfolio Card
 * - Replaces the simple horizontal scroll item.
 * - Includes a "group-hover" effect to zoom the image and animate the link.
 */
const PortfolioCard = ({ title, description, image, link, index }) => (
  <motion.a
    href={link}
    className="block bg-white rounded-3xl shadow-lg overflow-hidden group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
  >
    <div className="overflow-hidden h-72">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        onError={(e) => e.target.src = "https://placehold.co/420x280/F0F4F8/6B7280?text=Project+Image"}
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold font-prata" style={{ color: PRIMARY_COLOR }}>{title}</h3>
      <p className="text-gray-600 mt-2 mb-4">{description}</p>
      <span className="font-semibold transition-colors duration-300 group-hover:text-black" style={{ color: ACCENT_COLOR }}>
        View Project <ArrowRight size={16} className="inline transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </div>
  </motion.a>
);


/**
 * UPDATED: Filled Button
 * - More robust logic to handle style overrides (for the green footer button)
 * - Correctly applies the "invert" hover effect based on passed styles.
 */
const FilledButton = ({ children, onClick, style = {} }) => {
  const baseBg = style.backgroundColor || PRIMARY_COLOR;
  const baseColor = style.color || 'white';
  const baseBorder = style.borderColor || PRIMARY_COLOR;

  return (
    <button
      onClick={onClick}
      className="px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 shadow-lg border-2"
      style={{ 
          backgroundColor: baseBg, 
          color: baseColor,
          borderColor: baseBorder,
          ...style // Allow overrides
      }}
      onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = baseBorder;
      }}
      onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = baseBg;
          e.currentTarget.style.color = baseColor;
      }}
    >
      {children}
    </button>
  );
};


// --- Portfolio Data (Unchanged) ---
const portfolioProjectsWeb = [
  { title: "E‑Commerce Store", description: "A fast and responsive online store with payment integration.", image: "https://images.unsplash.com/photo-1605902711622-cfb43c443d31?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Portfolio Website", description: "A sleek portfolio for creative professionals.", image: "https://images.unsplash.com/photo-1581091215362-273c6b4e0f3e?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Business Landing Page", description: "High‑converting landing page with modern UI/UX.", image: "https://images.unsplash.com/photo-1590608897129-79d3b2c4b0d1?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "SaaS Platform UI", description: "A complex dashboard UI for a growing tech company.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
];

const portfolioProjectsMobile = [
  { title: "Fitness Tracker App", description: "Native iOS/Android app with real-time data syncing.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "On-Demand Service", description: "Full-stack mobile solution with geo-location services.", image: "https://images.unsplash.com/photo-1598331667622-18ff6c6f055c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Internal Tooling", description: "Cross-platform app for internal team management.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Meditation App", description: "A calming UI/UX focused on user wellness and retention.", image: "https://images.unsplash.com/photo-1506126613408-eca07568e761?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
];

const portfolioProjectsPosters = [
  { title: "Product Launch Ad", description: "Animated poster design optimized for Instagram stories.", image: "https://images.unsplash.com/photo-1579541620888-6f56c59d57d4?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Event Promotion", description: "Series of visually cohesive posters for a multi-day event.", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Recruitment Campaign", description: "Creative posters for LinkedIn and Facebook recruitment drives.", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Brand Awareness", description: "Abstract and artistic visuals to capture brand essence.", image: "https://images.unsplash.com/photo-1506900226340-9f5e3f94c486?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
];

const portfolioProjectsSMM = [
  { title: "Content Strategy & Calendar", description: "Defined seasonal campaigns and daily content schedule.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Community Management", description: "Active engagement report and crisis management plan.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Performance Reporting", description: "Monthly analytics breakdown and actionable insights.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
  { title: "Paid Ad Campaign", description: "Targeted ad spend across platforms for measurable ROI.", image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#" },
];

// --- Page Components (UPDATED) ---

const WebDevelopmentPage = () => {
  const heroImage = "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
          <span className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Web Development <br />
            <span style={{ color: ACCENT_COLOR }}>that scales with your business</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We craft responsive, high-performance websites that are fast, SEO-friendly, and conversion-oriented. 
            From e-commerce stores to personal portfolios, we build sites that impress and perform.
          </p>
          <FilledButton>
            Get a Free Quote <ArrowRight size={20} className="inline ml-2" />
          </FilledButton>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
          <img src={heroImage} alt="Web Development Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => e.target.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Web+Dev"}/>
        </motion.div>
      </section>

      {/* UPDATED Portfolio Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our Recent Web Projects</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">Solutions that are visually stunning and high-performing.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioProjectsWeb.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Why Choose Our Web Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Responsive Design" desc="Websites that look perfect on all devices, from mobile to desktop." icon={Layout} />
          <FeatureCard title="SEO Optimized" desc="Built with SEO best practices to rank higher on search engines." icon={TrendingUp} />
          <FeatureCard title="Fast & Scalable" desc="Optimized code and architecture to grow with your business." icon={Code} />
        </div>
      </section>
    </motion.div>
  );
};

const MobileAppDevelopmentPage = () => {
  const heroImage = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
          <span className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Mobile App <br />
            <span style={{ color: ACCENT_COLOR }}>from concept to store launch</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We engineer seamless native and cross-platform mobile applications, focusing on intuitive UX and high performance on both iOS and Android.
          </p>
          <FilledButton>
            Start Your App Idea <ArrowRight size={20} className="inline ml-2" />
          </FilledButton>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
          <img src={heroImage} alt="Mobile App Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => e.target.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Mobile+App"}/>
        </motion.div>
      </section>

      {/* UPDATED Portfolio Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our App Development Showcase</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">Intuitive design meeting powerful functionality.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioProjectsMobile.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>What We Deliver in Mobile</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Native Performance" desc="Optimized code ensures speed and reliability on all devices." icon={Smartphone} />
          <FeatureCard title="UI/UX Focus" desc="Intuitive and beautiful interfaces that users love to engage with." icon={Layout} />
          <FeatureCard title="Cross-Platform Ready" desc="Efficiency via cross-platform frameworks where appropriate." icon={Code} />
        </div>
      </section>
    </motion.div>
  );
};

const CreativePostersPage = () => {
  const heroImage = "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
          <span className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Creative Poster <br />
            <span style={{ color: ACCENT_COLOR }}>and Social Media Design</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We create stunning, high-impact graphic design work, specializing in eye-catching posters and optimized visuals for Facebook, Instagram, and other social platforms.
          </p>
          <FilledButton>
            View Our Design Portfolio <ArrowRight size={20} className="inline ml-2" />
          </FilledButton>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
          <img src={heroImage} alt="Poster Design Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => e.target.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Poster+Design"}/>
        </motion.div>
      </section>

      {/* UPDATED Portfolio Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Visual Impact Examples</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">Designs engineered for maximum engagement and brand recall.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioProjectsPosters.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Design Process Highlights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Platform Optimization" desc="Designs perfectly sized and formatted for every social media platform." icon={Palette} />
          <FeatureCard title="Brand Consistency" desc="Ensure every visual asset aligns perfectly with your existing brand identity." icon={Layout} />
          <FeatureCard title="High Conversion Focus" desc="Graphics designed not just to look good, but to drive clicks and actions." icon={TrendingUp} />
        </div>
      </section>
    </motion.div>
  );
};

const SocialMediaManagementPage = () => {
  const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 text-center lg:text-left">
          <span className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Social Media <br />
            <span style={{ color: ACCENT_COLOR }}>Management & Growth</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We provide full-service social media management, handling content strategy, scheduling, community engagement, and detailed analytics to ensure maximum reach and ROI.
          </p>
          <FilledButton>
            Get a Custom SMM Plan <ArrowRight size={20} className="inline ml-2" />
          </FilledButton>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
          <img src={heroImage} alt="Social Media Management Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => e.target.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Social+Media"}/>
        </motion.div>
      </section>

      {/* UPDATED Portfolio Section */}
      <section className="py-20 bg-gray-50 px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our SMM Deliverables</h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">Transparent and results-driven strategies for all major platforms.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioProjectsSMM.map((project, index) => (
            <PortfolioCard key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>The SMM Advantage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard title="Strategic Content Planning" desc="Data-driven content calendars for consistent audience growth." icon={Layout} />
          <FeatureCard title="Real-Time Engagement" desc="Active community management to foster loyalty and brand advocacy." icon={Code} />
          <FeatureCard title="In-Depth Reporting" desc="Monthly performance reports with clear, actionable growth insights." icon={TrendingUp} />
        </div>
      </section>
    </motion.div>
  );
};


// --- Main Application Component ---

const PAGES = {
  'web': { component: WebDevelopmentPage, title: 'Web Development' },
  'mobile': { component: MobileAppDevelopmentPage, title: 'Mobile Apps' },
  'posters': { component: CreativePostersPage, title: 'Creative Posters' },
  'smm': { component: SocialMediaManagementPage, title: 'Social Media Management' },
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('web');

  const CurrentComponent = PAGES[currentPage].component;

  return (
    <div className="min-h-screen bg-white text-black font-poppins">
      
      {/* Load Fonts (Poppins and Prata) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Prata&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-prata { font-family: 'Prata', serif; }

        /* Custom scrollbar hide for portfolio section */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>


      {/* UPDATED Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
          <h1 className="text-2xl font-bold font-prata" style={{ color: ACCENT_COLOR }}>
            E Marketing Paradice
          </h1>
          <nav className="flex flex-wrap justify-center gap-2 md:gap-2 mt-4 md:mt-0">
            {Object.entries(PAGES).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setCurrentPage(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentPage === key
                    ? 'shadow-md text-white'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
                style={{
                    backgroundColor: currentPage === key ? PRIMARY_COLOR : 'transparent',
                }}
              >
                {title}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <main key={currentPage} className="font-poppins">
          <CurrentComponent />
        </main>
      </AnimatePresence>

      {/* UPDATED Universal CTA Footer */}
      <section className="bg-gray-900 text-white py-20 md:py-24 px-6 text-center relative overflow-hidden">
        {/* Subtle glow effect */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 opacity-10 blur-[100px] rounded-full" 
          style={{ backgroundColor: ACCENT_COLOR }}
        ></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-prata">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-3xl mx-auto">
            Contact us today to discuss how we can bring your vision to life and build a solution that drives real results.
          </p>
          <FilledButton
            style={{ 
              backgroundColor: ACCENT_COLOR, 
              color: PRIMARY_COLOR, 
              borderColor: ACCENT_COLOR 
            }}
          >
            Let's Talk Business <ArrowRight size={20} className="inline ml-2" />
          </FilledButton>
        </div>
      </section>
    </div>
  );
}