import AboutMe from "./components/about/AboutMe";
import Educations from "./components/educations/Educations";
import Header from "./components/ui/Header";
import Skills from "./components/skills/Skills";
import StarterSection from "./components/home/StarterSection";
import Modal from "./components/ui/Modal";
import Projects from "./components/projectsSection/Projects";

function App() {
  return (
    <>
    <Header/>
    <StarterSection />
    <AboutMe />
    <Skills />
    <Projects/>
    <Educations />
    <Modal/>
    </>
  )
}

export default App
