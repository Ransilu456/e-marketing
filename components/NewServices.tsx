"use client";

function SectionHeading({ badge, title, subtitle, align = "center" }) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}>
      {badge && (
        <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">{title}</h2>
      {subtitle && <p className="text-lg text-zinc-500 font-light leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function NewServices() {
    return (
        <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
          badge="Services"
          title="What we do"
          subtitle="Our expertise spans digital products, branding, marketing, and analytics."
        />

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

                    <a href="#contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group">
                        Get a proposal <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right"></span>
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                        <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 relative mb-4">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" alt="Web Development" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="px-4 pb-4">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Web Development</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">Responsive, scalable, and SEO-optimized websites tailored to your brand and goals.</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> Responsive design
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> SEO optimized
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:check-circle" data-width="14"></span> Scalable architecture
                                </li>
                            </ul>
                            <a href="#contact" className="w-full btn-secondary py-2 text-xs h-10">Learn More</a>
                        </div>
                    </div>


                    <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 relative mb-4">
                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;q=80&amp;w=1080" alt="Mobile Apps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="px-4 pb-4">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Mobile Apps</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">Native and cross-platform mobile apps with seamless performance and user experience.</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:smartphone" data-width="14"></span> iOS &amp; Android
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:layers" data-width="14"></span> Cross-platform
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:zap" data-width="14"></span> High Performance
                                </li>
                            </ul>
                            <a href="#contact" className="w-full btn-secondary py-2 text-xs h-10">Explore Apps</a>
                        </div>
                    </div>


                    <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 relative mb-4">
                            <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Brand Identity" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="px-4 pb-4">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Brand Identity</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">Crafting memorable visual identities that make your brand stand out across platforms.</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:pen-tool" data-width="14"></span> Logo &amp; Mark
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:book" data-width="14"></span> Brand Guidelines
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:image" data-width="14"></span> Visual Assets
                                </li>
                            </ul>
                            <a href="#contact" className="w-full btn-secondary py-2 text-xs h-10">Discover Identity</a>
                        </div>
                    </div>


                    <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
                        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-slate-100 relative mb-4">
                            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Creative Posters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                        </div>
                        <div className="px-4 pb-4">
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Creative Posters</h3>
                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">Eye-catching poster and social designs to amplify your campaigns’ visual impact.</p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:layout" data-width="14"></span> Campaign visuals
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:share-2" data-width="14"></span> Social Ready
                                </li>
                                <li className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                                    <span className="iconify text-indigo-600" data-icon="lucide:printer" data-width="14"></span> Print Ready
                                </li>
                            </ul>
                            <a href="#contact" className="w-full btn-secondary py-2 text-xs h-10">View Examples</a>
                        </div>
                    </div>


                    <div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 md:col-span-2 lg:col-span-2">
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden rounded-xl bg-slate-100 relative mb-4 md:mb-0 md:mr-4">
                                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1080&amp;auto=format&amp;fit=crop" alt="Social Media" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                            </div>
                            <div className="md:w-1/2 px-2 pb-2 flex flex-col justify-center">
                                <h3 className="text-xl font-display font-bold text-slate-900 mb-2">Social Media Management</h3>
                                <p className="text-sm text-slate-500 mb-6">We build and manage your brand’s social presence to drive engagement and growth. Full stack community handling.</p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <span className="iconify text-indigo-600" data-icon="lucide:calendar" data-width="16"></span> Content Calendar Strategy
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <span className="iconify text-indigo-600" data-icon="lucide:users" data-width="16"></span> Community Engagement
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                                        <span className="iconify text-indigo-600" data-icon="lucide:bar-chart" data-width="16"></span> Analytics &amp; Reporting
                                    </li>
                                </ul>
                                <a href="#contact" className="w-fit btn-secondary py-2 px-6 h-10 text-xs">Manage Accounts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}