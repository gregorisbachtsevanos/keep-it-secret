import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { Navbar, Container, Button, Nav } from 'react-bootstrap';
// import styles from './NavBar.module.css';

const NavBar = ({ user }) => {
	const { logout } = useLogout();

	return (
		<Navbar>
			<Container>
				<Nav className="d-flex">
					<Navbar.Brand>
						<Link to="/">LOGO</Link>
					</Navbar.Brand>
				</Nav>
				<Nav>
					{!user ? (
						<>
							<Nav.Link>
								<Link to="/login">Login</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/signup">Signup</Link>
							</Nav.Link>
						</>
					) : (
						<Nav.Link>
							<Button onClick={logout}>Logout</Button>
						</Nav.Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;
