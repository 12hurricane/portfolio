"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"editorial" | "dark">("editorial");

  useEffect(() => {
    // Check saved theme or default to editorial
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("editorial");
      document.documentElement.removeAttribute("data-theme");
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "editorial") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("editorial");
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "editorial");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Case Studies", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow,border-color] duration-200 ${
        isScrolled
          ? "bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Tariq Khattak Home"
          >
            <div className="w-9 h-9 rounded-md bg-bg-secondary border border-border-subtle flex items-center justify-center text-accent-primary font-heading font-bold text-sm group-hover:border-accent-primary transition-colors shadow-sm">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-wide text-text-primary">
                Tariq Khattak
              </span>
              <span className="text-[11px] font-mono text-accent-primary leading-tight">
                AI Engineer Intern
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm text-text-secondary hover:text-accent-primary font-medium transition-colors rounded-md hover:bg-bg-secondary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle + Resume + Connect */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle Pill */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle visual theme between Warm Editorial and Console Dark"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-text-secondary hover:text-text-primary bg-bg-secondary border border-border-subtle hover:border-accent-primary transition-colors shadow-sm"
              title={theme === "editorial" ? "Switch to Dark Console" : "Switch to Warm Editorial"}
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

            <a
              href="/resume-tariq-khattak.pdf"
              download="Tariq_Khattak_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-text-secondary hover:text-accent-primary border border-border-subtle hover:border-accent-primary transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-accent-primary text-white hover:bg-accent-secondary transition-colors shadow-sm"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-md text-text-secondary hover:text-text-primary bg-bg-secondary border border-border-subtle"
              aria-label="Toggle theme"
            >
              {theme === "editorial" ? <Sun className="w-4 h-4 text-accent-primary" /> : <Moon className="w-4 h-4 text-accent-primary" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary focus:outline-none focus:ring-2 focus:ring-accent-primary"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-primary border-b border-border-subtle px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-text-secondary hover:text-accent-primary hover:bg-bg-secondary rounded-md font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-border-subtle flex flex-col gap-2">
            <a
              href="/resume-tariq-khattak.pdf"
              download="Tariq_Khattak_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-4 rounded-md text-sm font-mono text-text-secondary hover:text-accent-primary border border-border-subtle flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-4 rounded-md text-sm font-semibold bg-accent-primary text-white hover:bg-accent-secondary"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
