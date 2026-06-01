"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import {
  Scissors,
  Wrench,
  Leaf,
  Wind,
  Hammer,
  Zap,
  Truck,
  UtensilsCrossed,
  Dog,
  Paintbrush,
  ShieldCheck,
  Car,
} from "lucide-react";

const businesses = [
  { icon: Scissors, label: "Barbers & Salons" },
  { icon: Wrench, label: "Plumbers" },
  { icon: Leaf, label: "Landscapers" },
  { icon: Wind, label: "HVAC" },
  { icon: Zap, label: "Electricians" },
  { icon: Hammer, label: "Contractors" },
  { icon: Paintbrush, label: "Painters" },
  { icon: UtensilsCrossed, label: "Restaurants" },
  { icon: Dog, label: "Pet Services" },
  { icon: Car, label: "Auto Shops" },
  { icon: Truck, label: "Movers" },
  { icon: ShieldCheck, label: "Security / Cleaning" },
];

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0e1117] border-y border-hairline"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="text-chrome text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Who We Help
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Built for the Trades &amp; Services
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            If you run a local service business and need to look professional
            online, you&apos;re exactly who we built this for.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {businesses.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: (i % 6) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl panel-chrome transition-all hover:border-chrome/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-white/[0.04] border border-hairline flex items-center justify-center transition-colors group-hover:bg-white/[0.08]">
                <Icon className="w-6 h-6 text-chrome" />
              </div>
              <span className="text-sm text-gray-300 text-center font-medium">
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="text-center mt-8">
          <p className="text-muted text-sm">
            Don&apos;t see your industry?{" "}
            <a
              href="#contact"
              className="text-white underline decoration-chrome/40 underline-offset-4 hover:decoration-chrome"
            >
              Reach out anyway
            </a>{" "}
            — we&apos;ve built for all kinds of local businesses.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
