import { Container } from './style';
import { Input, Button } from 'components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRequestUser,
  fetchResponseUser,
  userLogin,
} from 'store/slices/user';
import { SignInService, SignUpService } from 'services';
import { formState } from 'store/slices/form';
import { useNavigate } from 'react-router-dom';

const EntryForm = () => {
  const [userInput, setUser] = useState({ email: '', password: '' });
  const { form } = useSelector(formState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    switch (form) {
      case 'register': {
        try {
          dispatch(fetchRequestUser());
          const response = await SignUpService(userInput);
          const { user } = response;
          if (response.success) {
            dispatch(userLogin(user));
            navigate('/chat');
            break;
          }
        } catch (SignUpError) {
          console.error({ SignUpError });
          dispatch(fetchResponseUser());
        } finally {
          dispatch(fetchResponseUser());
        }
        break;
      }
      case 'login': {
        try {
          dispatch(fetchRequestUser());
          const response = await SignInService(userInput);
          const { user } = response;

          if (response.success) {
            dispatch(userLogin(user));
            navigate('/chat');
            break;
          }
        } catch (SignInError) {
          console.error({ SignInError });
          dispatch(fetchResponseUser());
        } finally {
          dispatch(fetchResponseUser());
        }
        break;
      }
      default:
        break;
    }
  };

  return (
    <Container>
      <Input
        label="email"
        type="email"
        handleState={setUser}
        value={userInput.email}
      />
      <Input
        label="password"
        type="password"
        handleState={setUser}
        value={userInput.password}
      />
      <Button type="submit" onClick={handleSubmit}>
        {form === 'login' ? 'Login' : 'Register'}
      </Button>
    </Container>
  );
};

export default EntryForm;
