"use client";

import { useState } from "react";
import { Phone, Mail, Send, CheckCircle } from "lucide-react";
import Reveal from "./Reveal";

const inputClass =
  "px-4 py-3 rounded-xl bg-white/[0.04] border border-hairline text-white placeholder-gray-600 focus:outline-none focus:border-chrome/60 focus:ring-1 focus:ring-chrome/30 transition-all text-sm";

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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0d10]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Let&apos;s Build Your Website
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Fill out the form below or reach out directly. We&apos;ll get back
            to you within 24 hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <Reveal delay={0.1} className="lg:col-span-2 flex flex-col gap-6">
            <div className="p-6 rounded-2xl panel-chrome">
              <h3 className="text-lg font-bold mb-4">Reach Out Directly</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:7068022534"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#34d399]/10 border border-[#34d399]/25 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Phone className="w-5 h-5 text-[#34d399]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">Call or Text</p>
                    <p className="font-semibold">(706) 802-2534</p>
                  </div>
                </a>

                <a
                  href="mailto:CCOLE@IRONWEBSTUDIOS.COM"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/25 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Mail className="w-5 h-5 text-[#38bdf8]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted mb-0.5">Email</p>
                    <p className="font-semibold text-sm">
                      CCOLE@IRONWEBSTUDIOS.COM
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-chrome/30 bg-gradient-to-b from-white/[0.05] to-transparent">
              <p className="text-chrome font-semibold text-sm mb-2">
                Response Time
              </p>
              <p className="text-muted text-sm">
                We respond to all inquiries within{" "}
                <strong className="text-white">24 hours</strong>,
                Monday–Saturday. For urgent requests, a call or text gets the
                fastest response.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl panel-chrome p-10 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-chrome/40 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-chrome" />
                </div>
                <h3 className="text-2xl font-bold">Message Received!</h3>
                <p className="text-muted">
                  Thanks for reaching out. We&apos;ll be in touch within 24
                  hours to discuss your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl panel-chrome p-8 flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted font-medium">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      name="business"
                      required
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Smith's Plumbing"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm text-muted font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@smithsplumbing.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-muted font-medium">
                    Package You&apos;re Interested In
                  </label>
                  <select
                    name="package"
                    value={form.package}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-[#0b0d10]">
                      Select a package...
                    </option>
                    <option value="starter" className="bg-[#0b0d10]">
                      Starter — ~$499 (One-Page Site) [~$49/mo]
                    </option>
                    <option value="professional" className="bg-[#0b0d10]">
                      Professional — ~$999 (Multi-Page Site) [~$99/mo]
                    </option>
                    <option value="premium" className="bg-[#0b0d10]">
                      Premium — ~$2,499 (AI-Powered Site) [~$149/mo]
                    </option>
                    <option value="custom" className="bg-[#0b0d10]">
                      Not sure — let&apos;s talk
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm text-muted font-medium">
                    Tell us about your business
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="What does your business do? What are you looking for in a website? Any specific features or pages in mind?"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(192,198,208,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#0b0d10]/30 border-t-[#0b0d10] rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-muted text-xs text-center">
                  By submitting, you agree to be contacted about your project.
                  No spam, ever.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
