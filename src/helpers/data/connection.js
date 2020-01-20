import firebase from 'firebase/app';
import firebaseKeys from '../apiKeys.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseKeys.firebaseKeys);
  }
};

export default firebaseApp;
