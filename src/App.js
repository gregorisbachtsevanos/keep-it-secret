import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useAuthContext } from './hooks/useAuthContext';

import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import { PrivateRouter } from './utils/PrivateRouter';
import { PublicRouter } from './utils/PublicRouter';

import './App.css';

function App() {
	const { authIsReady, user } = useAuthContext();

	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<NavBar user={user} />
					<Routes>
						<Route element={<PrivateRouter user={user} />}>
							<Route path="/" element={<Home />} />
						</Route>
						<Route element={<PublicRouter user={user} />}>
							<Route path="/login" element={<Login />} />
							<Route path="/signup" element={<Signup />} />
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
