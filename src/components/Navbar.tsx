"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import {
  Menu,
  X,
  FileText,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<"editorial" | "dark">("dark");

  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "editorial") {
      setTheme("editorial");
      document.documentElement.removeAttribute("data-theme");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
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

  // Keyboard accessibility, focus management, trap, and restoration for drawer
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          e.preventDefault();
          closeDrawer();
          return;
        }

        if (e.key === "Tab" && drawerRef.current) {
          const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;

          const firstElement = focusable[0];
          const lastElement = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
        clearTimeout(timer);
        triggerRef.current?.focus();
      };
    }
  }, [drawerOpen, closeDrawer]);

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
    { number: "01", name: "Projects", href: "#projects" },
    { number: "02", name: "Experience & Education", href: "#experience" },
    { number: "03", name: "Skills", href: "#skills" },
    { number: "04", name: "About", href: "#about" },
    { number: "05", name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Brand Wordmark */}
            <Link
              href="#"
              className="font-heading font-bold text-lg tracking-tight text-text-primary hover:text-accent-primary transition-colors focus:outline-none min-h-[44px] inline-flex items-center"
              aria-label="Tariq Khattak Portfolio"
            >
              Tariq Khattak
            </Link>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs font-mono" aria-label="Main Navigation">
              {navItems.map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-primary transition-colors py-2.5 min-h-[44px] min-w-[44px] justify-center px-1.5 inline-flex items-center focus-visible:outline-accent-primary"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right Action Bar */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Availability Status */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-bg-secondary border border-border-subtle text-xs font-mono text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Open to opportunities</span>
              </div>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2.5 min-h-[44px] min-w-[44px] rounded-md text-text-secondary hover:text-text-primary bg-bg-secondary border border-border-subtle hover:border-accent-primary active:scale-[0.98] transition-all flex items-center justify-center focus:outline-none"
                aria-label={theme === "editorial" ? "Switch to dark charcoal theme" : "Switch to warm editorial theme"}
                title={theme === "editorial" ? "Switch to Dark Charcoal" : "Switch to Warm Editorial"}
              >
                {theme === "editorial" ? (
                  <Moon className="w-4 h-4 text-accent-primary" />
                ) : (
                  <Sun className="w-4 h-4 text-accent-primary" />
                )}
              </button>

              {/* Download CV Link */}
              <a
                href="/resume-tariq-khattak.pdf"
                download="Tariq_Khattak_Resume.pdf"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-md bg-accent-surface text-accent-primary border border-accent-primary/20 hover:bg-accent-primary hover:text-accent-contrast text-xs font-mono font-medium transition-all"
                title="Download Tariq Khattak CV (PDF)"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CV</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-md bg-bg-secondary border border-border-subtle hover:border-accent-primary text-xs font-mono text-text-primary hover:text-accent-primary active:scale-[0.98] transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">GitHub</span>
              </a>

              {/* Minimalist Hamburger Button */}
              <button
                ref={triggerRef}
                type="button"
                onClick={openDrawer}
                className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] rounded-md text-text-primary hover:text-accent-primary bg-bg-secondary border border-border-subtle hover:border-accent-primary active:scale-[0.98] transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                aria-label="Open Navigation Drawer"
                aria-expanded={drawerOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Accessible Slide-out Navigation Drawer Dialog */}
      {drawerOpen && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-0 z-50 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-nav-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-text-primary/20 backdrop-blur-sm transition-opacity"
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            ref={drawerRef}
            tabIndex={-1}
            className="relative w-full max-w-md bg-bg-secondary h-full border-l border-border-subtle p-6 sm:p-8 flex flex-col justify-between shadow-xl z-10 overflow-y-auto focus:outline-none"
          >
            {/* Top Bar of Drawer */}
            <div>
              <div className="flex items-center justify-between border-b border-border-subtle pb-6 mb-8">
                <div className="flex flex-col">
                  <span id="mobile-nav-title" className="font-heading font-bold text-lg text-text-primary">
                    Tariq Khattak
                  </span>
                  <span className="font-mono text-xs text-text-muted">
                    AI Engineer Intern · Applied AI
                  </span>
                </div>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeDrawer}
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-md border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label="Close navigation drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Numbered Nav Links */}
              <nav className="space-y-4" aria-label="Mobile Navigation Links">
                {navItems.map((item) => (
                  <a
                    key={item.number}
                    href={item.href}
                    onClick={closeDrawer}
                    className="flex items-center justify-between group py-3 min-h-[44px] border-b border-border-subtle/50 hover:border-accent-primary transition-colors focus-visible:outline-accent-primary"
                  >
                    <span className="text-lg font-heading font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs text-text-muted group-hover:text-accent-primary transition-colors">
                      {item.number}
                    </span>
                  </a>
                ))}
              </nav>

              {/* Quick Resume Link */}
              <div className="pt-8">
                <a
                  href="/resume-tariq-khattak.pdf"
                  download="Tariq_Khattak_Resume.pdf"
                  onClick={closeDrawer}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[44px] rounded-md text-xs font-mono font-medium bg-accent-surface text-accent-primary border border-accent-primary/20 hover:bg-accent-primary hover:text-accent-contrast transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="pt-8 border-t border-border-subtle space-y-6">
              {/* Theme Toggle in Drawer */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-secondary">
                  Color mode
                </span>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] rounded-md text-xs font-mono bg-bg-primary border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label={`Toggle theme, current is ${theme}`}
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
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 min-h-[44px] min-w-[44px] rounded-md border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors flex items-center justify-center focus-visible:ring-2 focus-visible:ring-accent-primary"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Location Tag */}
              <div className="font-mono text-xs text-text-muted">
                Peshawar, Pakistan · UTC+5
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
