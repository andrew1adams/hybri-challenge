import styled from 'styled-components';

export const Container = styled.aside`
  nav {
    ul {
      li {
        padding: 5px;
        display: flex;
        gap: 5px;
        align-items: center;
        font-weight: bold;
        border-bottom: 2px solid #fff;

        :last-child {
          border-bottom: none;
        }
      }
    }
  }
`;
