"use client";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  buttonText?: string;
}

export default function ServiceCard({ title, description, features = [], buttonText = "Read More" }: ServiceCardProps) {
  return (
    <div
      className="w-full max-w-sm bg-black/5 rounded-md p-8 flex flex-col justify-between  duration-300"
    >
      {/* Header */}
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm sm:text-base">{description}</p>
      </div>

      {/* Features */}
      {features.length > 0 && (
        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
              <span className="w-3 h-3 rounded-full bg-[#4AEA45] flex-shrink-0 mt-1"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Button */}
      <button className="mt-auto bg-[#4AEA45] text-black font-medium rounded-full py-3 px-6 shadow-md hover:shadow-lg transition-all duration-300">
        {buttonText}
      </button>
    </div>
  );
}
