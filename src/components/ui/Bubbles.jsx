import styled from 'styled-components';
import ProjectName from '../progicts/projectName';
import { media } from '../../styled-components/Media';
const StyledBubbles=styled.div`
display: flex;
justify-content:space-between;
border-bottom: 2px solid var(--color-border);
padding: 10px ;
position: relative;

`;
const BubbleSpan=styled.span`
margin: 5px;
background-color: ${prop =>prop.color};
border-radius: 50%;
padding: 0px 5px 0px 10px;
`;

function Bubbles({project}) {
  return (
    <StyledBubbles>
    <div>
    <BubbleSpan color={'var( --main-color)'}></BubbleSpan>
    <BubbleSpan color={'var( --second-color)'}></BubbleSpan>
    <BubbleSpan color={'var(  --color-orang)'}></BubbleSpan>
    </div>
    <ProjectName project={project}/>
  </StyledBubbles>
  )
}

export default Bubbles
