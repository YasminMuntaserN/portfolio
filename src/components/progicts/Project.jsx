import styled from "styled-components";
import CodeContainer from "../ui/CodeContainer";
import { ColoredText } from "../../styled-components/ColoredText";
import { MarginContainer } from "../../styled-components/MarginContainer";
import { MdEmergencyRecording } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';
import { useState } from "react";
import { media } from "../../styled-components/Media";

const Container = styled.div`
  width: 80%;
  margin:10px auto;
  line-height:28px;
  ${media.mobile`
    margin-left:30px;
    width: 105%;
  `} 
  ${media.tablet`
    margin-left:40px;
    width: 105%;
  `} 
  ${media.largeTablet`
    margin-left:30px;
    width: 100%;
  `}
`;

const Image = styled.img`
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  ${media.desktop`
    transform: ${(props) => (!props.markFillImage ? "translateY(15%)" : "none")};
    margin-left: ${(props) => (!props.markFillImage ? "15px" : "0")};
  `}
`;

const Grid = styled.div`
  display: grid;
  padding-top: 20px;
  ${media.desktop`
    grid-template-columns: 1fr 1fr;
    gap: 100px;
  `}
`;

const Tec = styled.p`
  margin-top: 10px;
  display: inline-block;  
`;

function Project({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <CodeContainer open={() => setIsOpen(!isOpen)} project={project}>
        {isOpen && (
          <Grid>
            <div><Image src={project.image} alt={project.id} markFillImage={project.markFillImage} /></div>
            <code>
              <div style={{ paddingTop: `20px` }}>
                <ColoredText color="var(--main-color)">const</ColoredText>{' '}
                <ColoredText color="var(--color-white)">project</ColoredText>{' '}
                <ColoredText color="var(--main-color)">=</ColoredText>{' '}
                <ColoredText color="var(--color-gray)">{'{'}</ColoredText>
              </div>

              <MarginContainer>
                <ColoredText color="var(--color-white)">description :</ColoredText>
                <ColoredText color="var(--color-dark-orange)">&apos;{project.description}&apos;</ColoredText>
                <ColoredText color="var(--color-gray)">,</ColoredText>
              </MarginContainer>

              <MarginContainer>
                <ColoredText color="var(--color-white)">technologies :</ColoredText>
                <ColoredText color="var(--color-dark-orange)">{'['} {project.technologies.map((tec, index) => (
                  <Tec key={tec}>&apos;{tec}&apos;{index !== project.technologies.length - 1 ? ', ' : ' '}</Tec>
                ))} {']'}</ColoredText>
                <ColoredText color="var(--color-gray)">,</ColoredText>
              </MarginContainer>

              <MarginContainer>
                <ColoredText color="var(--color-white)">demo :</ColoredText>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <MdEmergencyRecording /> <ColoredText color="var(--second-color)">{project.name}</ColoredText>
                </a>
              </MarginContainer>

              <MarginContainer>
                <ColoredText color="var(--color-white)">github :</ColoredText>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> <ColoredText color="var(--second-color)">{project.name}</ColoredText>
                </a>
              </MarginContainer>

              <MarginContainer>{'};'}</MarginContainer>
            </code>
          </Grid>
        )}
      </CodeContainer>
    </Container>
  );
}

export default Project;

