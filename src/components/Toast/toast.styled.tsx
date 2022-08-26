import styled, { keyframes } from 'styled-components';

const transparentStyleColors = {
	background: {
		success: '#00aa00',
 		error: '#f20300',
		warning: '#ffa500',
		info: '#0099ff',
	},
	text: '#000',
	success: '#fff',
	error: '#fff',
	warning: '#fff',
	info: '#fff',
}

const slideInFromRight = keyframes`
    0% { transform: translateX(100%); }
	100% { transform: translateX(0); }
`;

const slideToRight = keyframes`
    0% { transform: translateX(0); }
	90% { transform: translateX(100%); }
    100% { display: none !important; }
`;

export const ToastPopup = styled.div`
	animation: 0.2s ease-in-out 0s 1 ${slideInFromRight};
	position: fixed;
	top: 10px;
	right: 10px;
	margin: 0 auto;
	max-width: 80vw;
	min-width: 450px;
	width: min-content;
	min-height: 30px;
	text-align: center;
	vertical-align: middle;
	font-family: Verdana;
	font-size: 16px;
	background-color: #fff;
	/* border: 1px solid #000; */
	display: grid;
	grid-template-columns: 15% 70% 15%;
	transition: all 0.5s ease;
	z-index: 1000;

	&.hide {
		animation: 0.2s ease-in-out 0s 1 ${slideToRight};
	}

	@media only screen and (max-width: 460px) {
		min-width: 96%;
		max-width: 96%;
	}

	&.success { box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5), 5px 0 0px 0px ${transparentStyleColors.background.success} inset; }
	&.error { box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5), 5px 0 0px 0px ${transparentStyleColors.background.error} inset; }
	&.info { box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5), 5px 0 0px 0px ${transparentStyleColors.background.info} inset; }
	&.warning { box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5), 5px 0 0px 0px ${transparentStyleColors.background.warning} inset; }
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

	&.success { color: ${transparentStyleColors.background.success}; }
	&.error { color: ${transparentStyleColors.background.error}; }
	&.warning { color: ${transparentStyleColors.background.warning}; }
	&.info { color: ${transparentStyleColors.background.info}; }
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;

	&.success { background-color: ${transparentStyleColors.background.success}; }
	&.error { background-color: ${transparentStyleColors.background.error}; }
	&.warning { background-color: ${transparentStyleColors.background.warning}; }
	&.info { background-color: ${transparentStyleColors.background.info}; }
`;

export const Image = styled.div`
	&.success {
		box-sizing: border-box;
		position: relative;
		display: block;
		min-width: 40px;
		min-height: 40px;
		border: 3px solid ${transparentStyleColors.success};
		background-color: ${transparentStyleColors.background.success};
	}
	&.success::after {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		left: 10px;
		top: 2px;
		width: 8px;
		height: 15px;
		border-color: ${transparentStyleColors.success};
		border-width: 0 3px 3px 0;
		border-style: solid;
		transform-origin: bottom left;
		transform: rotate(45deg);
	}
	&.error {
		box-sizing: border-box;
		position: relative;
		display: block;
		width: 40px;
		height: 40px;
		border: 3px solid ${transparentStyleColors.error};
		border-radius: 40px;
		background: ${transparentStyleColors.background.error};
	}
	&.error::after,
	&.error::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 20px;
		height: 3px;
		background: ${transparentStyleColors.error};
		transform: rotate(45deg);
		border-radius: 5px;
		top: 15px;
		left: 7px;
	}
	&.error::after {
		transform: rotate(-45deg);
	}
	&.warning {
		box-sizing: border-box;
		position: relative;
		display: block;
		width: 40px;
		height: 40px;
		border: 3px solid ${transparentStyleColors.warning};
		border-radius: 40px;
		background-color: ${transparentStyleColors.background.warning};
	}
	&.warning::after,
	&.warning::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		border-radius: 3px;
		width: 3px;
		background: ${transparentStyleColors.warning};
		left: 16px;
	}
	&.warning::after {
		top: 8px;
		height: 13px;
	}
	&.warning::before {
		height: 4px;
		bottom: 7px;
	}
	&.info {
		box-sizing: border-box;
		position: relative;
		display: block;
		width: 40px;
		height: 40px;
		border: 3px solid ${transparentStyleColors.info};
		border-radius: 40px;
		background-color: ${transparentStyleColors.background.info};
	}
	&.info::after,
	&.info::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		border-radius: 3px;
		width: 3px;
		background: ${transparentStyleColors.info};
		left: 16px;
	}
	&.info::after {
		bottom: 7px;
		height: 15px;
	}
	&.info::before {
		height: 3px;
		top: 7px;
	}
`;

export const Content = styled.p`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${transparentStyleColors.text};
`;

export const ContentTitle = styled.h3`
	font-size: 18px;
	margin: 0;
	text-align: left;
`;

export const ContentText = styled.p`
	font-size: 16px;
	margin: 0;
	text-align: left;
`;

export const LoadingBar = styled.div`
	height: 4px;
	width: 100%;
	grid-column: 1 / span 2;
	transition: all 0.5 ease-in-out;
	
	& > div {
		height: 5px;
		&.success { background-color: ${transparentStyleColors.background.success}; }
		&.error { background-color: ${transparentStyleColors.background.error}; }
		&.info { background-color: ${transparentStyleColors.background.info}; }
		&.warning { background-color: ${transparentStyleColors.background.warning}; }
		transition: all 0.3 ease-in-out;
	}
`;