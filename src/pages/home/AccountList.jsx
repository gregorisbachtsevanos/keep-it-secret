import { Fragment, useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

import Modal from './Modal';

import { Card, Button, Row, Container } from 'react-bootstrap';

const AccountList = () => {
	const { accounts } = useCollection('Accounts');
	const { deleteDocument } = useFirestore('Accounts');
	const [showModal, setShowModal] = useState(true);

	const handleEvent = (id) => {
		console.log(1)
		deleteDocument(id);
	};

	return (
		<div className="col-4">
			{accounts.map((account, index) => {
				return (
					<Fragment className="d-flex flex-column">
						<Card key={index}>
							<Card.Title></Card.Title>
							<Card.Body>
								<Container className="d-flex">
									<Row>
										<span>{account.name} </span>
										<span>{account.password}</span>
									</Row>
									<div>
										<span className="material-symbols-outlined" onClick={() => handleEvent(account.id)}>
												delete
										</span>
										<span onClick={() => setShowModal(!showModal)}>
											e
										</span>
									</div>
								</Container>
							</Card.Body>
						</Card>
						{showModal && <Modal account={account} />}
					</Fragment>
				);
			})}
		</div>
	);
};

export default AccountList;
