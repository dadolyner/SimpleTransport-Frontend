import * as React from 'react';
import { Background, Button, DeleteButton } from '../components/Cars/cars.styled';
import Footer from '../components/Footer/footer';
import Navigation from '../components/Navigation/navigation';
import { Container, Header, Content, Image, Buttons } from '../styles/home.styled';
import { Jeep } from '../images/ImageExporter';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const userLoggedIn = localStorage.getItem('simpletransport_userLoggedIn');

    return (
        <>
            <Background>

            <Navigation />

            <Container>
                <div>
                    <Header>SIMPLE TRANSPORT</Header>
                    <Content>Simple transport is a car sharing service where you can rent cars from other users.</Content>
                    <Content>If you have a car at home that you don't use that much or just want to earn some extra money, you can put your car for rent on our website.</Content>
                    <Buttons>
                        { userLoggedIn === 'true' ? <Button onClick={() => navigate('/cars')}>Cars</Button> : 
                        <>
                            <Button onClick={() => navigate('/register')}>Register</Button>
                            <DeleteButton onClick={() => navigate('/login')}>Login</DeleteButton>
                        </> 
                        }
                    </Buttons>
                </div>

                <Image src={Jeep} width={600} height={400}/>
                
            </Container>
            
            <Footer />

            </Background>
        </>
    );
}

export default Home;