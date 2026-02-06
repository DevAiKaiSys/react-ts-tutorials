import LogoSection from "./sections/LogoSection.tsx";
import NavBar from "./components/NavBar.tsx";
import FeatureCards from "./sections/FeatureCards.tsx";
import Hero from "./sections/Hero.tsx";
import ShowcaseSection from "./sections/ShowcaseSection.tsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
        </>
    )
}
export default App
