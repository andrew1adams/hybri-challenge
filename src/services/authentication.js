import { getAuth } from 'firebase/auth';
import { FirebaseApp } from 'services/firebase';

const AuthService = getAuth(FirebaseApp);

export default AuthService;
