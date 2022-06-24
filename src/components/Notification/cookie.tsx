import * as React from 'react';
import { BottomNotificationPopup, CookieTitle, CokkieContent, BottomButtons, CustomLink, Button } from './notifications.styled';

type TopNotificationProps = {
	title: string;
	content: string;
	buttonText: string;
	linkText: string;
};

const Cookie: React.FC<TopNotificationProps> = (props: TopNotificationProps) => {
	const { title, content ,linkText, buttonText } = props;
	const [hide, setHide] = React.useState(true);
	const [animation, setAnimation] = React.useState(true);
	
    // If its hidden
    if (hide) {
		return (
			<>
				<BottomNotificationPopup className={animation ? '' : 'hide'}>
					<CookieTitle><h1>{title}</h1></CookieTitle>
					<CokkieContent><p>{content}</p></CokkieContent>
					
					<BottomButtons>
						<CustomLink href="#">{linkText ? linkText : 'More information'}</CustomLink>
						<Button onClick={() => { setAnimation(false); setTimeout(() => {setHide(false);}, 100) }}>{buttonText ? buttonText : 'Accept'}</Button>
					</BottomButtons>
				</BottomNotificationPopup>
			</>
		);
	} 
		
	// Return Nothing
	else {
		return null;
	}
	
};

export default Cookie;
