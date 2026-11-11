"use client";

import React, { useState } from "react";
import { projects, ComponentStatus } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  CheckCircle,
  Clock,
  CircleDot,
  FileCode,
  ShieldCheck,
  ShieldAlert,
  Terminal,
  FileText,
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
              <span className="font-mono text-xs text-accent-primary font-medium">03</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
                Case Studies &amp; Architecture
              </h2>
            </div>
            <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
              Architectural breakdowns of core projects: exploring computer vision for assistive perception, and rule-based safety boundaries for clinical LLM workflows.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-bg-secondary border border-border-subtle">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              <span>2 flagship case studies</span>
            </span>
          </div>
        </div>

        {/* CASE STUDY 1: SafeSight-AI */}
        <div className="mb-20 rounded-xl bg-bg-secondary border border-border-subtle p-6 sm:p-8 lg:p-10 shadow-sm relative">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-accent-surface text-accent-primary border border-accent-primary/20">
                  Case study 01
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-bg-subtle text-text-secondary border border-border-subtle">
                  {safesight.statusBadge}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  Computer Vision &amp; Assistive Perception
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                {safesight.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-accent-primary mt-1">
                {safesight.subtitle}
              </p>
            </div>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-2 border-accent-primary pl-4">
                <span className="text-xs font-mono font-medium text-accent-primary block mb-1">
                  The Problem Solved
                </span>
                <p className="text-sm text-text-primary leading-relaxed">
                  {safesight.problemStatement}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-medium text-text-primary block mb-1">
                  Technical Approach
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {safesight.technicalApproach}
                </p>
              </div>

              {/* Safety Constraint Callout */}
              <div className="p-4 rounded-lg bg-bg-subtle border border-border-subtle flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-medium text-text-primary block">
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

            {/* Architecture Matrix: Components Status */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="rounded-lg bg-bg-primary border border-border-subtle p-5">
                <span className="text-xs font-mono text-text-primary block font-medium mb-3">
                  Subsystem implementation status:
                </span>
                <div className="divide-y divide-border-subtle">
                  {safesight.components?.map((component, idx) => (
                    <div key={idx} className="py-2.5 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-medium text-text-primary flex items-center gap-2">
                          {getStatusIcon(component.status)}
                          <span>{component.name}</span>
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${getStatusBadgeClass(component.status)}`}>
                          {component.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-text-secondary pl-5 leading-normal">
                        {component.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SafeSight 5-Stage Spatial Perception Pipeline */}
          <div className="mt-8 pt-8 border-t border-border-subtle space-y-4">
            <span className="text-xs font-mono text-accent-primary block font-medium">
              Spatial Perception Pipeline Architecture
            </span>

            {/* Interactive Step Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {perceptionSteps.map((step) => (
                <button
                  type="button"
                  key={step.id}
                  onClick={() => setActivePerceptionStep(step.id)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    activePerceptionStep === step.id
                      ? "bg-accent-surface border-accent-primary"
                      : "bg-bg-primary border-border-subtle hover:border-accent-primary"
                  }`}
                >
                  <span className="text-[10px] font-mono text-accent-primary block">
                    {step.badge}
                  </span>
                  <span className="text-xs font-heading font-medium text-text-primary block mt-0.5">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted block mt-1">
                    {step.status}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="p-4 rounded-lg bg-bg-primary border border-border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold text-accent-primary">
                    {perceptionSteps[activePerceptionStep].title}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted px-2 py-0.5 rounded bg-bg-secondary border border-border-subtle">
                    {perceptionSteps[activePerceptionStep].tech}
                  </span>
                </div>
                <p className="text-xs text-text-secondary max-w-3xl leading-relaxed">
                  {perceptionSteps[activePerceptionStep].description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 text-xs font-mono">
                <span className="text-accent-primary bg-accent-surface px-2.5 py-1 rounded-md border border-accent-primary/20 font-medium">
                  {perceptionSteps[activePerceptionStep].latency}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 2: MediAssist */}
        <div className="mb-20 rounded-xl bg-bg-secondary border border-border-subtle p-6 sm:p-8 lg:p-10 shadow-sm relative">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-subtle">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-accent-surface text-accent-primary border border-accent-primary/20">
                  Case study 02
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-bg-subtle text-text-secondary border border-border-subtle">
                  {mediassist.statusBadge}
                </span>
                <span className="text-xs font-mono text-text-muted">
                  Applied LLM &amp; Rule-Based Logic
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary">
                {mediassist.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-accent-primary mt-1">
                {mediassist.subtitle}
              </p>
            </div>
          </div>

          {/* THE CORE VISUAL PROOF: WHERE LLM IS USED VS. WHERE RULES GOVERN */}
          <div className="my-8 space-y-4">
            <span className="text-xs font-mono text-accent-primary block font-medium">
              Architecture Separation: Language Model Extraction vs. Rule-Based Validation
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Where Language Models Are Used */}
              <div className="p-5 rounded-lg bg-bg-primary border border-border-subtle space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-mono font-medium text-text-primary flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-accent-primary" />
                    <span>Language Model Layer (Text Extraction)</span>
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    Candidate Parsing
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono">›</span>
                    <span><strong>Unstructured Note Parsing:</strong> Local Ollama model parses doctor notes and extracts candidate medication names, dosage frequencies, and notes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono">›</span>
                    <span><strong>Plain-Language Explanation:</strong> Translates complex pharmacological phrasing into patient-friendly dietary and adherence instructions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono">›</span>
                    <span><strong>Grounded RAG Document Retrieval:</strong> Vector search over verified open pharmaceutical documentation for informational lookups.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded-md bg-bg-secondary border border-border-subtle text-[11px] text-text-muted font-mono">
                  * Design rule: Language model outputs are treated as untrusted drafts and cannot directly write prescriptions or schedule reminders.
                </div>
              </div>

              {/* Box 2: Where Deterministic Rules Are Enforced */}
              <div className="p-5 rounded-lg bg-bg-primary border border-accent-primary/40 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-mono font-medium text-text-primary flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-accent-primary" />
                    <span>Rule-Based Validation Layer (Deterministic Checks)</span>
                  </span>
                  <span className="text-[10px] font-mono text-accent-primary font-medium">
                    Rule Logic
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Dosage Range Validation:</strong> Deterministic rules verify single-dose and daily cumulative amounts against predefined upper bounds.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Drug-Drug Interaction Table:</strong> Relational queries cross-check active prescriptions against known contraindication matrices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Intake Schedule Math:</strong> Standard calendar calculations compute fixed intervals (e.g., 8-hour windows) without probabilistic drift.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-primary font-mono font-bold">✓</span>
                    <span><strong>Relational Persistence:</strong> PostgreSQL tables with strict constraints maintain immutable adherence records.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded-md bg-accent-surface border border-accent-primary/20 text-[11px] text-accent-primary font-mono">
                  * Safety constraint: Medication calculations and contraindication checks are executed by deterministic code, never by a language model.
                </div>
              </div>
            </div>
          </div>

          {/* Subsystems for MediAssist */}
          <div className="pt-6 border-t border-border-subtle">
            <span className="text-xs font-mono text-text-primary block font-medium mb-3">
              MediAssist Subsystems:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {mediassist.components?.slice(0, 6).map((comp, idx) => (
                <div key={idx} className="p-3 rounded-md bg-bg-primary border border-border-subtle text-xs">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-medium text-text-primary">{comp.name}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md shrink-0 ${getStatusBadgeClass(comp.status)}`}>
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

        {/* Secondary Technical Projects: Clean Architectural Row Catalog */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-border-subtle">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-accent-primary" />
              <h3 className="text-xl font-heading font-bold text-text-primary">
                Additional Projects
              </h3>
            </div>
            <span className="text-xs font-mono text-text-muted">
              {secondaryProjects.length} projects
            </span>
          </div>

          {/* Clean Row-Based Catalog (Breaks the Repetitive Card Grid) */}
          <div className="divide-y divide-border-subtle border-y border-border-subtle">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start"
              >
                {/* Column 1: Title & Category */}
                <div className="lg:col-span-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-accent-primary font-medium">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-bg-subtle text-text-muted border border-border-subtle">
                      {project.statusBadge}
                    </span>
                  </div>
                  <h4 className="font-heading font-semibold text-base text-text-primary">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-text-muted">
                    {project.subtitle}
                  </p>
                </div>

                {/* Column 2: Problem & Approach Description */}
                <div className="lg:col-span-5 text-xs text-text-secondary leading-relaxed">
                  <p>{project.shortDescription}</p>
                </div>

                {/* Column 3: Tech Stack & Repository Link */}
                <div className="lg:col-span-3 flex flex-col lg:items-end justify-between gap-3">
                  <div className="flex flex-wrap lg:justify-end gap-1.5">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-bg-secondary border border-border-subtle text-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    {project.isRepoPublic && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-text-primary hover:text-accent-primary transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-text-muted">
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
