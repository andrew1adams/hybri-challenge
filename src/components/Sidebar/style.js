import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  .content-wrapper {
    background: var(--primary-light);
    min-height: 80vh;
    max-width: 250px;
    border-radius: 8px 0 0 8px;
    padding: 20px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: space-between;

    * {
      fill: #fff;
      color: #fff;
    }

    header {
      display: flex;
      flex-direction: column;
      gap: 10px;

      span {
        display: flex;
      }

      h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        height: 32px;
      }
    }

    footer {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      span {
        display: flex;
        letter-spacing: 0.05rem;
        gap: 2px;
        font-size: 0.5rem;
      }
    }
  }

  .menu {
    display: none;
  }

  @media (max-width: 480px) {
    .content-wrapper {
      min-height: 100vh;
      position: relative;
      transform: translateX(-100%) scaleX(0);
      transition: all 0.5s ease-in-out;
      border-radius: 0;
      opacity: 0;

      ${({ menuOpen }) =>
        menuOpen &&
        css`
          opacity: 1;
          transform: translateX(0%) scaleX(1);
        `};
    }

    .menu-wrapper {
      width: 55px;
      height: 45px;
      position: absolute;
      right: -65px;
      top: 15px;
      transition: all 0.5s ease-in-out;
      transform: translateX(-225px);

      ${({ menuOpen }) =>
        menuOpen &&
        css`
          transform: translateX(0);
        `};
    }

    .menu {
      display: block;
      position: absolute;
      width: 35px;
      border-radius: 2rem;
      height: 5px;
      top: 10px;
      left: 10px;
      background: var(--primary-light);
      transition: all 0.5s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;

      :before {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        content: '';
        background: var(--primary-light);
        top: 10px;
        left: 0;
        transition: all 0.5s ease-in-out;

        transform: translateX(0);
      }

      :after {
        transform: translateX(0);
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        content: '';
        background: var(--primary-light);
        top: 20px;
        left: 0;
        transition: all 0.5s ease-in-out;
      }

      ${({ menuOpen }) =>
        menuOpen &&
        css`
          transform: rotate(45deg) translateY(10px);

          :before {
            opacity: 0;
            transform: translateX(-10px);
          }

          :after {
            transform: rotate(90deg);
            top: 0px;
          }
        `}
    }

    position: absolute;
    top: 0;
    left: 0%;
    transition: all 0.5s ease-in-out;
  }
`;
