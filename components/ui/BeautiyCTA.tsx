import Link from "next/link";

export default function BeautiyCTA() {
    return (
        <section
            id="cta"
            className="py-32 relative overflow-hidden border-t border-red-100 bg-red-50/20"
        >
            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center reveal-up">
                <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-8">
                    Ready to craft your vision?
                </h2>
                <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                    Transform your digital presence with a website that converts.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/case-studies"
                        className="h-12 px-10 rounded-full bg-red-600 text-white text-sm font-medium hover:scale-105 transition shadow-xl flex items-center justify-center"
                    >
                        Explore
                    </Link>
                    <Link
                        href="mailto:emarketingparadice@gmail.com"
                        className="h-12 px-10 rounded-full border border-red-200 bg-white text-red-600 text-sm font-medium hover:bg-red-50 shadow-sm flex items-center justify-center"
                    >
                        Email us
                    </Link>
                </div>
            </div>
        </section>
    )
}