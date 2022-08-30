import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins;
    height: 300px;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    @media screen and (max-width: 420px) {
        height: 500px;
    }
`;

export const SocialMedia = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    @media screen and (max-width: 420px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const SocialMediaItem = styled.div`
    margin: 10px 20px;
    & > img {
        height: 50px;
        width: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const FooterNavigation = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    @media screen and (max-width: 420px) {
        grid-template-columns: 1fr;
    }
`;

export const Link = styled.a`
    margin: 10px 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    text-underline-offset: 5px;
    text-align: center;
    &:hover {
        transform: scale(1.1);
        text-decoration: underline;
    }
`;

export const Credits = styled.div`
    font-size: 18px;
    text-align: center;
`;
