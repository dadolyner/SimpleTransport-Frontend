import * as React from 'react';
import { Container, Content } from './backtotop.styled';

const BackToTop: React.FC = () => {
    const backToTop = () => { window.scrollTo({ top: 0, left:0, behavior: 'smooth' }) }

    return (
        <>
            <Container onClick={backToTop}>
                <Content />
            </Container>
        </>
    );
}

export default BackToTop