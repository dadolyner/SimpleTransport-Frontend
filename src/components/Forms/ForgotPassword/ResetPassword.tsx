import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Background, Container, Header, Form, FloatingLabel, Submit } from '../forms.styled';

const ResetPassword: React.FC = () => {
	const [isPassActive, setIsPassActive] = React.useState(false);
	const [isConfPassActive, setIsConfPassActive] = React.useState(false);

	const [passValue, setPassValue] = React.useState('');
	const [confPassValue, setConfPassValue] = React.useState('');

	let navigate = useNavigate();

	const handlePassChange = (email: string) => { setPassValue(email); (email !== '') ? setIsPassActive(true) : setIsPassActive(false)};
	const handleConfChange = (pass: string) => { setConfPassValue(pass); (pass !== '') ? setIsConfPassActive(true) : setIsConfPassActive(false)};

	return (
		<>
			<Background className="login">
				<Container>
					<Header>Reset password</Header>
					<Form>
						<FloatingLabel>
							<label htmlFor='pass' className={isPassActive ? 'Active' : ''}>Password</label>
							<input id='pass' type='password' value={passValue} onChange={(e) => handlePassChange(e.target.value)} />
						</FloatingLabel>
		
						<FloatingLabel>
							<label htmlFor='confPass' className={isConfPassActive ? 'Active' : ''}>Confirm Password</label>
							<input id='confPass' type='password' value={confPassValue} onChange={(e) => handleConfChange(e.target.value)} />
						</FloatingLabel>
		
						<Submit onClick={() => navigate("/login")}>Reset</Submit>
					</Form>
				</Container>
			</Background>
		</>
	);
};

export default ResetPassword;
