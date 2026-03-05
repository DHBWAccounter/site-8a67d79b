"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "7+",
    label: "Years of Experience",
    description: "Professional software engineering experience across startup and enterprise environments.",
  },
  {
    value: "50K+",
    label: "Requests per Second",
    description: "Handled by systems I've architected and maintained.",
  },
  {
    value: "99.97%",
    label: "Availability Achieved",
    description: "For critical payment processing services.",
  },
  {
    value: "3",
    label: "Major Migrations Led",
    description: "With zero downtime deployments.",
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Impact</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Quantifiable results from years of building production systems at scale.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "animate-on-scroll opacity-0 group relative",
                `animation-delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative p-6 rounded-lg border border-border bg-card/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 text-center">
                {/* Value */}
                <div className="mb-3">
                  <span className="text-4xl sm:text-5xl font-bold text-gradient font-mono tracking-tight">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg">
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
