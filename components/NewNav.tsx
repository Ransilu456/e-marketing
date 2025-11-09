"use client"

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from "next/link"

export function CustomNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/98 backdrop-blur-md shadow-lg border-b-2 border-black/10'
                : 'bg-white/95 backdrop-blur-sm border-b border-black/5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="shrink-0">
                        <a href="/" className="small-header hover:text-[#4AEA45] transition-colors">
                            E Marketing Paradice
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10 font-[Poppins]">

                        <Link href="#about" className="text-black hover:text-[#4AEA45] transition-all duration-300 relative group">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4AEA45] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#services" className="text-black hover:text-[#4AEA45] transition-all duration-300 relative group">
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4AEA45] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#portfolio" className="text-black hover:text-[#4AEA45] transition-all duration-300 relative group">
                            Portfolio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4AEA45] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#testimonials" className="text-black hover:text-[#4AEA45] transition-all duration-300 relative group">
                            Testimonials
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4AEA45] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#contact" className="text-black hover:text-[#4AEA45] transition-all duration-300 relative group">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4AEA45] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="btn-filled px-8 py-3 rounded-full transform hover:scale-105 transition-transform duration-300 font-[Poppins]">
                            Get Started
                        </button>
                    </div>



                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black hover:text-[#4AEA45] transition-colors p-2"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-6 animate-in slide-in-from-top duration-300">
                        <div className="flex flex-col gap-4">
                            <Link
                                href="#services"
                                className="text-black hover:text-[#4AEA45] transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#about"
                                className="text-black hover:text-[#4AEA45] transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#portfolio"
                                className="text-black hover:text-[#4AEA45] transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="#testimonials"
                                className="text-black hover:text-[#4AEA45] transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Testimonials
                            </Link>
                            <Link
                                href="#contact"
                                className="text-black hover:text-[#4AEA45] transition-colors py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <button className="btn-filled px-8 py-3 rounded-full w-full mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
