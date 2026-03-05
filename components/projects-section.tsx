"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Zap, BarChart3, GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Distributed Task Scheduler",
    icon: Zap,
    description:
      "Built a fault-tolerant distributed task scheduling system handling 2M+ daily job executions. Implemented using Go with etcd for leader election, featuring automatic failover, exponential backoff retry policies, and real-time monitoring. Reduced infrastructure costs by 40% through intelligent workload distribution.",
    metrics: [
      { label: "Daily Jobs", value: "2M+" },
      { label: "Cost Reduction", value: "40%" },
    ],
    tags: ["Go", "etcd", "Kubernetes", "Prometheus"],
  },
  {
    title: "Real-time Analytics Pipeline",
    icon: BarChart3,
    description:
      "Designed and implemented a streaming analytics platform processing clickstream data at 100K events/second. Architecture utilized Apache Kafka, Apache Flink, and ClickHouse. Enabled product teams to run complex funnel analyses with sub-second query latency.",
    metrics: [
      { label: "Events/sec", value: "100K" },
      { label: "Query Latency", value: "<1s" },
    ],
    tags: ["Kafka", "Flink", "ClickHouse", "Streaming"],
  },
  {
    title: "API Gateway Modernization",
    icon: GitBranch,
    description:
      "Led the migration from a monolithic API gateway to a service mesh architecture. Reduced average P99 latency from 450ms to 85ms and improved system availability from 99.5% to 99.97%. Implemented mutual TLS, rate limiting, and circuit breaker patterns.",
    metrics: [
      { label: "P99 Latency", value: "85ms" },
      { label: "Availability", value: "99.97%" },
    ],
    tags: ["Istio", "Service Mesh", "mTLS", "Circuit Breaker"],
  },
];

export function ProjectsSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-secondary/20" id="projects">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of impactful engineering projects showcasing system design, optimization, and architectural expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={cn(
                  "animate-on-scroll opacity-0 group relative",
                  `animation-delay-${(index + 1) * 100}`
                )}
              >
                <div className="h-full p-6 rounded-lg border border-border bg-card hover:border-primary/40 transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-4 rounded-md bg-secondary/50 border border-border/50">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-foreground font-mono">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-background/50 border border-border/50 rounded text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
