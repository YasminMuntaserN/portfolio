import styled from 'styled-components';
import ProjectName from '../projects/ProjectName';


const StyledBubbles=styled.div`
display: flex;
justify-content:space-between;
border-bottom: 2px solid var(--color-border);
padding: 10px ;
position: relative;

`;
const BubbleSpan=styled.div`
margin: 5px;
background-color: ${prop =>prop.color};
border-radius: 50%;
width:15px;
height:15px;

`;
const BubbleContainer =styled.div`
display: flex;
flex-direction: row; 
`;

function Bubbles({project}) {
  return (
    <StyledBubbles>
    <BubbleContainer>
    <BubbleSpan color={'var( --main-color)'}></BubbleSpan>
    <BubbleSpan color={'var( --second-color)'}></BubbleSpan>
    <BubbleSpan color={'var(  --color-orang)'}></BubbleSpan>
    </BubbleContainer>
    <ProjectName project={project}/>
  </StyledBubbles>
  )
}

export default Bubbles
