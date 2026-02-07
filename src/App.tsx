import NavBar from "./components/NavBar.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx";
import FeatureCards from "./sections/FeatureCards.tsx";
import Hero from "./sections/Hero.tsx";
import LogoSection from "./sections/LogoSection.tsx";
import ShowcaseSection from "./sections/ShowcaseSection.tsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
        </>
    )
}
export default App
