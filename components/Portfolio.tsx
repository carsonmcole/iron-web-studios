"use client";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const placeholders = [
  { label: "Barber Shop", tag: "Starter" },
  { label: "Plumbing Co.", tag: "Professional" },
  { label: "Landscaping", tag: "Professional" },
  { label: "HVAC Service", tag: "Premium" },
  { label: "Auto Shop", tag: "Starter" },
  { label: "Restaurant", tag: "Premium" },
];

/** Tag colors matched to the pricing tiers. */
const tagColors: Record<string, string> = {
  Starter: "bg-[#38bdf8]/10 border-[#38bdf8]/30 text-[#7dd3fc]",
  Professional: "bg-[#818cf8]/10 border-[#818cf8]/30 text-[#a5b4fc]",
  Premium: "bg-[#c084fc]/10 border-[#c084fc]/30 text-[#d8b4fe]",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1117] border-y border-hairline"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-[#d8b4fe] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Examples Coming Soon
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            We&apos;re building out templates for each industry now. Check back
            soon — or be one of the first clients and we&apos;ll showcase your
            site here.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl border border-hairline overflow-hidden bg-gradient-to-br from-white/[0.05] to-transparent aspect-video flex flex-col items-center justify-center gap-3 transition-all hover:border-chrome/40 hover:-translate-y-1"
            >
              {/* Mock browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-black/40 border-b border-hairline flex items-center px-3 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="mx-auto w-32 h-4 rounded bg-white/5 text-[10px] text-muted flex items-center justify-center">
                  ironwebstudios.com
                </div>
              </div>

              <Clock className="w-10 h-10 text-white/15 transition-colors group-hover:text-chrome/40" />
              <p className="text-white/30 text-sm font-medium">
                Template in progress
              </p>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">
                  {item.label}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium border ${tagColors[item.tag]}`}
                >
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 p-6 rounded-2xl panel-chrome text-center">
            <p className="text-chrome font-semibold mb-1">Be an Early Client</p>
            <p className="text-muted text-sm">
              We&apos;re offering discounted rates for our first few clients in
              exchange for featuring your site in our portfolio. Interested?{" "}
              <a
                href="#contact"
                className="text-white underline decoration-chrome/40 underline-offset-4 hover:decoration-chrome"
              >
                Get in touch.
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
