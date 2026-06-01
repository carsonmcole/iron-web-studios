"use client";

import { Check, Zap, Star, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    setup: "$499",
    monthly: "$49",
    subtitle: "One-Page Website",
    description:
      "Everything a small local business needs to look professional online — done right, and done fast.",
    features: [
      "Single-page responsive design",
      "Mobile-friendly layout",
      "Contact form (name, phone, email)",
      "Google Maps embed",
      "Social media links",
      "Basic on-page SEO",
      "Delivered in 5–7 days",
      "Monthly revisions",
      "Hosting & maintenance included",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Star,
    name: "Professional",
    setup: "$999",
    monthly: "$99",
    subtitle: "Multi-Page Website",
    description:
      "A full website that builds trust, ranks on Google, and converts visitors into paying customers.",
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
      "Weekly revisions",
      "Hosting, maintenance & updates",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    icon: Rocket,
    name: "Premium",
    setup: "$2,499",
    monthly: "$149",
    subtitle: "Full AI-Powered Site",
    description:
      "Everything in Professional, plus an AI chatbot and automation tools so your site works for you 24/7.",
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "AI chatbot (answers FAQs, captures leads)",
      "Online booking / appointment integration",
      "Automated follow-up emails",
      "Lead capture & CRM setup",
      "Google Business Profile optimization",
      "Priority support (48-hr response)",
      "Monthly check-in call",
      "Daily revisions",
      "Hosting, AI maintenance & automation",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0d10]">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-chrome text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Packages &amp; Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            No hidden fees. No hourly surprises. Pick the package that fits your
            business and budget.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative h-full rounded-2xl p-8 flex flex-col gap-6 transition-all hover:-translate-y-1.5 ${
                  plan.popular
                    ? "border border-chrome/50 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_0_40px_rgba(192,198,208,0.12)]"
                    : "panel-chrome hover:border-chrome/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(192,198,208,0.4)]">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-white/[0.04] border border-hairline text-chrome">
                    <Icon className="w-3.5 h-3.5" />
                    {plan.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex items-end gap-1.5">
                      <span className="text-3xl font-extrabold text-chrome">
                        {plan.setup}
                      </span>
                      <span className="text-muted mb-1 text-sm">setup fee</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      <span className="text-2xl font-bold text-gray-200">
                        {plan.monthly}
                      </span>
                      <span className="text-muted mb-0.5 text-sm">/ month</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="rule-chrome" />

                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-chrome" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] hover:shadow-[0_0_28px_rgba(192,198,208,0.4)]"
                      : "border border-hairline bg-white/[0.03] text-white hover:bg-white/[0.07] hover:border-chrome/40"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="text-center text-muted text-sm mt-10">
            Need something custom?{" "}
            <a
              href="#contact"
              className="text-white underline decoration-chrome/40 underline-offset-4 hover:decoration-chrome"
            >
              Let&apos;s talk
            </a>{" "}
            — every business is different and we&apos;re happy to build exactly
            what you need.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
