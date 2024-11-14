import styled from "styled-components";
import Education from "./Education";
import SectionHeader from "../ui/SectionHeader"
import Line from "../ui/Line";
import {educations}from "../data/data-education";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function Educations() {
  return (
    <section id="education">
      <SectionHeader header="Educations" />
      {educations.map((education, index) => (
        <Container key={index}>
          <Line />
          <Education
            education={education}
            style={
              index % 2 === 0
                ? { bg: "var(--main-color)", position: "right" }
                : { bg: "var(--second-color)", position: "left" }
            }
          />
          </Container>
      ))}
    </section>
  );
}

export default Educations;
