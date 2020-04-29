import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var config = {
	apiKey: 'AIzaSyDBRNMZ1wq3xw2j26xX1tPKuoujRHJjrsI',
	authDomain: 'crown-db-3d89e.firebaseapp.com',
	databaseURL: 'https://crown-db-3d89e.firebaseio.com',
	projectId: 'crown-db-3d89e',
	storageBucket: 'crown-db-3d89e.appspot.com',
	messagingSenderId: '143684814339',
	appId: '1:143684814339:web:04ec7b434cd45b0d02b036',
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
