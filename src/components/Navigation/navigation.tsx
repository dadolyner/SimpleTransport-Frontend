import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
import { Logo } from '../../images/ImageExporter';

const Navigation: React.FC = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = React.useState(false);
    const [userLoggedIn, setUserLoggedIn] = React.useState(false);
    const [userInfo, setUserInfo] = React.useState({} as any);
    
    const RetrieveUserInfo = () => {
        try {
            const userLoggedIn = localStorage.getItem('simpletransport_userLoggedIn');
            const userInfo = JSON.parse(localStorage.getItem('simpletransport_userInfo'));
            const { user } = userInfo;
            
            if (userLoggedIn === 'true') {
                setUserLoggedIn(true);
                setUserInfo(user);
            }
        } catch (error) { console.log(error); }
    }
    React.useEffect(() => { RetrieveUserInfo() }, []);
    
    const Logout = () => {
        localStorage.removeItem('simpletransport_userLoggedIn');
        localStorage.removeItem('simpletransport_accessToken');
        localStorage.removeItem('simpletransport_userInfo');
        navigate('/');
    }

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => navigate("/")}><img src={Logo} height={"40px"} width={"60px"} alt="Logo"/></NavigationLogo>

				<Hamburger className={isOpen ? 'opened' : ''} onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen} numberOfItems={ userLoggedIn ? (userInfo.email === 'skulj.david@gmail.com' ? 5 : 4) : 3}>
					<Item onClick={() => navigate("/")}>Home</Item>
                    { 
                        userLoggedIn ? (
                            <>
                                <Item onClick={() => navigate("/cars")}>Cars</Item>
                                <Item onClick={() => navigate("/profile")}>Profile</Item>
                                <Item onClick={() => Logout()}>Logout</Item>
                                <Item onClick={() => navigate("/admin")}>Admin</Item>
                            </>
                        ) : (
                            <>
                                <Item onClick={() => navigate("/register")}>Register</Item>
                                <Item onClick={() => navigate("/login")}>Login</Item>
                            </>
                        )
                    }
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;
