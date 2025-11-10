"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  buttonText?: string;
  link?: string;
  image?: string;
}

export default function ServiceCard({
  title,
  description,
  features = [],
  buttonText = "Read More",
  link = "/services",
  image,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden bg-black text-white rounded-2xl transform hover:-translate-y-2 transition-all duration-500 shadow-lg">
      
      {/* --- Background Image / Placeholder --- */}
      <div className="relative aspect-4/5 overflow-hidden pointer-events-none">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={600}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
      </div>

      {/* --- Card Content --- */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-auto z-10">
        <div className="inline-block px-4 py-1 bg-[#4AEA45] text-black text-sm mb-4 rounded-full font-medium">
          Service
        </div>

        <h3
          className="text-2xl mb-3 font-semibold group-hover:text-[#4AEA45] transition-colors duration-300"
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </h3>

        <p
          className="text-gray-300 text-sm leading-relaxed mb-5"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </p>

        {features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-2 h-2 rounded-full bg-[#4AEA45]" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* --- Button --- */}
        <div className="flex items-center justify-between mt-auto p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
          <Link
            href={link}
            className="text-sm font-medium flex items-center gap-2 text-[#4AEA45] hover:text-white transition-colors duration-300"
            style={{ fontFamily: "Poppins" }}
          >
            {buttonText}
            <ExternalLink size={16} />
          </Link>

          <div className="w-10 h-10 bg-[#4AEA45] flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-500">
            <ExternalLink className="text-black" size={18} />
          </div>
        </div>
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 border-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
    </div>
  );
}
