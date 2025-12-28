import Link from "next/link";
import { Facebook, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-(--color-primary) flex items-center justify-center text-white shadow-lg">
              <span className="font-serif italic font-bold text-xl leading-none">
                E
              </span>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">
              Marketing Paradice
            </span>
          </div>

          <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
            We design and build high-performance digital experiences that help
            brands grow, convert, and stand out online.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {[
              {
                href: "https://www.facebook.com/emarketingparadice",
                label: "Facebook",
                Icon: Facebook,
              },
              {
                href: "https://www.linkedin.com/in/keshan-samarasekara-6a9137399",
                label: "LinkedIn",
                Icon: Linkedin,
              },
              {
                href: "https://github.com/ransilu456",
                label: "GitHub",
                Icon: Github,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg
                  bg-white/5 text-zinc-400
                  hover:text-white hover:bg-(--color-primary)
                  transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm font-medium">
          <Link href="/about_us" className="hover:text-white transition">
            About Us
          </Link>
          <Link href="/portfolio/projects" className="hover:text-white transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-6 text-sm">
          <span className="text-zinc-400">
            © 2025 <span className="text-white">Marketing Paradice</span>.
            <br /> All rights reserved.
          </span>

          <span className="text-[11px] text-zinc-500">
            Developed by{" "}
            <span className="text-zinc-300">
              E Marketing Paradice Design Lab
            </span>
          </span>
        </div>

      </div>
    </footer>
  );
}
