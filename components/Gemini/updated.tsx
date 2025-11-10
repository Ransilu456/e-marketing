import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Layout, TrendingUp, Palette, Icon as LucideIcon, ExternalLink } from 'lucide-react';

// --- File: lib/constants.ts ---
const PRIMARY_COLOR = 'black';
const ACCENT_COLOR = '#4AEA45'; // Your defined secondary color

// --- File: lib/types.ts ---
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  // NEW: Added fields for the new card UI
  category: string;
  result: string;
  tags: string[];
}

// --- File: components/ui/FeatureCard.tsx ---
interface FeatureCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
}

/**
 * UPGRADED: Feature Card
 * - Uses Tailwind hover classes for a cleaner, combined effect.
 * - Adds a subtle accent border on hover.
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon: Icon }) => (
  <motion.div 
    className="bg-white p-8 rounded-3xl shadow-lg flex flex-col items-start gap-4 border-b-4 border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
    style={{ '--hover-border-color': ACCENT_COLOR } as React.CSSProperties}
    onMouseEnter={(e) => e.currentTarget.style.borderColor = ACCENT_COLOR}
    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
  >
    <div className="p-3 rounded-xl shadow-md" style={{ backgroundColor: ACCENT_COLOR }}>
      {Icon && <Icon size={28} color={PRIMARY_COLOR} />}
    </div>
    <h3 className="text-2xl font-bold font-prata" style={{ color: PRIMARY_COLOR }}>{title}</h3>
    <p className="text-gray-600 text-base">{desc}</p>
  </motion.div>
);

// --- File: components/ui/PortfolioCard.tsx ---
// NEW: This is the new card UI you provided, adapted as a component
interface PortfolioCardProps extends Project {
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  image, 
  link, 
  index,
  category,
  result,
  tags
}) => (
  <motion.a
    href={link || '#'}
    key={title}
    className="group relative overflow-hidden bg-black cursor-pointer rounded-2xl transform hover:-translate-y-2 transition-all duration-500 shadow-lg"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-[4/5]">
      <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => (e.currentTarget.src = "https://placehold.co/420x525/F0F4F8/6B7280?text=Project+Image")}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
      {/* Category Badge */}
      <div className="inline-block px-4 py-1 bg-[#4AEA45] text-black text-sm mb-4 rounded-full" style={{ fontFamily: 'Poppins' }}>
          {category}
      </div>

      <h3 className="text-2xl lg:text-3xl mb-3 group-hover:text-[#4AEA45] transition-colors duration-300" style={{ fontFamily: 'Poppins' }}>
          {title}
      </h3>

      <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'Poppins' }}>
          {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
              <span key={i} className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full">
                  {tag}
              </span>
          ))}
      </div>

      {/* Result */}
      <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <div>
              <div className="text-xs text-gray-400 mb-1">Result</div>
              <div className="text-lg" style={{ fontFamily: 'Poppins' }}>{result}</div>
          </div>
          <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-500">
              <ExternalLink className="text-black" size={20} />
          </div>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 border-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
  </motion.a>
);


