import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    bottom: 10px;
    left: 10px;
    z-index: 100;
    width: 40px;
    height: 40px;
    background: linear-gradient(240deg, #efb467 0%, #de8667 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
    &:hover { background: linear-gradient(240deg, #d4984a 0%, #c26d4f 100%); }
`;

export const Content = styled.div`
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    margin-top: 5px;
    margin-bottom: 0;
    transition: all 0.3s ease-in-out;
`;