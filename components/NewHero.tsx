'use client'

import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './error/ImageWithFallback';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function NewHero() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <motion.section
            className="relative pt-16 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-3 sm:px-6 md:px-8 lg:px-8 min-h-screen flex items-center overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            id='home'
        >
            {/* Animated Background Elements 
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />*/}

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <motion.div className="space-y-4 sm:space-y-6 md:space-y-8" variants={itemVariants}>
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#4AEA45]/10 border border-[#4AEA45]/20 rounded-full"
                            variants={itemVariants}
                        >
                            <Sparkles size={14} className="text-[#4AEA45] shrink-0" />
                            <span className="text-xs sm:text-sm">Building experiences that inspire & engage</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                                Web & App Solutions That
                                <span className="relative inline-block ml-2 sm:ml-3 md:ml-4">
                                    <span className="relative z-10">Stand Out</span>
                                    <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 md:h-4 bg-[#4AEA45] z-0"></span>
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                From stunning websites to intuitive mobile apps and creative Facebook poster designs — 
                                we craft digital solutions that captivate audiences and grow your brand presence online.
                            </p>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto" variants={itemVariants}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-filled px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                            >
                                <Link href="#contact">Contact us</Link>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                            >
                                View Our Work
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8" variants={itemVariants}>
                            <div className="group">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 transition-all duration-300 group-hover:scale-110" style={{ color: '#4AEA45', fontFamily: 'Poppins' }}>
                                    2+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">Web Projects</div>
                            </div>
                            <div className="group">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 transition-all duration-300 group-hover:scale-110" style={{ color: '#4AEA45', fontFamily: 'Poppins' }}>
                                    1+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">Mobile Apps</div>
                            </div>
                            <div className="group">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 transition-all duration-300 group-hover:scale-110" style={{ color: '#4AEA45', fontFamily: 'Poppins' }}>
                                    1K+
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">Facebook Posters</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div className="relative mt-8 sm:mt-0" variants={itemVariants}>
                        {/* Floating Tag */}
                        <motion.div
                            className="absolute hidden sm:block top-8 md:top-0 lg:-top-16 -right-2 sm:-right-3 md:-right-6 rotate-12 bg-white rounded-xl shadow-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm font-medium"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            💡 Innovative Design
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            className="relative rounded-3xl overflow-hidden shadow-2xl group"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                alt="Web and App Development Workspace"
                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-[#4AEA45]/10"></div>

                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: 'radial-gradient(circle, #4AEA45 1px, transparent 1px)',
                                        backgroundSize: '30px 30px',
                                        opacity: 0.1
                                    }}
                                ></div>
                            </div>
                        </motion.div>

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-[#4AEA45] text-black p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-2xl transform hover:rotate-3 transition-transform duration-300"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="text-xs sm:text-sm mb-1" style={{ fontFamily: 'Poppins' }}>Creative Agency</div>
                            <div className="text-xl sm:text-3xl" style={{ fontFamily: 'Poppins' }}>Since 2025</div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <motion.div
                            className="absolute hidden sm:block -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 border-3 sm:border-4 border-[#4AEA45] rounded-full opacity-50"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
