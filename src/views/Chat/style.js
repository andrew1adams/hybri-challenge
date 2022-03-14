import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  min-width: 50%;
  display: flex;
  gap: 5px;

  animation: fadeLtr 1.5s ease-in-out;

  @media (max-width: 900px) {
    width: 80%;
  }
`;
