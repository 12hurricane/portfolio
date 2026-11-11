"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-bg-primary border-t border-border-subtle py-12 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-bold text-base text-text-primary">
                {personalInfo.fullName}
              </span>
              <span className="text-xs font-mono text-accent-primary font-semibold">/ Systems Portfolio</span>
            </div>
            <p className="text-xs font-mono text-text-muted mt-1">
              {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-secondary hover:text-accent-primary flex items-center gap-1.5 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-border-subtle">|</span>

            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-secondary hover:text-accent-primary flex items-center gap-1.5 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-border-subtle">|</span>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono text-text-secondary hover:text-accent-primary flex items-center gap-1.5 transition-colors"
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-text-secondary hover:text-accent-primary bg-bg-secondary border border-border-subtle hover:border-accent-primary transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-primary" />
          </button>
        </div>

        {/* Bottom Credits & Year */}
        <div className="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-2">
          <p>© {currentYear} {personalInfo.fullName}. Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
          <p className="text-text-muted">
            Peshawar, Pakistan · UTC+5
          </p>
        </div>
      </div>
    </footer>
  );
}
