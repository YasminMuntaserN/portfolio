import AboutMe from "./components/about/AboutMe";
import Educations from "./components/educations/Educations";
import Header from "./components/Header";
import Projects from "./components/progicts/projects";
import SectionHeader from "./components/SectionHeader";
import Skills from "./components/skills/Skills";
import StarterSection from "./components/StarterSection";

function App() {
  return (
    <>
    <Header/>
    <StarterSection />
    <AboutMe />
    <Skills />
    <Projects/>
    <Educations />
    </>
  )
}

export default App
