import * as React from 'react';
import { TopNotificationPopup, ImageContainer, Image, Content, Close } from './notifications.styled';

type TopNotificationProps = {
	message: string;
};

const Notification: React.FC<TopNotificationProps> = (props: TopNotificationProps) => {
	const { message } = props;
	const [hide, setHide] = React.useState(true);
	const [animation, setAnimation] = React.useState(true);
	
	//Notification Top Popup
	if (hide) {
		return (
			<>
				<TopNotificationPopup className={animation ? '' : 'hide'}>
					<ImageContainer>
						<Image></Image>
					</ImageContainer>

					<Content>{message}</Content>

					<Close onClick={() => { setAnimation(false); setTimeout(() => {setHide(false);}, 100) }}><div>&times;</div></Close>
				</TopNotificationPopup>
			</>
		);
	}
		
	// Return Nothing
	else {
		return null;
	}
	
};

export default Notification;
