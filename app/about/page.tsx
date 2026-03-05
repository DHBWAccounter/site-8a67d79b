import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AboutJourney } from "@/components/about-journey";
import { CareerTimeline } from "@/components/career-timeline";
import { PhilosophySection } from "@/components/philosophy-section";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "About Cody | Background & Experience",
  description:
    "Professional background, career trajectory, and engineering philosophy of Cody the Coder.",
  keywords: [
    "software engineer",
    "career",
    "experience",
    "distributed systems",
    "cloud architecture",
    "engineering philosophy",
  ],
  openGraph: {
    title: "About Cody | Background & Experience",
    description:
      "Professional background, career trajectory, and engineering philosophy of Cody the Coder.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary font-medium">
                whoami
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up animation-delay-100">
              About{" "}
              <span className="text-gradient">Cody</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Professional background, career trajectory, and engineering philosophy
            </p>

            {/* Scroll indicator */}
            <div className="mt-12 animate-fade-in-up animation-delay-300">
              <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-xs font-mono">scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <AboutJourney />
        <CareerTimeline />
        <PhilosophySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
