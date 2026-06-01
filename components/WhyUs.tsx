"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  Clock,
  Smartphone,
  SearchCheck,
  DollarSign,
  HeadphonesIcon,
  TrendingUp,
} from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Fast delivery without sacrificing quality. No waiting months for an agency to \"get to you.\"",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 70% of local searches happen on phones. Every site we build looks perfect on any screen.",
  },
  {
    icon: SearchCheck,
    title: "Built for Local SEO",
    desc: "We optimize every page so your business shows up when people search Google in your area.",
  },
  {
    icon: DollarSign,
    title: "No Agency Markups",
    desc: "You're working directly with the builder — which means better communication and lower prices.",
  },
  {
    icon: HeadphonesIcon,
    title: "Real Support",
    desc: "After launch, you can actually reach us. No ticket queues, no chatbots — just a real person.",
  },
  {
    icon: TrendingUp,
    title: "Designed to Convert",
    desc: "Our sites aren't just pretty — they're structured to turn visitors into phone calls and customers.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1117] border-y border-hairline"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-chrome text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Why Iron Web Studios
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            The Difference is in the Details
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We&apos;re not a big agency and we&apos;re not a template mill. We
            build real websites for real local businesses.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative p-6 rounded-2xl panel-chrome transition-all hover:-translate-y-1 hover:border-chrome/40 hover:shadow-[0_14px_40px_rgba(0,0,0,0.4)] overflow-hidden"
            >
              {/* hover sheen */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top_left,rgba(192,198,208,0.08),transparent_50%)]" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-hairline flex items-center justify-center mb-4 transition-colors group-hover:bg-white/[0.08]">
                  <Icon className="w-6 h-6 text-chrome" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
