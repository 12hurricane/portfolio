"use client";

import React from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Cpu,
  Database,
  Workflow,
  Server,
  Eye,
} from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-4 h-4 text-accent-primary" />,
    Database: <Database className="w-4 h-4 text-accent-primary" />,
    Workflow: <Workflow className="w-4 h-4 text-accent-primary" />,
    Server: <Server className="w-4 h-4 text-accent-primary" />,
    Eye: <Eye className="w-4 h-4 text-accent-primary" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-primary relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
            About Me &amp; Engineering Focus
          </h2>
          <div className="h-[1px] bg-border-subtle flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-text-secondary leading-relaxed max-w-[62ch]">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Priorities Callouts */}
            <div className="pt-6 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-bg-secondary border border-border-subtle space-y-1 hover:-translate-y-0.5 transition-transform duration-200">
                <span className="font-heading font-semibold text-sm text-text-primary block">
                  Deterministic Boundaries
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Stochastic model outputs are bounded with explicit schema contracts, database constraints, and validation logic.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-bg-secondary border border-border-subtle space-y-1 hover:-translate-y-0.5 transition-transform duration-200">
                <span className="font-heading font-semibold text-sm text-text-primary block">
                  Systems Over Prompts
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  Focusing on end-to-end reliability: pipeline orchestration, latency considerations on target devices, and testable components.
                </p>
              </div>
            </div>

            {/* Visual Engineering Architecture Diagram Card (Taste Skill Visual) */}
            <div className="p-5 rounded-lg bg-bg-secondary border border-border-subtle space-y-3 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-border-subtle font-mono text-xs text-text-muted">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-text-primary font-medium">pipeline-verification.ts</span>
                </div>
                <span>Deterministic Gate</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1 font-mono text-xs divide-y sm:divide-y-0 sm:divide-x divide-border-subtle">
                <div className="space-y-1 sm:pr-4">
                  <span className="text-xs text-accent-primary font-medium block">Extraction Stage</span>
                  <span className="text-text-primary font-semibold block text-xs">Local LLM</span>
                  <span className="text-xs text-text-muted block">Ollama / Python</span>
                </div>
                <div className="space-y-1 pt-2 sm:pt-0 sm:px-4">
                  <span className="text-xs text-accent-primary font-medium block">Validation Gate</span>
                  <span className="text-text-primary font-semibold block text-xs">Pydantic Schema</span>
                  <span className="text-xs text-text-muted block">Strict Type Rules</span>
                </div>
                <div className="space-y-1 pt-2 sm:pt-0 sm:pl-4">
                  <span className="text-xs text-accent-primary font-medium block">Persistence State</span>
                  <span className="text-text-primary font-semibold block text-xs">PostgreSQL</span>
                  <span className="text-xs text-text-muted block">ACID Guarantees</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Domains List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-3 border-b border-border-subtle flex items-center justify-between">
              <span className="font-mono text-xs text-text-muted">
                Technical domains
              </span>
              <span className="font-mono text-xs text-text-muted">
                Applied engineering
              </span>
            </div>

            <div className="divide-y divide-border-subtle">
              {personalInfo.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="text-accent-primary shrink-0">
                      {iconMap[area.icon] || <Cpu className="w-4 h-4 text-accent-primary" />}
                    </span>
                    <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary pl-6 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
