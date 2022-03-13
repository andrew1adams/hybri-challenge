import { EntryForm } from 'components';
import { useEffect } from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeToLogin } from 'store/slices/form';
import { Container } from './style';

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeToLogin());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2>Login</h2>
        <p>Welcome back! Your friends are waiting.</p>
        <EntryForm />
        <p style={{ margin: '0 auto' }}>or</p>
        <NavLink to="/register">
          <BsBoxArrowInRight size="24" fill="var(--primary-light)" />
          Register Now
        </NavLink>
      </Container>
    </>
  );
};

export default Register;
