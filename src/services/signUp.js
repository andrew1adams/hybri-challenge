import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'services';

const createAccount = (user) => {
  return createUserWithEmailAndPassword(AuthService, user.email, user.password);
};

const SignUpService = async (user) => {
  try {
    const response = await createAccount(user);
    console.log({ response });
  } catch (e) {
    console.error(`Something was wrong...: ${e}`);
  }
};

export default SignUpService;
