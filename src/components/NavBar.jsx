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
					<Navbar.Brand className={styles['nav-item']}>
						<Link to="/">LOGO</Link>
					</Navbar.Brand>
				</Nav>
				<Nav className="align-items-center">
					{!user ? (
						<>
							<Nav.Link className={styles['nav-item']}>
								<Link to="/login">Login</Link>
							</Nav.Link>
							<Nav.Link className={styles['nav-item']}>
								<Link to="/signup">Signup</Link>
							</Nav.Link>
						</>
					) : (
						<Fragment >
							<Nav.Link className={styles['nav-item']}>
								<Link to='/'>Settings</Link>
							</Nav.Link>
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
