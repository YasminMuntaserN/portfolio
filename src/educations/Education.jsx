import styled, { keyframes } from "styled-components";
import { GiClick } from "react-icons/gi";
import { Link } from "../styled-components/Link";
import { media } from "../styled-components/Media";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(1000px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: ${({ position }) =>
    position === "left" ? "flex-start" : "flex-end"};

  flex-direction: ${({ position }) =>
    position === "left" ?"row-reverse": "row-start"};

  margin-left: ${({ position }) =>
    position === "left" ?"-340px" :"340px"};
  gap: 40px;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.7s;

  ${media.mobile`
    flex-direction:column;
    margin:0;
  `}
  ${media.tablet`
    flex-direction:column;
    margin:0;
  `}
`;

const Position = styled(GiClick)`
  color: var(--second-color);
  margin-top: 20px;
  margin-left:10px;
`;

const Icon = styled.span`
  display: flex;
  background-color: var(--pure-color-white);
  font-size: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 5px solid var(--color-orang);
  
  ${media.mobile`
    margin-left:38%;
  `}
  ${media.tablet`
    margin-left:38%;
  `}
`;

const H = styled.h3`
  font-size: 1rem;
  align-content: center;  
  margin-top: 20px;
`;

const Content = styled.div`
    color: var(--color-white);
    width: 300px;
    height: 180px;
    border: 1px solid #2a2e5a;
    box-shadow: 16px 14px 20px #0000008c;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    margin-bottom: 20px;
    text-align: center;

    &:hover {
    box-shadow: 8px 8px 20px rgba(214, 173, 240, 0.4),
      -8px -8px 20px rgba(56, 138, 253, 0.4);
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg);
  }
`;

  const ContentContainer =styled.div`
    position: absolute;
    inset: 4px;
    background-color: var(--background-color);
    box-shadow: inset 20px 20px 20px #31313189;
    border-radius: 10px;
    padding: 20px;
    z-index: 1;
  `;




function Education({ education, style }) {
  const { bg, position } = style;
  return (
    <Container position={position}>
      <Icon>
        <education.icon />
      </Icon>
      <Content bg={bg} position={position}>
        <ContentContainer>
          <span>{education.date}</span>
        <H>{education.name}</H>
        <Link color=" #2a2e5a" href={education.site} target="_blank">
          {education.siteName}
        </Link>
        <Position />
      </ContentContainer>
      </Content>
    </Container>
  );
}

export default Education;

