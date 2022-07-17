import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhBR6jDspenHoCGCFmOgiFnefI_YGoG3E',
  authDomain: 'house-market-place-c40b3.firebaseapp.com',
  projectId: 'house-market-place-c40b3',
  storageBucket: 'house-market-place-c40b3.appspot.com',
  messagingSenderId: '286049424486',
  appId: '1:286049424486:web:1b5ffc21bd170d98f549a7',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
