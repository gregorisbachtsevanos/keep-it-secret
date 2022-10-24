import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

import { Button, Form, Container } from 'react-bootstrap';
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
				<Form.Label className="col-12">
					<Form.Control
						type="text"
						className={styles['input-container']}
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						required
					/>
				</Form.Label>
				<Form.Label className="col-12">
					<Form.Control
						type="email"
						className={styles['input-container']}
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</Form.Label>
				<Form.Label className="col-12">
					<Form.Control
						type="password"
						className={styles['input-container']}
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</Form.Label>
				<Button onClick={handleSubmit} className='btn'>
					Sign Up
				</Button>
			</Form>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Signup;
