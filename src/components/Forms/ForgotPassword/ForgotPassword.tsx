import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import { Background, Container, Header, Form, FloatingLabel, Submit, ErrorMessage, ConfirmMessage, Href } from '../forms.styled'

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate()

	const [isEmailActive, setIsEmailActive] = React.useState(false)
	const [emailValue, setEmailValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const [confirmMessage, setConfirmMessage] = React.useState('')

	const handleEmailChange = (email: string) => { setEmailValue(email); (email !== '') ? setIsEmailActive(true) : setIsEmailActive(false) }

    const SendPasswordRequest = async(event: any) => {
        event.preventDefault()
        const userData = { email: emailValue }
        
        try { 
            await axios.post('/auth/request-password-change', userData)
            setErrorMessage('')
            setConfirmMessage('Password change request sent to your email.')
        }
        catch(error) { setErrorMessage(error.response.data.message) }
    };

	return (
		<>
			<Background className="register">
				<Container>
					<Header>Request a password <br /> change</Header>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <ConfirmMessage>{confirmMessage}</ConfirmMessage>
					<Form>
						<FloatingLabel>
							<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email</label>
							<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
						</FloatingLabel>
						<Submit onClick={(event: any) => SendPasswordRequest(event)}>Send request</Submit>
					</Form>

                    <Href onClick={() => navigate('/login')}>Back to login</Href>
				</Container>
			</Background>
		</>
	)
}

export default ForgotPassword
