import { EntryForm } from 'components';
import { useEffect } from 'react';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changeToRegister } from 'store/slices/form';
import { Container } from './style';

const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeToRegister());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h2>Register</h2>
        <p>Ready to make new friends?</p>
        <EntryForm />
        <p style={{ margin: '0 auto' }}>or</p>
        <NavLink to="/">
          <BsBoxArrowInLeft size="24" fill="var(--primary-light)" />
          Back to Login
        </NavLink>
      </Container>
    </>
  );
};

export default Register;
