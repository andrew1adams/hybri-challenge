import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from 'services';

const loginAccount = async (currUser) => {
  return await signInWithEmailAndPassword(
    AuthService,
    currUser.email,
    currUser.password
  );
};

const SignInService = async (currUser) => {
  try {
    const { user } = await loginAccount(currUser);
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

export default SignInService;
