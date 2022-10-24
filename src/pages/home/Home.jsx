import React from 'react';
import { AccountForm } from './AccountForm';
import AccountList from './AccountList';

import { Container, Row } from 'react-bootstrap';

const Home = () => {
	return (
		<Container>
		<Row className='col-12'>
			<div className='col-8'>
				<AccountList />
			</div>
			<div className='col-4'>
				<AccountForm />
			</div>
		</Row>
		</Container>
	);
};

export default Home;
