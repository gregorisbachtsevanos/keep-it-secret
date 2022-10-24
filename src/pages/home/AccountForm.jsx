import React, { useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

import { Button, Form, Container } from 'react-bootstrap';

export const AccountForm = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { addDocument } = useFirestore('Accounts');

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({ name, password });
	};

	return (
		<Container className="col-10">
			<h4>Add New Account</h4>
			<Form>
				<Form.Label className="col-12">
					<Form.Control
						type="email"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
					/>
				</Form.Label>
				<Form.Label className="col-12">
					<Form.Control
						type="text"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</Form.Label>
				<Button className='btn' onClick={handleSubmit}>Add</Button>
			</Form>
		</Container>
	);
};
