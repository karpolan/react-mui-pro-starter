import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: '_firebase_api_key_',
  authDomain: '_somewebsite_.firebaseapp.com',
  databaseURL: 'https://_somewebsite_-default-rtdb.firebaseio.com',
  projectId: '_somewebsite_',
  storageBucket: '_somewebsite_.appspot.com',
  messagingSenderId: '12345',
  appId: '1:12345:web:abcde123',
  measurementId: 'G-ABCD',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
