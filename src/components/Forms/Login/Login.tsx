import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../../api/axios'
import { Background, Container, Header, Form, FloatingLabel, Submit, Href, ErrorMessage } from '../forms.styled'

const Login: React.FC = () => {
	const navigate = useNavigate()
	
    const [isEmailActive, setIsEmailActive] = React.useState(false)
	const [isPassActive, setIsPassActive] = React.useState(false)
	const [emailValue, setEmailValue] = React.useState('')
	const [passValue, setPassValue] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')

	const handleEmailChange = (email: string) => { setEmailValue(email); (email !== '') ? setIsEmailActive(true) : setIsEmailActive(false) }
	const handlePassChange = (pass: string) => { setPassValue(pass); (pass !== '') ? setIsPassActive(true) : setIsPassActive(false) }

    const LoginUser = async (event: any) => {
        event.preventDefault()

        let userData = {}
        if(emailValue.includes('@') && emailValue.includes('.') && emailValue.length > 8) {
            userData = { username: null, email: emailValue, password: passValue }
        } else { 
            userData = { username: emailValue, email: null, password: passValue }
        }
        
        try { 
            const loginResponse = await axios.post('/auth/login', userData)
            localStorage.setItem('simpletransport_accessToken', loginResponse.data.accessToken)
            localStorage.setItem('simpletransport_userLoggedIn', 'true')
            const userInfoResponse = await axios.get('/user/me', { headers: { Authorization: 'Bearer ' + loginResponse.data.accessToken } })
            localStorage.setItem('simpletransport_userInfo', JSON.stringify(userInfoResponse.data))
            navigate('/')
        }
        catch(error) { setErrorMessage(error.response.data.message) }
    }

	return (
		<>
			<Background className="login">
				<Container>
					<Header>Login</Header>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
					<Form>
						<FloatingLabel>
							<label htmlFor='email' className={isEmailActive ? 'Active' : ''}>Email or Username</label>
							<input id='email' type='email' value={emailValue} onChange={(e) => handleEmailChange(e.target.value)} />
						</FloatingLabel>
						<FloatingLabel>
							<label htmlFor='password' className={isPassActive ? 'Active' : ''}>Password</label>
							<input id='password' type='password' value={passValue} onChange={(e) => handlePassChange(e.target.value)} />
						</FloatingLabel>
						<Submit onClick={(event: any) => LoginUser(event)}>Login</Submit>
					</Form>
					<Href onClick={() => navigate("/forgot-password")}>Forgot your password?</Href>
					<Href onClick={() => navigate("/register")}>Don't have an account?</Href>
				</Container>
			</Background>
		</>
	)
}

export default Login
