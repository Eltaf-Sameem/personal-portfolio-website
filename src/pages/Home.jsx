import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* theme toggle*/}
        <ThemeToggle />

        {/* Background effect*/}
        <StarBackground />

        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>


        {/* Footer */}


    </div>;
};