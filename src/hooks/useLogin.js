import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsPending(true);
		setError(null);

		try {
			const res = await projectAuth.signInWithEmailAndPassword(
				email,
				password
			);
			
			if (!isCancelled) {
				setIsPending(false);
				setError(null);
			}
			
			dispatch({ type: 'LOGIN', payload: res.user });
		} catch (error) {
			if (!isCancelled) {
				setIsPending(false);
				setError(error.message);
				console.log(error.message);
			}
		}
	};

	// useEffect(() => {
	// 	return () => setIsCancelled(true);
	// }, []);

	return { login, error, isPending };
};
