import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

import { useSignup } from '../../hooks/useSignup';
import styles from './signup.module.css';

const Signup = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup, error } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, username);
	};

	return (
		<Container className={styles.container}>
			<h2>Sign Up</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Label>
					<Form.Control
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						required
					/>
				</Form.Label>
				<Form.Label>
					<Form.Control
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</Form.Label>
				<Form.Label>
					<Form.Control
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</Form.Label>
				<Button>Sign Up</Button>
			</Form>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Signup;
