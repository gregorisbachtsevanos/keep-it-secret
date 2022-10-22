import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

import { Navbar, Button	 } from 'react-bootstrap';

// import styles from './NavBar.module.css';

const NavBar = ({ user }) => {
	const { logout } = useLogout();

	return (
		<Navbar>
			<ul>
				{user ? (
					<li>
						<Link to="/">LOGO</Link>
					</li>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</>
				)}
				{user && (
					<li>
						<Button onClick={logout}>Logout</Button>
					</li>
				)}
			</ul>
		</Navbar>
	);
};

export default NavBar;
