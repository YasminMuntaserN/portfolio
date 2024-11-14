import Project from "./project";
import { projects } from "../../../data/data-projects";
import SectionHeader from "../ui/SectionHeader";

function Projects() {

  return (
    <section id="projects">
      <SectionHeader header="Projects" />
      {projects.map((project)=> <Project key={project.id} project={project}/>)}
    </section>
  )
}

export default Projects
