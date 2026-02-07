import NavBar from "./components/NavBar.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx";
import FeatureCards from "./sections/FeatureCards.tsx";
import Hero from "./sections/Hero.tsx";
import LogoSection from "./sections/LogoSection.tsx";
import ShowcaseSection from "./sections/ShowcaseSection.tsx";
import TechStack from "./sections/TechStack.tsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
        </>
    )
}
export default App
