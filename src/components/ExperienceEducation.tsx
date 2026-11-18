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

        {/* Structured Institutional Cards (Visual System & Clean Grid Alignment) */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl">
          {/* Card 1: Active Internship at TechCitySoft */}
          <div className="rounded-lg bg-bg-secondary border border-border-subtle p-6 sm:p-8 space-y-5 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-accent-primary bg-accent-surface px-2.5 py-0.5 rounded-md border border-accent-primary/20 font-medium">
                  Active Internship · 2026 — Present
                </span>
                <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                  {experienceInfo.arrangement}
                </span>
              </div>
              <span className="text-xs font-mono text-text-muted">Peshawar, Pakistan</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                {experienceInfo.role}
                <span className="text-accent-primary font-normal"> @ {experienceInfo.organization}</span>
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                {experienceInfo.summary}
              </p>
            </div>

            {/* Responsibilities List */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-mono text-text-primary block font-medium">
                Engineering contributions:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {experienceInfo.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: B.S. Software Engineering at CECOS University */}
          <div className="rounded-lg bg-bg-secondary border border-border-subtle p-6 sm:p-8 space-y-5 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border-subtle">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-text-secondary bg-bg-subtle px-2.5 py-0.5 rounded-md border border-border-subtle font-medium">
                  B.S. Software Engineering · 2023 — 2027
                </span>
                <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                  {educationInfo.location}
                </span>
              </div>
              <span className="text-xs font-mono text-text-muted">Expected 2027</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                {educationInfo.degree}
                <span className="text-text-muted font-normal"> @ {educationInfo.institution}</span>
              </h3>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                {educationInfo.academicNote}
              </p>
            </div>

            {/* Coursework Tags */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-text-primary font-medium">
                <BookOpen className="w-3.5 h-3.5 text-accent-primary" />
                <span>Core coursework:</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {educationInfo.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-bg-primary text-xs font-mono text-text-secondary border border-border-subtle"
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
