"use client";

import React, { useState } from "react";
import { blogDrafts, ArticleDraft } from "@/data/portfolioData";
import {
  BookOpen,
  Clock,
  Tag,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  FileEdit,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function Blog() {
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(null);

  const toggleArticle = (id: string) => {
    setExpandedArticleId(expandedArticleId === id ? null : id);
  };

  return (
    <section id="writing" className="py-20 md:py-28 bg-[#20282D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-sm text-[#35B6A5]">06.</span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
                Technical Writing &amp; Research Outlines
              </h2>
            </div>
            <p className="text-sm text-[#A8B5B2] max-w-2xl">
              Architectural explorations and planned engineering articles focusing on RAG, local LLMs, deterministic AI safety, and agent orchestration.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#252F34] border border-[#354147] text-xs font-mono text-[#35B6A5]">
            <FileEdit className="w-3.5 h-3.5" />
            <span>Planned Drafts &amp; Research Topics</span>
          </div>
        </div>

        {/* Editorial Notice Badge */}
        <div className="mb-8 p-4 rounded-xl bg-[#252F34] border border-[#354147] text-xs text-[#A8B5B2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#35B6A5]" />
            <span>
              <strong>Editorial Transparency:</strong> The following articles are active research topics and drafts in progress. Publication begins as empirical benchmarks and system evaluations are verified.
            </span>
          </div>
          <span className="hidden sm:inline font-mono text-[#35B6A5]">7 Planned Articles</span>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogDrafts.map((article) => {
            const isExpanded = expandedArticleId === article.id;
            return (
              <div
                key={article.id}
                className="rounded-xl bg-[#252F34] border border-[#354147] p-6 shadow-sm hover:border-[#35B6A5]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Status & Reading Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#20282D] text-yellow-400 border border-yellow-400/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                      {article.status}
                    </span>
                    <span className="text-[11px] font-mono text-[#A8B5B2] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#35B6A5]" />
                      {article.estimatedReadingTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#F1F5F4] leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8B5B2] leading-relaxed mb-4">
                    {article.synopsis}
                  </p>

                  {/* Expanded Content: Core Architectural Questions */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-[#354147] bg-[#20282D] -mx-6 px-6 py-4 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#35B6A5] uppercase">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Core Engineering Questions Explored:</span>
                      </div>
                      <ul className="space-y-2">
                        {article.coreEngineeringQuestions.map((q, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-[#A8B5B2] flex items-start gap-2 pl-1"
                          >
                            <span className="text-[#35B6A5] font-mono font-bold">›</span>
                            <span>{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-[#354147] flex items-center justify-between mt-4">
                  {/* Key Themes Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {article.keyThemes.slice(0, 2).map((theme, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#20282D] text-[#A8B5B2] border border-[#354147]"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  {/* Expand / Collapse Button */}
                  <button
                    type="button"
                    onClick={() => toggleArticle(article.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#35B6A5] hover:text-[#75C9BB] transition-colors"
                  >
                    <span>{isExpanded ? "Collapse Outline" : "View Outline"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
