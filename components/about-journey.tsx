"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Users, Lightbulb, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutJourney() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: "System Architecture",
      description: "From scripts to distributed systems",
    },
    {
      icon: Users,
      title: "Engineering Culture",
      description: "Mentored 15+ engineers, led design reviews",
    },
    {
      icon: Lightbulb,
      title: "Pragmatic Solutions",
      description: "Theory meets practical constraints",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            )}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-mono text-primary font-medium">
                &lt;about /&gt;
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The Journey{" "}
              <span className="text-gradient">So Far</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                My path into software engineering started with a fascination for
                understanding how systems work—not just on the surface, but at
                their core. That curiosity led me from building small scripts to
                automate tedious tasks to architecting distributed systems that
                power critical business operations.
              </p>

              <p>
                I believe the best engineering solutions emerge from deep
                technical understanding combined with pragmatic decision-making.
                Every system I design balances theoretical correctness with
                practical constraints: maintainability, team velocity, and
                business value.
              </p>

              <p>
                Beyond writing code, I'm passionate about building engineering
                culture. I've mentored 15+ engineers, led technical design
                reviews, and contributed to internal tooling that improved
                developer productivity across organizations.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-primary group cursor-pointer">
              <span className="text-sm font-medium">View my career timeline</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div
            className={cn(
              "transition-all duration-1000 delay-300",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            )}
          >
            <div className="relative">
              {/* Decorative code bracket */}
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
              <div className="absolute -left-6 top-8 text-primary/30 font-mono text-2xl">
                {"{"}
              </div>

              <div className="space-y-4 pl-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={cn(
                        "group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300",
                        "hover:shadow-lg hover:shadow-primary/5"
                      )}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  );
                })}
              </div>

              <div className="absolute -left-6 bottom-8 text-primary/30 font-mono text-2xl">
                {"}"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
