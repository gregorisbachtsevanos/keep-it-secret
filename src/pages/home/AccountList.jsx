import { Fragment, useState } from 'react';
import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

import Modal from './Modal';

import { Card, Button, Row, Container } from 'react-bootstrap';

const AccountList = ({accounts}) => {
	// const { accounts } = useCollection('Accounts');
	const { deleteDocument } = useFirestore('Accounts');
	const [showModal, setShowModal] = useState(false);

	const handleEvent = (id) => {
		console.log(1);
		deleteDocument(id);
	};

	return (
		<>
			{accounts.length > 0 ? (
				<>
					<h4 className="form-title">Accounts</h4>
					{accounts.map((account, index) => {
						return (
							<div className="d-flex flex-column">
								<Card key={index} className="col-6">
									<Card.Body className="d-flex">
										<Card.Title>
											<span class="material-symbols-outlined">
												mail
											</span>
										</Card.Title>
										<Container className="d-flex justify-content-between">
											<Row>
												<span>{account.name}</span> <br />
												<span>{account.password}</span>
											</Row>
											<div>
												<span
													className="material-symbols-outlined"
													onClick={() => setShowModal(!showModal)}
												>
													edit
												</span>
												<span
													className="material-symbols-outlined"
													onClick={() => handleEvent(account.id)}
												>
													delete
												</span>
											</div>
										</Container>
									</Card.Body>
								</Card>
								{showModal && <Modal account={account} />}
							</div>
						);
					})}
				</>
			) : (
				<h4 className="form-title">No account yet</h4>
			)}
		</>
	);
};

export default AccountList;
