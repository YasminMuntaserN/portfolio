import styled from "styled-components"

const HeaderContainer=styled.div`
      display: flex;
    justify-content: center;
    margin-top:40px;
    margin-bottom:30px;

  `;

  const Header =styled.h1`
    color: var(--color-white);
    text-transform: uppercase;
    background-color: var(--background-color-two);
    border-radius: 5px;
    padding: 13px 25px;
    font-size: 18px;
    position: relative;
    &:after{
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: var(--background-color-two);
    top: 50%;
    right: -100px;
    transform: translateY(-50%);
    z-index: -1;
  }
  &:before{
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color: var(--background-color-two);
    top: 50%;
    left: -100px;
    transform: translateY(-50%);
    z-index: -1;
  }
  `;

function SectionHeader({header}) {
  
  return (
    <HeaderContainer>
    <Header>{header}</Header>
  </HeaderContainer>
  )
}

export default SectionHeader
