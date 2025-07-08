import {ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import CertificatesSection from '../components/CertificatesSection';
import BlogsSection from '../components/BlogsSection';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.state]);

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
            {/* <ProjectsSection /> */}
            <CertificatesSection />
            {/* <BlogsSection /> */}
            <ContactSection />
        </main>
        {/* Footer */}
        {/* <FooterSection /> */}
    </div>
};