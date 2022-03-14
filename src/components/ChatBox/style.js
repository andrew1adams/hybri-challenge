import styled from 'styled-components';
import { logotype } from 'assets/images';

export const Container = styled.div`
  min-width: 60%;
  border: 2px solid var(--primary-light);
  border-radius: 0 8px 8px 0;
  background: url(${logotype}) no-repeat center center;
  background-size: 200px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100vh;
    border: none;
  }
`;
