import React from 'react';
import { Link } from 'react-router-dom';

// import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">LOGO</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>username</li>
				<li>
					<button>Logout</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
