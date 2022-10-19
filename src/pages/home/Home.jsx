import React from 'react';
import { AccountForm } from './AccountForm';
import AccountList from './AccountList';

const Home = () => {
	return (
		<div>
			<div>
				<AccountList />
			</div>
			<div>
				<AccountForm />
			</div>
		</div>
	);
};

export default Home;
