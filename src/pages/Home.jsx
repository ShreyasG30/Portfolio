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
        // prefer state passed by navigate, otherwise use URL hash
        const scrollTo = location.state?.scrollTo || (location.hash ? location.hash.replace("#", "") : null);
        if (scrollTo) {
            // slight delay to ensure elements rendered
            setTimeout(() => {
                const el = document.getElementById(scrollTo);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    // clear history state so repeated navigations work cleanly
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.search);
                }
            }, 80);
        }
    }, [location]);

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
            <BlogsSection />
            <ContactSection />
        </main>
        {/* Footer */}
        {/* <FooterSection /> */}
    </div>
};