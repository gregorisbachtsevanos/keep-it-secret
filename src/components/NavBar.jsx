import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// import styles from './NavBar.module.css';

const NavBar = ({ user }) => {
	const { logout } = useLogout();

	return (
		<nav>
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
						<button onClick={logout}>Logout</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
