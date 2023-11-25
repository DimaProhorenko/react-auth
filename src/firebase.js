import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: '',
	authDomain: 'react-auth-61e72.firebaseapp.com',
	projectId: 'react-auth-61e72',
	storageBucket: 'react-auth-61e72.appspot.com',
	messagingSenderId: '587246605735',
	appId: '1:587246605735:web:dbffec99676f224a299282',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
