import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9000;
`

export const LoadingCircle = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #de8667;
    border-radius: 50%;
    animation: ${spinner} 1.5s linear infinite;
`