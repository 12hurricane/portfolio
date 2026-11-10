import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceEducation from "@/components/ExperienceEducation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary flex flex-col selection:bg-accent-primary selection:text-white transition-colors duration-200">
      <Navbar />
      <Hero />
      <About />
      <ExperienceEducation />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
