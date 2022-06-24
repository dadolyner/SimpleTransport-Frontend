import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
	background-color: #fff;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	margin: 5px 0px;
    padding: 10px 20px;
	width: 29%;
    max-height: 65px;
    overflow: hidden;
    z-index: 10;
    transition: all 0.3s ease-in-out;

    &.shown { 
        max-height: 100%; 
        @media only screen and (max-width: 740px) { width: 96%; }
        @media only screen and (max-width: 420px) { width: 95%; }
    }

    @media only screen and (max-width: 740px) { width: 96%; }
    @media only screen and (max-width: 420px) { width: 95%; }
`;

export const Arrow = styled.div`
    width: 15px;
    height: 15px;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    margin-top: 0;
    margin-bottom: 5px;

    &.shown { 
        margin-top: 5px;
        margin-bottom: 0;
        transform: rotate(-135deg); 
    }
`;

export const Title = styled.h1`
    margin: 0;
    padding: 0 10px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ClearFilters = styled.button``;

export const Section = styled.div``;

export const SectionTitle = styled.h3`
    margin: 0;
`;

export const CheckboxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 5px;
`;

export const CheckboxInput = styled.input`
    height: 20px;
    width: 20px;
`;

export const CheckboxLabel = styled.label`
    margin-left: 5px;
`;

export const RangeContainer = styled.div``;

export const Range = styled.input`
    margin:0;
    padding:0;
`;

export const RangeLabel = styled.label``;

export const Spacer = styled.hr`
    margin: 15px 0;
`;

export const ApplyFilters = styled.button`
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
	margin: 0px auto 10px auto;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background: #fff;
		color: #efb467;
		border: 1px solid #efb467;
		transform: scale(1.02);
	}
`;