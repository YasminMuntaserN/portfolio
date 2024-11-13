import AboutMe from "./components/about/AboutMe";
import Educations from "./components/educations/Educations";
import Header from "./components/ui/Header";
import Projects from "./components/progicts/projects";
import Skills from "./components/skills/Skills";
import StarterSection from "./components/home/StarterSection";
import Modal from "./components/ui/Modal";

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
