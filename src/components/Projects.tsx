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
  Volume2,
  Cpu,
  Database,
  Terminal,
  Activity,
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
      badge: "30 FPS",
      tech: "ESP32-CAM / Mobile Camera",
      description: "Ingests raw 640x480 video stream under varying ambient lighting conditions.",
      latency: "Real-time stream",
      status: "Bench Tested",
    },
    {
      id: 1,
      title: "2. OpenCV Preprocess",
      badge: "<12ms",
      tech: "Python / OpenCV",
      description: "Frame normalization, resizing to 416x416, contrast equalization, and color space conversion.",
      latency: "8-12ms budget",
      status: "Implemented",
    },
    {
      id: 2,
      title: "3. YOLO Spatial Inference",
      badge: "<65ms",
      tech: "YOLOv8-Nano / Edge AI",
      description: "Generates localized bounding boxes and classification for high-risk obstacles (stairs, vehicles, pedestrians, doors).",
      latency: "45-65ms on mobile edge",
      status: "Implemented",
    },
    {
      id: 3,
      title: "4. Distance Estimation",
      badge: "Heuristic",
      tech: "Geometric Bounding Math",
      description: "Calculates spatial bounding-box vertical ratio and focal calibration to categorize hazard as Immediate, Near, or Distant.",
      latency: "<3ms algorithmic",
      status: "In Development",
    },
    {
      id: 4,
      title: "5. Directional Audio",
      badge: "Stereo Cues",
      tech: "Audio Synthesis Dispatch",
      description: "Dispatches low-latency directional audio tones (panned Left/Center/Right) informing the user of relative hazard vectors.",
      latency: "<15ms dispatch",
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
        return <CheckCircle className="w-3.5 h-3.5 text-[#35B6A5]" />;
      case "In Development":
        return <Clock className="w-3.5 h-3.5 text-yellow-400" />;
      case "Planned":
        return <CircleDot className="w-3.5 h-3.5 text-[#A8B5B2]" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-[#35B6A5]">03.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
                Case Studies &amp; Systems Architecture
              </h2>
            </div>
            <p className="text-sm text-[#A8B5B2] max-w-2xl leading-relaxed">
              In-depth architectural breakdowns of systems I am actively engineering. Proving component boundaries, edge inference budgets, and deterministic safety rules.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#A8B5B2]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#20282D] border border-[#354147]">
              <span className="w-2 h-2 rounded-full bg-[#35B6A5]" />
              2 Flagship Systems Under Evaluation
            </span>
          </div>
        </div>

        {/* CASE STUDY 1: SafeSight-AI */}
        <div className="mb-20 rounded-2xl bg-[#20282D] border border-[#354147] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#35B6A5] via-[#75C9BB] to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#354147]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-[#252F34] text-[#35B6A5] border border-[#354147]">
                  Flagship Case Study 01
                </span>
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-[#252F34] text-yellow-400 border border-yellow-400/30">
                  {safesight.statusBadge}
                </span>
                <span className="text-xs font-mono text-[#A8B5B2]">
                  Computer Vision &amp; Assistive IoT
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F1F5F4]">
                {safesight.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#35B6A5] mt-1">
                {safesight.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#A8B5B2] bg-[#252F34] px-3 py-1.5 rounded border border-[#354147]">
                Inference Target: &lt;80ms Edge Budget
              </span>
            </div>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-2 border-[#35B6A5] pl-4">
                <span className="text-xs font-mono font-medium text-[#35B6A5] block mb-1">
                  The Problem Solved:
                </span>
                <p className="text-sm text-[#F1F5F4] leading-relaxed">
                  {safesight.problemStatement}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-medium text-[#F1F5F4] block mb-1">
                  Technical Approach:
                </span>
                <p className="text-xs sm:text-sm text-[#A8B5B2] leading-relaxed">
                  {safesight.technicalApproach}
                </p>
              </div>

              {/* Safety Constraint Callout */}
              <div className="p-4 rounded-xl bg-[#252F34] border border-[#354147] flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#35B6A5] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold text-[#F1F5F4] block">
                    Assistive Scope &amp; Safety Boundary:
                  </span>
                  <p className="text-xs text-[#A8B5B2] leading-relaxed">
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
            <div className="lg:col-span-5 bg-[#252F34] rounded-xl border border-[#354147] p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#354147] mb-3">
                  <span className="text-xs font-heading font-bold text-[#F1F5F4] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#35B6A5]" />
                    <span>Component Implementation Matrix</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B5B2]">
                    Status Audit
                  </span>
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {safesight.components?.map((c, i) => (
                    <div key={i} className="p-2.5 rounded bg-[#20282D] border border-[#354147]/70 text-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-medium text-[#F1F5F4]">{c.name}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 ${getStatusBadgeClass(c.status)}`}>
                          {getStatusIcon(c.status)}
                          {c.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#A8B5B2] leading-snug">
                        {c.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#354147] text-[10px] font-mono text-[#A8B5B2] flex items-center gap-1.5 mt-3">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#35B6A5]" />
                <span>Bench-evaluated on test datasets and recorded video feeds.</span>
              </div>
            </div>
          </div>

          {/* Interactive Edge Perception Pipeline Visualizer */}
          <div className="pt-6 border-t border-[#354147]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase text-[#35B6A5] tracking-wider flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>Interactive Perception Pipeline (Click nodes to inspect latency &amp; hardware roles)</span>
              </span>
              <span className="text-[11px] font-mono text-[#A8B5B2]">
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
                      ? "bg-[#252F34] border-[#35B6A5] shadow-sm"
                      : "bg-[#20282D] border-[#354147] hover:border-[#35B6A5]/50"
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#35B6A5] block">
                    {step.badge}
                  </span>
                  <span className="text-xs font-heading font-semibold text-[#F1F5F4] block mt-0.5">
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B5B2] block mt-1">
                    {step.status}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Step Deep-Dive Inspector */}
            <div className="p-4 rounded-xl bg-[#171C20] border border-[#354147] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#35B6A5]">
                    {perceptionSteps[activePerceptionStep].title}
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B5B2] px-2 py-0.5 rounded bg-[#20282D] border border-[#354147]">
                    Target: {perceptionSteps[activePerceptionStep].tech}
                  </span>
                </div>
                <p className="text-xs text-[#A8B5B2] max-w-3xl leading-relaxed">
                  {perceptionSteps[activePerceptionStep].description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3 text-xs font-mono">
                <span className="text-[#35B6A5] bg-[#35B6A5]/10 px-2.5 py-1 rounded border border-[#354147]">
                  {perceptionSteps[activePerceptionStep].latency}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDY 2: MediAssist */}
        <div className="mb-20 rounded-2xl bg-[#20282D] border border-[#354147] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#75C9BB] via-[#35B6A5] to-transparent" />

          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#354147]">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2">
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-[#252F34] text-[#35B6A5] border border-[#354147]">
                  Flagship Case Study 02
                </span>
                <span className="px-3 py-0.5 rounded text-xs font-mono bg-[#252F34] text-yellow-400 border border-yellow-400/30">
                  {mediassist.statusBadge}
                </span>
                <span className="text-xs font-mono text-[#A8B5B2]">
                  Clinical AI &amp; Deterministic Safety
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#F1F5F4]">
                {mediassist.title}
              </h3>
              <p className="text-sm sm:text-base font-mono text-[#35B6A5] mt-1">
                {mediassist.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#35B6A5] bg-[#252F34] px-3 py-1.5 rounded border border-[#354147]">
                Safety Principle: Zero-Hallucination Core
              </span>
            </div>
          </div>

          {/* THE CORE VISUAL PROOF: WHERE LLM IS USED VS. WHERE IT IS DELIBERATELY EXCLUDED */}
          <div className="my-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-[#35B6A5] tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#35B6A5]" />
                <span>Architectural Isolation: Stochastic LLM Layer vs. Deterministic Algorithmic Core</span>
              </span>
              <span className="text-[11px] font-mono text-[#A8B5B2]">
                Critical Clinical Defense
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Where LLMs ARE Used */}
              <div className="p-5 rounded-xl bg-[#252F34] border border-[#354147] space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#354147]">
                  <span className="text-xs font-mono font-bold text-yellow-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    <span>🟢 Where LLMs ARE Used (Stochastic Domain)</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#A8B5B2]">
                    Candidate Drafter
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#A8B5B2]">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Unstructured Prescription OCR Parsing:</strong> Local Ollama LLM ingests messy doctor notes and extracts candidate medication names, dosage frequencies, and notes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Plain-Language Explanation:</strong> Translating complex pharmacological jargon into patient-comprehensible dietary &amp; adherence instructions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 font-mono font-bold">›</span>
                    <span><strong>Grounded RAG Document Retrieval:</strong> Vector search over verified open pharmaceutical literature for informational inquiries.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded bg-[#20282D] border border-yellow-400/20 text-[11px] text-yellow-400/90 font-mono">
                  * Safety Rule: All LLM outputs are treated as untrusted candidates and cannot directly write to database or generate schedules.
                </div>
              </div>

              {/* Box 2: Where LLMs ARE STRICTLY EXCLUDED */}
              <div className="p-5 rounded-xl bg-[#252F34] border border-[#35B6A5]/50 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#354147]">
                  <span className="text-xs font-mono font-bold text-[#35B6A5] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>🔴 Where LLMs ARE Strictly Excluded (Deterministic Core)</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#35B6A5]">
                    100% Algorithmic
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#A8B5B2]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#35B6A5] font-mono font-bold">✓</span>
                    <span><strong>Dosage Range Validation:</strong> Strict deterministic math rules check single-dose &amp; daily cumulative limits against clinical upper thresholds (0% hallucination).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#35B6A5] font-mono font-bold">✓</span>
                    <span><strong>Drug-Drug Interaction Matrix:</strong> Relational contraindication cross-matching tables detect hazardous polypharmacy combinations algorithmically.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#35B6A5] font-mono font-bold">✓</span>
                    <span><strong>Intake Timestamp Cron Calculation:</strong> Precise clock arithmetic scheduling daily doses (e.g. 8-hour intervals) without probabilistic drift.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#35B6A5] font-mono font-bold">✓</span>
                    <span><strong>Relational Persistence:</strong> PostgreSQL with relational integrity constraints for immutable adherence audit trails.</span>
                  </li>
                </ul>
                <div className="p-2.5 rounded bg-[#20282D] border border-[#35B6A5]/30 text-[11px] text-[#35B6A5] font-mono">
                  * Clinical Guarantee: The medication engine never relies on a language model for mathematical calculation or contraindication gates.
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Matrix for MediAssist */}
          <div className="pt-6 border-t border-[#354147]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#F1F5F4] flex items-center gap-2">
                <Database className="w-4 h-4 text-[#35B6A5]" />
                <span>MediAssist Verification Matrix: What is Implemented vs. In Development</span>
              </span>
              <span className="text-[11px] font-mono text-[#A8B5B2]">
                7 Subsystems Audited
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {mediassist.components?.slice(0, 6).map((comp, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#252F34] border border-[#354147] text-xs">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-semibold text-[#F1F5F4]">{comp.name}</span>
                    <span className={`text-[9px] font-mono px-2 py-0.2 rounded-full shrink-0 ${getStatusBadgeClass(comp.status)}`}>
                      {comp.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A8B5B2] leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-[#354147]/60">
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
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#354147]">
            <h3 className="text-xl font-heading font-bold text-[#F1F5F4] flex items-center gap-2">
              <FileCode className="w-5 h-5 text-[#35B6A5]" />
              <span>Additional Systems &amp; Applied AI Projects</span>
            </h3>
            <span className="text-xs font-mono text-[#A8B5B2]">
              {secondaryProjects.length} Applied Systems
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-[#20282D] border border-[#354147] p-5 shadow-sm flex flex-col justify-between hover:border-[#35B6A5]/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[#35B6A5]">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#252F34] text-[#A8B5B2] border border-[#354147]">
                      {project.statusBadge}
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#F1F5F4] group-hover:text-[#35B6A5] transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#A8B5B2] mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-[#A8B5B2] leading-relaxed mb-4">
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

                  <div className="pt-3 border-t border-[#354147] flex items-center justify-between">
                    {project.isRepoPublic && project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F1F5F4] hover:text-[#35B6A5] transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-[#A8B5B2]">
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
