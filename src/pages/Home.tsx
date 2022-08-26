import * as React from 'react';
import { Background } from '../components/Cars/cars.styled';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';

const Home: React.FC = () => {
    return (
        <>
            <Background>
                <Navigation />

                <Footer />
            </Background>
        </>
    );
};
export default Home;
