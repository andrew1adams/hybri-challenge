import { useState } from 'react';
import { SignUpService } from 'services';
import { GlobalStyles } from 'styles';
import { Main } from 'views';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const handleSignUp = async () => {
    await SignUpService(user);
  };

  return (
    <>
      <GlobalStyles />
      <Main />
    </>
  );
};

export default App;
