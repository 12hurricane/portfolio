"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
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
          ? "bg-[#171C20]/90 backdrop-blur-md border-b border-[#354147] py-3 shadow-lg"
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
            <div className="w-9 h-9 rounded-md bg-[#20282D] border border-[#354147] flex items-center justify-center text-[#35B6A5] font-heading font-bold text-sm group-hover:border-[#35B6A5] transition-colors">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-wide text-[#F1F5F4]">
                Tariq Khattak
              </span>
              <span className="text-[11px] font-mono text-[#35B6A5] leading-tight">
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
                className="px-3 py-1.5 text-xs lg:text-sm text-[#A8B5B2] hover:text-[#35B6A5] font-medium transition-colors rounded-md hover:bg-[#20282D]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume + Connect */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/resume-tariq-khattak.pdf"
              download="Tariq_Khattak_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium text-[#A8B5B2] hover:text-[#35B6A5] border border-[#354147] hover:border-[#35B6A5] transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-[#35B6A5] text-[#171C20] hover:bg-[#75C9BB] transition-colors shadow-sm"
            >
              Let&apos;s Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#A8B5B2] hover:text-[#F1F5F4] hover:bg-[#20282D] focus:outline-none focus:ring-2 focus:ring-[#35B6A5]"
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
        <div className="md:hidden bg-[#171C20] border-b border-[#354147] px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-[#A8B5B2] hover:text-[#35B6A5] hover:bg-[#20282D] rounded-md font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#354147] flex flex-col gap-2">
            <a
              href="/resume-tariq-khattak.pdf"
              download="Tariq_Khattak_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-4 rounded-md text-sm font-mono text-[#A8B5B2] hover:text-[#35B6A5] border border-[#354147] flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-4 rounded-md text-sm font-semibold bg-[#35B6A5] text-[#171C20] hover:bg-[#75C9BB]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
