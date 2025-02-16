import AboutMeSection from "@/components/about-me";
import ContactSection from "@/components/contact";
import HeroSection from "@/components/hero";
import ProjectsSection from "@/components/projects";
import StoreSection from "@/components/store";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <StoreSection />
      <ContactSection />
    </>
  );
}
