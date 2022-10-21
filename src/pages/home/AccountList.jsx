import { useCollection } from '../../hooks/useCollection';
import { useFirestore } from '../../hooks/useFirestore';

const AccountList = () => {
	const { accounts } = useCollection('Accounts');
  const { deleteDocument } = useFirestore('Accounts');

  const handleEvent = (id) => {
    deleteDocument(id)
  }

	console.log(accounts);
	return (
		<div>
			{accounts.map((account, index) => {
				return (
					<div key={index}>
						<h4>
							<span>{account.name} </span> 
							<span>{account.password}</span>
							<span>{account.id}</span>
						</h4>
            <button onClick={() => handleEvent(account.id)}>x</button>
					</div>
				);
			})}
		</div>
	);
};

export default AccountList;
