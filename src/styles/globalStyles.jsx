import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
  }

`;
