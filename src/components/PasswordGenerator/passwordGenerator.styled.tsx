import styled from 'styled-components';

export const BackgroundContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3 );
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 420px;
    min-height: 460px;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 10px;
    z-index: 10;
`;

export const CloseButton = styled.div`
    position: absolute;
    top: 0;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 20px;
    margin: 10px 0 10px 0;
`;

export const Result = styled.div`
    font-size: 16px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    padding: 11px 10px;
    width: 90%;
    text-align: center;
    margin-bottom: 10px;
    word-break: break-all;
    user-select: none;
    cursor: pointer !important;

    &:active {
        background-color: #eee;
    }
`;

export const RangeMasterContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    width: 90%;
    margin-bottom: 10px;
`;

export const RangeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const RangeCounter = styled.div``;

export const Range = styled.input`
    width: 80%;
    height: 32px;
    -webkit-appearance: none;

    &:focus { outline: none; }
    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        box-shadow: 0px 0px 0px #DE8667;
        background: #EFB467;
        border-radius: 5px;
        border: 1px solid #DE8667;

        &:hover { background: #DE8667; }
    }

    &::-webkit-slider-thumb {
        box-shadow: 0px 0px 0px #000000;
        border: 1px solid #000000;
        height: 20px;
        width: 20px;
        border-radius: 5px;
        background: #fff;
        cursor: pointer;
        margin-top: -6px;
        -webkit-appearance: none;

        &:hover { cursor: ew-resize; }
    }
`;

export const SelectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    width: 90%;
    text-align: center;
    margin-bottom: 10px;
`;


export const ToggleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    max-width: 800px;

    &:first-child {
        flex: 1;
        width: 100%;
    }
`;

export const Label = styled.label``;

export const Toggle = styled.input`
    -webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: 40px;
	height: 20px;
	border-radius: 50px;
	overflow: hidden;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: #aaa;
	-webkit-background-color: #aaa;
	transition: all 0.3s ease-in-out;

    &:before {
        content: '';
	    display: block;
	    position: absolute;
	    width: 16px;
	    height: 16px;
	    background: #fff !important;
	    left: 3px;
	    top: 2px;
	    border-radius: 50%;
	    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	    transition: all 0.3s ease-in-out;
    }

    &:checked {
        background-color: #efb467 !important;
	    -webkit-background-color: #efb467 !important;
    }

    &:checked:before {
        left: 20px;
    }
`;

export const Slider = styled.span``;

export const GenerateButton = styled.button`
    outline: none;
	border: none;
	border-radius: 32px;
	width: 90%;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
	box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
	color: #fff;
	border: 1px solid #fff;
	margin: 0 auto 10px auto;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background: #fff;
		color: #efb467;
		border: 1px solid #efb467;
		transform: scale(1.02);
	}
`;