import { useState, useEffect } from 'react';
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
	const [error, setError] = useState(null);
	const [isCancelled, setIsCancelled] = useState(null);
	const [isPending, setIsPending] = useState(null);
	const { dispatch } = useAuthContext();

	const logout = async () => {
		setIsPending(true);
		setError(null);

		try {
			const res = await projectAuth.signOut();
			dispatch({ type: 'LOGOUT' });
			if (!isCancelled) {
				setError(null);
				setIsPending(false);
			}
		} catch (error) {
			if (!isCancelled) {
				setError(error.message);
				setIsPending(false);
			}
		}
	};

	// ! CLean up function does not work the way it supposed to
	//* useEffect(() => {
	//* 	return () => setIsCancelled(true);
	//* }, []);

	return { logout, error, isPending };
};
