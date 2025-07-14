import { Star } from "lucide-react";

import {StarBackground} from '@/component/StarBackground';
import { Navbar } from "../component/Navbar";
import { HeroSection } from "../component/HeroSection";
import { AboutSection } from "../component/AboutSection";
import { SkillsSection } from "../component/SkillsSection";
import { ExperienceSection } from "../component/ExperienceSection";
import { ProjectSection } from "../component/ProjectSection";
import { ContactSection } from "../component/ContactSection";
import { ThemeToggle } from "../component/ThemeToggle";

export const Dashboard = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */}
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
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />

        {/* Add other sections as needed */}
    </main>

    {/* Fotter */}
    </div>
    );
};