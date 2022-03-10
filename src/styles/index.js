import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: 'Nunito', sans-serif;

    --text: #232c3d;
    --background: #f0f2ff;

    --primary: #1F7A8C;
    --secondary: #DB222A;

    --primary-dark: #053C5E;
    --secondary-dark: #A31621;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--background);

    ul li {
      list-style: none;
    }

    a {
      text-decoration: none;
    }
  }
`;
