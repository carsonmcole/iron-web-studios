"use client";

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
    <section id="who-we-help" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Who We Help
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Built for the Trades &amp; Services
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            If you run a local service business and need to look professional
            online, you&apos;re exactly who we built this for.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {businesses.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white/3 border border-white/5 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-sm text-gray-300 text-center font-medium">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Don&apos;t see your industry?{" "}
          <a href="#contact" className="text-orange-400 hover:text-orange-300 underline">
            Reach out anyway
          </a>{" "}
          — we&apos;ve built for all kinds of local businesses.
        </p>
      </div>
    </section>
  );
}
