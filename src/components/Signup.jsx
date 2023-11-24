import { Link } from 'react-router-dom';

function Signup() {
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
			<form>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Email</label>
					<input className="border p-3" type="text" />
				</div>
				<div className="flex flex-col py-2">
					<label className="py-2 font-medium">Password</label>
					<input className="border p-3" type="password" />
				</div>
				<button className="border border-blue-600 bg-blue-500 hover:bg-blue-600 w-full py-4 my-2 text-white">
					Sign up
				</button>
			</form>
		</div>
	);
}
export default Signup;
