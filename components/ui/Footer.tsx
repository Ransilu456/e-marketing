"use client";

import React from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { Facebook, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:scale-105 transition-transform">
                E
              </div>
              <span className="font-bold text-zinc-900 tracking-tight font-display text-lg underline underline-offset-4 decoration-transparent group-hover:decoration-zinc-900 transition-all">
                Marketing Paradice
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
              We design and build high-performance digital experiences that help brands grow, convert, and stand out online.
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://www.facebook.com/emarketingparadice", Icon: Facebook },
                { href: "https://www.linkedin.com/in/keshan-samarasekara-6a9137399", Icon: Linkedin },
                { href: "https://github.com/ransilu456", Icon: Github },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all cursor-pointer group"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6 text-sm tracking-tight font-display uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/services/web-development" className="hover:text-zinc-900 transition-colors">Web Development</Link></li>
              <li><Link href="/services/mobile-apps" className="hover:text-zinc-900 transition-colors">App Development</Link></li>
              <li><Link href="/services/creative-posters" className="hover:text-zinc-900 transition-colors">Design & Branding</Link></li>
              <li><Link href="/services/social-media-management" className="hover:text-zinc-900 transition-colors">Digital Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6 text-sm tracking-tight font-display uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><Link href="/about" className="hover:text-zinc-900 transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-zinc-900 transition-colors">Work Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-zinc-900 transition-colors">Blog Insights</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-zinc-900 mb-6 text-sm tracking-tight font-display uppercase">Stay Updated</h4>
            <p className="text-sm text-zinc-500 mb-4">Subscribe to our newsletter for the latest digital marketing insights.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all placeholder:text-zinc-400" />
              <button className="bg-zinc-900 text-white rounded-xl px-4 py-2.5 hover:bg-zinc-800 transition-colors text-sm font-medium flex items-center justify-center">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 items-center md:items-start text-xs text-zinc-400 font-medium">
            <p>© {new Date().getFullYear()} Marketing Paradice. All rights reserved.</p>
            <p>Designed & Developed by E Marketing Paradice Design Lab</p>
          </div>
          <div className="flex gap-6 text-xs text-zinc-500 font-medium">
            <Link href="/privacy-policy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
