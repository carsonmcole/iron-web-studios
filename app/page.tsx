"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Nav />
      <Hero />
      <WhoWeHelp />
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
