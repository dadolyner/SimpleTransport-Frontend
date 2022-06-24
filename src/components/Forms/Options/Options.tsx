import * as React from 'react';
import { Background, Container, Header, Form, FloatingLabel, HalfWidth, Submit } from '../forms.styled';

const Register: React.FC = () => {
	const [isNameActive, setIsnameActive] = React.useState(false);
	const [isSurnameActive, setIsSurnameActive] = React.useState(false);
	const [isUsernameActive, setIsUsernameActive] = React.useState(false);
	const [isEmailActive, setIsEmailActive] = React.useState(false);
	const [isPassActive, setIsPassActive] = React.useState(false);
	const [isConfPassActive, setIsConfPassActive] = React.useState(false);

	const [nameValue, setNameValue] = React.useState('');
	const [surnameValue, setSurnameValue] = React.useState('');
	const [usernameValue, setUsernameValue] = React.useState('');
	const [emailValue, setEmailValue] = React.useState('');
	const [passValue, setPassValue] = React.useState('');
	const [confPassValue, setConfPassValue] = React.useState('');

	const handleChange = (type: string, text: string) => { 
        switch(type) {
            case 'name':
                setNameValue(text);
                (text !== '') ? setIsnameActive(true) : setIsnameActive(false);
                break;

            case 'surname':
                setSurnameValue(text);
                (text !== '') ? setIsSurnameActive(true) : setIsSurnameActive(false);
                break;

            case 'username':
                setUsernameValue(text);
                (text !== '') ? setIsUsernameActive(true) : setIsUsernameActive(false);
                break;

            case 'email':
                setEmailValue(text);
                (text !== '') ? setIsEmailActive(true) : setIsEmailActive(false);
                break;

            case 'pass':
                setPassValue(text);
                (text !== '') ? setIsPassActive(true) : setIsPassActive(false);
                break;

            case 'confPass':
                setConfPassValue(text);
                (text !== '') ? setIsConfPassActive(true) : setIsConfPassActive(false);
                break;
        }
    };

	return (
		<>
			<Background className="register">
				<Container>
					<Header>Change profile options</Header>
					<Form>
            	        <HalfWidth>
            	            <FloatingLabel>
						    	<label htmlFor='name' className={isNameActive ? 'Active' : ''}>Name</label>
						    	<input id='name' type='text' value={nameValue} onChange={(e) => handleChange('name', e.target.value)} autoComplete="new-password"/>
						    </FloatingLabel>

            	            <FloatingLabel>
						    	<label htmlFor='surname' className={isSurnameActive ? 'Active' : ''}>Surname</label>
						    	<input id='surname' type='text' value={surnameValue} onChange={(e) => handleChange('surname', e.target.value)}/>
						    </FloatingLabel>
            	        </HalfWidth>

 						<HalfWidth>
            	        	<FloatingLabel>
								<label htmlFor='username' className={isUsernameActive ? 'Active' : ''}>Username</label>
								<input id='username' type='text' value={usernameValue} onChange={(e) => handleChange('username', e.target.value)}/>
							</FloatingLabel>

							<FloatingLabel>
								<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
								<input id='email' type='email' value={emailValue} onChange={(e) => handleChange('email', e.target.value)}/>
							</FloatingLabel>
						</HalfWidth>

 						<HalfWidth>
							<FloatingLabel>
								<label htmlFor='pass' className={isPassActive ? 'Active' : ''}>Password</label>
								<input id='pass' type='password' value={passValue} onChange={(e) => handleChange('pass', e.target.value)} />
							</FloatingLabel>

            	        	<FloatingLabel>
								<label htmlFor='confPass' className={isConfPassActive ? 'Active' : ''}>Confirm Password</label>
								<input id='confPass' type='password' value={confPassValue} onChange={(e) => handleChange('confPass', e.target.value)} />
							</FloatingLabel>
						</HalfWidth>

						<Submit>Change</Submit>
					</Form>
				</Container>
			</Background>
		</>
	);
};

export default Register;
