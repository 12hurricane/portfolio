"use client";

import React, { useState, useEffect } from "react";
import { ArrowDownRight, Clock, FileText } from "lucide-react";

export default function Hero() {
  const [theme, setTheme] = useState<"editorial" | "dark">("editorial");
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    setTheme(isDark ? "dark" : "editorial");

    const handleThemeChange = () => {
      const dark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(dark ? "dark" : "editorial");
    };

    window.addEventListener("themeChanged", handleThemeChange);

    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Karachi",
          weekday: "short",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        setTimeStr(formatter.format(new Date()) + " PKT");
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
    "Python",
    "Generative AI",
    "Computer Vision",
    "FastAPI",
  ];

  return (
    <section data-enter className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 min-h-[100svh] flex flex-col justify-between bg-grid-pattern transition-colors duration-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-between">
        {/* Main Two-Column Editorial Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-6 sm:py-8">
          {/* Left Column: Grounded Credible Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Header Stamp */}
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs text-text-muted">
                Tariq Khattak / Portfolio 2026
              </span>
              <span className="text-border-subtle">·</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-accent-surface text-accent-primary text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                <span>Open to opportunities</span>
              </span>
            </div>

            {/* Main Headline & Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-[1.05]">
                AI Engineer Intern
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-medium text-accent-primary tracking-tight">
                Building practical AI applications with Python.
              </p>
            </div>

            {/* Credible, Grounded Narrative */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
              Software Engineering undergraduate at CECOS University, focused on Generative AI, computer vision, LLM applications and backend engineering.
            </p>

            {/* Genuine Skills Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {genuineSkills.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-bg-secondary border border-border-subtle text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location & Institution Note */}
            <div className="font-mono text-xs text-text-muted leading-relaxed space-y-1 pt-1">
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-accent-primary">→</span>
                <span>Based in Peshawar, Pakistan</span>
              </div>
              <p className="text-text-muted">
                Software Engineering Undergraduate (CECOS) · AI Intern (TechCitySoft)
              </p>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-md bg-accent-primary text-accent-contrast hover:bg-accent-secondary active:scale-[0.98] text-xs font-mono font-medium transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="/resume-tariq-khattak.pdf"
                download="Tariq_Khattak_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-md bg-bg-secondary border border-border-subtle text-text-primary hover:border-accent-primary hover:text-accent-primary active:scale-[0.98] text-xs font-mono font-medium transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-accent-primary" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Tariq's Authentic Portrait Photograph */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            {/* Framed Editorial Portrait Container */}
            <div className="w-full max-w-sm sm:max-w-md rounded-lg border border-border-subtle bg-bg-secondary overflow-hidden shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
              <img
                src="/tariq-portrait.jpg"
                alt="Tariq Khattak - AI Engineer Intern"
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Bottom Hero Ticker & Status Row */}
        <div className="pt-6 sm:pt-8 border-t border-border-subtle flex items-center justify-between w-full">
          {/* Left: Theme Switcher */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 group cursor-pointer focus:outline-none min-h-[44px] py-1"
              aria-label="Toggle visual theme"
            >
              <div
                className={`w-8 h-4 rounded-full p-0.5 transition-colors ${
                  theme === "dark" ? "bg-accent-primary" : "bg-border-subtle"
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full bg-white transition-transform ${
                    theme === "dark" ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors">
                {theme === "editorial" ? "Light" : "Dark"}
              </span>
            </button>
          </div>

          {/* Right: Live Peshawar PKT Clock */}
          <div className="font-mono text-xs text-text-muted flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-accent-primary" />
            <span>{timeStr || "PKT (UTC+5)"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
