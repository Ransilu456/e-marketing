import Link from "next/link";

export default function CTA() {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative bg-gray-900 text-white shadow-2xl">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-10 px-8 py-16 md:p-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Ready to build something <span className="text-red-500">iconic?</span></h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">From MVP to enterprise scaling, our mobile experts are ready to turn your concept into a market-leading application.</p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-red-900/20 transform hover:-translate-y-1">
                            Book a Free Strategy Call
                        </Link>
                        <Link href="mailto:emarketingparadice@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/10 rounded-full font-semibold transition-all">
                            Email Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
