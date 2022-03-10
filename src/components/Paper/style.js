import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  background: #f7f7f7;
  padding: 30px 20px;
  min-width: ${({ w = 0 }) => `${w}px`};
  min-height: ${({ h = 0 }) => `${h}px`};

  ${({ onCenter = false }) =>
    onCenter &&
    css`
      margin: 0 auto;
    `}
`;
