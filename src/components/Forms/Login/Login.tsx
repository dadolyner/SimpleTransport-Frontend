import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Header, Form, FloatingLabel, Submit, Href } from '../forms.styled';

const Login: React.FC = () => {
	const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [isPassActive, setIsPassActive] = React.useState(false);
	const [emailValue, setEmailValue] = React.useState('');
	const [passValue, setPassValue] = React.useState('');

	let navigate = useNavigate();

	const handleEmailChange = (email: string) => { setEmailValue(email); (email !== '') ? setIsEmailActive(true) : setIsEmailActive(false)};
	const handlePassChange = (pass: string) => { setPassValue(pass); (pass !== '') ? setIsPassActive(true) : setIsPassActive(false)};

	return (
		<>
			<Background className="login">
				<Container>
					<Header>Login</Header>
					<Form>
						<FloatingLabel>
							<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
							<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
						</FloatingLabel>
						<FloatingLabel>
							<label htmlFor='password' className={isPassActive ? 'Active' : ''}>Password</label>
							<input id='password' type='password' value={passValue} onChange={(e) => handlePassChange(e.target.value)} />
						</FloatingLabel>
						<Submit onClick={() => navigate("/")}>Login</Submit>
					</Form>
					<Href onClick={() => navigate("/forgot-password")}>Forgot your password?</Href>
					<Href onClick={() => navigate("/register")}>Don't have an account?</Href>
				</Container>
			</Background>
		</>
	);
};

export default Login;
