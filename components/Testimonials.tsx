"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, UserPlus } from 'lucide-react';
import Image from "next/image";
import { comments, Comment } from '@/components/data/comment'

export function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const openConsultationForm = () => {
    setShowModal(true);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="small-header-main">Testimonials</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: 'Poppins' }}>
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comments.map((comments: Comment, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 bg-white border-2 border-black/10 hover:border-[#4AEA45] transition-all duration-500 group rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(comments.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#4AEA45" className="text-[#4AEA45]" />
                ))}
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed relative z-10 text-lg" style={{ fontFamily: 'Poppins' }}>
                &quot;{comments.description}&quot;
              </p>

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-[#4AEA45] shrink-0">
                  <Image
                    src={comments.image}
                    alt={comments.name}
                    width={40}
                    height={40}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg mb-1" style={{ fontFamily: 'Poppins' }}>
                    {comments.name}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>
                    {comments.job_title}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#4AEA45] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-2xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative z-10">
          <motion.div
            className="inline-block p-8 lg:p-12 bg-black text-white rounded-3xl max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-3xl lg:text-4xl mb-4"
              style={{ fontFamily: "Prata" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Join 10+ Happy Clients
            </motion.div>

            <motion.p
              className="text-lg text-gray-300 mb-6"
              style={{ fontFamily: "Poppins" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Start your success story with us today
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={openConsultationForm}
                className="px-8 py-4 bg-[#4AEA45] text-black rounded-full hover:bg-[#4AEA45]/90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:scale-105"
                style={{ fontFamily: "Poppins" }}
              >
                <UserPlus size={20} /> Get Your Free Consultation
              </button>
            </motion.div>
          </motion.div>

          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                onClick={() => setShowModal(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
              />

              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#4AEA45] opacity-20 blur-[120px] pointer-events-none" />

              <div className="relative bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-10 w-[90%] max-w-md animate-scaleIn border border-white/40  mt-20">

                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"
                >
                  <span className="text-2xl leading-none">&times;</span>
                </button>

                <h2
                  className="text-3xl font-semibold mb-3 text-black"
                >
                  Free Consultation
                </h2>

                <p
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: "Poppins" }}
                >
                  Let's start your success story. Share your details and we’ll reach out shortly.
                </p>

                <form className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border-2 border-gray-200 focus:border-[#4AEA45] outline-none px-4 py-3 rounded-xl transition-all text-black"
                  />

                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border-2 border-gray-200 focus:border-[#4AEA45] outline-none px-4 py-3 rounded-xl transition-all text-black"
                  />

                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="border-2 border-gray-200 focus:border-[#4AEA45] outline-none px-4 py-3 rounded-xl resize-none transition-all text-black"
                  />

                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#4AEA45] text-black rounded-full hover:bg-[#3dd43a] shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
