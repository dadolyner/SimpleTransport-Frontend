import styled from 'styled-components';

type ImageProps = {
    src: string;
}

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    padding: 20px 100px;
    display: grid;
    grid-template-columns: 40% 60%;
    place-items: center;

    @media only screen and (max-width: 1150px) {
        grid-template-columns: 100%;
    }
`;

export const Header = styled.h1`
    margin-top: 100px;
    font-size: 64px;
`;

export const Content = styled.div`
    margin-top: 20px;
    font-size: 24px;
`;

export const Image = styled.img<ImageProps>`
    @media only screen and (max-width: 1150px) {
        display: none;
    }
`;

export const Buttons = styled.div`
    display: flex;
    gap: 20px;

    @media only screen and (max-width: 700px) {
        flex-direction: column;
        gap: 0;
    }
`;
