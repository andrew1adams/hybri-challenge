import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCyKjwGOrIakt9O4j57yhsV4yJebhZ1Eos',
  authDomain: 'hybri-challenge-da33f.firebaseapp.com',
  projectId: 'hybri-challenge-da33f',
  storageBucket: 'hybri-challenge-da33f.appspot.com',
  messagingSenderId: '720491082142',
  appId: '1:720491082142:web:c989da21a5e18ecea4668f',
};

const FirebaseApp = initializeApp(firebaseConfig);

export { FirebaseApp };
