import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary-light);
  min-height: 80vh;
  border-radius: 8px 0 0 8px;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    min-height: 50px;
  }
`;
