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
    "Programming Languages": <Code className="w-4 h-4 text-[#35B6A5]" />,
    "AI & Machine Learning": <Brain className="w-4 h-4 text-[#35B6A5]" />,
    "LLM Technologies & Frameworks": <Cpu className="w-4 h-4 text-[#35B6A5]" />,
    "Backend Development": <Server className="w-4 h-4 text-[#35B6A5]" />,
    "Mobile Development": <Smartphone className="w-4 h-4 text-[#35B6A5]" />,
    "Development Tools & Environment": <Wrench className="w-4 h-4 text-[#35B6A5]" />,
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
        return "text-[#35B6A5] bg-[#35B6A5]/10 border-[#35B6A5]/30";
      case "Proficient":
        return "text-[#75C9BB] bg-[#75C9BB]/10 border-[#75C9BB]/20";
      case "Working Knowledge":
        return "text-[#A8B5B2] bg-[#20282D] border-[#354147]";
      default:
        return "text-[#A8B5B2] bg-[#20282D] border-[#354147]";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-[#35B6A5]">04.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
                Technical Capabilities Index
              </h2>
            </div>
            <p className="text-sm text-[#A8B5B2] max-w-2xl leading-relaxed">
              Code-verified competencies structured by engineering discipline. Concrete, evidence-backed capabilities without arbitrary percentage bars.
            </p>
          </div>

          {/* Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#A8B5B2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search"
              name="skillsSearch"
              type="text"
              aria-label="Filter technologies and skills"
              placeholder="Filter e.g. Python, FastAPI, YOLO..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#20282D] border border-[#354147] text-xs font-mono text-[#F1F5F4] placeholder-[#A8B5B2]/60 focus:outline-none focus:border-[#35B6A5]"
            />
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-4 mb-8 border-b border-[#354147] pb-3 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("demonstrated")}
            className={`pb-2 border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === "demonstrated"
                ? "border-[#35B6A5] text-[#35B6A5] font-semibold"
                : "border-transparent text-[#A8B5B2] hover:text-[#F1F5F4]"
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
                ? "border-[#35B6A5] text-[#35B6A5] font-semibold"
                : "border-transparent text-[#A8B5B2] hover:text-[#F1F5F4]"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Active Research &amp; Evaluation ({exploringSkills.length})</span>
          </button>
        </div>

        {/* Tab 1: Demonstrated Skills Table/Index (Eliminates repetitive card boxes) */}
        {activeTab === "demonstrated" && (
          <div className="space-y-8">
            <div className="divide-y divide-[#354147] border-y border-[#354147]">
              {filteredDemonstrated.map((group, idx) => (
                <div
                  key={idx}
                  className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
                >
                  {/* Category Title & Icon */}
                  <div className="md:col-span-4 flex items-center gap-2.5">
                    <span className="p-2 rounded bg-[#20282D] border border-[#354147]">
                      {categoryIcons[group.category] || <Layers className="w-4 h-4 text-[#35B6A5]" />}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-[#F1F5F4]">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#A8B5B2]">
                        {group.skills.length} verified technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Inline Chips & Badges */}
                  <div className="md:col-span-8 flex flex-wrap gap-2 items-center">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#20282D] border border-[#354147] hover:border-[#35B6A5]/50 transition-colors"
                      >
                        <span className="text-xs font-mono font-medium text-[#F1F5F4]">
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
                className="p-5 rounded-xl bg-[#20282D] border border-[#354147] space-y-3"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#35B6A5]" />
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-[#F1F5F4]">
                    {exp.title}
                  </h3>
                </div>
                <p className="text-xs text-[#A8B5B2] leading-relaxed">
                  {exp.description}
                </p>
                <div className="pt-3 border-t border-[#354147] text-[11px] font-mono text-[#A8B5B2]">
                  <span className="text-[#35B6A5] block font-medium mb-0.5">
                    Current focus:
                  </span>
                  <span>{exp.currentFocus}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footnote: Verifiable Standards */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs font-mono text-[#A8B5B2] gap-2 border-t border-[#354147]/60">
          <span>Proficiency Levels: <strong className="text-[#35B6A5]">Core</strong> (production / primary architecture), <strong className="text-[#75C9BB]">Proficient</strong> (active codebase integration), <strong className="text-[#F1F5F4]">Working Knowledge</strong> (functional use).</span>
          <span className="text-[#35B6A5]">Evaluated in Source Repos</span>
        </div>
      </div>
    </section>
  );
}
