import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

import { Navbar, Container, Button, Nav } from "react-bootstrap";
import styles from "./NavBar.module.css";

const NavBar = ({ user }) => {
	const { logout } = useLogout();

	return (
		<Navbar>
			<Container className="d-flex mb-5 mt-3">
				<Nav className="align-items-center d-block">
					<Link className={styles["nav-item"]} to="/">
						LOGO
					</Link>
					<h5 className={styles["nav-item"]}>
						{user && user.displayName}
					</h5>
				</Nav>
				<Nav className="align-items-center">
					{!user ? (
						<>
							<Link className={styles["nav-item"]} to="/login">
								Login
							</Link>
							<Link className={styles["nav-item"]} to="/signup">
								Signup
							</Link>
						</>
					) : (
						<>
							<Link className={styles["nav-item"]} to="/">
								Settings
							</Link>
							<Nav.Link>
								<Button onClick={logout}>Logout</Button>
							</Nav.Link>
						</>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
