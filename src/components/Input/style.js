import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  justify-content: center;
  margin: 20px 0;
  min-width: 100%;

  label {
    text-transform: uppercase;
    font-size: 0.875rem;
    position: absolute;
    transition: all 0.5s ease-in-out;
    top: -10px;
    left: 0;
    font-weight: bold;
    width: 100%;
    height: calc(100% + 10px);

    :before {
      content: '';
      position: absolute;
      background: var(--primary-light);
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 2px;
      z-index: 1000;
      transition: all 0.5s ease-in-out;
    }
  }

  input {
    font-size: 1rem;
    display: flex;
    align-items: center;
    border: transparent;
    padding: 15px 0px 10px;
    position: relative;
  }
`;
