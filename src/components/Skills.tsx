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

  const filteredDemonstrated = demonstratedSkills.map((category) => ({
    ...category,
    skills: category.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0);

  const filteredExploring = exploringSkills.filter(
    (exp) =>
      exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Core":
        return "bg-[#35B6A5]/15 text-[#35B6A5] border-[#35B6A5]/30";
      case "Proficient":
        return "bg-[#75C9BB]/10 text-[#75C9BB] border-[#75C9BB]/20";
      case "Working Knowledge":
        return "bg-[#A8B5B2]/10 text-[#A8B5B2] border-[#A8B5B2]/20";
      default:
        return "bg-[#252F34] text-[#A8B5B2] border-[#354147]";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#20282D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-[#35B6A5]">04.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
                Technical Skills & Proficiency
              </h2>
            </div>
            <p className="text-sm text-[#A8B5B2] max-w-2xl">
              Grounded, authentic evaluation of technical capabilities. Separating code-verified production skills from technologies under active exploration.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#A8B5B2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="skills-search"
              name="skillsSearch"
              type="text"
              aria-label="Filter technologies and skills"
              placeholder="Filter technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#252F34] border border-[#354147] text-xs font-mono text-[#F1F5F4] placeholder-[#A8B5B2] focus:outline-none focus:border-[#35B6A5]"
            />
          </div>
        </div>

        {/* Tab Controls: Demonstrated vs Exploring */}
        <div className="flex items-center gap-3 mb-8 border-b border-[#354147] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("demonstrated")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-mono font-medium transition-colors ${
              activeTab === "demonstrated"
                ? "bg-[#35B6A5] text-[#171C20] font-semibold shadow-sm"
                : "text-[#A8B5B2] hover:text-[#F1F5F4] hover:bg-[#252F34]"
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Demonstrated Skills ({demonstratedSkills.reduce((acc, c) => acc + c.skills.length, 0)})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("exploring")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs sm:text-sm font-mono font-medium transition-colors ${
              activeTab === "exploring"
                ? "bg-[#35B6A5] text-[#171C20] font-semibold shadow-sm"
                : "text-[#A8B5B2] hover:text-[#F1F5F4] hover:bg-[#252F34]"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Currently Exploring ({exploringSkills.length})</span>
          </button>
        </div>

        {/* View 1: Demonstrated Skills */}
        {activeTab === "demonstrated" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDemonstrated.map((category, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#252F34] border border-[#354147] p-5 shadow-sm hover:border-[#35B6A5]/50 transition-colors"
              >
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-[#354147]">
                  {categoryIcons[category.category] || <Cpu className="w-4 h-4 text-[#35B6A5]" />}
                  <h3 className="font-heading font-bold text-sm text-[#F1F5F4]">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-2 rounded bg-[#20282D] border border-[#354147]/60"
                    >
                      <span className="text-xs text-[#F1F5F4] font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${getLevelBadgeClass(
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
        )}

        {/* View 2: Currently Exploring / Forward-Looking Areas */}
        {activeTab === "exploring" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExploring.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#252F34] border border-[#354147] p-5 shadow-sm flex flex-col justify-between hover:border-[#35B6A5]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Compass className="w-4 h-4 text-[#35B6A5]" />
                    <h3 className="font-heading font-bold text-sm text-[#F1F5F4]">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A8B5B2] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#354147] bg-[#20282D] -mx-5 -mb-5 p-4 rounded-b-xl">
                  <span className="text-[10px] font-mono font-medium text-[#35B6A5] block mb-1">
                    Current focus:
                  </span>
                  <p className="text-xs font-mono text-[#F1F5F4]">
                    {exp.currentFocus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transparency Footnote */}
        <div className="mt-10 p-4 rounded-lg bg-[#252F34]/60 border border-[#354147] flex items-center justify-between text-xs font-mono text-[#A8B5B2]">
          <span>
            Proficiency definitions: <strong className="text-[#35B6A5]">Core</strong> (applied in key projects &amp; daily workflows), <strong className="text-[#75C9BB]">Proficient</strong> (solid working competency), <strong className="text-[#F1F5F4]">Working Knowledge</strong> (functional integration).
          </span>
          <span className="hidden sm:inline text-[#35B6A5]">Zero Arbitrary Percentages</span>
        </div>
      </div>
    </section>
  );
}
