import styled from "styled-components"

const StyledSkill =styled.div`
  border: 1px solid var(--color-border);
  margin: 0 20px;
  width: 160PX;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 10px;
  gap:10px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s linear;
  background-image: linear-gradient(var( --background-color),  var(--color-border),  var(--second-color) ,var(--main-color),var(--main-color));

  &::after{
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 90%;
  height: 1px;

}
&:hover::after{
  background: unset;
}
&:hover{
  border:1px solid #8b5cf6 ;
  transform: scale(1.1);
}
`;
const P=styled.p`
  color: var(--color-white);
  font-size: 18px;
  font-weight: 600;
  margin: 10px 0 0 0;
`;
const Icon=styled.div`
  color: var(--color-white);
  font-size: 30px;
  /* background-image: linear-gradient(to right, var(--second-color),  var(--color-border),  var(--main-color), var(--second-color)); */
  padding:5px 10px;
  border-radius:30%;
`;


function Skill({skill}) {
  return (
    <StyledSkill>
    <Icon>
      <skill.icon />
    </Icon>
    <div>
      <P>{skill.name}</P>
    </div>
  </StyledSkill>
  );
}

export default Skill
