import React, { useState } from 'react';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e) => {
      e.preventDefault()
      console.log(username, email, password)
   }

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
