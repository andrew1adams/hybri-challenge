import { getAuth } from 'firebase/auth';
import { FirebaseApp } from 'services/firebase';

const AuthService = getAuth(FirebaseApp);

const UserAlreadyAuth = AuthService.onAuthStateChanged;

export { AuthService, UserAlreadyAuth };
