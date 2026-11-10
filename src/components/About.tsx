import React from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Cpu,
  Database,
  Workflow,
  Server,
  Terminal,
  ShieldCheck,
  Code2,
  Layers,
} from "lucide-react";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-4 h-4 text-[#35B6A5]" />,
    Database: <Database className="w-4 h-4 text-[#35B6A5]" />,
    Workflow: <Workflow className="w-4 h-4 text-[#35B6A5]" />,
    Server: <Server className="w-4 h-4 text-[#35B6A5]" />,
    Terminal: <Terminal className="w-4 h-4 text-[#35B6A5]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm text-[#35B6A5]">01.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            Engineering Identity &amp; Systems Philosophy
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative with Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#A8B5B2] leading-relaxed">
              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-[#A8B5B2]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Editorial Highlight Quotes (Breaking card boxes with hairline borders & typographic rhythm) */}
            <div className="pt-6 border-t border-[#354147] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-2 border-[#35B6A5] pl-4 space-y-1">
                <span className="font-heading font-bold text-sm text-[#F1F5F4] block">
                  Deterministic Boundaries
                </span>
                <p className="text-xs text-[#A8B5B2] leading-relaxed">
                  Stochastic model outputs must be bounded by deterministic validation rules, strict schema contracts, and relational persistence.
                </p>
              </div>

              <div className="border-l-2 border-[#75C9BB] pl-4 space-y-1">
                <span className="font-heading font-bold text-sm text-[#F1F5F4] block">
                  Systems Over Prompts
                </span>
                <p className="text-xs text-[#A8B5B2] leading-relaxed">
                  Moving past simple prompt wrappers into asynchronous pipeline orchestration, edge device latency constraints, and reproducible evaluation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Capability Matrix (No repetitive boxed cards) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-3 border-b border-[#354147] flex items-center justify-between">
              <span className="font-mono text-xs uppercase text-[#35B6A5] tracking-wider">
                Active Technical Domains
              </span>
              <span className="text-[11px] font-mono text-[#A8B5B2]">
                Applied Engineering
              </span>
            </div>

            <div className="divide-y divide-[#354147]/60">
              {personalInfo.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="py-3.5 first:pt-0 last:pb-0 group transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#35B6A5] group-hover:translate-x-0.5 transition-transform">
                      {iconMap[area.icon] || <Cpu className="w-4 h-4 text-[#35B6A5]" />}
                    </span>
                    <h3 className="font-heading font-semibold text-sm text-[#F1F5F4] group-hover:text-[#35B6A5] transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#A8B5B2] pl-6 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#354147] flex items-center justify-between text-[11px] font-mono text-[#A8B5B2]">
              <span>Verification Method:</span>
              <span className="text-[#35B6A5]">Controlled Bench &amp; Code Repos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
