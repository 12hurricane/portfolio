import React from "react";
import { experienceInfo, educationInfo } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#1B2125] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-sm text-[#35B6A5]">02.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        {/* Editorial Timeline (Replaces repetitive boxed cards with an architectural timeline) */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#354147] space-y-16 max-w-4xl">
          {/* Item 1: Active Internship at TechCitySoft */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#1B2125] border-2 border-[#35B6A5] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35B6A5] animate-ping" />
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="text-xs font-mono text-[#35B6A5] bg-[#35B6A5]/10 px-2.5 py-0.5 rounded border border-[#35B6A5]/30">
                2026 — Present · Active Internship
              </span>
              <span className="text-xs font-mono text-[#A8B5B2] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#35B6A5]" />
                {experienceInfo.arrangement}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F1F5F4]">
              {experienceInfo.role}
              <span className="text-[#35B6A5] font-normal"> @ {experienceInfo.organization}</span>
            </h3>

            <p className="text-sm text-[#A8B5B2] mt-3 leading-relaxed max-w-3xl">
              {experienceInfo.summary}
            </p>

            {/* Verified Workflows List */}
            <div className="mt-5 space-y-2 max-w-3xl">
              <span className="text-xs font-mono text-[#F1F5F4] block font-medium">
                Verified responsibilities &amp; workflows:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {experienceInfo.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#A8B5B2]">
                    <CheckCircle2 className="w-4 h-4 text-[#35B6A5] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 2: B.S. Software Engineering at CECOS University */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#1B2125] border-2 border-[#75C9BB] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75C9BB]" />
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="text-xs font-mono text-[#A8B5B2] bg-[#20282D] px-2.5 py-0.5 rounded border border-[#354147]">
                2023 — 2027 · Expected Graduation
              </span>
              <span className="text-xs font-mono text-[#A8B5B2] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#35B6A5]" />
                {educationInfo.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F1F5F4]">
              {educationInfo.degree}
              <span className="text-[#75C9BB] font-normal"> @ {educationInfo.institution}</span>
            </h3>

            <p className="text-sm text-[#A8B5B2] mt-3 leading-relaxed max-w-3xl">
              {educationInfo.academicNote}
            </p>

            {/* Coursework Tags */}
            <div className="mt-5 space-y-2 max-w-3xl">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#F1F5F4] font-medium">
                <BookOpen className="w-3.5 h-3.5 text-[#35B6A5]" />
                <span>Foundational systems &amp; software coursework:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {educationInfo.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#20282D] text-xs font-mono text-[#A8B5B2] border border-[#354147]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
