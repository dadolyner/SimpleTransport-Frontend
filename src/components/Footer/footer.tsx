import * as React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container, SocialMedia, SocialMediaItem, FooterNavigation, Link, Credits } from './footer.styled';
import { Images } from './icons/socialImages';

const Footer: React.FC = () => {
	let navigate = useNavigate();
	return (
		<>
			<Container>
				<SocialMedia>
					<SocialMediaItem onClick={()=> window.open("", "_blank")}><img src={Images.Facebook} alt='Facebook'/></SocialMediaItem>
					<SocialMediaItem onClick={()=> window.open("", "_blank")}><img src={Images.Instagram} alt='Instagram'/></SocialMediaItem>
					<SocialMediaItem onClick={()=> window.open("", "_blank")}><img src={Images.Twitter} alt='Twitter'/></SocialMediaItem>
					<SocialMediaItem onClick={()=> window.open("", "_blank")}><img src={Images.Snapchat} alt='Snapchat'/></SocialMediaItem>
				</SocialMedia>

				<FooterNavigation>
					<Link onClick={() => navigate("/")}>Home</Link>
					<Link onClick={() => navigate("/cars")}>Cars</Link>
					<Link onClick={() => navigate("/login")}>Login</Link>
				</FooterNavigation>

				<Credits>
					<p>Simple Transport © { new Date().getFullYear() }</p>
				</Credits>
			</Container>
		</>
	);
};

export default Footer;
