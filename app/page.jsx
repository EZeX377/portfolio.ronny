import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import SmoothScroll from "@/components/portfolio/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="page-shell flex min-h-screen flex-col">
        <Navbar />
        <main id="top" className="flex-1 overflow-x-hidden -mt-[96px]">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          {/* <SkillsSection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}