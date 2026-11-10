"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Check, Copy, ArrowRight, MapPin, Terminal, Cpu, FileText, ShieldCheck, AlertTriangle, Layers, Play } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);

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
                <span>View Case Studies &amp; Architecture</span>
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

          {/* Right Column: Interactive System Architecture Proof Console */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-lg rounded-xl bg-[#20282D] border border-[#354147] p-5 shadow-2xl relative overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#35B6A5] to-transparent" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#354147]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#354147]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#354147]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#35B6A5]" />
                  </div>
                  <span className="font-mono text-xs text-[#A8B5B2]">mediassist.safety_gateway</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#252F34] text-[#35B6A5] border border-[#354147]">
                  Architecture Inspection
                </span>
              </div>

              {/* Interactive Pipeline Step Selector */}
              <div className="grid grid-cols-3 gap-1.5 mb-4 p-1 rounded-lg bg-[#171C20] border border-[#354147]">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 1
                      ? "bg-[#252F34] text-[#35B6A5] font-semibold"
                      : "text-[#A8B5B2] hover:text-[#F1F5F4]"
                  }`}
                >
                  1. LLM Extract
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 2
                      ? "bg-[#252F34] text-[#35B6A5] font-semibold"
                      : "text-[#A8B5B2] hover:text-[#F1F5F4]"
                  }`}
                >
                  2. Safety Gate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 3
                      ? "bg-[#252F34] text-[#35B6A5] font-semibold"
                      : "text-[#A8B5B2] hover:text-[#F1F5F4]"
                  }`}
                >
                  3. Postgres State
                </button>
              </div>

              {/* Step Display */}
              <div className="space-y-3 font-mono text-xs">
                {activeStep === 1 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-[#171C20] border border-[#354147]">
                      <span className="text-[10px] text-[#A8B5B2] block mb-1">Incoming Unstructured OCR / Prescription:</span>
                      <p className="text-[#F1F5F4] text-xs font-mono">&ldquo;Amoxicillin 500mg capsules, take one orally three times daily with meals for 7 days.&rdquo;</p>
                    </div>
                    <div className="p-3 rounded bg-[#171C20] border border-[#354147]">
                      <div className="flex items-center justify-between text-[10px] text-[#35B6A5] mb-1">
                        <span>Local LLM Schema Parsing (Ollama):</span>
                        <span className="text-yellow-400">Stochastic Extraction</span>
                      </div>
                      <pre className="text-[11px] text-[#A8B5B2] overflow-x-auto leading-relaxed">
{`{
  "drug_candidate": "Amoxicillin",
  "dosage_mg": 500,
  "frequency_str": "TID",
  "course_days": 7
}`}
                      </pre>
                    </div>
                    <p className="text-[10px] text-[#A8B5B2] leading-relaxed">
                      * Principle: LLMs extract candidate parameters from unstructured text, but are never trusted to calculate dosage schedules directly.
                    </p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-[#171C20] border border-[#354147]">
                      <div className="flex items-center justify-between text-[10px] text-[#35B6A5] mb-2">
                        <span className="flex items-center gap-1 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#35B6A5]" /> Deterministic Safety Filter (Zero LLM)
                        </span>
                        <span className="text-[#35B6A5] bg-[#35B6A5]/10 px-1.5 py-0.5 rounded text-[9px]">100% Algorithmic</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-[#A8B5B2]">
                          <span>Dose Bound Check: 500mg &le; 1000mg limit</span>
                          <span className="text-[#35B6A5] font-semibold">PASS [0ms]</span>
                        </div>
                        <div className="flex items-center justify-between text-[#A8B5B2]">
                          <span>Contraindication Matrix (142 checks)</span>
                          <span className="text-[#35B6A5] font-semibold">0 CONFLICTS</span>
                        </div>
                        <div className="flex items-center justify-between text-[#A8B5B2]">
                          <span>Timestamp Math (TID &rarr; 8h delta)</span>
                          <span className="text-[#35B6A5] font-semibold">CALCULATED</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-[#35B6A5]/10 border border-[#35B6A5]/30 text-[11px] text-[#35B6A5] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5" /> Clinical Safety Gate Cleared
                      </span>
                      <span className="text-[10px] text-[#F1F5F4]">Zero Hallucination Risk</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-[#171C20] border border-[#354147]">
                      <span className="text-[10px] text-[#35B6A5] block mb-1">PostgreSQL Relational Persistence:</span>
                      <pre className="text-[11px] text-[#A8B5B2] overflow-x-auto leading-relaxed">
{`INSERT INTO patient_schedules (
  patient_id, medication, interval_hrs,
  timestamps, confirmed_by_gate
) VALUES (
  'p-804', 'Amoxicillin 500mg', 8,
  ARRAY['08:00', '16:00', '00:00'], TRUE
);`}
                      </pre>
                    </div>
                    <p className="text-[10px] text-[#A8B5B2] leading-relaxed">
                      * Relational state guarantees reproducible cron triggers and adherence logs without dependent AI token generation.
                    </p>
                  </div>
                )}
              </div>

              {/* Verified Identity Footnote */}
              <div className="mt-4 pt-3 border-t border-[#354147] flex items-center justify-between text-[11px] font-mono text-[#A8B5B2]">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#35B6A5]" />
                  <span>TechCitySoft AI Intern · CECOS 2027</span>
                </span>
                <span className="text-[#35B6A5]">Peshawar, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
