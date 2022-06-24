import styled from 'styled-components'

type CountdownProps = {
    color: string;
    backColor: string;
}

export const TimerTitle = styled.div`
    box-sizing: border-box;
    font-size: 24px;
    text-align: center;
    grid-column: 1 / span 4;
`
    
export const Container = styled.div<CountdownProps>`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto;
    max-width: 700px;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0 auto;
    padding: 20px;

    background: ${props => props.backColor ? props.backColor : '#fff'};
    color: ${props => props.color ? props.color : '#000'};
`

export const Block = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
`

export const BlockContent = styled.div`
    box-sizing: border-box;
    font-size: 32px;
    font-weight: bold;
`

export const BlockText = styled.div`
    box-sizing: border-box;
`
