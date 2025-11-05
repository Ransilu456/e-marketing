export default function Services(){
    return(
        <section
  id="services"
  className="relative w-full py-24 px-8 bg-[#06091A] text-white overflow-hidden"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#06091A] to-[#06091A]"></div>

  <div className="relative z-10 max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Our <span className="text-indigo-400">Services</span>
    </h2>
    <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
      We craft digital experiences that help your brand stand out and grow.
    </p>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Service Card */}
      {[
        {
          title: "Web Development",
          desc: "Building modern, responsive, and high-performance websites.",
          icon: "💻",
        },
        {
          title: "Digital Marketing",
          desc: "Boost your online presence with targeted digital campaigns.",
          icon: "🚀",
        },
        {
          title: "Brand Strategy",
          desc: "We help you create a strong brand identity that lasts.",
          icon: "🎯",
        },
        {
          title: "SEO Optimization",
          desc: "Enhance your visibility and climb search engine rankings.",
          icon: "📈",
        },
        {
          title: "UI/UX Design",
          desc: "Designing intuitive and delightful user experiences.",
          icon: "🎨",
        },
        {
          title: "Content Creation",
          desc: "Engaging copy, visuals, and videos for your campaigns.",
          icon: "📝",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group bg-[#0B0F25] border border-white/10 rounded-2xl p-8 shadow-lg
                     hover:shadow-[0_0_25px_rgba(79,70,229,0.3)] hover:-translate-y-2 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};