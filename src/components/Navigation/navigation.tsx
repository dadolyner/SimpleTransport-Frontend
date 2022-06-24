import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, NavigationLogo, NavigationItems, Item, Hamburger, Lines } from './navigation.styled';
import { Logo } from '../../images/ImageExporter';

const Navigation: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	let navigate = useNavigate();

	return (
		<>
			<Container>
				<NavigationLogo onClick={() => navigate("/")}><img src={Logo} height={"40px"} width={"60px"} alt="Logo"/></NavigationLogo>

				<Hamburger onClick={() => setIsOpen(!isOpen)}>
					<Lines />
					<Lines />
					<Lines />
				</Hamburger>

				<NavigationItems isOpen={isOpen}>
					<Item onClick={() => navigate("/")}>Home</Item>
					<Item onClick={() => navigate("/cars")}>Cars</Item>
					<Item onClick={() => navigate("/login")}>Login</Item>
				</NavigationItems>
			</Container>
		</>
	);
};

export default Navigation;
