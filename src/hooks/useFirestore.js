import { useReducer, useState, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

const initialState = {
	documents: null,
	isPending: false,
	error: null,
	success: null,
};

const firestoreReducer = (state, action) => {
	switch (action.type) {
		case 'IS_PENDING':
			return {
				documents: null,
				isPending: true,
				error: null,
				success: false,
			};
		case 'ADD_DOCUMENT':
			return {
				documents: action.payload,
				isPending: false,
				error: null,
				success: true,
			};
		case 'DELETE_DOCUMENT':
			return {
				documents: null,
				isPending: false,
				error: null,
				success: true,
			};
		case 'ERROR':
			return {
				documents: null,
				isPending: false,
				error: action.payload,
				success: false,
			};
		default:
			return state;
	}
};

export const useFirestore = (collection) => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [state, dispatch] = useReducer(firestoreReducer, initialState);

	const ref = projectFirestore.collection(collection);

	const dispatchAction = (action) => {
		dispatch(action);
	};

	const addDocument = async (doc) => {
		dispatch({ type: 'IS_PENDING' });
		console.log(doc);

		try {
			const createdAt = timestamp.fromDate(new Date());
			const addedDocument = await ref.add({ ...doc, createdAt });
			dispatchAction({ type: 'ADD_DOCUMENT', payload: addedDocument });
			console.log(addedDocument);
		} catch (error) {
			dispatchAction({ type: 'ERROR', payload: error.message });
			console.log(error.message);
		}
	};

	const deleteDocument = async (id) => {
		dispatch({ type: 'IS_PENDING' });
		// return console.log(id);
		try {
			const deleteDocument = await ref.doc(id).delete();
			dispatchAction({ type: 'DELETE_DOCUMENT', payload: deleteDocument });
		} catch (error) {
			dispatchAction({ type: 'ERROR', payload: error.message });
			console.log(error.message);
		}
	};

	return { addDocument, deleteDocument, ref };
};
