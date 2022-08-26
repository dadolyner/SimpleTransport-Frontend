import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
import { Logo } from '../../images/ImageExporter';

const Navigation: React.FC = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = React.useState(false);

    const userLoggedIn = localStorage.getItem('simpletransport_userLoggedIn');
    
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

				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen} numberOfItems={ userLoggedIn === 'true' ? 4 : 3}>
					<Item onClick={() => navigate("/")}>Home</Item>
					<Item onClick={() => navigate("/cars")}>Cars</Item>
                    { 
                        userLoggedIn === 'true' ? (
                            <>
                                <Item onClick={() => navigate("/profile")}>Profile</Item>
                                <Item onClick={() => Logout()}>Logout</Item>
                            </>
                        ) : (
                            <Item onClick={() => navigate("/login")}>Login</Item>
                        )
                    }
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;
