import { Waves } from 'assets';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { userState } from 'store/slices/user';
import { Login, Register, Home } from 'views';
import { Container } from './style';

const Main = () => {
  const { isLogged } = useSelector(userState);

  return (
    <Container isLogged={isLogged}>
      <Waves />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default Main;
