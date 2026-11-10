"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [emailCopyError, setEmailCopyError] = useState(false);
  const [actionStatus, setActionStatus] = useState<{
    type: "clipboard" | "mailto" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    field: "name" | "email" | "subject" | "message",
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Reset stale action status when form values change
    if (actionStatus.type !== null) {
      setActionStatus({ type: null, message: "" });
    }
    // Clear field error as user types
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters describing your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmailAddress = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(personalInfo.email);
        setCopiedEmail(true);
        setEmailCopyError(false);
        setTimeout(() => setCopiedEmail(false), 2500);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      setEmailCopyError(true);
      setCopiedEmail(false);
      setTimeout(() => setEmailCopyError(false), 3500);
    }
  };

  const handleOpenMailto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subjectEncoded = encodeURIComponent(
      formData.subject.trim() || `Inquiry from ${formData.name.trim()}`
    );
    const bodyEncoded = encodeURIComponent(
      `Hello Tariq,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()} (${formData.email.trim()})`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    window.location.href = mailtoUrl;

    setActionStatus({
      type: "mailto",
      message: "Opening your local email client with your prefilled draft.",
    });
  };

  const handleCopyToClipboard = async () => {
    if (!validate()) return;

    const formatted = `To: ${personalInfo.email}\nSubject: ${
      formData.subject.trim() || `Inquiry from ${formData.name.trim()}`
    }\n\nMessage:\n${formData.message.trim()}\n\n---\nFrom: ${formData.name.trim()} (${formData.email.trim()})`;

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(formatted);
        setActionStatus({
          type: "clipboard",
          message:
            "Draft successfully copied to clipboard! You can paste it directly into Gmail, Outlook, or your preferred webmail.",
        });
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      setActionStatus({
        type: "error",
        message:
          "Clipboard access was blocked or unavailable in this browser environment. Please use 'Open in Email Client' or email directly.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-sm text-[#35B6A5]">05.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            Get in Touch
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F1F5F4] leading-snug">
                Have an AI Project or an Interesting Problem to Solve?
              </h3>
              <p className="mt-3 text-sm text-[#A8B5B2] leading-relaxed">
                I&apos;m interested in connecting with developers, researchers, founders, and organizations working on AI-powered applications and intelligent systems.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#20282D] border border-[#354147] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#252F34] border border-[#354147] flex items-center justify-center text-[#35B6A5]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A8B5B2] block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-[#F1F5F4] hover:text-[#35B6A5] transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmailAddress}
                  className="px-2.5 py-1.5 rounded bg-[#252F34] border border-[#354147] text-xs font-mono text-[#A8B5B2] hover:text-[#35B6A5] hover:border-[#35B6A5] flex items-center gap-1.5 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#35B6A5]" />
                      <span className="text-[#35B6A5]">Copied</span>
                    </>
                  ) : emailCopyError ? (
                    <>
                      <AlertCircle className="w-3.5 h-3.5 text-yellow-400" />
                      <span className="text-yellow-400">Failed</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#20282D] border border-[#354147] flex items-center justify-between hover:border-[#35B6A5] transition-colors group"
                aria-label="Tariq Khattak LinkedIn profile"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#252F34] border border-[#354147] flex items-center justify-center text-[#35B6A5]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A8B5B2] block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#F1F5F4] group-hover:text-[#35B6A5] transition-colors">
                      in/tariq-khattak-43b923257
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A8B5B2] group-hover:text-[#35B6A5]" />
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#20282D] border border-[#354147] flex items-center justify-between hover:border-[#35B6A5] transition-colors group"
                aria-label="Tariq Khattak GitHub profile"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#252F34] border border-[#354147] flex items-center justify-center text-[#35B6A5]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#A8B5B2] block">
                      GitHub Repositories
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#F1F5F4] group-hover:text-[#35B6A5] transition-colors">
                      github.com/12hurricane
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A8B5B2] group-hover:text-[#35B6A5]" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#20282D] border border-[#354147] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#252F34] border border-[#354147] flex items-center justify-center text-[#35B6A5]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#A8B5B2] block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm text-[#F1F5F4]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Transparent Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#20282D] border border-[#354147] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#354147]">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#35B6A5]" />
                  <h4 className="font-heading font-bold text-base text-[#F1F5F4]">
                    Send a Message
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-[#A8B5B2]">
                  Direct Dispatch
                </span>
              </div>

              <form onSubmit={handleOpenMailto} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-[#A8B5B2] mb-1.5"
                    >
                      Your Name <span className="text-[#35B6A5]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#252F34] border border-[#354147] text-sm text-[#F1F5F4] placeholder-[#A8B5B2]/50 focus:outline-none focus:border-[#35B6A5]"
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="text-[11px] text-red-400 mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-[#A8B5B2] mb-1.5"
                    >
                      Your Email Address <span className="text-[#35B6A5]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      maxLength={100}
                      autoComplete="email"
                      placeholder="alex@organization.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#252F34] border border-[#354147] text-sm text-[#F1F5F4] placeholder-[#A8B5B2]/50 focus:outline-none focus:border-[#35B6A5]"
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="text-[11px] text-red-400 mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-[#A8B5B2] mb-1.5"
                  >
                    Subject / Discussion Topic
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    maxLength={150}
                    placeholder="e.g. Collaboration on AI Architecture / MediAssist"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#252F34] border border-[#354147] text-sm text-[#F1F5F4] placeholder-[#A8B5B2]/50 focus:outline-none focus:border-[#35B6A5]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-[#A8B5B2] mb-1.5"
                  >
                    Your Message <span className="text-[#35B6A5]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    minLength={15}
                    maxLength={3000}
                    placeholder="Describe your inquiry, project scope, or technical questions..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#252F34] border border-[#354147] text-sm text-[#F1F5F4] placeholder-[#A8B5B2]/50 focus:outline-none focus:border-[#35B6A5] resize-none"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="text-[11px] text-red-400 mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Feedback Banner */}
                {actionStatus.message && (
                  <div
                    className={`p-3 rounded-lg text-xs font-mono border flex items-center gap-2 ${
                      actionStatus.type === "clipboard" || actionStatus.type === "mailto"
                        ? "bg-[#252F34] text-[#35B6A5] border-[#35B6A5]/40"
                        : "bg-red-950/40 text-red-400 border-red-800"
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {actionStatus.type === "error" ? (
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    ) : (
                      <Check className="w-4 h-4 shrink-0 text-[#35B6A5]" />
                    )}
                    <span>{actionStatus.message}</span>
                  </div>
                )}

                {/* Submission Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs sm:text-sm font-semibold bg-[#35B6A5] text-[#171C20] hover:bg-[#75C9BB] transition-colors shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyToClipboard}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium bg-[#252F34] text-[#F1F5F4] border border-[#354147] hover:border-[#35B6A5] hover:text-[#35B6A5] transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copy Formatted Message</span>
                  </button>
                </div>

                {/* Engineering Notice: No Fake Submission */}
                <p className="text-[11px] font-mono text-[#A8B5B2] pt-2">
                  * Note: Prepares your message directly in your local email client or copies it to your clipboard. No unauthenticated database writes or third-party tracking.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
