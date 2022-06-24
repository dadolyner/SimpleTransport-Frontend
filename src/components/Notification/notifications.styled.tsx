import styled, { keyframes } from 'styled-components';

const slideInFromTop = keyframes`
	0% { transform: translateY(-100%); }
    100% { transform: translateY(0); }
`;

const slideToTop = keyframes`
	0% { transform: translateY(0); }
    90% { transform: translateY(-100%); }
    100% { display: none !important; }
`;

const slideInFromBottom = keyframes`
	0% { transform: translateY(100%); }
    100% { transform: translateY(0); }
`;

const slideToBottom = keyframes`
	0% { transform: translateY(0); }
    90% { transform: translateY(100%); }
    100% { display: none !important; }
`;

export const TopNotificationPopup = styled.div`
	animation: 0.2s ease-in-out 0s 1 ${slideInFromTop};
	position: fixed;
	top: 10px;
	left: 10px;
	margin: 0 auto;
	max-width: 80vw;
	min-width: 460px;
	width: min-content;
	min-height: 30px;
	border-radius: 10px;
	border: 2px solid #fff;
	text-align: center;
	vertical-align: middle;
	font-family: Verdana;
	font-size: 16px;
	background-color: #fff;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
	display: grid;
	grid-template-columns: 15% 70% 15%;
	transition: all 0.5s ease;

	&.hide {
		animation: 0.2s ease-in-out 0s 1 ${slideToTop};
	}

	@media only screen and (max-width: 460px) {
		min-width: 96%;
		max-width: 96%;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
`;

export const Image = styled.i`
	margin-bottom: 10px;
	&,
	&::before {
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		color: #fff;
	}
	& {
		box-sizing: border-box;
		position: relative;
		display: block;
		transform: scale(1.5);
		border: 2px solid;
		border-bottom: 0;
		width: 14px;
		height: 14px;
	}
	&::after,
	&::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
	}
	&::before {
		background: currentColor;
		width: 4px;
		height: 4px;
		top: -4px;
		left: 3px;
	}
	&::after {
		border-radius: 3px;
		width: 16px;
		height: 10px;
		border: 6px solid transparent;
		border-top: 1px solid transparent;
		box-shadow: inset 0 0 0 4px, 0 -2px 0 0;
		top: 14px;
		left: -3px;
		border-bottom-left-radius: 100px;
		border-bottom-right-radius: 100px;
	}
`;

export const Content = styled.div`
	padding: 20px;
	margin: 0;
	display: inline-block;
	vertical-align: middle;
`;

export const Close = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	font-size: 32px;
	position: absolute;
	top: 10px;
	right: 5px;
	height: 10px;
`;

export const BottomNotificationPopup = styled.div`
	animation: 0.2s ease-in-out 0s 1 ${slideInFromBottom};
	position: fixed;
	bottom: 10px;
	right: 10px;
	margin: 0 auto;
	max-width: 80vw;
	min-width: 460px;
	width: min-content;
	min-height: 250px;
	border-radius: 10px;
	border: 2px solid #fff;
	text-align: center;
	vertical-align: middle;
	font-family: Verdana;
	font-size: 16px;
	background-color: #fff;
	box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
	display: grid;
	grid-template-rows: 30% 45% 25%;
	transition: all 0.5s ease;

	&.hide {
		animation: 0.2s ease-in-out 0s 1 ${slideToBottom};
	}

	@media only screen and (max-width: 460px) {
		min-width: 96%;
		max-width: 96%;
	}
`;

export const CookieTitle = styled.div`
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	& > h1 {
		margin: 0;
	}
`;

export const CokkieContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	& > p {
		margin: 0;
	}
`;

export const BottomButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 10px;
	& > a {
		margin-right: 10px;
	}
`;

export const CustomLink = styled.a`
	color: #de8667;
	text-decoration: none;
	&:hover {
		cursor: pointer;
		color: #efb467;
		text-decoration: underline;
	}
`;

export const Button = styled.button`
	outline: none;
	border: none;
	border-radius: 32px;
	width: 100px;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	border: 1px solid #fff;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		cursor: pointer;
		background: #fff;
		color: #efb467;
		border: 1px solid #efb467;
		transform: scale(1.02);
	}
`;
