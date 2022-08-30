import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 90px;
`;

export const UserTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    & > h1 {
        padding: 30px;
        width: 98%;
        border: 1px solid #de8667;
        border-radius: 10px;
        color: #fff;
        text-align: center;
        background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
        box-shadow: 0 0 10px #000;
    }
`;

export const Header = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
export const Details = styled.div``;
export const ContainerHeader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: Poppins;
    padding: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const RentedCarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    font-family: Poppins;
    margin: 5px 0px;
    padding: 10px 30px;
    width: 100%;
`;
