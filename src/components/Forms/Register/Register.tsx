import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import PasswordGenerator from '../../PasswordGenerator/paswordGenerator'
import { Background, Container, Header, Form, FloatingLabel, HalfWidth, Submit, Href, ErrorMessage } from '../forms.styled'

const Register: React.FC = () => {
    const navigate = useNavigate()
	
    const [hidden, setHidden] = React.useState(false)
	const [isNameActive, setIsnameActive] = React.useState(false)
	const [isSurnameActive, setIsSurnameActive] = React.useState(false)
	const [isUsernameActive, setIsUsernameActive] = React.useState(false)
	const [isEmailActive, setIsEmailActive] = React.useState(false)
	const [isPassActive, setIsPassActive] = React.useState(false)
	const [isConfPassActive, setIsConfPassActive] = React.useState(false)
	const [nameValue, setNameValue] = React.useState('')
	const [surnameValue, setSurnameValue] = React.useState('')
	const [usernameValue, setUsernameValue] = React.useState('')
	const [emailValue, setEmailValue] = React.useState('')
	const [passValue, setPassValue] = React.useState('')
	const [confPassValue, setConfPassValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const [place, setPlace] = React.useState('')
    const [apiPlaces, setApiPlaces] = React.useState([])

	const handleChange = (type: string, text: string) => { 
        switch(type) {
            case 'name':
                setNameValue(text);
                (text !== '') ? setIsnameActive(true) : setIsnameActive(false)
                break

            case 'surname':
                setSurnameValue(text);
                (text !== '') ? setIsSurnameActive(true) : setIsSurnameActive(false)
                break

            case 'username':
                setUsernameValue(text);
                (text !== '') ? setIsUsernameActive(true) : setIsUsernameActive(false)
                break

            case 'email':
                setEmailValue(text);
                (text !== '') ? setIsEmailActive(true) : setIsEmailActive(false)
                break

            case 'pass':
                setPassValue(text);
                (text !== '') ? setIsPassActive(true) : setIsPassActive(false)
                break

            case 'confPass':
                setConfPassValue(text);
                (text !== '') ? setIsConfPassActive(true) : setIsConfPassActive(false)
                break
            
            case 'place':
                setPlace(text);
                break
        }
    }

    const getPlaces = async () => {
        try {
            const response = await axios.get('/place')
            setApiPlaces(response.data)
        } catch (error) { console.log(error) }
    }
    React.useEffect(() => {
        getPlaces()
    }, [])

    const RegisterUser = async (event: any) => {
        event.preventDefault()

        const userData = {
            first_name: nameValue,
            last_name: surnameValue,
            username: usernameValue,
            email: emailValue,
            password: passValue,
            placeId: place
        }
        
        try { 
            await axios.post('/auth/register', userData) 
            navigate('/login')
        }
        catch(error) { setErrorMessage(error.response.data.message) }
    }

	return (
		<>
			{ hidden && <PasswordGenerator SendPassword={passwordValue => { 
					if(passwordValue) { 
						setPassValue(passwordValue)
						setConfPassValue(passwordValue)
						setIsPassActive(true)
						setIsConfPassActive(true)
						setHidden(false) 
					} else {
						setHidden(false)
					}
				}}/>
			}

			<Background className="register">
				<Container>
					<Header>Register</Header>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
					<Form>
            	        <HalfWidth>
            	            <FloatingLabel>
						    	<label htmlFor='name' className={isNameActive ? 'Active' : ''}>First Name</label>
						    	<input id='name' type='text' value={nameValue} onChange={(e) => handleChange('name', e.target.value)} autoComplete="new-password"/>
						    </FloatingLabel>
		
            	            <FloatingLabel>
						    	<label htmlFor='surname' className={isSurnameActive ? 'Active' : ''}>Last Name</label>
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

                        <select onChange={(e) => handleChange('place', e.target.value)}>
                            <option key="emptyOption" value="emptyOption"></option>
                            {apiPlaces.map((place: any) => {
                                return ( <option key={place.id} value={place.id}>{place.place}</option> )
                            })}
                        </select>
		
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
		
						<Submit onClick={(event: any) => RegisterUser(event)}>Register</Submit>
					</Form>
		
					<Href onClick={() => setHidden(true)}>Generate password?</Href>
					<Href onClick={() => navigate("/login")}>Already have an account?</Href>
				</Container>
			</Background>
		</>
	)
}

export default Register
