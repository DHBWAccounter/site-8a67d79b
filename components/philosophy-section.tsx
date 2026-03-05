"use client";

import { useEffect, useRef, useState } from "react";
import { Minimize2, Eye, Users, Scale, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const philosophies = [
  {
    icon: Minimize2,
    title: "Simplicity Over Complexity",
    description:
      "I've seen too many systems fail under the weight of unnecessary abstraction. I prefer straightforward solutions that team members can understand, debug, and extend. Complexity should be intentional, not accidental.",
    color: "blue",
  },
  {
    icon: Eye,
    title: "Observability First",
    description:
      "A system without visibility is a system waiting to fail. I design with monitoring, logging, and tracing as first-class concerns, not afterthoughts. Good observability enables confident deployments and rapid incident response.",
    color: "cyan",
  },
  {
    icon: Users,
    title: "Collaboration Drives Quality",
    description:
      "The best code I've written emerged from collaborative design sessions and thorough code reviews. I actively seek feedback, document decisions, and share knowledge because engineering is fundamentally a team sport.",
    color: "violet",
  },
  {
    icon: Scale,
    title: "Pragmatic Trade-offs",
    description:
      "Perfect is the enemy of shipped. I evaluate technical decisions through the lens of business context, team capabilities, and time constraints. Build vs. buy, optimization priorities, and technical debt management all require nuanced thinking.",
    color: "emerald",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400",
    glow: "shadow-violet-500/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
} as const;

export function PhilosophySection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-philosophy-card]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-mono text-primary font-medium">
              principles.values
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Engineering <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Core principles that guide my technical decisions and team interactions
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            const colors = colorMap[philosophy.color as keyof typeof colorMap];
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={philosophy.title}
                data-philosophy-card
                data-index={index}
                className={cn(
                  "group relative p-8 rounded-2xl bg-card border transition-all duration-500",
                  colors.border,
                  "hover:shadow-xl",
                  `hover:${colors.glow}`,
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6",
                    colors.bg
                  )}
                >
                  <Icon className={cn("h-7 w-7", colors.text)} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {philosophy.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {philosophy.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className={cn("h-5 w-5", colors.text)} />
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none",
                    `bg-gradient-to-br from-${philosophy.color}-500/5 to-transparent`
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-border" />
            <span className="text-xs font-mono">const principles = true;</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
