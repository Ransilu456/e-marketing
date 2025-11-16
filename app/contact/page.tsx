"use client";

import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function Page() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Green glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-60 h-60 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-2" style={{ fontFamily: "Prata" }}>
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm sm:text-base" style={{ fontFamily: "Poppins" }}>
            Feel free to ask anything about us — we’re here to help!
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white text-black p-6 sm:p-8 rounded-2xl shadow-2xl">
          <form className="space-y-6">
            
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address *
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#4AEA45] transition">
                <Mail size={18} className="text-gray-500 mr-3" />
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full outline-none bg-transparent text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Mobile Number *
              </label>
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#4AEA45] transition">
                <Phone size={18} className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full outline-none bg-transparent text-sm"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Your Message *
              </label>
              <div className="flex items-start border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-[#4AEA45] transition">
                <MessageSquare size={18} className="text-gray-500 mt-1 mr-3" />
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full outline-none bg-transparent resize-none text-sm"
                  placeholder="Enter your message"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#4AEA45] hover:bg-[#3ec93b] text-black py-4 rounded-full font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-6 border-t border-black/10 pt-4">
            Your privacy is protected — we never share your info.
          </p>
        </div>
      </div>
    </section>
  );
}
