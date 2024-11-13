import { useEffect, useState } from "react";
import styled from "styled-components";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { media } from "../../styled-components/Media";
import { Link as ScrollLink } from 'react-scroll';

const NavBar = styled.nav`
  color: var(--main-color);
  font-weight: 400;
  font-size: 15px;
  display: grid;
  padding: 15px;
  grid-template-columns: 1fr auto; 
  align-items: center;
  background-color: #0e0e33;
  ${media.desktop`
    background-color:transparent;
    margin-top:10px;
  `};
`;


const Link = styled(ScrollLink)`
  display: block;
  color: var(--pure-color-white);
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.3s;
  &:hover {
    color: var(--main-color);
  }
`;

const NameLink = styled(Link)`
  color: var(--main-color);
  font-weight: 700;
  font-size: 35px;
  margin-left: 100px;
  &:hover {
    color: var(--color-border);
  }

  ${media.mobile`
    font-size: 28px;
    margin-left: 20px;
  `};
`;

const NavItem = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    gap: 50px;
    margin-right:100px;
  `};
`;

const Item = styled.li`
  display: flex;
  padding: 10px 0;

  ${media.mobile`
    width: 100%;
    text-align: center;
  `};

  &:hover {
    color: var(--main-color);
  }
`;

const HamburgerIcon = styled.button`
  background: none;
  border: none;
  color: var(--main-color);
  font-size: 30px;
  cursor: pointer;
  display: block;
  ${media.desktop`
    display: none;
  `};
`;
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
${media.desktop`
  justify-content: flex-end;
`};
`;

function Header() {
  const [openMenu, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); 

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); 
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <NavBar>
        <NameLink href="./index.html">yasmin 🕊️</NameLink>
        <HamburgerIcon onClick={() => setMenuOpen(!openMenu)}>
          <HiBars3CenterLeft />
        </HamburgerIcon>
        {(openMenu || isDesktop) && (
          <Container>
            <NavItem>
              <Item>
              <Link to="about" smooth={true} duration={500}>About</Link>
              </Item>
              <Item>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
              </Item>
              <Item>
                <Link to="education" smooth={true} duration={500}>Education</Link>
              </Item>
              <Item>
                <Link to="projects" smooth={true} duration={500}>Projects</Link>
              </Item>
            </NavItem>
          </Container>
        )}
      </NavBar>
    </header>
  );
}

export default Header;
