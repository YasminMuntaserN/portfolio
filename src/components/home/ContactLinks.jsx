import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import styled from 'styled-components';
import { SiLeetcode } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";

const Container =styled.div`
    display: flex;
    gap:10px ;
`;
const Link =styled.a`
    color: var(--main-color);
    font-size: 35px;
    margin: 6px;
`;
function ContactLinks() {
return (
    <Container>
        <Link href="https://t.me/yasmin_MunN" target="_blank">
        <FaTelegram />
        </Link> 
        <Link href="https://github.com/YasminMuntaserN" target="_blank">
        <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/yasmin-muntaser-908411294/" target="_blank">
            <FaLinkedin />
        </Link>
        <Link href="https://leetcode.com/u/EqbvDBTflw/" target="_blank">
        <SiLeetcode />
        </Link>
        <Link href="https://www.youtube.com/channel/UCoM9s4zu0SfLQeTaJEPzeYg" target="_blank">
        <FaYoutube />
        </Link>
    </Container>
)
}


export default ContactLinks
