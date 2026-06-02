"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const bullets = [
  "Mobile-first, fast-loading websites",
  "Fast delivery without sacrificing quality",
  "Built for local search (SEO)",
  "Email/SMS automation & AI chatbot options",
];

const fade = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0d10]">
      {/* Moving grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      {/* Drifting steel spotlight */}
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-[radial-gradient(circle,rgba(192,198,208,0.10),transparent_60%)] animate-drift" />
      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0b0d10] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div>
            <motion.div
              {...fade(0)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full panel-chrome text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#34d399] opacity-70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#34d399]" />
              </span>
              <span className="text-muted">
                <span className="text-[#6ee7b7] font-semibold">
                  Now accepting new clients
                </span>{" "}
                — let&apos;s chat!
              </span>
            </motion.div>

            <motion.h1
              {...fade(0.1)}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            >
              Your Business.
              <br />
              <span className="chrome-shimmer">Your Website.</span>
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              className="text-lg sm:text-xl text-muted max-w-2xl mb-8 leading-relaxed"
            >
              We build fast, good-looking websites for local businesses —
              barbers, plumbers, landscapers, HVAC, and more. Friendly service,
              fair prices, and we&apos;re easy to reach.
            </motion.p>

            <motion.ul
              {...fade(0.3)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10"
            >
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-chrome flex-shrink-0" />
                  {b}
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fade(0.4)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-b from-[#f2f4f8] to-[#c0c6d0] text-[#0b0d10] font-bold text-lg transition-all hover:shadow-[0_0_36px_rgba(192,198,208,0.35)] hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl panel-chrome text-white font-semibold text-lg transition-all hover:border-chrome/40 hover:bg-white/[0.06]"
              >
                View Packages
              </a>
            </motion.div>
          </div>

          {/* Logo showcase */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative animate-float">
              {/* Conic shimmer ring */}
              <div className="absolute inset-0 -m-10 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(192,198,208,0.25),transparent_30%)] animate-spin-slow blur-md" />
              {/* Soft glow */}
              <div className="absolute inset-0 -m-6 rounded-full bg-[radial-gradient(circle,rgba(192,198,208,0.18),transparent_65%)]" />
              <Image
                src="/logo-mark.png"
                alt="Iron Web Studios"
                width={360}
                height={360}
                priority
                className="relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
