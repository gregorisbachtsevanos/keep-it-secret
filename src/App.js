import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { useAuthContext } from './hooks/useAuthContext';
import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
	const { user } = useAuthContext();
	console.log(user)
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" exac element={<Home user={user}/>} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
