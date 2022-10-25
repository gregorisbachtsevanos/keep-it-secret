import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

import Modal from "./Modal";

import { Card, Button, Row, Container } from "react-bootstrap";

const AccountList = ({ accounts }) => {
	const { deleteDocument, res } = useFirestore("Accounts");
	const [showModal, setShowModal] = useState(false);

	const handleEvent = (id) => {
		deleteDocument(id);
	};

	return (
		<>
			{accounts.length > 0 ? (
				<>
					<h4 className="form-title">Your Accounts</h4>
					<Row>
						{accounts.map((account, index) => {
							return (
								<div
									className="d-flex flex-column col-6"
									key={index}
								>
									<Card key={index} className="col-11 my-2">
										<Card.Body className="d-flex">
											<Card.Title>
												<span className="material-symbols-outlined">
													mail
												</span>
											</Card.Title>
											<Container className="d-flex justify-content-between">
												<Row>
													<span>{account.name}</span>{" "}
													<br />
													<span>
														{account.password}
													</span>
												</Row>
												<div>
													<span
														className="material-symbols-outlined"
														onClick={() =>
															setShowModal(
																!showModal
															)
														}
													>
														edit
													</span>
													<span
														className="material-symbols-outlined"
														onClick={() =>
															handleEvent(
																account.id
															)
														}
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
					</Row>
				</>
			) : (
				<h4 className="form-title">No account yet</h4>
			)}
		</>
	);
};

export default AccountList;
