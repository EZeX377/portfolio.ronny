import HeroSection from "@/components/portfolio/HeroSection";
import ManifestoSection from "@/components/portfolio/ManifestoSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import PortfolioEffects from "@/components/portfolio/PortfolioEffects";
export const metadata = {
    alternates: { canonical: "/" },
    openGraph: { title: "Ronny Das — Interface Theatre", description: "Project Lead & UI/UX Developer. Government systems, clear interfaces, and coordinated delivery.", type: "website", url: "/", siteName: "Ronny Das — Interface Theatre", locale: "en_IN" },
};
export default function Home() {
    return <>
    <PortfolioEffects />
    <main id="main"><HeroSection /><ManifestoSection /><ProjectsSection /><ProcessSection /><AboutSection /><SkillsSection /><ContactSection /></main>
    <Footer />
  </>;
}
