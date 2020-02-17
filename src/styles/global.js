import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  p {
    margin: 6px 0;
    font-size: 14px;
  }

  h1 {
    font-size: 26px;
  }
  
  h2 {
    font-size: 24px;
  }
  
  h3 {
    font-weight: 200;
    font-size: 14px;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }

  .h100 {
    height: 100%;
  }
  
  .circular {
    border-radius: 50%
  }

  .bkg-color1 {
    background-color: ${({ theme }) => theme.bkgColor1};
  }

  .bkg-color2 {
    background-color: ${({ theme }) => theme.bkgColor2};
  }
  
  .bkg-color3 {
    background-color: #5B3758;
  }
`