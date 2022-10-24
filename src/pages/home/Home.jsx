import React from 'react';
import { AccountForm } from './AccountForm';
import AccountList from './AccountList';
import { useCollection } from '../../hooks/useCollection';


import { Container, Row } from 'react-bootstrap';
import styles from './home.module.css'

const Home = () => {
	const { isPending, error, accounts } = useCollection('Accounts');
	return (
		<Container className='p-5 my-3'>
		<Row className='col-12'>
			<div className='col-8'>
			{isPending && <h4 className={styles.loading}><i>loading...</i></h4>}
			{error ? <AccountList accounts={accounts}/> : <span className=''>{error}</span> }
				
			</div>
			<div className='col-4'>
				<AccountForm />
			</div>
		</Row>
		</Container>
	);
};

export default Home;
