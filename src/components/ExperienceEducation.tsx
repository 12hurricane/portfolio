"use client";

import React from "react";
import { experienceInfo, educationInfo } from "@/data/portfolioData";
import { MapPin, CheckCircle2, BookOpen } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-bg-subtle relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-accent-primary font-medium">02</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="h-[1px] bg-border-subtle flex-grow ml-4 max-w-xs" />
        </div>

        {/* Editorial Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border-subtle space-y-16 max-w-4xl">
          {/* Item 1: Active Internship at TechCitySoft */}
          <div className="relative">
            {/* Static Solid Timeline Dot */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-primary flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="text-xs font-mono text-accent-primary bg-accent-surface px-2.5 py-0.5 rounded-md border border-accent-primary/20">
                2026 — Present · Active Internship
              </span>
              <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-primary" />
                {experienceInfo.arrangement}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
              {experienceInfo.role}
              <span className="text-accent-primary font-normal"> @ {experienceInfo.organization}</span>
            </h3>

            <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-3xl">
              {experienceInfo.summary}
            </p>

            {/* Responsibilities List */}
            <div className="mt-5 space-y-2 max-w-3xl">
              <span className="text-xs font-mono text-text-primary block font-medium">
                Key responsibilities:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {experienceInfo.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Item 2: B.S. Software Engineering at CECOS University */}
          <div className="relative">
            {/* Static Solid Timeline Dot */}
            <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-border-subtle flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
            </div>

            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <span className="text-xs font-mono text-text-muted bg-bg-secondary px-2.5 py-0.5 rounded-md border border-border-subtle">
                2023 — 2027 · Expected Graduation
              </span>
              <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                <MapPin className="w-3 h-3 text-accent-primary" />
                {educationInfo.location}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
              {educationInfo.degree}
              <span className="text-text-muted font-normal"> @ {educationInfo.institution}</span>
            </h3>

            <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-3xl">
              {educationInfo.academicNote}
            </p>

            {/* Coursework Tags */}
            <div className="mt-5 space-y-2 max-w-3xl">
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-primary font-medium">
                <BookOpen className="w-3.5 h-3.5 text-accent-primary" />
                <span>Relevant software engineering coursework:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {educationInfo.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-bg-secondary text-xs font-mono text-text-secondary border border-border-subtle"
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