// --- File: components/ui/FilledButton.tsx ---
// (No changes to this component)
interface FilledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const FilledButton: React.FC<FilledButtonProps> = ({ children, onClick, style = {} }) => {
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
          e.currentTarget.style.color = baseBorder as string;
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


// --- File: lib/data.ts ---
// UPDATED: Added category, result, and tags to all projects
const portfolioProjectsWeb: Project[] = [
  { title: "E‑Commerce Store", description: "A fast and responsive online store with payment integration.", image: "https://images.unsplash.com/photo-1605902711622-cfb43c443d31?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Retail', result: '2.5M+ Visitors', tags: ['Next.js', 'Stripe', 'Vercel'] },
  { title: "Portfolio Website", description: "A sleek portfolio for creative professionals.", image: "https://images.unsplash.com/photo-1581091215362-273c6b4e0f3e?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Creative', result: '50+ Leads', tags: ['React', 'Framer Motion', 'UI/UX'] },
  { title: "Business Landing Page", description: "High‑converting landing page with modern UI/UX.", image: "https://images.unsplash.com/photo-1590608897129-79d3b2c4b0d1?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Corporate', result: '35% Conversion Lift', tags: ['Gatsby', 'SEO', 'Headless CMS'] },
  { title: "SaaS Platform UI", description: "A complex dashboard UI for a growing tech company.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Technology', result: '10k Active Users', tags: ['TypeScript', 'Figma', 'Node.js'] },
];

const portfolioProjectsMobile: Project[] = [
  { title: "Fitness Tracker App", description: "Native iOS/Android app with real-time data syncing.", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Health', result: '15k Downloads', tags: ['React Native', 'Firebase', 'HealthKit'] },
  { title: "On-Demand Service", description: "Full-stack mobile solution with geo-location services.", image: "https://images.unsplash.com/photo-1598331667622-18ff6c6f055c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Logistics', result: '1k Daily Bookings', tags: ['Flutter', 'Google Maps', 'Node.js'] },
  { title: "Internal Tooling", description: "Cross-platform app for internal team management.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Enterprise', result: '80% Time Saved', tags: ['Swift', 'Kotlin', 'Internal API'] },
  { title: "Meditation App", description: "A calming UI/UX focused on user wellness and retention.", image: "https://images.unsplash.com/photo-1506126613408-eca07568e761?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Wellness', result: '25k MAU', tags: ['UI/UX', 'In-App Purchase', 'Audio'] },
];

const portfolioProjectsPosters: Project[] = [
  { title: "Product Launch Ad", description: "Animated poster design optimized for Instagram stories.", image: "https://images.unsplash.com/photo-1579541620888-6f56c59d57d4?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Social Media', result: '3M Impressions', tags: ['Photoshop', 'After Effects', 'Ads'] },
  { title: "Event Promotion", description: "Series of visually cohesive posters for a multi-day event.", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Events', result: 'Sold Out Tickets', tags: ['Illustrator', 'Branding', 'Print'] },
  { title: "Recruitment Campaign", description: "Creative posters for LinkedIn and Facebook recruitment drives.", image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'HR/Corporate', result: '200+ Applicants', tags: ['LinkedIn', 'Graphic Design', 'Copywriting'] },
  { title: "Brand Awareness", description: "Abstract and artistic visuals to capture brand essence.", image: "https://images.unsplash.com/photo-1506900226340-9f5e3f94c486?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Branding', result: '80% Brand Lift', tags: ['Art Direction', 'Visual Identity', 'Video'] },
];

const portfolioProjectsSMM: Project[] = [
  { title: "Content Strategy & Calendar", description: "Defined seasonal campaigns and daily content schedule.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Strategy', result: '90% Audience Growth', tags: ['Content', 'Analytics', 'Planning'] },
  { title: "Community Management", description: "Active engagement report and crisis management plan.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Community', result: '5x Engagement', tags: ['Engagement', 'Support', 'Copywriting'] },
  { title: "Performance Reporting", description: "Monthly analytics breakdown and actionable insights.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Analytics', result: '40% Lower CPA', tags: ['Data', 'ROI', 'Reporting'] },
  { title: "Paid Ad Campaign", description: "Targeted ad spend across platforms for measurable ROI.", image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080", link: "#", category: 'Advertising', result: '300% ROAS', tags: ['Meta Ads', 'Google Ads', 'PPC'] },
];


// --- File: lib/animations.ts ---
/**
 * NEW: Staggered animation variants for hero sections
 */
const heroParentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};


// --- File: pages/WebDevelopmentPage.tsx ---
const WebDevelopmentPage: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* UPGRADED Hero Section (Staggered Animation) */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div 
          variants={heroParentVariant}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          <motion.span variants={heroItemVariant} className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</motion.span>
          <motion.h1 variants={heroItemVariant} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Web Development <br />
            <span style={{ color: ACCENT_COLOR }}>that scales with your business</span>
          </motion.h1>
          <motion.p variants={heroItemVariant} className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We craft responsive, high-performance websites that are fast, SEO-friendly, and conversion-oriented. 
            From e-commerce stores to personal portfolios, we build sites that impress and perform.
          </motion.p>
          <motion.div variants={heroItemVariant}>
            <FilledButton>
              Get a Free Quote <ArrowRight size={20} className="inline ml-2" />
            </FilledButton>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="flex-1 flex justify-center"
        >
          <img src={heroImage} alt="Web Development Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => (e.currentTarget.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Web+Dev")}/>
        </motion.div>
      </section>

      {/* UPGRADED Portfolio Section (Sticky Title & NEW Cards) */}
      <section className="py-20 bg-white px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 h-max text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our Recent Web Projects</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">Solutions that are visually stunning and high-performing.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-0">
            {portfolioProjectsWeb.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>
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

// --- File: pages/MobileAppDevelopmentPage.tsx ---
const MobileAppDevelopmentPage: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* UPGRADED Hero Section (Staggered Animation) */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div 
          variants={heroParentVariant}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          <motion.span variants={heroItemVariant} className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</motion.span>
          <motion.h1 variants={heroItemVariant} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Mobile App <br />
            <span style={{ color: ACCENT_COLOR }}>from concept to store launch</span>
          </motion.h1>
          <motion.p variants={heroItemVariant} className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We engineer seamless native and cross-platform mobile applications, focusing on intuitive UX and high performance on both iOS and Android.
          </motion.p>
          <motion.div variants={heroItemVariant}>
            <FilledButton>
              Start Your App Idea <ArrowRight size={20} className="inline ml-2" />
            </FilledButton>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="flex-1 flex justify-center"
        >
          <img src={heroImage} alt="Mobile App Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => (e.currentTarget.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Mobile+App")}/>
        </motion.div>
      </section>

      {/* UPGRADED Portfolio Section (Sticky Title & NEW Cards) */}
      <section className="py-20 bg-white px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 h-max text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our App Development Showcase</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">Intuitive design meeting powerful functionality.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-0">
            {portfolioProjectsMobile.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>
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

// --- File: pages/CreativePostersPage.tsx ---
const CreativePostersPage: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1503602642458-232111445657?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* UPGRADED Hero Section (Staggered Animation) */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div 
          variants={heroParentVariant}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          <motion.span variants={heroItemVariant} className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</motion.span>
          <motion.h1 variants={heroItemVariant} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Creative Poster <br />
            <span style={{ color: ACCENT_COLOR }}>and Social Media Design</span>
          </motion.h1>
          <motion.p variants={heroItemVariant} className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We create stunning, high-impact graphic design work, specializing in eye-catching posters and optimized visuals for Facebook, Instagram, and other social platforms.
          </motion.p>
          <motion.div variants={heroItemVariant}>
            <FilledButton>
              View Our Design Portfolio <ArrowRight size={20} className="inline ml-2" />
            </FilledButton>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="flex-1 flex justify-center"
        >
          <img src={heroImage} alt="Poster Design Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => (e.currentTarget.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Poster+Design")}/>
        </motion.div>
      </section>

      {/* UPGRADED Portfolio Section (Sticky Title & NEW Cards) */}
      <section className="py-20 bg-white px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 h-max text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Visual Impact Examples</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">Designs engineered for maximum engagement and brand recall.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-0">
            {portfolioProjectsPosters.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>
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

// --- File: pages/SocialMediaManagementPage.tsx ---
const SocialMediaManagementPage: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&q=80&w=1080";
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* UPGRADED Hero Section (Staggered Animation) */}
      <section className="relative px-6 md:px-16 py-24 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        <motion.div 
          variants={heroParentVariant}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          <motion.span variants={heroItemVariant} className="text-lg font-medium uppercase tracking-wider" style={{ color: ACCENT_COLOR }}>Our Service</motion.span>
          <motion.h1 variants={heroItemVariant} className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight mt-2" style={{ color: PRIMARY_COLOR, fontFamily: 'Prata, serif' }}>
            Social Media <br />
            <span style={{ color: ACCENT_COLOR }}>Management & Growth</span>
          </motion.h1>
          <motion.p variants={heroItemVariant} className="text-gray-700 text-lg md:text-xl mb-10 leading-relaxed">
            We provide full-service social media management, handling content strategy, scheduling, community engagement, and detailed analytics to ensure maximum reach and ROI.
          </motion.p>
          <motion.div variants={heroItemVariant}>
            <FilledButton>
              Get a Custom SMM Plan <ArrowRight size={20} className="inline ml-2" />
            </FilledButton>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }} 
          animate={{ opacity: 1, x: 0, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="flex-1 flex justify-center"
        >
          <img src={heroImage} alt="Social Media Management Illustration" className="w-full max-w-lg rounded-3xl shadow-2xl aspect-[4/3] object-cover" onError={(e) => (e.currentTarget.src = "https://placehold.co/500x300/F0F4F8/6B7280?text=Social+Media")}/>
        </motion.div>
      </section>

      {/* UPGRADED Portfolio Section (Sticky Title & NEW Cards) */}
      <section className="py-20 bg-white px-6 md:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 lg:sticky lg:top-28 h-max text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-prata" style={{ color: PRIMARY_COLOR }}>Our SMM Deliverables</h2>
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto lg:mx-0">Transparent and results-driven strategies for all major platforms.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-0">
            {portfolioProjectsSMM.map((project, index) => (
              <PortfolioCard key={project.title} {...project} index={index} />
            ))}
          </div>
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

// --- File: lib/constants.ts (continued) ---
type PageKey = 'web' | 'mobile' | 'posters' | 'smm';

const PAGES: Record<PageKey, { component: React.FC, title: string }> = {
  'web': { component: WebDevelopmentPage, title: 'Web Development' },
  'mobile': { component: MobileAppDevelopmentPage, title: 'Mobile Apps' },
  'posters': { component: CreativePostersPage, title: 'Creative Posters' },
  'smm': { component: SocialMediaManagementPage, title: 'Social Media Management' },
};

// --- File: components/layout/Header.tsx ---
interface HeaderProps {
  currentPage: PageKey;
  setCurrentPage: React.Dispatch<React.SetStateAction<PageKey>>;
}

/**
 * UPGRADED: Header
 * - Uses a sliding motion.div (layoutId) for the active state.
 * - This provides a much more fluid and premium navigation feel.
 */
const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => (
  <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
      <h1 className="text-2xl font-bold font-prata" style={{ color: ACCENT_COLOR }}>
        E Marketing Paradice
      </h1>
      <nav className="flex flex-wrap justify-center gap-2 md:gap-2 mt-4 md:mt-0">
        {(Object.keys(PAGES) as PageKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setCurrentPage(key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative ${
              currentPage === key
                ? 'text-white'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            {currentPage === key && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 rounded-full z-[-1]"
                style={{ backgroundColor: PRIMARY_COLOR }}
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{PAGES[key].title}</span>
          </button>
        ))}
      </nav>
    </div>
  </header>
);

// --- File: components/layout/Footer.tsx ---
// (Minor typography tweak)
const Footer: React.FC = () => (
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
);


// --- File: App.tsx ---
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('web');

  const CurrentComponent = PAGES[currentPage].component;

  return (
    // UPGRADED: Main background is now light gray for depth
    <div className="min-h-screen bg-gray-50 text-black font-poppins">
      
      {/* Load Fonts (Poppins and Prata) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Prata&display=swap');
        
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-prata { font-family: 'Prata', serif; }

        /* Custom scrollbar hide for portfolio section */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>


      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <main key={currentPage} className="font-poppins">
          {/* Page content is now rendered on bg-gray-50, with white sections inside */}
          <CurrentComponent />
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}