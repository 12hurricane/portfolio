"use client";

import React, { useState } from "react";
import { demonstratedSkills, exploringSkills } from "@/data/portfolioData";
import {
  Code,
  Brain,
  Cpu,
  Server,
  Smartphone,
  Wrench,
  Search,
  CheckCircle2,
  Compass,
  Layers,
} from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<"demonstrated" | "exploring">("demonstrated");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code className="w-4 h-4 text-accent-primary" />,
    "AI & Machine Learning": <Brain className="w-4 h-4 text-accent-primary" />,
    "LLM Technologies & Frameworks": <Cpu className="w-4 h-4 text-accent-primary" />,
    "Backend Development": <Server className="w-4 h-4 text-accent-primary" />,
    "Mobile Development": <Smartphone className="w-4 h-4 text-accent-primary" />,
    "Development Tools & Environment": <Wrench className="w-4 h-4 text-accent-primary" />,
  };

  const filteredDemonstrated = demonstratedSkills
    .map((category) => ({
      ...category,
      skills: category.skills.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.skills.length > 0);

  const filteredExploring = exploringSkills.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Core":
        return "text-accent-primary bg-accent-surface border-accent-primary/30 font-semibold";
      case "Proficient":
        return "text-text-primary bg-bg-secondary border-border-subtle";
      case "Working Knowledge":
        return "text-text-muted bg-bg-secondary border-border-subtle";
      default:
        return "text-text-muted bg-bg-secondary border-border-subtle";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-bg-primary relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-accent-primary font-semibold">04.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
                Technical Capabilities Index
              </h2>
            </div>
            <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
              Code-verified competencies structured by engineering discipline. Concrete, evidence-backed capabilities without arbitrary percentage bars.
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search"
              name="skillsSearch"
              type="text"
              aria-label="Filter technologies and skills"
              placeholder="Filter e.g. Python, FastAPI, YOLO..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-bg-secondary border border-border-subtle text-xs font-mono text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-primary shadow-sm"
            />
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-4 mb-8 border-b border-border-subtle pb-3 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("demonstrated")}
            className={`pb-2 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "demonstrated"
                ? "border-accent-primary text-accent-primary font-semibold"
                : "border-transparent text-text-muted hover:text-text-primary"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Demonstrated in Projects ({demonstratedSkills.reduce((acc, c) => acc + c.skills.length, 0)})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("exploring")}
            className={`pb-2 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "exploring"
                ? "border-accent-primary text-accent-primary font-semibold"
                : "border-transparent text-text-muted hover:text-text-primary"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Active Research &amp; Evaluation ({exploringSkills.length})</span>
          </button>
        </div>

        {/* Tab 1: Demonstrated Skills Table/Index */}
        {activeTab === "demonstrated" && (
          <div className="space-y-8">
            <div className="divide-y divide-border-subtle border-y border-border-subtle">
              {filteredDemonstrated.map((group, idx) => (
                <div
                  key={idx}
                  className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                >
                  {/* Category Title & Icon */}
                  <div className="md:col-span-4 flex items-center gap-2.5">
                    <span className="p-2 rounded bg-bg-secondary border border-border-subtle shadow-sm">
                      {categoryIcons[group.category] || <Layers className="w-4 h-4 text-accent-primary" />}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-text-muted">
                        {group.skills.length} verified technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Inline Chips & Badges */}
                  <div className="md:col-span-8 flex flex-wrap gap-2 items-center">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-bg-secondary border border-border-subtle hover:border-accent-primary transition-colors shadow-sm"
                      >
                        <span className="text-xs font-mono font-medium text-text-primary">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.2 rounded border ${getLevelBadge(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Exploring Skills */}
        {activeTab === "exploring" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExploring.map((exp, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-bg-secondary border border-border-subtle space-y-3 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-accent-primary" />
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-text-primary">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
                <div className="pt-3 border-t border-border-subtle text-[11px] font-mono text-text-muted">
                  <span className="text-accent-primary block font-medium mb-0.5">
                    Current focus:
                  </span>
                  <span>{exp.currentFocus}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnote: Verifiable Standards */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-text-muted gap-2 border-t border-border-subtle">
          <span>Proficiency Levels: <strong className="text-accent-primary">Core</strong> (production / primary architecture), <strong className="text-text-primary">Proficient</strong> (active codebase integration), <strong className="text-text-muted">Working Knowledge</strong> (functional use).</span>
          <span className="text-accent-primary font-medium">Evaluated in Source Repos</span>
        </div>
      </div>
    </section>
  );
}
