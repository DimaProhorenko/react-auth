import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';

import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Signup />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
