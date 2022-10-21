import React, { useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

export const AccountForm = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { addDocument } = useFirestore('Accounts');

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({name, password});
	};

	return (
		<div>
			<h2>Add New Account</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="email"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
				</label>
				<label>
					<input
						type="text"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</label>
				<button>Add</button>
			</form>
		</div>
	);
};
