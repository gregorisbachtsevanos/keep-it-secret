import { useEffect, useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);

	const signup = async (email, password, displayName) => {
		setIsPending(true);
		setError(null);

		try {
			const res = await projectAuth.createUserWithEmailAndPassword(
				email,
				password
			);

			console.log(res.user);
			if (!res) throw new Error('Could not complete signup');
			await res.user.updateProfile({ displayName });

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
