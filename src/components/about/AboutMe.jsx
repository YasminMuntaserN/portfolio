import styled from "styled-components"
import SectionHeader from "../ui/SectionHeader";
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
      height:70vh;
      `}
      ${media.tablet`
      height:60vh;
      `}
      ${media.largeTablet`
      height:70vh;
      `}
`;


function AboutMe() {
  return (
    <section id="about">
    <SectionHeader header="About Me" />
    <Container>
        <Row>
          <div>
            <Header>About Me</Header>
            <P>
            I&apos;m Yasmin from Palestine, specifically from martyred Gaza ، Despite the challenges, I have worked hard to develop my skills and seize every available opportunity to grow. I&apos;ve completed a course that helped me build a strong foundation in C++ and C#, gaining expertise in algorithms, data structures, and object-oriented programming (OOP). I also have experience with database management, working with SQL and ADO.NET, and have developed several projects using the .NET Framework and .NET 8.0. In addition, I’ve pursued web development, working with React and building various projects, some of which I integrated with back-end APIs. I’ve also gained knowledge of SOLID principles and LINQ.
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
