import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Header, Form, FloatingLabel, Submit } from '../forms.styled';

const ForgotPassword: React.FC = () => {
	const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [emailValue, setEmailValue] = React.useState('');

	let navigate = useNavigate();

	const handleEmailChange = (email: string) => { setEmailValue(email); (email !== '') ? setIsEmailActive(true) : setIsEmailActive(false)};

	return (
		<>
			<Background className="register">
				<Container>
					<Header>Request a password <br /> change</Header>
					<Form>
						<FloatingLabel>
							<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
							<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
						</FloatingLabel>
						<Submit onClick={() => navigate("/reset-password")}>Send request</Submit>
					</Form>
				</Container>
			</Background>
		</>
	);
};

export default ForgotPassword;
