import { createPortal } from "react-dom";
import styled from "styled-components";
import { MdSunny } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
const Container =styled.div`
  background-color:white;
  position: fixed;
  bottom: -40px;
  right: -10px;
  transform: translate(-50%, -50%);
  padding :5px;
  background-image: linear-gradient(  var(--color-border),  #8b5cf6 ,var(--main-color));
  display:flex;
  justify-content:space-between;
  gap:10px;
  flex-direction:column;
  border-radius: 70px;
`;

const Icon=styled.div`
  font-size:30px;
`
const Circle =styled(FaCircle)`
 color:var(--color-border);
`
function Modal() {
    const [isDarkMode , setIsDarkMode]=useState();
    const handleMode =()=>setIsDarkMode(!isDarkMode);

    useEffect(function(){
      if(!isDarkMode){
        document.documentElement.classList.add('dark-mode');
        document.documentElement.classList.remove('light-mode');
      }else{
        document.documentElement.classList.add('light-mode');
        document.documentElement.classList.remove('dark-mode');
      }
    })

    return createPortal(
    <Container>
      <Icon onClick={handleMode}>{isDarkMode ?<FaMoon style={{color:'var(--color-gray)'}}/> :<Circle/>}</Icon>
      <Icon onClick={handleMode}>{!isDarkMode ?<MdSunny style={{color:'var(--color-orang)'}}/>:<Circle/>}</Icon>
    </Container>,
      document.body
    );
}

export default Modal