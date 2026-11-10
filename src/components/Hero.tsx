"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolioData";
import { ArrowDownRight, Clock, ShieldCheck, Eye, Terminal } from "lucide-react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [theme, setTheme] = useState<"editorial" | "dark">("editorial");
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    // Sync theme
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

  const techTags = [
    "YOLOv8 & ONNX",
    "DETERMINISTIC AGENTS",
    "PYTORCH",
    "FASTAPI",
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 min-h-[94vh] flex flex-col justify-between bg-grid-pattern transition-colors duration-200">
      {/* Background Subtle Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-transparent to-bg-primary/50 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex-grow flex flex-col justify-between">
        {/* Main Two-Column Architectural Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center my-auto py-6 sm:py-8">
          {/* Left Column: Role, Tags, Visual Frame, Micro-annotations */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start space-y-6 sm:space-y-7">
            {/* Massive Bold Headline: Left Stack */}
            <div className="space-y-0 select-none">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-text-primary tracking-tighter uppercase leading-[0.88]">
                AI SYSTEMS
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-text-primary tracking-tighter uppercase leading-[0.88]">
                ENGINEER
              </h1>
            </div>

            {/* Architectural Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-bg-secondary border border-border-subtle text-text-secondary hover:border-accent-primary hover:text-accent-primary transition-colors shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Visual Anchor Container (Landscape Frame) */}
            <div className="w-full max-w-lg aspect-[16/10] sm:aspect-[16/9] rounded-sm border border-border-subtle bg-bg-secondary overflow-hidden relative shadow-sm group">
              {!imageError ? (
                /* Real Photograph (drops into public/tariq-portrait.jpg) */
                <img
                  src="/tariq-portrait.jpg"
                  alt="Tariq Khattak"
                  className="w-full h-full object-cover filter contrast-[1.04]"
                  onError={() => setImageError(true)}
                />
              ) : null}

              {/* High-Craft Engineering Vision Sensor Fallback */}
              {imageError && (
                <div className="w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-bg-secondary relative select-none">
                  {/* Internal Graph Blueprint */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

                  {/* Header HUD Bar */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted border-b border-border-subtle pb-2.5">
                    <span className="flex items-center gap-1.5 text-accent-primary font-semibold tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-ping" />
                      SAFESIGHT-AI · CAM_01
                    </span>
                    <span className="tracking-widest">640x480 @ 30 FPS</span>
                  </div>

                  {/* Central Reticle Perception Telemetry */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
                    <div className="relative w-56 sm:w-64 h-24 border border-dashed border-accent-primary/70 rounded-sm bg-accent-surface/30 flex flex-col justify-between p-2.5 shadow-sm">
                      <div className="flex items-center justify-between text-[9px] font-mono text-accent-primary font-bold">
                        <span>[STAIRWAY_HAZARD]</span>
                        <span>CONF: 94.2%</span>
                      </div>
                      <div className="flex items-center justify-between text-[9px] font-mono text-text-muted">
                        <span>DIST: 1.8M (NEAR)</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">VECTOR: RIGHT</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Sensor Status */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-text-muted border-t border-border-subtle pt-2.5">
                    <span className="uppercase tracking-wider">YOLOv8n ONNX · EDGE</span>
                    <span className="text-accent-primary font-semibold tracking-widest">LATENCY: 48MS</span>
                  </div>
                </div>
              )}
            </div>

            {/* Typewriter Location & Intent Note */}
            <div className="font-mono text-xs text-text-muted leading-relaxed uppercase space-y-0.5">
              <div className="flex items-center gap-2 text-text-secondary font-medium">
                <span className="text-accent-primary font-bold">→</span>
                <span>BASED IN PESHAWAR, PAKISTAN</span>
              </div>
              <div className="pl-4 text-text-muted">
                PASSIONATE IN EMBEDDED EDGE VISION &amp; RELIABLE AI
              </div>
            </div>

            {/* Bottom Left Attribution */}
            <div className="font-mono text-[11px] text-text-muted tracking-widest uppercase pt-1">
              DESIGN &amp; CODE BY TARIQ KHATTAK
            </div>
          </div>

          {/* Right Column: Open For Work Badge, Monospace Mission, Giant Name, CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start lg:items-end justify-between space-y-8 lg:space-y-12">
            {/* Status / Availability Badge */}
            <div className="flex flex-col items-start lg:items-end space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-surface border border-accent-primary/20 text-accent-primary text-xs font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
                <span className="tracking-wider uppercase">OPEN FOR WORK</span>
              </div>
              <div className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                01 / FROM PAKISTAN WITH AMBITION
              </div>
            </div>

            {/* Architectural Mission Statement (Monospace Right-Aligned) */}
            <div className="font-mono text-xs text-text-secondary uppercase tracking-wider leading-relaxed text-left lg:text-right max-w-md space-y-1">
              <p>BUILDING LOW-LATENCY EMBEDDED VISION (YOLOv8/CPP)</p>
              <p>AND DETERMINISTIC SAFETY GATEWAYS FOR CLINICAL LLMS.</p>
              <p className="text-text-muted">OPEN FOR FULL-TIME / RESEARCH ROLES</p>
              <p className="text-text-primary font-semibold">BASED IN PESHAWAR, PK</p>
            </div>

            {/* Giant Display Name: Right Stack */}
            <div className="flex flex-col items-start lg:items-end space-y-0 select-none text-left lg:text-right">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-text-primary tracking-tighter uppercase leading-[0.88] text-left lg:text-right">
                TARIQ
              </h2>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-text-primary tracking-tighter uppercase leading-[0.88] text-left lg:text-right">
                KHATTAK
              </h2>
              <span className="pt-3 font-mono text-xs text-text-muted tracking-widest uppercase text-left lg:text-right">
                2026 PORTFOLIO
              </span>
            </div>

            {/* Selected Work Button Pill */}
            <div>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary border border-border-subtle hover:border-accent-primary text-xs font-mono font-semibold tracking-wider uppercase text-text-primary hover:text-accent-primary transition-all shadow-sm group"
              >
                <span>SELECTED WORK</span>
                <ArrowDownRight className="w-4 h-4 text-accent-primary group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
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
