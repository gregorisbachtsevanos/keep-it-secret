import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import styles from './NavBar.module.css';

const NavBar = ({ user }) => {
	const { logout } = useLogout();

	return (
		<Navbar>
			<Container className="d-flex">
				<Nav className="align-items-center">
					<Link className={styles['nav-item']} to="/">
						LOGO
					</Link>
				</Nav>
				<Nav className="align-items-center">
					{!user ? (
						<>
							<Link className={styles['nav-item']} to="/login">
								Login
							</Link>
							<Link className={styles['nav-item']} to="/signup">
								Signup
							</Link>
						</>
					) : (
						<Fragment>
							<Link className={styles['nav-item']} to="/">
								Settings
							</Link>
							<Nav.Link>
								<Button onClick={logout}>Logout</Button>
							</Nav.Link>
						</Fragment>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
