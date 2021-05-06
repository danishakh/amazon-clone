import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBBlBNl1nwSF5hqZIX31FfXTMSZIU5tEmc",
	authDomain: "clone-b2804.firebaseapp.com",
	projectId: "clone-b2804",
	storageBucket: "clone-b2804.appspot.com",
	messagingSenderId: "656881796978",
	appId: "1:656881796978:web:31014532c309190f47bfeb",
	measurementId: "G-KCDSM0SW33",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
