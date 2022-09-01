import '../styles/GlobalStyles.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarsContainer from '../components/Cars/CarsContainer/CarsContainer';
import Login from '../components/Forms/Login/Login';
import Register from '../components/Forms/Register/Register';
import Options from '../components/Forms/Options/Options';
import ResetPassword from '../components/Forms/ForgotPassword/ResetPassword';
import ForgotPassword from '../components/Forms/ForgotPassword/ForgotPassword';
import Profile from '../components/Profile/profile';
import Admin from './Admin';
import Home from './Home';

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
                    <Route path="/admin" element={<Admin />} />
					<Route path="/" element={<Home />} />
					<Route path="/cars" element={<CarsContainer />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/options" element={<Options />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/change-password" element={<ResetPassword />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
