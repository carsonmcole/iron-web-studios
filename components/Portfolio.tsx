"use client";

import { ExternalLink, Clock } from "lucide-react";
import { motion } from "framer-motion";

const placeholders = [
  {
    label: "Barber Shop",
    tag: "Starter",
    color: "blue",
    bg: "from-blue-900/40 to-blue-800/20",
    border: "border-blue-500/20",
    tagColor: "bg-blue-500/10 text-blue-400",
  },
  {
    label: "Plumbing Co.",
    tag: "Professional",
    color: "orange",
    bg: "from-orange-900/40 to-orange-800/20",
    border: "border-orange-500/20",
    tagColor: "bg-orange-500/10 text-orange-400",
  },
  {
    label: "Landscaping",
    tag: "Professional",
    color: "green",
    bg: "from-green-900/40 to-green-800/20",
    border: "border-green-500/20",
    tagColor: "bg-green-500/10 text-green-400",
  },
  {
    label: "HVAC Service",
    tag: "Premium",
    color: "purple",
    bg: "from-purple-900/40 to-purple-800/20",
    border: "border-purple-500/20",
    tagColor: "bg-purple-500/10 text-purple-400",
  },
  {
    label: "Auto Shop",
    tag: "Starter",
    color: "red",
    bg: "from-red-900/40 to-red-800/20",
    border: "border-red-500/20",
    tagColor: "bg-red-500/10 text-red-400",
  },
  {
    label: "Restaurant",
    tag: "Premium",
    color: "yellow",
    bg: "from-yellow-900/40 to-yellow-800/20",
    border: "border-yellow-500/20",
    tagColor: "bg-yellow-500/10 text-yellow-400",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Examples Coming Soon
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We&apos;re building out templates for each industry now. Check back
            soon — or be one of the first clients and we&apos;ll showcase your
            site here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className={`group relative rounded-2xl border ${item.border} overflow-hidden bg-gradient-to-br ${item.bg} aspect-video flex flex-col items-center justify-center gap-3`}
            >
              {/* Mock browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0b0f1a]/60 flex items-center px-3 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                <div className="mx-auto w-32 h-4 rounded bg-white/5 text-xs text-gray-600 flex items-center justify-center">
                  ironwebstudios.com
                </div>
              </div>

              <Clock className="w-10 h-10 text-white/20" />
              <p className="text-white/30 text-sm font-medium">Template in progress</p>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{item.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-center"
        >
          <p className="text-orange-300 font-semibold mb-1">
            Be an Early Client
          </p>
          <p className="text-gray-400 text-sm">
            We&apos;re offering discounted rates for our first few clients in exchange for
            featuring your site in our portfolio. Interested?{" "}
            <a href="#contact" className="text-orange-400 hover:text-orange-300 underline">
              Get in touch.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
