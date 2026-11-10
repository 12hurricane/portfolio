"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDownRight, Clock, MapPin } from "lucide-react";

export default function Hero() {
  const [theme, setTheme] = useState<"editorial" | "dark">("editorial");
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    // Sync initial theme
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "dark" : "editorial");

    const handleThemeChange = () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "dark" : "editorial");
    };

    window.addEventListener("themeChanged", handleThemeChange);

    // Live Peshawar PKT Clock (Asia/Karachi)
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        setTimeStr(formatter.format(new Date()).toUpperCase() + " PKT");
      } catch {
        const now = new Date();
        setTimeStr(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " PKT");
      }
    };

    updateClock();
    const timer = setInterval(updateClock, 10000);

    return () => {
      window.removeEventListener("themeChanged", handleThemeChange);
      clearInterval(timer);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "editorial" ? "dark" : "editorial";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "editorial");
    }
    window.dispatchEvent(new Event("themeChanged"));
  };

  const genuineSkills = [
    "PYTHON",
    "GENERATIVE AI",
    "COMPUTER VISION",
    "FASTAPI",
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 min-h-[92vh] flex flex-col justify-between bg-grid-pattern transition-colors duration-200">
      {/* Background Subtle Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary/50 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex-grow flex flex-col justify-between">
        {/* Main Two-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-6 sm:py-8">
          {/* Left Column: Recommended Credible Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Header Stamp */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-accent-primary font-bold tracking-widest uppercase">
                TARIQ KHATTAK / PORTFOLIO 2026
              </span>
              <span className="text-border-subtle">/</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-surface border border-accent-primary/20 text-accent-primary text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                <span>Open to opportunities</span>
              </span>
            </div>

            {/* Main Headline & Subtitle */}
            <div className="space-y-2 select-none">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black text-text-primary tracking-tighter uppercase leading-[0.9]">
                AI ENGINEER
              </h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-accent-primary tracking-tight">
                Building intelligent applications.
              </p>
            </div>

            {/* Credible, Grounded Narrative */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal">
              I work with Python, Generative AI, computer vision and backend engineering to build practical software systems.
            </p>

            {/* Genuine Skills Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {genuineSkills.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase bg-bg-secondary border border-border-subtle text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Typewriter Location & Intent Note */}
            <div className="font-mono text-xs text-text-muted leading-relaxed uppercase space-y-1 pt-2">
              <div className="flex items-center gap-2 text-text-secondary font-medium">
                <span className="text-accent-primary font-bold">→</span>
                <span>BASED IN PESHAWAR, PAKISTAN</span>
              </div>
              <div className="pl-4 text-text-muted">
                SOFTWARE ENGINEERING UNDERGRADUATE (CECOS) &amp; AI INTERN (TECHCITYSOFT)
              </div>
            </div>

            {/* Recommended CTA: Explore selected projects */}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary border border-border-subtle hover:border-accent-primary text-xs font-mono font-semibold tracking-wider uppercase text-text-primary hover:text-accent-primary transition-all shadow-sm group"
              >
                <span>Explore selected projects</span>
                <ArrowDownRight className="w-4 h-4 text-accent-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Tariq's Authentic Portrait Photograph */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            {/* Framed Editorial Portrait Container */}
            <div className="w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-lg border border-border-subtle bg-bg-secondary overflow-hidden relative shadow-lg group">
              {/* Tariq's Real Photo */}
              <img
                src="/tariq-portrait.jpg"
                alt="Tariq Khattak - AI Engineer"
                className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Editorial Frame Watermark Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-4 sm:p-5 flex items-end justify-between text-white font-mono text-xs">
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-sm tracking-wide text-white">
                    TARIQ KHATTAK
                  </span>
                  <span className="text-white/80 text-[11px] uppercase tracking-wider">
                    AI Engineer Intern
                  </span>
                </div>
                <div className="text-right text-[11px] text-white/70 uppercase tracking-widest">
                  PESHAWAR, PK
                </div>
              </div>
            </div>

            {/* Fine Monospace Caption */}
            <div className="font-mono text-[11px] text-text-muted tracking-widest uppercase pt-3 text-left lg:text-right w-full max-w-sm sm:max-w-md">
              DESIGN &amp; CODE BY TARIQ KHATTAK
            </div>
          </div>
        </div>

        {/* Bottom Hero Ticker & Status Row */}
        <div className="pt-6 sm:pt-8 border-t border-border-subtle flex items-center justify-between w-full">
          {/* Left: Theme Switcher */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              aria-label="Toggle visual theme"
            >
              <div
                className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                  theme === "dark" ? "bg-accent-primary" : "bg-border-subtle"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    theme === "dark" ? "translate-x-4" : "translate-x-0"
                  } shadow-sm`}
                />
              </div>
              <span className="font-mono text-xs tracking-wider uppercase text-text-muted group-hover:text-text-primary transition-colors">
                {theme === "editorial" ? "LIGHT" : "DARK"}
              </span>
            </button>
          </div>

          {/* Right: Live Peshawar PKT Clock */}
          <div className="font-mono text-xs text-text-muted tracking-widest uppercase flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent-primary" />
            <span>{timeStr || "PKT (UTC+5)"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
