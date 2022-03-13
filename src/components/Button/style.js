import styled from 'styled-components';

export const Container = styled.button`
  background: var(--primary-light);
  padding: 12px 20px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.1s ease-in-out;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.4);
  min-width: 150px;

  svg {
    transition: all 0.1s ease-in-out;

    color: var(--secondary);
    fill: var(--secondary);
  }

  :hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
    transform: scale(1.02);
    background: var(--secondary);
  }

  :active {
    transform: scale(0.99);
  }
`;
