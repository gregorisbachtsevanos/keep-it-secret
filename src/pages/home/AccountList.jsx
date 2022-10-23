import { useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

import { Form, Button } from 'react-bootstrap';
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
		<div>
			{accounts.map((account, index) => {
				return (
					<div key={index}>
						<h4>
							<span>{account.name} </span>
							<span>{account.password}</span>
						</h4>
						<button onClick={() => handleEvent(account.id)}>x</button>

						<Form.Field onSubmit={(e) => handleSubmit(e, account.id)}>
							<Form.Label>
								<Form.Input
									type="email"
									onChange={(e) => setName(e.target.value)}
									value={name}
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
							<Button>Update</Button>
						</Form.Field>
					</div>
				);
			})}
		</div>
	);
};

export default AccountList;
