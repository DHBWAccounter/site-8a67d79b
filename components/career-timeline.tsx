"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Building2, Zap, Database, Server } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  period: string;
  title: string;
  company?: string;
  type: "work" | "education";
  highlights: string[];
  icon: typeof Briefcase;
}

const timelineData: TimelineItem[] = [
  {
    period: "2021 – Present",
    title: "Senior Software Engineer, Cloud Platform",
    type: "work",
    icon: Building2,
    highlights: [
      "Leading design and implementation of internal developer platform serving 200+ engineers",
      "Built self-service infrastructure provisioning reducing environment setup from days to minutes",
      "Established platform SLOs and incident management processes",
    ],
  },
  {
    period: "2018 – 2021",
    title: "Software Engineer II, Distributed Systems",
    type: "work",
    icon: Zap,
    highlights: [
      "Core contributor to real-time bidding system processing $50M+ daily ad spend",
      "Implemented caching layer reducing database load by 70%",
      "Led migration from monolithic architecture to microservices",
    ],
  },
  {
    period: "2016 – 2018",
    title: "Software Engineer, Backend Services",
    type: "work",
    icon: Database,
    highlights: [
      "Developed RESTful APIs and background job processing systems for e-commerce platform",
      "Serving 500K daily active users",
      "Introduced automated testing practices increasing code coverage from 30% to 85%",
    ],
  },
  {
    period: "2016",
    title: "B.S. Computer Science, University of Technology",
    company: "Graduated with Honors",
    type: "education",
    icon: GraduationCap,
    highlights: [
      "Focus on algorithms, distributed systems, and software engineering principles",
      "Contributed to open-source research project on consensus algorithms",
    ],
  },
];

export function CareerTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const items = sectionRef.current?.querySelectorAll("[data-timeline-item]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-card/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-mono text-primary font-medium">
              career.path()
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Career <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through roles, responsibilities, and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.has(index);

              return (
                <div
                  key={item.period}
                  data-timeline-item
                  data-index={index}
                  className={cn(
                    "relative transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                >
                  {/* Timeline node */}
                  <div
                    className={cn(
                      "absolute left-8 lg:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full",
                      "bg-card border-2 border-primary/50 flex items-center justify-center",
                      "shadow-lg shadow-primary/10 z-10",
                      item.type === "education" && "border-cyan-500/50"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-7 w-7",
                        item.type === "work" ? "text-primary" : "text-cyan-400"
                      )}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      "ml-24 lg:ml-0 lg:w-[calc(50%-3rem)]",
                      isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"
                    )}
                  >
                    <div className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group">
                      {/* Period badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono font-medium mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {item.period}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>

                      {item.company && (
                        <p className="text-sm text-cyan-400 font-medium mb-3">
                          {item.company}
                        </p>
                      )}

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
