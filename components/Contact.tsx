"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    package: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or reach out directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let&apos;s Build Your Website
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fill out the form below or reach out directly. We&apos;ll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/5">
              <h3 className="text-lg font-bold mb-4">Reach Out Directly</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:7068022534"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Call or Text</p>
                    <p className="font-semibold">(706) 802-2534</p>
                  </div>
                </a>

                <a
                  href="mailto:CCOLE@IRONWEBSTUDIOS.COM"
                  className="flex items-center gap-3 text-gray-300 hover:text-orange-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Email</p>
                    <p className="font-semibold text-sm">CCOLE@IRONWEBSTUDIOS.COM</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20">
              <p className="text-orange-400 font-semibold text-sm mb-2">
                Response Time
              </p>
              <p className="text-gray-400 text-sm">
                We respond to all inquiries within <strong className="text-white">24 hours</strong>,
                Monday–Saturday. For urgent requests, a call or text gets the
                fastest response.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-white/3 border border-white/5 p-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Message Received!</h3>
                <p className="text-gray-400">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours
                  to discuss your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/3 border border-white/5 p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400 font-medium">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Smith&apos;s Plumbing"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-gray-400 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@smithsplumbing.com"
                      className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400 font-medium">
                    Package You&apos;re Interested In
                  </label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500/50 transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-[#0b0f1a]">
                      Select a package...
                    </option>
                    <option value="starter" className="bg-[#0b0f1a]">
                      Starter — $499 (One-Page Site)
                    </option>
                    <option value="professional" className="bg-[#0b0f1a]">
                      Professional — $1,499 (Multi-Page Site)
                    </option>
                    <option value="premium" className="bg-[#0b0f1a]">
                      Premium — $2,999 (AI-Powered Site)
                    </option>
                    <option value="custom" className="bg-[#0b0f1a]">
                      Not sure — let&apos;s talk
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-gray-400 font-medium">
                    Tell us about your business
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What are you looking for in a website? Any specific features or pages in mind?"
                    className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/50 text-white font-bold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/25 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  By submitting, you agree to be contacted about your project. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
