"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import {
  Menu,
  X,
  ArrowUpRight,
  FileText,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<"editorial" | "dark">("editorial");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("editorial");
      document.documentElement.removeAttribute("data-theme");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleThemeChange = () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      setTheme(isDark ? "dark" : "editorial");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "editorial" ? "dark" : "editorial";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "editorial");
    }
    window.dispatchEvent(new Event("themeChanged"));
  };

  const navItems = [
    { number: "01", name: "ABOUT", href: "#about" },
    { number: "02", name: "EXPERIENCE", href: "#experience" },
    { number: "03", name: "CASE STUDIES", href: "#projects" },
    { number: "04", name: "CAPABILITIES", href: "#skills" },
    { number: "05", name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-3.5 shadow-sm"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Left Brand - Roman Caseres Minimalist Monogram/Wordmark */}
            <Link
              href="#"
              className="font-heading font-black text-lg sm:text-xl tracking-tight text-text-primary hover:text-accent-primary transition-colors focus:outline-none"
              aria-label="Tariq Khattak Portfolio"
            >
              TariqKhattak
            </Link>

            {/* Right Action Bar */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Active Users / Status Pill */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-border-subtle text-xs font-mono text-text-secondary shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="tracking-wide">2 systems live</span>
              </div>

              {/* Messages / Contact Pill */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-bg-secondary border border-border-subtle hover:border-accent-primary text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-accent-primary" />
                <span className="tracking-wide">MESSAGES</span>
              </a>

              {/* GitHub Pill */}
              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-bg-secondary border border-border-subtle hover:border-accent-primary text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors shadow-sm"
                aria-label="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="tracking-wide">GITHUB ↗</span>
              </a>

              {/* Minimalist Hamburger Button */}
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                className="p-2 sm:px-2.5 rounded-full text-text-primary hover:text-accent-primary bg-bg-secondary border border-border-subtle hover:border-accent-primary transition-colors shadow-sm focus:outline-none"
                aria-label="Open Navigation Drawer"
                aria-expanded={drawerOpen}
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Editorial Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm transition-opacity"
            onClick={() => setDrawerOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-md bg-bg-secondary h-full border-l border-border-subtle p-6 sm:p-8 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            {/* Top Bar of Drawer */}
            <div>
              <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-8">
                <div className="flex flex-col">
                  <span className="font-heading font-black text-lg tracking-tight text-text-primary">
                    TARIQ KHATTAK
                  </span>
                  <span className="font-mono text-xs text-accent-primary tracking-wider uppercase">
                    AI SYSTEMS &amp; PERCEPTION
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-full border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Numbered Nav Links */}
              <nav className="space-y-4" aria-label="Mobile Navigation">
                {navItems.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-baseline justify-between group py-2 border-b border-border-subtle/40 hover:border-accent-primary transition-colors"
                  >
                    <span className="text-xl sm:text-2xl font-heading font-bold text-text-primary group-hover:text-accent-primary tracking-tight transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-accent-primary transition-colors">
                      {item.number} ↗
                    </span>
                  </a>
                ))}
              </nav>

              {/* Quick Resume Link */}
              <div className="pt-8">
                <a
                  href="/resume-tariq-khattak.pdf"
                  download="Tariq_Khattak_Resume.pdf"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-xs font-mono font-semibold tracking-wider uppercase bg-accent-surface text-accent-primary border border-accent-primary/20 hover:bg-accent-primary hover:text-white transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Full CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-border-subtle space-y-6">
              {/* Theme Toggle in Drawer */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-secondary uppercase tracking-wider">
                  Color Mode
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-bg-primary border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors"
                >
                  {theme === "editorial" ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Warm Editorial</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-accent-primary" />
                      <span>Console Dark</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Location Tag */}
              <div className="font-mono text-[11px] text-text-muted tracking-widest uppercase">
                PESHAWAR, PAKISTAN · UTC+5
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
