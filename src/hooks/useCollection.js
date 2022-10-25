import { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, _query) => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [accounts, setAccounts] = useState([]);

	const query = useRef(_query).current

	useEffect(() => {
		setIsPending(true);
		setError(null);

		let ref = projectFirestore.collection(collection)
		if (query) ref = ref.where(...query).orderBy("createdAt", 'desc');

		const unsub = ref.onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No accounts to load');
					setIsPending(false);
				} else {
					let result = [];
					snapshot.docs.forEach((doc) => {
						result.push({ id: doc.id, ...doc.data() });
					});
					// console.log(result)
					setAccounts(result);
					setIsPending(false);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);
		return () => unsub();
	}, [collection, query]);

	return { error, isPending, accounts };
};
