import React, { useState } from 'react';

export const AccountForm = () => {
   const [addAccount, setAddAccount] = useState('')
   const [addPassword, setAddPassword] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(addAccount, addPassword)
   }

	return (
		<div>
         <h2>Add New Account</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="email"
						onChange={(e) => setAddAccount(e.target.value)}
						value={addAccount}
						required
					/>
				</label>
				<label>
					<input
						type="text"
						onChange={(e) => setAddPassword(e.target.value)}
						value={addPassword}
						required
					/>
				</label>
            <button>Add</button>
			</form>
		</div>
	);
};
