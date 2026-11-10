"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  Check,
  Copy,
  ArrowRight,
  MapPin,
  Cpu,
  FileText,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(2);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Subtle radial wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary to-bg-primary pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status / Role Stamp (Architectural annotation style) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-surface text-accent-primary border border-accent-primary/20 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span>01 / AI SYSTEMS &amp; EDGE VISION · TECHCITYSOFT &amp; CECOS</span>
            </div>

            {/* Main Name & Title (Large Bold Editorial Grotesk) */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-text-primary tracking-tight leading-[0.98]">
                AI SYSTEMS<br />ENGINEER
              </h1>
              <p className="pt-2 text-base sm:text-lg font-mono font-semibold text-accent-primary flex items-center gap-2">
                <span>{personalInfo.fullName}</span>
                <span className="text-border-subtle">/</span>
                <span className="text-xs font-normal text-text-muted">B.S. Software Engineering (2027)</span>
              </p>
            </div>

            {/* Headline Quote */}
            <p className="text-xl sm:text-2xl text-text-primary font-heading font-semibold leading-snug border-l-2 border-accent-primary pl-4">
              &ldquo;{personalInfo.headline}&rdquo;
            </p>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
              {personalInfo.supportingDescription}
            </p>

            {/* Location & Focus Badge */}
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
              <MapPin className="w-3.5 h-3.5 text-accent-primary" />
              <span>{personalInfo.location}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-accent-primary text-white hover:bg-accent-secondary transition-colors shadow-sm"
              >
                <span>View Case Studies &amp; Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-bg-secondary text-text-primary border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition-colors shadow-sm"
              >
                <span>Let&apos;s Connect</span>
              </a>

              <a
                href="/resume-tariq-khattak.pdf"
                download="Tariq_Khattak_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-mono text-text-secondary hover:text-accent-primary border border-border-subtle hover:border-accent-primary transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-border-subtle w-full">
              <span className="text-xs font-mono text-text-muted mr-1">Connect:</span>
              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-bg-secondary border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-bg-secondary border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <div className="relative flex items-center">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-md bg-bg-secondary border border-border-subtle text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors shadow-sm"
                  aria-label="Send direct email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-2 text-xs font-mono text-text-secondary hover:text-accent-primary inline-flex items-center gap-1 px-2.5 py-1 rounded bg-bg-secondary border border-border-subtle shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-accent-primary" />
                      <span className="text-accent-primary font-semibold">Copied</span>
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
            <div className="w-full max-w-lg rounded-xl bg-bg-card border border-border-subtle p-5 shadow-md relative overflow-hidden">
              {/* Top Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-transparent" />

              {/* Console Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-primary" />
                  </div>
                  <span className="font-mono text-xs text-text-muted">mediassist.safety_gateway</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-surface text-accent-primary border border-accent-primary/20 font-medium">
                  Architecture Inspection
                </span>
              </div>

              {/* Interactive Pipeline Step Selector */}
              <div className="grid grid-cols-3 gap-1.5 mb-4 p-1 rounded-lg bg-bg-subtle border border-border-subtle">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 1
                      ? "bg-bg-card text-accent-primary font-semibold shadow-sm"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  1. LLM Extract
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 2
                      ? "bg-bg-card text-accent-primary font-semibold shadow-sm"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  2. Safety Gate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(3)}
                  className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors text-center ${
                    activeStep === 3
                      ? "bg-bg-card text-accent-primary font-semibold shadow-sm"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  3. Postgres State
                </button>
              </div>

              {/* Step Display */}
              <div className="space-y-3 font-mono text-xs">
                {activeStep === 1 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-bg-subtle border border-border-subtle">
                      <span className="text-[10px] text-text-muted block mb-1">Incoming Unstructured OCR / Prescription:</span>
                      <p className="text-text-primary text-xs font-mono">&ldquo;Amoxicillin 500mg capsules, take one orally three times daily with meals for 7 days.&rdquo;</p>
                    </div>
                    <div className="p-3 rounded bg-bg-subtle border border-border-subtle">
                      <div className="flex items-center justify-between text-[10px] text-accent-primary mb-1">
                        <span className="font-semibold">Local LLM Schema Parsing (Ollama):</span>
                        <span className="text-amber-600 dark:text-yellow-400 font-medium">Stochastic Extraction</span>
                      </div>
                      <pre className="text-[11px] text-text-secondary overflow-x-auto leading-relaxed">
{`{
  "drug_candidate": "Amoxicillin",
  "dosage_mg": 500,
  "frequency_str": "TID",
  "course_days": 7
}`}
                      </pre>
                    </div>
                    <p className="text-[10px] text-text-muted leading-relaxed">
                      * Principle: LLMs extract candidate parameters from unstructured text, but are never trusted to calculate dosage schedules directly.
                    </p>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-bg-subtle border border-border-subtle">
                      <div className="flex items-center justify-between text-[10px] text-accent-primary mb-2">
                        <span className="flex items-center gap-1 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-accent-primary" /> Deterministic Safety Filter (Zero LLM)
                        </span>
                        <span className="text-accent-primary bg-accent-surface px-1.5 py-0.5 rounded text-[9px] font-semibold">100% Algorithmic</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-center justify-between text-text-secondary">
                          <span>Dose Bound Check: 500mg &le; 1000mg limit</span>
                          <span className="text-accent-primary font-bold">PASS [0ms]</span>
                        </div>
                        <div className="flex items-center justify-between text-text-secondary">
                          <span>Contraindication Matrix (142 checks)</span>
                          <span className="text-accent-primary font-bold">0 CONFLICTS</span>
                        </div>
                        <div className="flex items-center justify-between text-text-secondary">
                          <span>Timestamp Math (TID &rarr; 8h delta)</span>
                          <span className="text-accent-primary font-bold">CALCULATED</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2.5 rounded bg-accent-surface border border-accent-primary/30 text-[11px] text-accent-primary flex items-center justify-between">
                      <span className="flex items-center gap-1.5 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Clinical Safety Gate Cleared
                      </span>
                      <span className="text-[10px] text-text-primary font-medium">Zero Hallucination Risk</span>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="space-y-2.5">
                    <div className="p-3 rounded bg-bg-subtle border border-border-subtle">
                      <span className="text-[10px] text-accent-primary block mb-1 font-semibold">PostgreSQL Relational Persistence:</span>
                      <pre className="text-[11px] text-text-secondary overflow-x-auto leading-relaxed">
{`INSERT INTO patient_schedules (
  patient_id, medication, interval_hrs,
  timestamps, confirmed_by_gate
) VALUES (
  'p-804', 'Amoxicillin 500mg', 8,
  ARRAY['08:00', '16:00', '00:00'], TRUE
);`}
                      </pre>
                    </div>
                    <p className="text-[10px] text-text-muted leading-relaxed">
                      * Relational state guarantees reproducible cron triggers and adherence logs without dependent AI token generation.
                    </p>
                  </div>
                )}
              </div>

              {/* Verified Identity Footnote */}
              <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between text-[11px] font-mono text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-accent-primary" />
                  <span>TechCitySoft AI Intern · CECOS 2027</span>
                </span>
                <span className="text-accent-primary font-medium">Peshawar, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
