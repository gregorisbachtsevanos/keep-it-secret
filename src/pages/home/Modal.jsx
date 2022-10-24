import { useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

import { Card, Form, Button } from 'react-bootstrap';
import styles from './home.module.css'

const Modal = ({ account }) => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { updateDocument } = useFirestore('Accounts');

	const handleSubmit = (e, id) => {
		e.preventDefault();
		updateDocument(id, { name, password });
	};

	return (
		<Card className={styles['model-container']}>
			<Form onSubmit={(e) => handleSubmit(e, account.id)}>
				<Form.Label>
					<Form.Control
						type="email"
						onChange={(e) => setName(e.target.value)}
						value={name}
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
				<Button onClick={handleSubmit} className="btn">
					Update
				</Button>
			</Form>
		</Card>
	);
};

export default Modal;
