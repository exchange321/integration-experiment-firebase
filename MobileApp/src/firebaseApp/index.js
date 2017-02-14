/**
 * Created by Wayuki on 14-Feb-17.
 */
import firebase from 'firebase';
import fbConfig from '../../firebaseConfig';

const firebaseApp = firebase.initializeApp(fbConfig);

export default firebaseApp;

