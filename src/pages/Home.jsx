import {ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { FooterSection } from '../components/FooterSection';
import CertificatesSection from '../components/CertificatesSection';
import BlogsSection from '../components/BlogsSection';


export const Home = () => {
    return <div className="min-h-screen bg-background text-forground overflow-x-hdden">

        {/* Theme toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            {/* <BlogsSection /> */}
            <ContactSection />
        </main>
        {/* Footer */}
        {/* <FooterSection /> */}
    </div>
};