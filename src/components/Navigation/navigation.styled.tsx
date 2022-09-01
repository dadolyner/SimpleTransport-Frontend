import styled from 'styled-components';

type isOpened = {
	isOpen: boolean;
    numberOfItems: number;
};

export const Container = styled.nav`
	padding: 0 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 20;
	margin: 8px;
	background-color: #fff;
	@media screen and (max-width: 740px) {
		display: grid;
		grid-template-columns: 50% 50%;
		align-items: center;
	}
`;

export const NavigationLogo = styled.div`
	padding: 16px 0;
	text-decoration: none;
	font-weight: 600;
	font-size: 26px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	&:hover { cursor: pointer; }
`;

export const NavigationItems = styled.div<isOpened>`
	display: grid;
	grid-template-columns: repeat(${({numberOfItems}) => numberOfItems}, 1fr);
	grid-gap: 10px;
	align-items: center;
	position: relative;
	@media screen and (max-width: 740px) {
		grid-template-columns: 100%;
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
		transition: all 0.3s ease;
		grid-column: 1 / span 2;
	}
`;

export const Item = styled.a`
	padding: 16px 32px;
	text-align: center;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.3s ease;
	cursor: pointer;
	text-underline-offset: 5px;
	&:hover {
		transform: scale(1.1);
		text-decoration: underline;
	}
`;

export const Hamburger = styled.div`
	border: 0;
	outline: 0;
	background: transparent;
	display: none;
	flex-direction: column;
	cursor: pointer;
	width: 40px;
	height: 30px;
	justify-self: end; 
	span {
		height: 2px;
		width: 25px;
		background: #000;
		margin-bottom: 5px;
	}

    &.opened {
        & > span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
        }
        & > span:nth-child(2) {
            opacity: 0;
        }
        & > span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
        }
    }

	@media screen and (max-width: 740px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Lines = styled.span`
    transition: all 0.3s ease;
`;
