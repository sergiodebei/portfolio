import { createGlobalStyle } from 'styled-components';

import HaasGrotDisp from '../../static/fonts/HaasGrotDisp-55Roman.woff';
import HaasGrotDisp2 from '../../static/fonts/HaasGrotDisp-55Roman.woff2';

import Parnaso from '../../static/fonts/Parnaso-MediumCondensed.woff';
import Parnaso2 from '../../static/fonts/Parnaso-MediumCondensed.woff2';

// set basic styling and 'normalize' things
const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'HaasGrotDisp';
    src: url(${HaasGrotDisp}) format('woff'),
      url(${HaasGrotDisp2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Parnaso';
    src: url(${Parnaso}) format('woff'),
      url(${Parnaso2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: auto;
    width: 100%;
    overflow: auto;
    font-size: 1.6rem;
    line-height: 1.25;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.black};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamilyHeading};
    font-weight: normal;
    line-height: 1;
  }

  p {
    margin: 0;
    padding: 0;
    
    + p {
      margin: 1.5rem 0 0;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%
  }
  
`;

export default GlobalStyle;
