"use client";

import React, { useState, useEffect } from "react";
import { ArrowDownRight, Clock } from "lucide-react";

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
    <section className="relative pt-28 sm:pt-36 pb-8 sm:pb-12 min-h-[90vh] flex flex-col justify-between bg-grid-pattern transition-colors duration-200">
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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-text-primary tracking-tight leading-[0.98]">
                AI Engineer
              </h1>
              <p className="text-xl sm:text-2xl font-heading font-medium text-accent-primary tracking-tight">
                Building intelligent applications.
              </p>
            </div>

            {/* Credible, Grounded Narrative */}
            <p className="text-base text-text-secondary leading-relaxed max-w-xl">
              I work with Python, Generative AI, computer vision and backend engineering to build practical software systems.
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

            {/* Typewriter Location & Intent Note */}
            <div className="font-mono text-xs text-text-muted leading-relaxed space-y-0.5 pt-1">
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="text-accent-primary">→</span>
                <span>Based in Peshawar, Pakistan</span>
              </div>
              <div className="pl-4 text-text-muted">
                Software Engineering Undergraduate (CECOS) · AI Intern (TechCitySoft)
              </div>
            </div>

            {/* Recommended CTA: Explore selected projects */}
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-accent-primary text-white hover:bg-accent-secondary text-xs font-mono font-medium transition-colors"
              >
                <span>Explore selected projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Tariq's Authentic Portrait Photograph */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
            {/* Framed Editorial Portrait Container */}
            <div className="w-full max-w-sm sm:max-w-md rounded-lg border border-border-subtle bg-bg-secondary overflow-hidden shadow-sm">
              <img
                src="/tariq-portrait.jpg"
                alt="Tariq Khattak - AI Engineer"
                className="w-full aspect-[4/5] object-cover object-top"
              />
              <div className="px-4 py-3 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-text-muted bg-bg-secondary">
                <span className="text-text-primary font-medium">Tariq Khattak</span>
                <span>Peshawar, PK</span>
              </div>
            </div>

            {/* Fine Monospace Caption */}
            <div className="font-mono text-[11px] text-text-muted pt-2 text-left lg:text-right w-full max-w-sm sm:max-w-md">
              Design &amp; code by Tariq Khattak
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
              className="flex items-center gap-2 group cursor-pointer focus:outline-none"
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
