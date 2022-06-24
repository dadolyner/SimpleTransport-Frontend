import styled from 'styled-components';
import { Background3 } from '../../images/ImageExporter';

export const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: fit-content;
	background-image: url(${Background3});
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
`;

export const BigParentContainer = styled.div`
	display: grid;
	margin-top: 90px;
	grid-template-columns: 30% 70%;
	z-index: 1;
	@media only screen and (max-width: 740px) {
		grid-template-columns: 100%;
	}
`;

export const CarsFiltersContainer = styled.div`
	padding: 0 10px;
	@media only screen and (max-width: 740px) {
		grid-template-columns: 100%;
	}
`;

export const CarsListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 10px;
	@media only screen and (max-width: 740px) {
		margin-top: 80px;
	}
`;

export const Container = styled.div`
	background-color: #fff;
	display: grid;
	grid-template-columns: 20% 50% 30%;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin: 5px 0px;
	font-family: Poppins;
	width: 100%;
	transition: all 0.3s ease;
	@media only screen and (max-width: 740px) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 420px) {
		grid-template-columns: 1fr;
	}
	&:hover {
		transform: scale(1.005);
	}
`;

export const GridFullRow = styled.div`
	grid-column: 1/-1;
`;

export const CarImageInfo = styled.div``;

export const CarSpecsInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5px;
	padding: 10px;
	@media only screen and (max-width: 740px) {
		grid-template-columns: 1fr;
	}
	div:nth-child(8) {
		color: royalblue;
		font-weight: bold;
	}
`;

export const CarPriceInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	text-align: right;
	padding: 10px;
	@media only screen and (max-width: 740px) {
		grid-column: 1/-1;
	}
`;

export const Header = styled.h1`
	margin: 0;
`;

export const Image = styled.img`
	object-fit: contain;
	width: 90%;
	height: 90%;
	padding: 10px;
`;

export const CarSpecs = styled.p`
	margin: 0;
`;

export const CarPrice = styled.p`
	margin: 0;
	font-size: 20px;
	font-weight: bold;
`;

export const CarReturn = styled.p`
	margin: 0;
	font-weight: bold;
	&.free {
		color: #0a0;
	}
	&.paid {
		color: #f00;
	}
`;

export const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 5px;
`;

export const SingleRow = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Button = styled.button`
	outline: none;
	border: none;
	border-radius: 32px;
	width: 100%;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	border: 1px solid #fff;
	margin: 10px auto;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background: #fff;
		color: #efb467;
		border: 1px solid #efb467;
		transform: scale(1.02);
	}
`;
