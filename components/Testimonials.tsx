import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVision',
    content: 'MarketPro completely transformed our digital presence. Their strategic approach and execution resulted in a 300% increase in qualified leads within just 6 months.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
  },
  {
    name: 'Michael Chen',
    role: 'Founder, EcoShop',
    content: 'Working with this team has been a game-changer. They don\'t just execute campaigns, they become true partners in your growth journey.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, StyleHub',
    content: 'The ROI we\'ve seen has been incredible. Their data-driven approach and creative campaigns have exceeded all our expectations.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#4AEA45] opacity-10 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div className="inline-block mb-4">
            <span className="small-header-main">Testimonials</span>
          </div>

          <p className="text-lg sm:text-xl text-gray-700" style={{ fontFamily: 'Poppins' }}>
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 lg:p-10 bg-white border-2 border-black/10 hover:border-[#4AEA45] transition-all duration-500 group rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={80} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#4AEA45" className="text-[#4AEA45]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed relative z-10 text-lg" style={{ fontFamily: 'Poppins' }}>
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden border-2 border-[#4AEA45] flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-lg mb-1" style={{ fontFamily: 'Poppins' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Accent Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#4AEA45] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-[#4AEA45] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 lg:p-12 bg-black text-white rounded-3xl max-w-4xl">
            <div className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Prata' }}>
              Join 10,000+ Happy Clients
            </div>
            <p className="text-lg text-gray-300 mb-6" style={{ fontFamily: 'Poppins' }}>
              Start your success story with us today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#4AEA45] text-black rounded-full hover:bg-[#4AEA45]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Poppins' }}>
                Get Your Free Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300" style={{ fontFamily: 'Poppins' }}>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
