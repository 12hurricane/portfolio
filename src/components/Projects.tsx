"use client";

import React, { useState } from "react";
import { projects, Project, ComponentStatus } from "@/data/portfolioData";
import {
  ExternalLink,
  Github,
  AlertTriangle,
  Layers,
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal,
  CheckCircle,
  Clock,
  CircleDot,
  FileCode,
} from "lucide-react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "AI & LLM",
    "Computer Vision & IoT",
    "Machine Learning",
    "Mobile & Software",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const flagshipProjects = filteredProjects.filter((p) => p.isFlagship);
  const otherProjects = filteredProjects.filter((p) => !p.isFlagship);

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-[#35B6A5]">03.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
                Featured Technical Projects
              </h2>
            </div>
            <p className="text-sm text-[#A8B5B2] max-w-2xl">
              Authentic systems engineering work across AI application architecture, deterministic safety, computer vision, and machine learning.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-[#35B6A5] text-[#171C20] font-semibold shadow-sm"
                    : "bg-[#20282D] text-[#A8B5B2] border border-[#354147] hover:border-[#35B6A5] hover:text-[#F1F5F4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Projects Spotlight (Large Featured Section) */}
        {flagshipProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {flagshipProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#20282D] border border-[#354147] p-6 lg:p-8 shadow-xl relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#35B6A5] via-[#75C9BB] to-transparent" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Project Overview */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#252F34] text-[#35B6A5] border border-[#354147]">
                        Featured Spotlight
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#252F34] text-yellow-400 border border-yellow-400/30">
                        {project.statusBadge}
                      </span>
                      <span className="text-xs font-mono text-[#A8B5B2]">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F1F5F4]">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-[#35B6A5] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#A8B5B2] leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Problem Statement Box */}
                    <div className="p-4 rounded-lg bg-[#252F34] border border-[#354147]">
                      <h4 className="text-xs font-mono uppercase text-[#35B6A5] font-semibold mb-1">
                        Problem Being Solved:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A8B5B2] leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    {/* Technical Approach */}
                    <div>
                      <h4 className="text-xs font-mono uppercase text-[#F1F5F4] font-semibold mb-1">
                        Technical Approach:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A8B5B2] leading-relaxed">
                        {project.technicalApproach}
                      </p>
                    </div>

                    {/* Safety Constraint Callout (Crucial for MediAssist & SafeSight-AI) */}
                    {project.safetyArchitectureNote && (
                      <div className="p-3.5 rounded-lg bg-[#252F34]/80 border-l-2 border-[#35B6A5] flex items-start gap-3">
                        <ShieldAlert className="w-5 h-5 text-[#35B6A5] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-mono font-semibold text-[#F1F5F4] uppercase block">
                            System Safety Architecture:
                          </span>
                          <p className="text-xs text-[#A8B5B2] mt-0.5 leading-relaxed">
                            {project.safetyArchitectureNote}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-chip text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & Repository Status */}
                    <div className="pt-4 border-t border-[#354147] flex flex-wrap items-center gap-4">
                      {project.isRepoPublic && project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-[#252F34] text-[#F1F5F4] border border-[#354147] hover:border-[#35B6A5] hover:text-[#35B6A5] transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Source Code</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </a>
                      ) : (
                        <div className="flex items-center gap-2 text-xs font-mono text-[#A8B5B2] bg-[#252F34] px-3.5 py-2 rounded-md border border-[#354147]">
                          <Github className="w-4 h-4 text-[#A8B5B2]" />
                          <span>{project.repoNotice || "Repository In Development"}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Authentic Component Status & Architecture */}
                  <div className="lg:col-span-5 flex flex-col">
                    <div className="rounded-xl bg-[#252F34] border border-[#354147] p-5 h-full flex flex-col">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#354147]">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#35B6A5]" />
                          <h4 className="font-heading font-bold text-sm text-[#F1F5F4]">
                            System Architecture Components
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono text-[#A8B5B2]">
                          Verification Status
                        </span>
                      </div>

                      {/* Component Status Legend */}
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#354147]/50 text-[10px] font-mono">
                        <span className="flex items-center gap-1 text-[#35B6A5]">
                          <CheckCircle className="w-3 h-3" /> Implemented
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400">
                          <Clock className="w-3 h-3" /> In Dev
                        </span>
                        <span className="flex items-center gap-1 text-[#A8B5B2]">
                          <CircleDot className="w-3 h-3" /> Planned
                        </span>
                      </div>

                      {/* Explicit Component Breakdown */}
                      <div className="space-y-2.5 overflow-y-auto max-h-[460px] pr-1">
                        {project.components?.map((comp, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 rounded-lg bg-[#20282D] border border-[#354147]/80 hover:border-[#35B6A5]/40 transition-colors"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="font-heading font-semibold text-xs text-[#F1F5F4] flex items-center gap-1.5">
                                {comp.name}
                              </span>
                              <span
                                className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${getStatusBadgeClass(
                                  comp.status
                                )}`}
                              >
                                {getStatusIcon(comp.status)}
                                {comp.status}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#A8B5B2] leading-relaxed">
                              {comp.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Architecture Disclaimer */}
                      <div className="mt-auto pt-3 border-t border-[#354147] text-[10px] font-mono text-[#A8B5B2] flex items-center gap-1.5">
                        <SlidersHorizontal className="w-3 h-3 text-[#35B6A5]" />
                        <span>All components tested under controlled evaluation.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Other Projects Grid (Secondary Featured + Academic ML & Mobile) */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-lg font-heading font-bold text-[#F1F5F4] mb-6 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-[#35B6A5]" />
              <span>Applied Systems & Academic Projects</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl bg-[#20282D] border border-[#354147] p-5 shadow-md flex flex-col justify-between hover:border-[#35B6A5]/50 transition-all group"
                >
                  <div>
                    {/* Category & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono text-[#35B6A5]">
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

                    {/* Components Preview if Available */}
                    {project.components && project.components.length > 0 && (
                      <div className="mb-4 p-2.5 rounded bg-[#252F34] border border-[#354147]/60 text-[11px] space-y-1">
                        <span className="text-[10px] font-mono text-[#F1F5F4] uppercase font-semibold block mb-1">
                          Key Subsystems:
                        </span>
                        {project.components.slice(0, 3).map((c, i) => (
                          <div key={i} className="flex items-center justify-between text-[#A8B5B2]">
                            <span className="truncate pr-2">{c.name}</span>
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#20282D] text-[#35B6A5]">
                              {c.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-chip text-[10px]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Repository Link */}
                    <div className="pt-3 border-t border-[#354147] flex items-center justify-between">
                      {project.isRepoPublic && project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#F1F5F4] hover:text-[#35B6A5] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>View Repository</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-[11px] font-mono text-[#A8B5B2]">
                          {project.repoNotice || "Research In Progress"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
