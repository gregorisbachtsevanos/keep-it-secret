import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Container, Heading } from 'react-bulma-components';

import { useLogin } from '../../hooks/useLogin';

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
			<Heading>Login</Heading>
			<Form.Field onSubmit={handleSubmit}>
				<Form.Label>
					<Form.Input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						required
					/>
				</Form.Label>
				<Form.Label>
					<Form.Input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</Form.Label>
				<Button>Login</Button>
			</Form.Field>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Login;
