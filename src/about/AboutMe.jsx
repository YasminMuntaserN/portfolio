import styled from "styled-components";
import ProfileImage from "./ProfileImage";
import { media } from "../styled-components/Media";
import SectionHeader from "../ui/SectionHeader";

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
            <Header>About Me </Header>
            <P>
            I am Yasmin Nassar, born and raised in Palestine_Gaza, where every challenge became a lesson and every obstacle fueled my determination. My journey has been shaped by resilience, curiosity, and an unwavering love for learning.
            Despite the difficulties, I never let circumstances define my potential. I embraced every opportunity to grow, diving into technology, problem-solving, and creativity. With every line of code and every project, I see the power of innovation to break barriers and create change.
            To me, learning is more than gaining knowledge—it’s a testament to perseverance, a path to new possibilities, and a way to turn dreams into reality. No challenge will ever stand in the way of my ambition.
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
