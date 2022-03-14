import { useSelector } from 'react-redux';
import { userState } from 'store/slices/user';
import styled from 'styled-components';
import { waveOne, waveTwo } from 'assets/images';

const Container = styled.div`
  transition: all 0.5s ease-in-out;
  margin-bottom: -100vh;
  background: url(${({ one }) => (one ? waveOne : waveTwo)}) no-repeat center;
  background-size: auto 120%;
  height: 100vh;
  z-index: ${({ one }) => (one ? -100 : -10)};

  animation: fluid infinite ease-in-out 2s
      ${({ one }) => (one ? 'alternate-reverse' : 'alternate')},
    ${({ isLogged }) => (isLogged ? 'fadeLtrW' : 'fadeRtlW')} 3s infinite
      alternate;

  @keyframes fluid {
    0% {
      background-position-y: -50px;
    }
    100% {
      background-position-y: 0px;
    }
  }

  @keyframes fadeRtlW {
    0% {
      opacity: 1;
      transform: translateX(-10%) scaleX(1);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scaleX(1);
    }
  }

  @keyframes fadeLtrW {
    0% {
      opacity: 1;
      transform: translateX(10%) scaleX(-1);
    }

    100% {
      opacity: 1;
      transform: translateX(0px) scaleX(-1);
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 35%;

  @media (max-width: 900px) {
    display: none;
  }
`;
const Waves = () => {
  const { isLogged } = useSelector(userState);

  return (
    <Wrapper>
      <Container isLogged={isLogged} one />
      <Container isLogged={isLogged} />
    </Wrapper>
  );
};

export default Waves;
