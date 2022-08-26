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
        height: 150px;
        border: 1px solid #de8667;
        border-radius: 10px;
        color: #fff;
        text-align: center;
        background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
        box-shadow: 0 0 10px #000;
    }
`;