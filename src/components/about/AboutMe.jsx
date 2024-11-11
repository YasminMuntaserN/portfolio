import styled from "styled-components"
import SectionHeader from "../SectionHeader"
import ProfileImage from "./ProfileImage"
import { media } from "../../styled-components/Media";


const Container = styled.div`
  display: grid;
  margin:10px auto;
  grid-template-columns: 2fr 1fr;
  padding:50px;
  text-align: left;


  ${media.mobile`
    grid-template-columns: 1fr;
  padding:15px;

  `}

  ${media.tablet`
    grid-template-columns: 1fr;
  `}

  ${media.largeTablet`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.desktop`
    grid-template-columns: 1.5fr 1fr;
    gap:130px;
    margin-left:50px
  `}
`;

const P =styled.p`
color: var(--color-white);
line-height: 1.9;
`;
const Header =styled.h2`
color: var(--main-color);
text-transform: uppercase;
font-size: 22px;
margin-bottom: 25px;
`;
const Row= styled.div`
    ${media.mobile`
      height:57vh;
      `}
      ${media.tablet`
      height:70vh;
      `}
      ${media.largeTablet`
      height:50vh;
      `}
`;


function AboutMe() {
  return (
    <section>
    <SectionHeader header="About Me" />
    <Container>
        <Row>
          <div class="card-me">
            <Header>About Me</Header>
            <P>
            Software engineer with a solid foundation in C++ and C#, including expertise in algorithms, data structures, and object-oriented programming (OOP). Experienced in database management, UI development, and .NET technologies, including both the .NET Framework and .NET 8.0. Proficient in modern web development with HTML, CSS, and JavaScript, and knowledgeable in LINQ for efficient data querying. Currently advancing knowledge in SOLID principles, ASP.NET, API development, and React. As a dedicated student in a software engineering program, I am eager to apply my academic knowledge in a real-world setting, contribute to innovative projects, and collaborate with professionals in a dynamic development environment.
            </P>
          </div>
      </Row>
      <Row>
          <ProfileImage/> 
      </Row>

    </Container>
  </section> 
  )
}

export default AboutMe
