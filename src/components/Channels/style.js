import styled from 'styled-components';

export const Container = styled.aside`
  min-height: 50vh;

  nav {
    ul {
      li {
        padding: 5px;
        display: flex;
        gap: 5px;
        align-items: center;
        font-weight: bold;
        border-bottom: 2px solid var(--background);
        color: #fff;
        position: relative;
        cursor: pointer;

        svg {
          fill: #fff;
        }

        :last-child {
          border-bottom: none;
        }

        :before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          right: -25px;
          box-sizing: border-box;
          border-left: 10px solid var(--primary-light);
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;

          @media (max-width: 480px) {
            display: none;
          }
        }
      }
    }
  }
`;
