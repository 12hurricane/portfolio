import React from "react";
import { experienceInfo, educationInfo } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, BookOpen } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#20282D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-sm text-[#35B6A5]">02.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            Experience & Education
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <Briefcase className="w-5 h-5 text-[#35B6A5]" />
              <h3 className="font-heading font-bold text-lg text-[#F1F5F4]">
                Professional Experience
              </h3>
            </div>

            <div className="rounded-xl bg-[#252F34] border border-[#354147] p-6 shadow-md transition-all hover:border-[#35B6A5]/50">
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-2 pb-4 border-b border-[#354147]">
                <div>
                  <h4 className="font-heading font-bold text-lg text-[#F1F5F4]">
                    {experienceInfo.role}
                  </h4>
                  <p className="text-sm font-medium text-[#35B6A5] mt-0.5">
                    {experienceInfo.organization}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono bg-[#20282D] text-[#35B6A5] border border-[#354147]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35B6A5] animate-pulse" />
                    {experienceInfo.status}
                  </span>
                  <span className="text-[11px] font-mono text-[#A8B5B2] mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#35B6A5]" />
                    {experienceInfo.arrangement}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#A8B5B2] mt-4 leading-relaxed">
                {experienceInfo.summary}
              </p>

              {/* Verified Responsibilities */}
              <div className="mt-5 space-y-2.5">
                <p className="text-xs font-mono font-semibold text-[#F1F5F4] tracking-wide uppercase">
                  Verified Responsibilities & Workflows:
                </p>
                <ul className="space-y-2">
                  {experienceInfo.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A8B5B2]">
                      <CheckCircle2 className="w-4 h-4 text-[#35B6A5] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Grounded Note */}
              <div className="mt-5 pt-4 border-t border-[#354147] flex items-center justify-between text-[11px] font-mono text-[#A8B5B2]">
                <span>Engineering Focus: AI Safety & Backend API Integration</span>
                <span className="text-[#35B6A5]">Active Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2">
              <GraduationCap className="w-5 h-5 text-[#35B6A5]" />
              <h3 className="font-heading font-bold text-lg text-[#F1F5F4]">
                Education
              </h3>
            </div>

            <div className="rounded-xl bg-[#252F34] border border-[#354147] p-6 shadow-md transition-all hover:border-[#35B6A5]/50">
              <div className="flex items-start justify-between gap-2 pb-4 border-b border-[#354147]">
                <div>
                  <h4 className="font-heading font-bold text-base text-[#F1F5F4]">
                    {educationInfo.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#35B6A5] mt-0.5">
                    {educationInfo.institution}
                  </p>
                  <p className="text-xs text-[#A8B5B2] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-[#35B6A5]" />
                    {educationInfo.location}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#20282D] text-[#F1F5F4] border border-[#354147]">
                    Exp. {educationInfo.expectedGraduation}
                  </span>
                  <span className="text-[11px] font-mono text-[#35B6A5] mt-1">
                    {educationInfo.status}
                  </span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-4">
                <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#F1F5F4] uppercase mb-2.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#35B6A5]" />
                  <span>Relevant Academic Coursework</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {educationInfo.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-[#20282D] text-[11px] font-mono text-[#A8B5B2] border border-[#354147]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#A8B5B2] mt-4 pt-3 border-t border-[#354147] leading-relaxed">
                {educationInfo.academicNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
