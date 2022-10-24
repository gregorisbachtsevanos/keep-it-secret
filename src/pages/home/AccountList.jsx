import { useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

import { Card, Form, Button } from 'react-bootstrap';

const AccountList = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { accounts } = useCollection('Accounts');
	const { deleteDocument, updateDocument } = useFirestore('Accounts');

	const handleSubmit = (e, id) => {
		e.preventDefault();
		updateDocument(id, { name, password });
	};

	const handleEvent = (id) => {
		deleteDocument(id);
	};

	return (
		<div className='col-6'>
			{accounts.map((account, index) => {
				return (
					<Card key={index}>
						<Card.Title></Card.Title>
						<Card.Body>
							<span>{account.name} </span>
							<span>{account.password}</span>
						</Card.Body>
						<button onClick={() => handleEvent(account.id)}>x</button>

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
							<Button onClick={handleSubmit} className='btn'>Update</Button>
						</Form>
					</Card>
				);
			})}
		</div>
	);
};

export default AccountList;
