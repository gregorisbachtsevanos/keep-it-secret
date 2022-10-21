import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDQMeqWU4BPrqbwpdHSbILZXI46q6MyV_U',
	authDomain: 'keep-it-a-secret.firebaseapp.com',
	projectId: 'keep-it-a-secret',
	storageBucket: 'keep-it-a-secret.appspot.com',
	messagingSenderId: '160235852980',
	appId: '1:160235852980:web:ed6228244f9518f1f5f3e1',
};

// initialize firabase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp };
