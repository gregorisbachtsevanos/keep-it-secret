import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import { Form, Button, Container, Heading } from 'react-bulma-components';

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
		<Container
			desktop={{
				only: true,
				display: 'flex',
				textAlign: 'center',
			}}
			widescreen={{ display: 'inline' }}
			className={styles.container}
		>
			<Heading>Sign Up</Heading>
			<Form.Field onSubmit={handleSubmit}>
				<Form.Label>
					<Form.Input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						required
					/>
				</Form.Label>
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
				<Button>Sign Up</Button>
			</Form.Field>
			{error && <p>{error}</p>}
		</Container>
	);
};

export default Signup;
