import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4 font-display font-bold accent">E Marketing Paradice</h3>
            <p className="text-slate-600 mb-4">
              Your trusted partner in digital transformation. We create exceptional web experiences, mobile applications, and marketing solutions that drive results.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-slate-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-100 hover:bg-accent/10 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-slate-900 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-slate-600">
              <li><Link href="#home" className="hover:accent transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:accent transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:accent transition-colors">About Us</Link></li>
              <li><Link href="#portfolio" className="hover:accent transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="hover:accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-slate-900 font-semibold">Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Post Design</li>
              <li>Facebook Page Handling</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© {currentYear} E Marketing Paradice. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-slate-500 hover:accent transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-500 hover:accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
