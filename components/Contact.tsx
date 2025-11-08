import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="small-header-main mb-4">Get in Touch</div>
              
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'Poppins' }}>
                Ready to take your marketing to the next level? Get in touch with us today 
                and let's discuss how we can help you achieve your goals.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-[#4AEA45] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="text-black" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1" style={{ fontFamily: 'Poppins' }}>
                    Email Us
                  </div>
                  <a 
                    href="mailto:hello@marketpro.com" 
                    className="text-lg hover:text-[#4AEA45] transition-colors" 
                    style={{ fontFamily: 'Poppins' }}
                  >
                    emarketingparadice@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-[#4AEA45] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="text-black" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1" style={{ fontFamily: 'Poppins' }}>
                    Call Us
                  </div>
                  <a 
                    href="tel:+15551234567" 
                    className="text-lg hover:text-[#4AEA45] transition-colors" 
                    style={{ fontFamily: 'Poppins' }}
                  >
                    +94 712 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-[#4AEA45] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="text-black" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1" style={{ fontFamily: 'Poppins' }}>
                    Visit Us
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Poppins' }}>
                    Sri Sasanalankara Maha Viharaya<br />
                    Kulyapitiya,
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-14 h-14 bg-[#4AEA45] flex items-center justify-center flex-shrink-0 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                  <Clock className="text-black" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1" style={{ fontFamily: 'Poppins' }}>
                    Business Hours
                  </div>
                  <p className="text-lg" style={{ fontFamily: 'Poppins' }}>
                    Mon - Sat: 12:00 AM - 6:00 PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl">
              <h3 className="text-3xl lg:text-4xl text-black mb-8" style={{ fontFamily: 'Prata' }}>
                Send us a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-black mb-2" style={{ fontFamily: 'Poppins' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 focus:border-[#4AEA45] outline-none transition-colors text-black rounded-xl"
                      placeholder="John Doe"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-black mb-2" style={{ fontFamily: 'Poppins' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 border-2 border-gray-200 focus:border-[#4AEA45] outline-none transition-colors text-black rounded-xl"
                      placeholder="john@company.com"
                      style={{ fontFamily: 'Poppins' }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-black mb-2" style={{ fontFamily: 'Poppins' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-[#4AEA45] outline-none transition-colors text-black rounded-xl"
                    placeholder="Your Company"
                    style={{ fontFamily: 'Poppins' }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-black mb-2" style={{ fontFamily: 'Poppins' }}>
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 focus:border-[#4AEA45] outline-none transition-colors text-black resize-none rounded-xl"
                    placeholder="Tell us about your project..."
                    style={{ fontFamily: 'Poppins' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-filled px-8 py-5 rounded-full flex items-center justify-center gap-3 group shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: 'Poppins' }}
                >
                  <span>Send Message</span>
                  <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-8 pt-8 border-t-2 border-gray-200 text-center">
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins' }}>
                  🔒 We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
