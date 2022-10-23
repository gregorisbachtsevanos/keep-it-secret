import React, { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

import { Container, Form, Button } from 'react-bootstrap';
import styles from './login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};
	return (
		<Container
			desktop={{
				only: true,
				display: 'flex',
				textAlign: 'center',
			}}
			widescreen={{ display: 'inline' }}
			className={styles.container}
		>
			<h2>Login</h2>
			<Form onSubmit={handleSubmit}>
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
				<Button>Login</Button>
			</Form>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Login;
