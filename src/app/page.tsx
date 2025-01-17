import AboutMeSection from "@/components/about-me";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";

export default function Home() {
  return (
    <div className="pt-16 px-4 sm:px-8">
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
