"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-texture" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="animate-on-scroll opacity-0 mb-6 animation-delay-100">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-muted-foreground font-medium">Open to opportunities</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="animate-on-scroll opacity-0 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animation-delay-200">
            <span className="block text-foreground">Engineering Solutions</span>
            <span className="block text-gradient">at Scale</span>
          </h1>

          {/* Description */}
          <div className="animate-on-scroll opacity-0 space-y-4 text-lg lg:text-xl text-muted-foreground max-w-3xl mb-8 animation-delay-300">
            <p>
              I'm Cody, a software engineer with 7+ years of experience building distributed systems that handle millions of requests daily. I specialize in backend architecture, cloud-native development, and performance optimization.
            </p>
            <p>
              Currently focused on designing microservices architectures and implementing event-driven systems using Kubernetes, Apache Kafka, and cloud-native technologies. I thrive in environments where technical complexity meets business impact.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="animate-on-scroll opacity-0 mb-10 animation-delay-400">
            <div className="flex flex-wrap gap-3">
              {["Distributed Systems", "Cloud Architecture", "Backend Engineering"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm font-mono bg-secondary/50 border border-border rounded-md text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-on-scroll opacity-0 flex flex-col sm:flex-row gap-4 animation-delay-500">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Let's Connect
              <ArrowDown className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/codythecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border hover:border-primary/50 hover:bg-secondary/50 rounded-md transition-all"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/codythecoder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border border-border hover:border-primary/50 hover:bg-secondary/50 rounded-md transition-all"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-on-scroll opacity-0 absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block animation-delay-700">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs font-mono uppercase tracking-wider">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
