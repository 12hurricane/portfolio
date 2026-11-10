"use client";

import React, { useState } from "react";
import { projects, Project, ComponentStatus } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowRight,
  ShieldCheck,
  ShieldAlert,
  CheckCircle,
  Clock,
  CircleDot,
  FileCode,
  Eye,
  Cpu,
  Database,
  Terminal,
  SlidersHorizontal,
} from "lucide-react";

export default function Projects() {
  const [activePerceptionStep, setActivePerceptionStep] = useState<number>(2);

  const safesight = projects.find((p) => p.id === "safesight-ai") || projects[0];
  const mediassist = projects.find((p) => p.id === "mediassist") || projects[1];
  const secondaryProjects = projects.filter((p) => !p.isFlagship);

  const perceptionSteps = [
    {
      id: 0,
      title: "1. Camera Input",
      badge: "Input Stream",
      tech: "Camera Stream / Video Input",
      description: "Ingests test video frames under varying ambient lighting conditions.",
      latency: "Active input stream",
      status: "Bench Tested",
    },
    {
      id: 1,
      title: "2. OpenCV Preprocess",
      badge: "Normalization",
      tech: "Python / OpenCV",
      description: "Frame normalization, resizing, contrast equalization, and color space conversion.",
      latency: "OpenCV pipeline",
      status: "Implemented",
    },
    {
      id: 2,
      title: "3. Object Detection",
      badge: "Bounding Boxes",
      tech: "YOLO Architecture",
      description: "Generates localized bounding boxes and classification for high-risk obstacle candidates (stairs, vehicles, pedestrians).",
      latency: "Model inference",
      status: "Implemented",
    },
    {
      id: 3,
      title: "4. Distance Estimation",
      badge: "Geometry Heuristic",
      tech: "Geometric Bounding Math",
      description: "Calculates spatial bounding-box vertical ratio and focal heuristics to categorize hazard proximity.",
      latency: "Heuristic calculation",
      status: "In Development",
    },
    {
      id: 4,
      title: "5. Directional Audio",
      badge: "Audio Cues",
      tech: "Audio Synthesis Dispatch",
      description: "Dispatches directional audio cues alerting the user of relative hazard vectors.",
      latency: "Cue dispatch",
      status: "In Development",
    },
  ];

  const getStatusBadgeClass = (status: ComponentStatus) => {
    switch (status) {
      case "Implemented":
        return "badge-implemented";
      case "In Development":
        return "badge-in-development";
      case "Planned":
        return "badge-planned";
      default:
        return "badge-planned";
    }
  };

  const getStatusIcon = (status: ComponentStatus) => {
    switch (status) {
      case "Implemented":
        return <CheckCircle className="w-3.5 h-3.5 text-accent-primary" />;
      case "In Development":
        return <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-yellow-400" />;
      case "Planned":
        return <CircleDot className="w-3.5 h-3.5 text-text-muted" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-bg-primary relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-accent-primary font-semibold">03.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
                Case Studies &amp; Systems Architecture
              </h2>
            </div>
            <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
              In-depth architectural breakdowns of systems I am actively engineering. Proving component boundaries, edge inference budgets, and deterministic safety rules.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-bg-secondary border border-border-subtle shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              2 Flagship Systems Under Evaluation
            </span>
          </div>
        </div>

        {/* CASE STUDY 1: SafeSight-AI */}
        <div className="mb-20 rounded-2xl bg-bg-secondary border border-border-subtle p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
          {/* Top Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-accent-surface text-accent-primary border border-accent-primary/20 font-medium">
                  Flagship Case Study 01
                </span>
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-bg-subtle text-amber-700 dark:text-yellow-400 border border-amber-500/20">
                  {safesight.statusBadge}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  Computer Vision &amp; Assistive IoT
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary">
                {safesight.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-accent-primary mt-1 font-medium">
                {safesight.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-text-muted bg-bg-subtle px-3 py-1.5 rounded border border-border-subtle">
                Inference Target: &lt;80ms Edge Budget
              </span>
            </div>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-2 border-accent-primary pl-4">
                <span className="text-xs font-mono font-medium text-accent-primary block mb-1">
                  The Problem Solved:
                </span>
                <p className="text-sm text-text-primary leading-relaxed">
                  {safesight.problemStatement}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-medium text-text-primary block mb-1">
                  Technical Approach:
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {safesight.technicalApproach}
                </p>
              </div>

              {/* Safety Constraint Callout */}
              <div className="p-4 rounded-xl bg-bg-subtle border border-border-subtle flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-accent-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold text-text-primary block">
                    Assistive Scope &amp; Safety Boundary:
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {safesight.safetyArchitectureNote}
                  </p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {safesight.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Architectural Reality Checklist */}
            <div className="lg:col-span-5 bg-bg-subtle rounded-xl border border-border-subtle p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle mb-3">
                  <span className="text-xs font-heading font-bold text-text-primary flex items-center gap-2">
                    <Layers className="w-4 h-4 text-accent-primary" />
                    <span>Component Implementation Matrix</span>
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    Status Audit
                  </span>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {safesight.components?.map((c, i) => (
                    <div key={i} className="p-2.5 rounded bg-bg-card border border-border-subtle text-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium text-text-primary">{c.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 ${getStatusBadgeClass(c.status)}`}>
                          {getStatusIcon(c.status)}
                          {c.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-secondary leading-snug">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-border-subtle text-[10px] font-mono text-text-muted flex items-center gap-1.5 mt-3">
                <SlidersHorizontal className="w-3.5 h-3.5 text-accent-primary" />
                <span>Bench-evaluated on test datasets and recorded video feeds.</span>
              </div>
            </div>
          </div>

          {/* Interactive Edge Perception Pipeline Visualizer */}
          <div className="pt-6 border-t border-border-subtle">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-accent-primary tracking-wider flex items-center gap-2 font-semibold">
                <Eye className="w-4 h-4" />
                <span>Interactive Perception Pipeline (Click nodes to inspect latency &amp; hardware roles)</span>
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                Pipeline Stage {activePerceptionStep + 1} of 5
              </span>
            </div>

            {/* Stepper Node Rail */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 mb-4">
              {perceptionSteps.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActivePerceptionStep(step.id)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    activePerceptionStep === step.id
                      ? "bg-bg-card border-accent-primary shadow-sm"
                      : "bg-bg-subtle border-border-subtle hover:border-accent-primary/50"
                  }`}
                >
                  <span className="text-[10px] font-mono text-accent-primary block font-semibold">
                    {step.badge}
                  </span>
                  <span className="text-xs font-heading font-semibold text-text-primary block mt-0.5">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted block mt-1">
                    {step.status}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="p-4 rounded-xl bg-bg-card border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-accent-primary">
                    {perceptionSteps[activePerceptionStep].title}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded bg-bg-subtle border border-border-subtle">
                    Target: {perceptionSteps[activePerceptionStep].tech}
                  </span>
                </div>
                <p className="text-xs text-text-secondary max-w-3xl leading-relaxed">
                  {perceptionSteps[activePerceptionStep].description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 text-xs font-mono">
                <span className="text-accent-primary bg-accent-surface px-2.5 py-1 rounded border border-accent-primary/20 font-semibold">
                  {perceptionSteps[activePerceptionStep].latency}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 2: MediAssist */}
        <div className="mb-20 rounded-2xl bg-bg-secondary border border-border-subtle p-6 sm:p-8 lg:p-10 shadow-md relative overflow-hidden">
          {/* Top Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-secondary via-accent-primary to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-accent-surface text-accent-primary border border-accent-primary/20 font-medium">
                  Flagship Case Study 02
                </span>
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-bg-subtle text-amber-700 dark:text-yellow-400 border border-amber-500/20">
                  {mediassist.statusBadge}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  Clinical AI &amp; Deterministic Safety
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-text-primary">
                {mediassist.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-accent-primary mt-1 font-medium">
                {mediassist.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-accent-primary bg-accent-surface px-3 py-1.5 rounded border border-accent-primary/20 font-medium">
                Safety Principle: Rule-Based Validation Core
              </span>
            </div>
          </div>

          {/* THE CORE VISUAL PROOF: WHERE LLM IS USED VS. WHERE IT IS DELIBERATELY EXCLUDED */}
          <div className="my-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-accent-primary tracking-wider flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-accent-primary" />
                <span>Architectural Isolation: Stochastic LLM Layer vs. Deterministic Algorithmic Core</span>
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                Critical Clinical Defense
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Where LLMs ARE Used */}
              <div className="p-5 rounded-xl bg-bg-card border border-border-subtle space-y-3 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-yellow-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span>🟢 Where LLMs ARE Used (Stochastic Domain)</span>
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    Candidate Drafter
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Unstructured Prescription OCR Parsing:</strong> Local Ollama LLM ingests messy doctor notes and extracts candidate medication names, dosage frequencies, and notes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Plain-Language Explanation:</strong> Translating complex pharmacological jargon into patient-comprehensible dietary &amp; adherence instructions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 dark:text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Grounded RAG Document Retrieval:</strong> Vector search over verified open pharmaceutical literature for informational inquiries.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded bg-bg-subtle border border-border-subtle text-[11px] text-amber-700 dark:text-yellow-400 font-mono">
                  * Safety Rule: All LLM outputs are treated as untrusted candidates and cannot directly write to database or generate schedules.
                </div>
              </div>

              {/* Box 2: Where LLMs ARE STRICTLY EXCLUDED */}
              <div className="p-5 rounded-xl bg-bg-card border-2 border-accent-primary/40 space-y-3 shadow-sm">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-mono font-bold text-accent-primary flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>🔴 Where LLMs ARE Strictly Excluded (Deterministic Core)</span>
                  </span>
                  <span className="text-[10px] font-mono text-accent-primary font-bold">
                    100% Algorithmic
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Dosage Range Validation:</strong> Strict deterministic math rules check single-dose &amp; daily cumulative limits against clinical upper thresholds (0% hallucination).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Drug-Drug Interaction Matrix:</strong> Relational contraindication cross-matching tables detect hazardous polypharmacy combinations algorithmically.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Intake Timestamp Cron Calculation:</strong> Precise clock arithmetic scheduling daily doses (e.g. 8-hour intervals) without probabilistic drift.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Relational Persistence:</strong> PostgreSQL with relational integrity constraints for immutable adherence audit trails.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded bg-accent-surface border border-accent-primary/20 text-[11px] text-accent-primary font-mono font-medium">
                  * Clinical Guarantee: The medication engine never relies on a language model for mathematical calculation or contraindication gates.
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Matrix for MediAssist */}
          <div className="pt-6 border-t border-border-subtle">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-text-primary flex items-center gap-2">
                <Database className="w-4 h-4 text-accent-primary" />
                <span>MediAssist Verification Matrix: What is Implemented vs. In Development</span>
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                7 Subsystems Audited
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {mediassist.components?.slice(0, 6).map((comp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-bg-card border border-border-subtle text-xs shadow-sm">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-text-primary">{comp.name}</span>
                    <span className={`text-[9px] font-mono px-2 py-0.2 rounded-full shrink-0 ${getStatusBadgeClass(comp.status)}`}>
                      {comp.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-border-subtle">
              {mediassist.techStack.map((tech, idx) => (
                <span key={idx} className="tech-chip text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Technical Projects: Clean Compact Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-subtle">
            <h3 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2">
              <FileCode className="w-5 h-5 text-accent-primary" />
              <span>Additional Systems &amp; Applied AI Projects</span>
            </h3>
            <span className="text-xs font-mono text-text-muted">
              {secondaryProjects.length} Applied Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-bg-secondary border border-border-subtle p-5 shadow-sm flex flex-col justify-between hover:border-accent-primary/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-accent-primary font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-subtle text-text-muted border border-border-subtle">
                      {project.statusBadge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-text-primary group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-text-muted mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-chip text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between">
                    {project.isRepoPublic && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-text-primary hover:text-accent-primary transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-text-muted">
                        {project.repoNotice || "Academic Prototype"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
