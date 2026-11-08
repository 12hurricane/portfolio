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
    Cpu: <Cpu className="w-5 h-5 text-[#35B6A5]" />,
    Database: <Database className="w-5 h-5 text-[#35B6A5]" />,
    Workflow: <Workflow className="w-5 h-5 text-[#35B6A5]" />,
    Server: <Server className="w-5 h-5 text-[#35B6A5]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#35B6A5]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-[#35B6A5]">01.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#A8B5B2] leading-relaxed">
            {personalInfo.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-[#A8B5B2]">
                {paragraph}
              </p>
            ))}

            {/* Core Engineering Philosophies */}
            <div className="mt-8 pt-6 border-t border-[#354147] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#20282D] border border-[#354147]">
                <div className="flex items-center gap-2 text-[#F1F5F4] font-heading font-semibold text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#35B6A5]" />
                  <span>Deterministic Safety</span>
                </div>
                <p className="text-xs text-[#A8B5B2] leading-relaxed">
                  Stochastic model outputs must always be bounded by deterministic validation rules, schema contracts, and clinical/business oversight.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#20282D] border border-[#354147]">
                <div className="flex items-center gap-2 text-[#F1F5F4] font-heading font-semibold text-sm mb-1.5">
                  <Layers className="w-4 h-4 text-[#35B6A5]" />
                  <span>Systems-Level Focus</span>
                </div>
                <p className="text-xs text-[#A8B5B2] leading-relaxed">
                  Moving beyond simple prompt engineering into stateful orchestration, high-throughput backend APIs, and distributed inference pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* "What I Focus On" Column */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#20282D] border border-[#354147] p-6 shadow-md">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#354147]">
                <h3 className="font-heading font-bold text-base text-[#F1F5F4] flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#35B6A5]" />
                  <span>What I Focus On</span>
                </h3>
                <span className="text-[11px] font-mono text-[#35B6A5]">Core Pillars</span>
              </div>

              <div className="space-y-4">
                {personalInfo.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3 rounded-lg bg-[#252F34] border border-[#354147]/60 hover:border-[#35B6A5]/50 transition-colors"
                  >
                    <div className="p-2 rounded bg-[#20282D] border border-[#354147] mt-0.5">
                      {iconMap[area.icon] || <Cpu className="w-5 h-5 text-[#35B6A5]" />}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-sm text-[#F1F5F4]">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#A8B5B2] mt-0.5 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
