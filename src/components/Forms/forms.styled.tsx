import styled from 'styled-components';
import { Background2, Background2Flipped } from '../../images/ImageExporter';

export const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.login {
        background-image: url(${Background2Flipped});
    }
    &.register {
        background-image: url(${Background2});
    }
`;

export const Container = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    & > * {
        box-sizing: border-box;
    }
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 510px;
    min-width: 400px;
    min-height: 300px;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    font-family: Poppins;
`;

export const Header = styled.h1`
    text-align: center;
    margin: 20px auto 0px auto;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 100%;
    max-width: 600px;
    min-width: 350px;
    padding: 20px 50px 10px 40px;
    margin: 0 auto;
`;
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
        transform: translate(0, 24px) scale(1);
        transform-origin: top left;
        transition: all 0.2s ease-out;
    }
    &:focus-within > label {
        transform: translate(0, 5px) scale(0.75);
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
    }
    .Active {
        transform: translate(0, 5px) scale(0.75);
    }
    & > input:focus,
    & > input:active {
        border-bottom: 2px solid #de8667;
    }
`;

export const HalfWidth = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    width: 100%;
    @media screen and (max-width: 460px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

export const Submit = styled.button`
    outline: none;
    border: none;
    border-radius: 32px;
    width: 40%;
    min-width: 150px;
    height: 40px;
    font-size: 16px;
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
        transform: scale(1.05);
    }
`;

export const Href = styled.a`
    text-decoration: none;
    color: #efb467;
    font-size: 16px;
    margin-bottom: 5px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
`;

export const ConfirmMessage = styled.div`
    color: green;
    font-size: 16px;
    margin: 10px auto;
    text-align: center;
`;