"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Check, Copy, ArrowRight, MapPin, Terminal, Cpu, FileText } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-dot-pattern">
      {/* Subtle radial background gradient - charcoal centered */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#171C20]/50 via-[#171C20] to-[#171C20] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status / Role Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#20282D] border border-[#354147] text-xs font-mono text-[#35B6A5]">
              <span className="w-2 h-2 rounded-full bg-[#35B6A5] animate-pulse" />
              <span>AI Engineer Intern · B.S. Software Engineering (2027)</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#F1F5F4] tracking-tight leading-[1.1]">
                {personalInfo.fullName}
              </h1>
              <p className="mt-2 text-base sm:text-lg font-mono font-medium text-[#35B6A5]">
                {personalInfo.title}
              </p>
            </div>

            {/* Headline */}
            <p className="text-xl sm:text-2xl text-[#F1F5F4] font-heading font-semibold leading-snug border-l-2 border-[#35B6A5] pl-4">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-[#A8B5B2] leading-relaxed max-w-2xl">
              {personalInfo.supportingDescription}
            </p>

            {/* Location & Focus Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#A8B5B2]">
              <MapPin className="w-3.5 h-3.5 text-[#35B6A5]" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[#35B6A5] text-[#171C20] hover:bg-[#75C9BB] transition-colors shadow-sm"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-[#20282D] text-[#F1F5F4] border border-[#354147] hover:border-[#35B6A5] hover:text-[#35B6A5] transition-colors"
              >
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href="/resume-tariq-khattak.pdf"
                download="Tariq_Khattak_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-mono text-[#A8B5B2] hover:text-[#35B6A5] border border-[#354147] hover:border-[#35B6A5] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#354147]/60 w-full">
              <span className="text-xs font-mono text-[#A8B5B2] mr-1">Connect:</span>
              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#20282D] border border-[#354147] text-[#A8B5B2] hover:text-[#35B6A5] hover:border-[#35B6A5] transition-colors"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-[#20282D] border border-[#354147] text-[#A8B5B2] hover:text-[#35B6A5] hover:border-[#35B6A5] transition-colors"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <div className="relative flex items-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-md bg-[#20282D] border border-[#354147] text-[#A8B5B2] hover:text-[#35B6A5] hover:border-[#35B6A5] transition-colors"
                  aria-label="Send direct email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-2 text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] inline-flex items-center gap-1 px-2 py-1 rounded bg-[#20282D] border border-[#354147]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-[#35B6A5]" />
                      <span className="text-[#35B6A5]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{personalInfo.email}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile / System Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-xl bg-[#252F34] border border-[#354147] p-6 shadow-xl relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#35B6A5] to-transparent" />

              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#354147]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#354147]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#354147]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#35B6A5]/50" />
                  <span className="ml-2 text-xs font-mono text-[#A8B5B2]">engineer.profile</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20282D] text-[#35B6A5] border border-[#354147]">
                  v2026.1
                </span>
              </div>

              {/* Profile Avatar Placeholder with Engineering Motif */}
              <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#20282D] border border-[#354147] text-center my-2">
                <div className="relative w-24 h-24 rounded-full bg-[#171C20] border-2 border-[#354147] flex items-center justify-center group mb-4">
                  <Cpu className="w-10 h-10 text-[#35B6A5] opacity-80" />
                  <div className="absolute inset-0 rounded-full border border-[#35B6A5]/30 animate-pulse" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#F1F5F4]">
                  Tariq Khattak
                </h3>
                <p className="text-xs font-mono text-[#35B6A5] mt-0.5">
                  Aspiring AI Engineer
                </p>
                <p className="text-[11px] text-[#A8B5B2] mt-2 max-w-xs">
                  Generative AI &bull; LLMs &amp; RAG &bull; System Architecture
                </p>
              </div>

              {/* Verified Identity Metrics - Realistic & Grounded */}
              <div className="mt-4 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded bg-[#20282D]/70 border border-[#354147]/50">
                  <span className="text-[#A8B5B2]">Current Role</span>
                  <span className="text-[#F1F5F4] font-medium">AI Engineer Intern</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#20282D]/70 border border-[#354147]/50">
                  <span className="text-[#A8B5B2]">Organization</span>
                  <span className="text-[#F1F5F4] font-medium">TechCitySoft</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#20282D]/70 border border-[#354147]/50">
                  <span className="text-[#A8B5B2]">Education</span>
                  <span className="text-[#F1F5F4] font-medium">B.S. Software Eng (2027)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#20282D]/70 border border-[#354147]/50">
                  <span className="text-[#A8B5B2]">Institution</span>
                  <span className="text-[#35B6A5] font-medium">CECOS University, Peshawar</span>
                </div>
              </div>

              {/* Engineering Focus Micro-tags */}
              <div className="mt-4 pt-3 border-t border-[#354147] flex flex-wrap gap-1.5">
                <span className="tech-chip text-[10px]">Python</span>
                <span className="tech-chip text-[10px]">LLMs & RAG</span>
                <span className="tech-chip text-[10px]">FastAPI</span>
                <span className="tech-chip text-[10px]">Flutter</span>
                <span className="tech-chip text-[10px]">Deterministic Safety</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
