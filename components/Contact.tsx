import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle Green Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#4AEA45] opacity-10 blur-3xl rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3
                className="text-3xl font-semibold mb-3"
                style={{ fontFamily: "Prata" }}
              >
                Get in Touch
              </h3>
              <p
                className="text-base text-gray-300 leading-relaxed"
                style={{ fontFamily: "Poppins" }}
              >
                Ready to grow your business? Let’s connect and create something
                amazing together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-xl transition-transform group-hover:rotate-12 duration-300">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <a
                    href="mailto:emarketingparadice@gmail.com"
                    className="text-base hover:text-[#4AEA45] transition-colors"
                  >
                    emarketingparadice@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-xl transition-transform group-hover:rotate-12 duration-300">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Call Us</div>
                  <a
                    href="tel:+947123456789"
                    className="text-base hover:text-[#4AEA45] transition-colors"
                  >
                    +94 712 345 6789
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-xl transition-transform group-hover:rotate-12 duration-300">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Visit Us</div>
                  <p className="text-base leading-tight">
                    Sri Sasanalankara Maha Viharaya, <br />
                    Kuliyapitiya
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 group">
                <div className="w-12 h-12 bg-[#4AEA45] flex items-center justify-center rounded-xl transition-transform group-hover:rotate-12 duration-300">
                  <Clock className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Business Hours</div>
                  <p className="text-base leading-tight">
                    Mon - Sat: 12:00 AM - 6:00 PM <br /> Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
              <h3
                className="text-2xl md:text-3xl text-black mb-6"
                style={{ fontFamily: "Prata" }}
              >
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-black mb-1"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#4AEA45] outline-none text-black rounded-xl text-sm"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-black mb-1"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#4AEA45] outline-none text-black rounded-xl text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-black mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#4AEA45] outline-none text-black rounded-xl text-sm"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-black mb-1"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-[#4AEA45] outline-none text-black resize-none rounded-xl text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 text-base font-medium bg-[#4AEA45] hover:bg-[#3ec93b] text-black rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={18} className="mt-0.5" />
                </button>
              </form>

              {/* Footer note */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-600">
                  🔒 Your privacy is protected. We never share your info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
