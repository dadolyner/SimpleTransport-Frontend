import * as React from 'react';
import { ToastPopup, Close, ImageContainer, Image, Content, ContentTitle, ContentText, LoadingBar } from './toast.styled';

type ToastProps = {
	type: string;
	message: string;
};

const Toast: React.FC<ToastProps> = (props: ToastProps) => {
	const { type, message } = props;
	const [hide, setHide] = React.useState(true);
	const [animation, setAnimation] = React.useState(true);
	const [widthTimer, setWidthTimer] = React.useState(100);

	const timeoutTime = 5000;
	const closeToast = setTimeout(() => { setAnimation(false); setTimeout(() => {setHide(false);}, 100) }, timeoutTime);

	const countdownTimer = setTimeout(() => { setWidthTimer(widthTimer - 1) }, timeoutTime / 110)


	if (hide) {
		return (
			<>
				<ToastPopup className={[animation ? type : 'hide'].join("")}>
					<ImageContainer>
						<Image className={type}></Image>
					</ImageContainer>

					<Content>
						<ContentTitle>{type.charAt(0).toUpperCase() + type.slice(1)}</ContentTitle>
						<ContentText>{message}</ContentText>
					</Content>

					<Close className={type} onClick={() => { clearTimeout(closeToast); clearTimeout(countdownTimer); setAnimation(false); setTimeout(() => {setHide(false);}, 100) }}><div>&times;</div></Close>
				
					<LoadingBar><div className={type} style={{width: `${widthTimer}%`}}></div></LoadingBar>
				</ToastPopup>
			</>
		);
	} else {
		return null;
	}
};

export default Toast;
