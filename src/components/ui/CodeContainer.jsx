import styled from 'styled-components';
import { media } from '../../styled-components/Media';
import Bubbles from './Bubbles';

export const StyledCodeContainer = styled.div`
  width:100%;
  padding: 10px;
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background-image: linear-gradient(to right, var(--background-color), #1a1f33);
  font-size: 18px; 
  word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal; 

  &::after {
    content: '';
    position: absolute;
    top: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 99%;
    height: 31px;
    z-index: -1;
    border-radius: 20px;
    background: var(--linear-gradient);
  }

  ${media.mobile`
    width: 90%;
    font-size: 14px; 
    margin-left:-20px;
  `}
  ${media.tablet`
    width: 90%;
    font-size: 14px; 
    margin-left:-20px;
  `}
`;

function CodeContainer({children ,open ,project}) {
  return (
    <StyledCodeContainer onClick={()=>open()} >
      <Bubbles project={project}/>
      {children}

    </StyledCodeContainer>
  )
}

export default CodeContainer
