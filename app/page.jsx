import HeroSection from "@/components/portfolio/HeroSection";
import ManifestoSection from "@/components/portfolio/ManifestoSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import PortfolioEffects from "@/components/portfolio/PortfolioEffects";
export default function Home() {
    return <>
    <PortfolioEffects />
    <main id="main"><HeroSection /><ManifestoSection /><ProjectsSection /><ProcessSection /><AboutSection /><SkillsSection /><ContactSection /></main>
    <Footer />
  </>;
}
