import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, username);
	};

	return (
		<div>
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						required
					/>
				</label>
				<label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</label>
				<label>
					<input
						type="password"
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

export default Signup;
