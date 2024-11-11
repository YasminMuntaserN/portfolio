import styled from 'styled-components';
import { media } from './Media';

export const Container = styled.div`
  display: grid;
  border: 3px solid var(--color-border);
  border-radius: 50px;
  
  ${media.mobile`
    grid-template-rows: 1fr 1fr;
    border:none;
    margin:0;

  `}

  ${media.tablet`
    border:none;
    margin:0;
    padding: 0;
  `}

  ${media.largeTablet`
    grid-template-rows: 1fr 1fr;
    width: 80%; 
    margin: 10px auto; 
    padding: 2rem;
    padding-top:0;
    margin-top: 70px;
  `}

  ${media.desktop`
    grid-template-columns: 2fr 1fr;
    width: 90%;
    margin-left: 90px;
    padding: 5rem 5rem 5rem 7rem;
    margin-top: 40px;
  `}
`;