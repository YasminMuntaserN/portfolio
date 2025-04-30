import GlobalStyle from "./styles/GlobalStyles";
import StarterSection from "./home/StarterSection";
import Header from "./ui/Header";
import AboutMe from "./about/AboutMe";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Educations from "./educations/Educations";
import Modal from "./ui/Modal";
import Articles from "./articles/Articles.jsx";
import {PaginationProvider} from "./PaginationContext.jsx";

function App() {

    return (
        <>
            <Header/>
            <GlobalStyle/>
            <StarterSection/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <PaginationProvider>
                <Articles/>
            </PaginationProvider>
            <Educations/>
            <Modal/>
        </>
    )
}

export default App
