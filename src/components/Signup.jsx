import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const { createUser } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await createUser(email, password);
			navigate('/account');
		} catch (err) {
			setError(err.message);
			console.log(err.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">
					Sign up for a free account
				</h1>
				<p>
					Already have an account?{' '}
					<Link to="/signin" className="underline">
						Sign in
					</Link>
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Email</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border p-3"
						type="text"
					/>
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Password</label>
					<input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="border p-3"
						type="password"
					/>
				</div>
				<button className="border border-blue-600 bg-blue-500 hover:bg-blue-600 w-full py-4 my-2 text-white">
					Sign up
				</button>
			</form>
		</div>
	);
}
export default Signup;
