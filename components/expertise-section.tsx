"use client";

import { useEffect, useRef } from "react";
import { Code, Network, Cloud, Database, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const expertiseAreas = [
  {
    title: "Languages & Runtimes",
    icon: Code,
    description:
      "Proficient in Go, Python, Java, TypeScript, and Rust. Deep understanding of concurrency models, memory management, and runtime optimization.",
    tags: ["Go", "Python", "Java", "TypeScript", "Rust"],
  },
  {
    title: "Distributed Systems",
    icon: Network,
    description:
      "Extensive experience with microservices architecture, service mesh (Istio, Linkerd), event-driven design, and eventually consistent data systems. Built and maintained systems processing 50K+ events per second.",
    tags: ["Microservices", "Istio", "Event-Driven", "Kafka"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    description:
      "AWS (certified Solutions Architect), GCP, Kubernetes, Terraform, Docker. Infrastructure-as-code practitioner with GitOps deployment pipelines.",
    tags: ["AWS", "GCP", "Kubernetes", "Terraform"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    description:
      "PostgreSQL, MongoDB, Redis, Elasticsearch, Apache Cassandra. Expertise in query optimization, sharding strategies, and cache invalidation patterns.",
    tags: ["PostgreSQL", "Redis", "Elasticsearch", "Cassandra"],
  },
  {
    title: "Observability & Reliability",
    icon: Activity,
    description:
      "Prometheus, Grafana, Datadog, OpenTelemetry. SRE practices including SLI/SLO definition, error budget management, and incident response.",
    tags: ["Prometheus", "Grafana", "OpenTelemetry", "SRE"],
  },
];

export function ExpertiseSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32" id="expertise">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="animate-on-scroll opacity-0 max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Deep technical knowledge across the full stack, with a focus on building resilient, scalable systems.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={cn(
                  "animate-on-scroll opacity-0 group relative",
                  `animation-delay-${(index + 1) * 100}`
                )}
              >
                <div className="h-full p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4 relative">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-secondary/50 border border-border/50 rounded text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
