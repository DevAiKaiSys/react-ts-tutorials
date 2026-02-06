import LogoSection from "./components/LogoSection.tsx";
import NavBar from "./components/NavBar.tsx";
import Hero from "./sections/Hero.tsx";
import ShowcaseSection from "./sections/ShowcaseSection.tsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
        </>
    )
}
export default App
