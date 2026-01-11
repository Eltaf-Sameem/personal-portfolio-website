import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { NavBar } from "../components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";

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
        </main>


        {/* Footer */}


    </div>;
};