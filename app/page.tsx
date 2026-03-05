import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ProjectsSection } from "@/components/projects-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
