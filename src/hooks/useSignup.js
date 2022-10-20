import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);
	const { dispatch } = useAuthContext();

	const signup = async (email, password, displayName) => {
		setIsPending(true);
		setError(null);

		try {
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);

			if (!res) throw new Error('Could not complete signup');

			await res.user.updateProfile({ displayName });

			dispatch({ type: 'LOGIN', payload: res.user });

			if (!isCancelled) {
				setError(null);
				setIsPending(false);
			}
			console.log(isPending);
		} catch (error) {
			if (!isCancelled) {
				console.log(error);
				setError(error.message);
				setIsPending(false);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { signup, error, isPending };
};
