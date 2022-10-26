import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

import { Card, Form, Button } from "react-bootstrap";
import styles from "./home.module.css";

const Modal = ({ account }) => {
	const [name, setName] = useState(account.name);
	const [password, setPassword] = useState(account.password);
	const { updateDocument } = useFirestore("Accounts");

	const handleSubmit = (e, id) => {
		e.preventDefault();
		e.target.closest(".modal-container").classList.add("d-none");
		return console.log(id, { name, password });
		updateDocument(id, { name, password });
	};

	return (
		<Card className="d-none modal-container">
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
						type="text"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required
					/>
				</Form.Label>
				<button className="custom-btn">Update</button>
			</Form>
		</Card>
	);
};

export default Modal;
