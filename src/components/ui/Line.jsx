import styled from "styled-components"

const StyledLine=styled.div`
    width:3px;
    height:100px;
    border-radius:5px;
    background-color:var(--color-white);
`;

function Line() {
  return (
    <StyledLine></StyledLine>
  )
}

export default Line
