import React, { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div>
			<h2>Login</h2>
			<form>
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
			</form>
		</div>
	);
};

export default Login;
