import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  padding: ${({ padding }) => padding};
  min-width: ${({ w: min = 50 }) => `${min}vh`};
  min-height: ${({ h: min = 50 }) => `${min}vh`};
  max-width: ${({ w: max = 100 }) => `${max}vh`};
  max-height: ${({ h: max = 100 }) => `${max}vh`};

  display: ${({ display }) => display};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => `${gap}px`};

  ${({ centralize = false }) =>
    centralize &&
    css`
      margin: 0 auto;
    `};

  @media (max-width: 900px) {
    justify-content: center;
    padding: 50px 0;
  }
`;
