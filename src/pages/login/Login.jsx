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
		<Container className={styles.container}>
			<h2 className='form-title'>Login</h2>
			<Form onSubmit={handleSubmit}>
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
					Login
				</Button>
			</Form>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Login;
