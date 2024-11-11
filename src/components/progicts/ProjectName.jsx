import styled from "styled-components";


const ProjectHeader=styled.div`
  display:flex;
  direction:column;
  color:var(--second-color);
`;

function ProjectName({project}) {
  return (
    <>
    {project && <ProjectHeader>
      <p>{'< '}{project.name}{' />'}</p>
  </ProjectHeader>
    }
    </>
  )
}

export default ProjectName
