"use client";

import { useEffect, useRef } from "react";
import { Mail, ArrowRight, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CTASection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-secondary/30" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="animate-on-scroll opacity-0 text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-mono text-primary uppercase tracking-wider">Contact</span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Let's Build Something Meaningful
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm actively exploring opportunities where I can contribute to technically challenging projects with real-world impact. If your team is working on distributed systems, cloud infrastructure, or scaling challenges, I'd welcome a conversation.
            </p>
          </div>

          {/* Focus Card */}
          <div className="animate-on-scroll opacity-0 animation-delay-200 mb-10">
            <div className="p-6 rounded-lg border border-primary/30 bg-primary/5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">Current Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Senior/Staff Software Engineer roles at companies building infrastructure, platform engineering, or high-scale consumer products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4 animation-delay-300">
            <a
              href="mailto:hello@codythecoder.dev"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium border border-border hover:border-primary/50 hover:bg-secondary/50 rounded-md transition-all w-full sm:w-auto"
            >
              Learn More About Me
            </Link>
          </div>

          {/* Additional Info */}
          <div className="animate-on-scroll opacity-0 mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animation-delay-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Open to Remote & Relocation</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
