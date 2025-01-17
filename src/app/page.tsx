import AboutMeSection from "@/components/about-me";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";

export default function Home() {
  return (
    <div className="container mx-auto pt-16">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
