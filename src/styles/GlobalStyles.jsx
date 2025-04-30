import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --main-color: #ba8aba;
        --background-color: #0d1224;
        --basic-background-color: #0d1224;
        --background-color-two: #1a1443;
        --color-white: #ffffff;
        --pure-color-white: #ffffff;
        --second-color: #94bbe9;
        --color-border: #1b2c68a0;
        --color-gray: #a8abab;
        --color-light-gray: #e4eeef;
        --color-orang: #fcd34d;
        --color-dark-orange: #fb923c;
        --color-green: #4ade80;
        --color-cyan: #22d3ee;
        --linear-gradient: linear-gradient(90deg, #833ab4 0%, rgba(185, 138, 185, 1) 50%, rgba(148, 187, 233, 1) 100%);
        --breakpoints-mobile: 450px;
        --breakpoints-tablet: 768px;
        --breakpoints-desktop: 1024px;
    }

    &.light-mode {
        --background-color: rgba(185, 138, 185, 1);
        --basic-background-color: #F2E3E3;
        --color-white: #0d1224;
        --background-color-two: #155DA5;
        --main-color: #F38CBB;
        --color-gray: #AFAFDC;
        --pure-color-white: #ffffff;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 7px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--basic-background-color);
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--main-color);
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: var(--basic-background-color);
        transition: color 0.3s, background-color 0.3s;
        overflow-x: hidden;
    }

    /* Custom animations */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    animate-fade-in {
        animation: fadeIn 0.6s ease-in-out forwards;
    }

    animate-fade-up {
        animation: fadeUp 0.6s ease-in-out forwards;
    }

    animation-delay-200 {
        animation-delay: 200ms;
    }

    animation-delay-400 {
        animation-delay: 400ms;
    }

    animation-delay-600 {
        animation-delay: 600ms;
    }

    animation-delay-800 {
        animation-delay: 800ms;
    }

`;

export default GlobalStyles;
