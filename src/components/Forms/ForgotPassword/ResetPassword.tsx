
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import { Background, Container, Header, Form, FloatingLabel, Submit, ErrorMessage, ConfirmMessage, Href } from '../forms.styled'

const ResetPassword: React.FC = () => {
	const navigate = useNavigate()
    
    const passwordToken = new URLSearchParams(window.location.search).get('token')
	
    const [isPassActive, setIsPassActive] = React.useState(false)
	const [isConfPassActive, setIsConfPassActive] = React.useState(false)
	const [passValue, setPassValue] = React.useState('')
	const [confPassValue, setConfPassValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const [confirmMessage, setConfirmMessage] = React.useState('')

	const handlePassChange = (email: string) => { setPassValue(email); (email !== '') ? setIsPassActive(true) : setIsPassActive(false)};
	const handleConfChange = (pass: string) => { setConfPassValue(pass); (pass !== '') ? setIsConfPassActive(true) : setIsConfPassActive(false)};

    const ResetPassword = async(event: any) => {
        event.preventDefault()

        if (passValue !== confPassValue) return 
        const password = { password: passValue }
        
        try { 
            await axios.patch(`/auth/change-password?token=${passwordToken}`, password)
            setErrorMessage('')
            setConfirmMessage('Password change request sent to your email.')
        } 
        catch(error) { setErrorMessage(error.response.data.message) }
    } 

	return (
		<>
			<Background className="login">
				<Container>
					<Header>Reset password</Header>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                    <ConfirmMessage>{confirmMessage}</ConfirmMessage>
					<Form>
						<FloatingLabel>
							<label htmlFor='pass' className={isPassActive ? 'Active' : ''}>Password</label>
							<input id='pass' type='password' value={passValue} onChange={(e) => handlePassChange(e.target.value)} />
						</FloatingLabel>
		
						<FloatingLabel>
							<label htmlFor='confPass' className={isConfPassActive ? 'Active' : ''}>Confirm Password</label>
							<input id='confPass' type='password' value={confPassValue} onChange={(e) => handleConfChange(e.target.value)} />
						</FloatingLabel>
		
						<Submit onClick={(event: any) => ResetPassword(event)}>Reset</Submit>
					</Form>
                    <Href onClick={() => navigate('/login')}>Back to login</Href>
				</Container>
			</Background>
		</>
	)
}

export default ResetPassword
