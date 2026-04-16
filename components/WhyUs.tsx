"use client";

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
    desc: "Most sites go live in 7–14 days. No waiting months for an agency to \"get to you.\"",
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
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            Why Iron Web Studios
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            The Difference is in the Details
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We&apos;re not a big agency and we&apos;re not a template mill. We
            build real websites for real local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-orange-500/20 hover:bg-orange-500/3 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
