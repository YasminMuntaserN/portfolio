import styled from 'styled-components';
import { HiArrowDownTray } from "react-icons/hi2";
import {Container} from "../styled-components/Container";
import {ColoredText} from "../styled-components/ColoredText";
import ContactLinks from './ContactLinks';
import Code from '../ui/Code';
import { media } from '../styled-components/Media';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.mobile`
    height: 50vh;
    width:90%;
  `}

  ${media.tablet`
    height: 70vh;
  `}

  ${media.largeTablet`
    height: 70vh;
  `}

`;

const Intro = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: var(--color-white);
  margin: 10px 0;

  ${media.mobile`
    font-size: 32px;
  `}

  ${media.tablet`
    font-size: 36px;
  `}

  ${media.largeTablet`
    font-size: 40px;
  `}

  ${media.desktop`
    font-size: 45px;
    margin-left:-100px;
  `}
`;

const Button = styled.button`
  border-radius: 30px;
  font-size: 16px;
  background-color: var(--second-color);
  padding: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Link = styled.a`
  color: var(--color-white);
  font-weight: 600;
  width: 100%;
  text-decoration: none;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;

`;

function StarterSection() {
  return (
    <section>
      <Container>
        <Row>
          <div>
              <Intro>
                Welcome,
                <br />
                I'm <ColoredText color="var(--main-color)">Yasmin</ColoredText>
                <br /> a <ColoredText color="var(--second-color)">Software Engineer</ColoredText>
                <ContactLinks />
              </Intro>
            <Button>
              <Link href="https://drive.google.com/drive/folders/153wLbfwNxrvqsIr8vZj-e1sZev7T3tzU?usp=sharing" target="_blank">
                <span>GET RESUME</span>
                <HiArrowDownTray />
              </Link>
            </Button>
          </div>
        </Row>

        <Row>
          <Code />
        </Row>
      </Container>
    </section>
  );
}

export default StarterSection;
