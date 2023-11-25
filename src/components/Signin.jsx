import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

function Signin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const { login } = UserAuth();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await login(email, password);
			navigate('/account');
		} catch (err) {
			console.log(err.message);
			setError(err.message);
		}
	};

	return (
		<div className="max-w-[700px] mx-auto my-16 p-4">
			<div>
				<h1 className="text-2xl font-bold py-2">
					Sign in to your account
				</h1>
				<p>
					Do not have an account?
					<Link to="/signup" className="underline">
						Sign up
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
export default Signin;
