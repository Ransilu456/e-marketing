import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './error/ImageWithFallback';

const projects = [
    {
        title: 'E-Commerce Transformation',
        category: 'Retail',
        result: '340% Revenue Growth',
        image: 'https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MjUxNTgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Complete digital overhaul for a leading retail brand',
        tags: ['SEO', 'PPC', 'Social Media']
    },
    {
        title: 'SaaS Startup Launch',
        category: 'Technology',
        result: '10K Users in 6 Months',
        image: 'https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyNDczMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Strategic launch campaign for innovative tech startup',
        tags: ['Content', 'Growth', 'Analytics']
    },
    {
        title: 'Brand Revival Campaign',
        category: 'Fashion',
        result: '500% Social Engagement',
        image: 'https://images.unsplash.com/photo-1758691737538-220c1902b1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzJTIwY2VsZWJyYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjI1NTQzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        description: 'Reimagining a fashion brand for the digital age',
        tags: ['Branding', 'Social', 'Video']
    }
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">


            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
                    <div className='w-full flex items-center justify-center gap-6'>
                        <h2 className="big-header mb-6 leading-tight" style={{ fontFamily: 'Prata' }}>
                            Our
                        </h2>
                        <h2 className="section-header mb-6 leading-tight" style={{ fontFamily: 'Prata' }}>
                            Work
                        </h2>
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: 'Poppins' }}>
                        Real results for real businesses. See how we've helped brands achieve remarkable growth.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-black cursor-pointer rounded-2xl transform hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-[4/5]">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                                {/* Category Badge */}
                                <div className="inline-block px-4 py-1 bg-[#4AEA45] text-black text-sm mb-4 rounded-full" style={{ fontFamily: 'Poppins' }}>
                                    {project.category}
                                </div>

                                <h3 className="text-2xl lg:text-3xl mb-3 group-hover:text-[#4AEA45] transition-colors duration-300" style={{ fontFamily: 'Poppins' }}>
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'Poppins' }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Result */}
                                <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                                    <div>
                                        <div className="text-xs text-gray-400 mb-1">Result</div>
                                        <div className="text-lg" style={{ fontFamily: 'Poppins' }}>{project.result}</div>
                                    </div>
                                    <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-500">
                                        <ExternalLink className="text-black" size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Hover overlay */}
                            <div className="absolute inset-0 border-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="btn-filled px-10 py-4 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
