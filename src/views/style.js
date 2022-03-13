import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ isLogged }) =>
    isLogged &&
    css`
      flex-direction: row-reverse;
    `}
`;
