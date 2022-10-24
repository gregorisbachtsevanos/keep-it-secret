import { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [accounts, setAccounts] = useState([]);

	const ref = projectFirestore.collection(collection);

	useEffect(() => {
		setIsPending(true);
		setError(null);

		const unsub = ref.onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No transaction to load');
					setIsPending(false);
				} else {
					let result = [];
					snapshot.docs.forEach((doc) => {
						result.push({ id: doc.id, ...doc.data() });
					});
					setAccounts(result);
					setIsPending(false);
					// setError(result);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);
		return () => unsub();
	}, []);

	return { error, isPending, accounts };
};
