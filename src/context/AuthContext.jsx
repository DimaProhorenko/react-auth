import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

import { auth } from '../firebase';

const UserContext = createContext();

const createUser = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

const logout = () => {
	return signOut(auth);
};

const login = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				createUser,
				logout,
				login,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export const UserAuth = () => {
	return useContext(UserContext);
};
