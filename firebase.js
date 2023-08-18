import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyA2hRLiR-voy_3ogCNO_6E1NNaBfZ2xnT0',
  authDomain: 'emergeuser-9bff4.firebaseapp.com',
  projectId: 'emergeuser-9bff4',
  storageBucket: 'emergeuser-9bff4.appspot.com',
  messagingSenderId: '947368617645',
  appId: '1:947368617645:web:8bdb97bd49d14de82d8824',
  measurementId: 'G-25S5LN2FXC',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
