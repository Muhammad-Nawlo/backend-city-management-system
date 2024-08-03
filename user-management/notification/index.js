import firebase from 'firebase-admin';
import firebaseConfig from './firebase-config.json';

firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig)
});
export default firebase

