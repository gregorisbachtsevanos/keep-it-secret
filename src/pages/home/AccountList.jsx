import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

import Modal from "./Modal";

import { Card, Button, Row, Container } from "react-bootstrap";

const AccountList = ({ accounts }) => {
	const { deleteDocument, res } = useFirestore("Accounts");
	const [showModal, setShowModal] = useState(true);

	const handleEvent = (id) => {
		deleteDocument(id);
	};

	const openModal = (e) => {
		const el = e.target
			.closest(".card-container")
			.querySelector(".modal-container");
		if (el.classList.contains("d-none")) {
			return el.classList.remove("d-none");
		}
		el.classList.add("d-none");
	};

	return (
		<>
			<h4 className="form-title">Your Accounts</h4>
			<Row>
				{accounts &&
					accounts.map((account, index) => {
						return (
							<div
								className="d-flex flex-column col-6 card-container"
								key={index}
							>
								<Card key={index} className="col-11 my-2">
									<Card.Body className="d-flex">
										<Card.Title>
											<span className="material-symbols-outlined">
												mail
											</span>
										</Card.Title>
										<Container className="d-flex align-items-start justify-content-between">
											<Row>
												<span>{account.name}</span>
												<br />
												<span>{account.password}</span>
											</Row>
											<div className="d-flex">
												<button className="btn btn-sm btn-white">
													<span
														className="material-symbols-outlined"
														onClick={(e) =>
															openModal(e)
														}
													>
														edit
													</span>
												</button>
												<button className="btn btn-sm btn-white">
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
												</button>
											</div>
										</Container>
									</Card.Body>
								</Card>
								<Modal account={account} />
							</div>
						);
					})}
			</Row>
		</>
	);
};

export default AccountList;
