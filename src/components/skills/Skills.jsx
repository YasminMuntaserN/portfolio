import styled from "styled-components";
import { skills } from "../../../data/data-skills";
import SectionHeader from "../ui/SectionHeader";
import Skill from "./Skill";

const SkillsSlide =styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;
const WrapperSkills = styled.div`
  display: inline-flex;
  padding: 50px 0;
  animation: slide 60s linear infinite;
  transition: animation 0.5s;
  &:hover {
    animation-play-state: paused;
  }

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;


function Skills() {
  return (
    <section id="skills">
      <SectionHeader header="Skills" />
      <SkillsSlide>
      <WrapperSkills>
      {skills.map(skill=><Skill key={skill.name} skill={skill}/>)}
      </WrapperSkills>
      </SkillsSlide>
    </section>
  )
}

export default Skills
