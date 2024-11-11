import Project from "./project";
import { projects } from "../../../data/data-projects";
import SectionHeader from "../SectionHeader";

function Projects() {

  return (
    <section>
      <SectionHeader header="Projects" />
      {projects.map((project)=> <Project key={project.id} project={project}/>)}
    </section>
  )
}

export default Projects
