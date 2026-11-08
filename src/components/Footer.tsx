"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#171C20] border-t border-[#354147] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-bold text-base text-[#F1F5F4]">
                {personalInfo.fullName}
              </span>
              <span className="text-xs font-mono text-[#35B6A5]">/ Portfolio</span>
            </div>
            <p className="text-xs font-mono text-[#A8B5B2] mt-1">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] flex items-center gap-1.5 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-[#354147]">|</span>

            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] flex items-center gap-1.5 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-[#354147]">|</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] flex items-center gap-1.5 transition-colors"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] bg-[#20282D] border border-[#354147] hover:border-[#35B6A5] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#35B6A5]" />
          </button>
        </div>

        {/* Bottom Credits & Year */}
        <div className="mt-8 pt-6 border-t border-[#354147]/50 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#A8B5B2] gap-2">
          <p>© {currentYear} {personalInfo.fullName}. Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
          <p className="text-[#35B6A5]">
            Engineering Clarity · Verified Work · Zero Inflated Claims
          </p>
        </div>
      </div>
    </footer>
  );
}
