import React from "react";
import { AccountForm } from "./AccountForm";
import AccountList from "./AccountList";
import { useCollection } from "../../hooks/useCollection";

import { Container, Row } from "react-bootstrap";
import styles from "./home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
	const { user } = useAuthContext();
	const { isPending, error, accounts } = useCollection("Accounts", [
		"uid",
		"==",
		user.uid,
	]);
	return (
		<Container className="p-1 my-3">
			<Row className="col-12">
				<div className="col-8">
					{isPending && (
						<h4 className={styles.loading}>loading...</h4>
					)}
					{!error ? (
						<AccountList accounts={accounts} />
					) : (
						<h4 className={styles.error}>{error}</h4>
					)}
				</div>
				<div className="col-4">
					<AccountForm uid={user.uid} />
				</div>
			</Row>
		</Container>
	);
};

export default Home;
