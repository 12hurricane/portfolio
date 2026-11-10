import React from "react";
import {
  Network,
  Bot,
  Share2,
  Boxes,
  Activity,
  Cpu,
  ShieldCheck,
  Eye,
  ArrowUpRight,
} from "lucide-react";

export default function Interests() {
  const interests = [
    {
      title: "Multi-Agent Systems",
      icon: <Network className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Orchestrating cooperative and competitive subagent graphs with verifiable communication protocols, decentralized state management, and dead-lock prevention.",
      focusArea: "LangGraph, consensus protocols, inter-agent messaging",
    },
    {
      title: "Agentic AI",
      icon: <Bot className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Autonomous goal-directed execution loops that decompose complex human requests, dynamically choose tools, self-correct upon failure, and verify outputs.",
      focusArea: "Tool synthesis, structured planning, reflection loops",
    },
    {
      title: "Distributed AI Systems",
      icon: <Share2 className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Designing infrastructure capable of parallelizing inference, coordinating distributed workers, and streaming model responses across network boundaries.",
      focusArea: "Asynchronous task queues, low-latency IPC, worker nodes",
    },
    {
      title: "Microservices Architecture",
      icon: <Boxes className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Isolating resource-intensive AI model serving from user-facing CRUD layers, authentication, and persistent relational state through well-defined API boundaries.",
      focusArea: "Containerized services, gRPC, event-driven backends",
    },
    {
      title: "MLOps & AI Deployment",
      icon: <Activity className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Automating regression testing for prompts and models, monitoring data drift, managing vector index updates, and ensuring reliable local/cloud deployments.",
      focusArea: "Continuous evaluation, model containerization, Ollama",
    },
    {
      title: "Cyber-Physical Systems",
      icon: <Cpu className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Interfacing on-device computer vision and sensor telemetry (IMUs, distance sensors, microcontrollers) with edge AI for assistive physical computing.",
      focusArea: "ESP32 telemetry, hardware-software integration, edge latency",
    },
    {
      title: "AI Safety & Reliability",
      icon: <ShieldCheck className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Enforcing strict deterministic boundaries between stochastic language generation and high-stakes clinical or financial business operations.",
      focusArea: "Formal verification, deterministic safety filters, guardrails",
    },
    {
      title: "Computer Vision",
      icon: <Eye className="w-5 h-5 text-[#35B6A5]" />,
      summary:
        "Real-time object detection, spatial bounding-box tracking, and low-latency environmental perception optimized for mobile and embedded platforms.",
      focusArea: "Edge object detection, spatial audio mapping, OpenCV",
    },
  ];

  return (
    <section id="interests" className="py-20 md:py-28 bg-[#171C20] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-[#35B6A5]">05.</span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F1F5F4] tracking-tight">
            Specialization &amp; Research Interests
          </h2>
          <div className="h-[1px] bg-[#354147] flex-grow ml-4 max-w-xs" />
        </div>

        <p className="text-sm text-[#A8B5B2] max-w-2xl mb-12">
          Forward-looking engineering domains I am actively exploring and researching to build reliable, scalable intelligent systems for the future.
        </p>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#20282D] border border-[#354147] p-5 shadow-sm hover:border-[#35B6A5] transition-colors flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#252F34] border border-[#354147] flex items-center justify-center mb-4 group-hover:border-[#35B6A5] transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-base text-[#F1F5F4] group-hover:text-[#35B6A5] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A8B5B2] leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-[#354147] text-[11px] font-mono text-[#A8B5B2]">
                <span className="text-[#35B6A5] block text-[10px] font-medium mb-0.5">
                  Exploration focus:
                </span>
                <span>{item.focusArea}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
