import styled from 'styled-components';

// CONTAINER AND MAIN CONTENT
type PopupSettings = { size: number; };
type PopupButton = { color?: string; colorHover?: string; background?: string; backgroundHover?: string; }

export const PopupContainer = styled.div`
    &.shown { display: flex; }
	&.hidden { display: none; }
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
    min-width: 250px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;
export const PopupContent = styled.div<PopupSettings>`
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	max-height: 95%;
	max-width: 90%;
	width: ${(props) => props.size}px;
	background: white;
`;

// HEADER AND TITLE
export const HeaderBar = styled.div`
	position: relative;
	background: #ccc;
	height: 24px;
	/* &:hover { cursor: move; } */
`;
export const CloseButton = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	background: #f00;
	width: 25px;
	height: 24px;
	text-align: center;
	font-size: 18px;
	color: #fff;
	user-select: none;
	&:hover {
		background: #b00;
		cursor: pointer;
	}
`;
export const Title = styled.h1`
	text-align: center;
	user-select: none;
`;

// FORM SETUP
export const Form = styled.form`
	display: grid;
	grid-template-columns: 30% 70%;
	row-gap: 10px;
	padding: 10px;
	margin-right: 10px;
	max-height: 60vh;
	overflow: auto;

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 2px 2px transparent !important;
		-webkit-box-shadow: inset 0 0 2px 2px transparent !important;
		border-radius: 10px;
		background: transparent !important;
	}
	::-webkit-scrollbar,
	::-webkit-scrollbar {
		width: 12px;
		background-color: var(--dado-primary) !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb,
	::-webkit-scrollbar-thumb {
		background-color: #ddd !important;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb:hover,
	::-webkit-scrollbar-thumb:hover {
		background: #aaa !important;
	}

    @media screen and (max-width: 460px) {
		grid-template-columns: 100%;
	}
`;

// INPUT ELEMENTS
export const Label = styled.label`
 	margin: auto 0;
	padding: 0 10px;

	&.left { text-align: left; }
	&.center { text-align: center; }
	&.right { text-align: right; }
`;
export const Input = styled.input`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	width: 100%;
	height: 42px;
	padding: 6px 10px;
	font-size: 16px;
	transition: all 0.3s ease-in-out;

	&[type='range'] { padding: 0; }
	&[type='checkbox'] { width: 40px; margin-left: 10px; }
	&[type='button'] { cursor: pointer; &:hover { transform: scale(1.01)}}
	&[type='color'] { cursor: pointer; &:hover { transform: scale(1.01)} }
`;
export const TextArea = styled.textarea`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	width: 100%;
	height: 100px;
	padding: 6px 10px;
	font-size: 16px;
	resize: vertical;
	transition: all 0.3 ease-in-out;
`;
export const Html = styled.div`
	grid-column: 1 / span 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const Select = styled.select`
	border: 0;
	outline: 0;
	border: 2px solid #ccc;
	border-radius: 5px;
	background-color: transparent;
	width: 100%;
	height: 42px;
	padding: 6px 9px;
	font-size: 16px;
	transition: all 0.3 ease-in-out;
`;
export const Divider = styled.hr`
	width: 100%;
`;

// CONFIRM BUTTONS
export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`;
export const Button = styled.button<PopupButton>`
	border: 0;
	outline: 0;
	border: 2px solid ${(props) => props.color || '#000'};
	border-radius: 5px;
	font-size: 18px;
	width: fit-content;
    color: ${(props) => props.color || '#000'};
    background: ${(props) => props.background || '#fff'};
	height: 40px;
	padding: 0 20px;
	margin: 0 5px;
	user-select: none;
	transition: all 0.3s ease-in-out;
	&:hover {
        border: 2px solid ${(props) => props.colorHover || '#fff'};
        color: ${(props) => props.colorHover || '#fff'};
		background: ${(props) => props.backgroundHover || '#000'};
		cursor: pointer;
	}
`;

// GROUPS
export const Group = styled.div`
	grid-column: 1 / -1;
	display: grid;
	grid-template-columns: 30% 70%;
	row-gap: 10px;
	padding: 20px;
	border-radius: 10px;
`;

// FLOATING LABEL
export const FloatingLabel = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	& > label {
		position: absolute;
		color: #999;
		font-size: 16px;
		font-family: Arial, Helvetica, sans-serif;
		padding: 0 10px;
		pointer-events: none;
		transform: translate(0, 32px) scale(1);
		transform-origin: top left;
		transition: all 0.2s ease-out;
		@media screen and (max-width: 460px) {
			font-size: 12px;
			transform: translate(0, 22px) scale(1);
		}
	}
	&:focus-within > label {
		transform: translate(0, 8px) scale(0.75);
	}
	& > input {
		border: 0;
		outline: 0;
		border-bottom: 2px solid #ddd;
		background: transparent;
		padding: 14px 0 0 10px;
		width: 100%;
		height: 50px;
		font-family: Arial, Helvetica, sans-serif;
		font-size: 16px;
		@media screen and (max-width: 460px) {
			font-size: 12px;
			height: 30px;
		}
	}
	.Active {
		transform: translate(0, 12px) scale(0.75);
		@media screen and (max-width: 460px) {
			transform: translate(0, 8px) scale(0.75);
		}
	}
	& > input:focus,
	& > input:active {
		border-bottom: 2px solid #de8667;
	}
`;
