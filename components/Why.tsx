"use client";

export default function Studio() {
  return (
       <section id="studio" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6">The Paradice Method</h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-10">
                        Excellence isn&apos;t an accident. It&apos;s an engineered outcome. We follow a rigorous cycle of discovery, development, and optimization.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="glass-dark p-6 rounded-2xl">
                            <span className="block text-3xl font-bold text-white mb-1">50+</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Products Shipped</span>
                        </div>
                        <div className="glass-dark p-6 rounded-2xl">
                            <span className="block text-3xl font-bold text-indigo-400 mb-1">$12M</span>
                            <span className="text-xs text-slate-400 uppercase tracking-wider">Client Revenue</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pl-4 lg:pl-12 border-l border-slate-800">
                    <div className="relative pl-8 group cursor-default">
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-indigo-500 transition-colors ring-4 ring-slate-900"></div>
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">1. Discovery &amp; Architecture</h3>
                        <p className="text-slate-400 text-sm">We map out the data schema, user flows, and technical requirements before writing a line of code.</p>
                    </div>
                    <div className="relative pl-8 group cursor-default">
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-indigo-500 transition-colors ring-4 ring-slate-900"></div>
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">2. Agile Development</h3>
                        <p className="text-slate-400 text-sm">Bi-weekly sprints with deploy previews. You see progress in real-time, not just at the finish line.</p>
                    </div>
                    <div className="relative pl-8 group cursor-default">
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-indigo-500 transition-colors ring-4 ring-slate-900"></div>
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-indigo-400 transition-colors">3. Launch &amp; Scale</h3>
                        <p className="text-slate-400 text-sm">Perfect lighthouse scores, analytics integration, and continuous deployment for rapid iteration.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
