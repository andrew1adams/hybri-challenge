import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'services';

const createAccount = async (currUser) => {
  return await createUserWithEmailAndPassword(
    AuthService,
    currUser.email,
    currUser.password
  );
};

const SignUpService = async (currUser) => {
  try {
    const { user } = await createAccount(currUser);
    return {
      success: true,
      user,
    };
  } catch (e) {
    console.error(`Something was wrong...: ${e}`);
    return {
      success: false,
    };
  }
};

export default SignUpService;
