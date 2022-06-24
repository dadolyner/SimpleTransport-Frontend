import '../styles/GlobalStyles.css';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../components/Forms/Login/Login';
import Register from '../components/Forms/Register/Register';
import Options from '../components/Forms/Options/Options';
import ResetPassword from '../components/Forms/ForgotPassword/ResetPassword';
import ForgotPassword from '../components/Forms/ForgotPassword/ForgotPassword';
import CarsContainer from '../components/Cars/CarsContainer/CarsContainer';

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CarsContainer />} />
					<Route path="/cars" element={<CarsContainer />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/options" element={<Options />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
