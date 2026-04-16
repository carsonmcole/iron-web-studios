"use client";

import { Check, Zap, Star, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    setup: "$299",
    monthly: "$49",
    subtitle: "One-Page Website",
    description:
      "Everything a small local business needs to look professional online — done right, and done fast.",
    color: "blue",
    features: [
      "Single-page responsive design",
      "Mobile-friendly layout",
      "Contact form (name, phone, email)",
      "Google Maps embed",
      "Social media links",
      "Basic on-page SEO",
      "Delivered in 5–7 days",
      "1 round of revisions",
      "Hosting & maintenance included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Star,
    name: "Professional",
    setup: "$799",
    monthly: "$99",
    subtitle: "Multi-Page Website",
    description:
      "A full website that builds trust, ranks on Google, and converts visitors into paying customers.",
    color: "orange",
    features: [
      "Up to 5 custom pages",
      "Mobile-first responsive design",
      "Gallery / before & after photos",
      "Contact form + call-to-action buttons",
      "Google Maps & reviews integration",
      "SEO optimization (all pages)",
      "Blog-ready (optional)",
      "Social media integration",
      "Delivered in 10–14 days",
      "3 rounds of revisions",
      "Hosting, maintenance & updates",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    icon: Rocket,
    name: "Premium",
    setup: "$1,499",
    monthly: "$199",
    subtitle: "Full AI-Powered Site",
    description:
      "Everything in Professional, plus an AI chatbot and automation tools so your site works for you 24/7.",
    color: "purple",
    features: [
      "Everything in Professional",
      "AI chatbot (answers FAQs, captures leads)",
      "Online booking / appointment integration",
      "Automated follow-up emails",
      "Lead capture & CRM setup",
      "Google Business Profile optimization",
      "Priority support (48-hr response)",
      "Monthly check-in call",
      "Delivered in 14–21 days",
      "Unlimited revisions (30 days)",
      "Hosting, AI maintenance & automation",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const colorMap = {
  blue: {
    border: "border-blue-500/20 hover:border-blue-500/40",
    badge: "bg-blue-500/10 text-blue-400",
    icon: "bg-blue-500/10 text-blue-400",
    check: "text-blue-400",
    btn: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20",
  },
  orange: {
    border: "border-orange-500/50 hover:border-orange-500",
    badge: "bg-orange-500/10 text-orange-400",
    icon: "bg-orange-500/10 text-orange-400",
    check: "text-orange-400",
    btn: "bg-orange-500 hover:bg-orange-400 text-white",
  },
  purple: {
    border: "border-purple-500/20 hover:border-purple-500/40",
    badge: "bg-purple-500/10 text-purple-400",
    icon: "bg-purple-500/10 text-purple-400",
    check: "text-purple-400",
    btn: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20",
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Packages & Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No hidden fees. No hourly surprises. Pick the package that fits your
            business and budget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => {
            const c = colorMap[plan.color as keyof typeof colorMap];
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={`relative rounded-2xl border bg-white/3 p-8 flex flex-col gap-6 transition-all ${c.border} ${
                  plan.popular ? "shadow-2xl shadow-orange-500/10 scale-[1.02]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase tracking-widest whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${c.badge}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {plan.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex items-end gap-1.5">
                      <span className="text-3xl font-extrabold">{plan.setup}</span>
                      <span className="text-gray-500 mb-1 text-sm">setup fee</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      <span className="text-2xl font-bold text-gray-200">{plan.monthly}</span>
                      <span className="text-gray-500 mb-0.5 text-sm">/ month</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${c.check}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${c.btn}`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          Need something custom?{" "}
          <a href="#contact" className="text-orange-400 hover:text-orange-300 underline">
            Let&apos;s talk
          </a>{" "}
          — every business is different and we&apos;re happy to build exactly what you need.
        </p>
      </div>
    </section>
  );
}
