import SectionHeader from "../ui/SectionHeader"
import Project from "./Project";
import {projects} from "../data/data-projects";

function Projects() {

  return (
    <section id="projects">
      <SectionHeader header="Projects" />
      {projects.map((project)=> <Project key={project.id} project={project}/>)}
    </section>
  )
}

export default Projects
