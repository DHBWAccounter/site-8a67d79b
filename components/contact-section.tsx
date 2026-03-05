"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "cody@thecoder.dev",
    href: "mailto:cody@thecoder.dev",
    primary: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/codythecoder",
    href: "https://linkedin.com/in/codythecoder",
    primary: false,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/codythecoder",
    href: "https://github.com/codythecoder",
    primary: false,
  },
];

const additionalInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco Bay Area",
    subtext: "Open to Remote",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "24-48 hours",
    subtext: "LinkedIn is fastest for time-sensitive inquiries",
  },
];

export function ContactSection() {
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

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 bg-card/30"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-mono text-primary font-medium">
                contact.connect()
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in connecting with fellow engineers, engineering
              leaders, and recruiters working on challenging problems.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={method.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={cn(
                    "group relative p-6 rounded-xl border transition-all duration-500",
                    method.primary
                      ? "bg-primary/10 border-primary/30 hover:border-primary/60"
                      : "bg-card border-border hover:border-primary/30",
                    "hover:shadow-lg hover:shadow-primary/5",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                        method.primary ? "bg-primary/20" : "bg-secondary"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-5 w-5",
                          method.primary ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground mb-1">
                        {method.label}
                      </p>
                      <p
                        className={cn(
                          "font-medium truncate",
                          method.primary ? "text-foreground" : "text-foreground"
                        )}
                      >
                        {method.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                        method.primary ? "text-primary" : "text-muted-foreground"
                      )}
                    />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Additional Info */}
          <div
            className={cn(
              "grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-500",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            {additionalInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50"
                >
                  <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                    {info.subtext && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {info.subtext}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className={cn(
              "mt-12 text-center transition-all duration-700 delay-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            )}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors cursor-pointer">
              <Mail className="h-4 w-4" />
              <span>Let's build something great together</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
