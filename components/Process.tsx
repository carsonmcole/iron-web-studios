"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "Tell us about your business, your goals, and the look you want. No commitment needed — just a quick call or message.",
  },
  {
    num: "02",
    title: "We Build It",
    desc: "We design and develop your site using your branding, content, and photos. You'll see a preview before anything goes live.",
  },
  {
    num: "03",
    title: "You Review & Approve",
    desc: "We share a live preview. You give feedback, we make adjustments. Simple back-and-forth until it's perfect.",
  },
  {
    num: "04",
    title: "Launch Day",
    desc: "We handle the domain setup, hosting, and go-live. Your business is online and ready to be found.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b0f1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            From Idea to Online in 4 Steps
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            We keep the process dead simple so you can focus on running your
            business while we handle the website.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-[#0b0f1a] border-2 border-orange-500/40 flex items-center justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <span className="text-2xl font-extrabold text-orange-400">
                      {step.num}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Start with a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
