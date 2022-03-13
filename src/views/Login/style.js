import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  animation: fadeRtl 1s ease-in-out;
  min-width: 320px;
  margin: 0 auto;

  a {
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
`;
