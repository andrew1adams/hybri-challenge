import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 18px;
    font-family: 'Nunito', sans-serif;

    --text: #1B2021;
    --text-light: #1B202177;

    --background: rgba(255, 255, 255, 1);

    --primary-dark: rgba(39, 24, 126, 1);
    --primary-light: rgba(117, 139, 253, 1);

    --secondary: rgba(255, 203, 71, 1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    color: var(--text);
  }

  body {
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    background: var(--background);

    input {
      font-family: 'Nunito', sans-serif;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      transition: background-color 500000s ease-in-out 0s;
      font-family: 'Nunito', sans-serif;
      color: var(--text);
      font-size: 1rem;
    }

    ul li {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: var(--primary-light);
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
      transition: all 0.1s ease-in-out;

      svg {
        transition: all .1s ease-in-out;
      }

      :hover, :hover svg {
        color: var(--secondary);
        fill: var(--secondary);
      }
    }

    h1, h2, h3, h4, strong {
      color: var(--primary-light);
    }
  }

  @keyframes fadeRtl {
    0% {
      opacity: 0;
      transform: translateX(50px) ;
    }

    100% {
      opacity: 1;
      transform: translateX(0px) ;
    }
  }
`;
