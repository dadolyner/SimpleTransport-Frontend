import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { CarAvatar } from '../../images/ImageExporter';
import Car from '../Cars/Car/Car';
import { Background, CarsListContainer } from '../Cars/cars.styled';
import Footer from '../Footer/footer';
import Loading from '../Loading/loading';
import Navigation from '../Navigation/navigation';
import { Container, UserTag } from './profile.styled';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({} as any);
    const [usersCars, setUsersCars] = React.useState([] as any);
    const [usersRentals, setUsersRentals] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(false)

    const getUsersCars = async () => {
        try {
            setIsLoading(true)
            const userLoggedIn = localStorage.getItem('simpletransport_userLoggedIn');
            if(!userLoggedIn) navigate('/login');
            const userInfo = await JSON.parse(localStorage.getItem('simpletransport_userInfo'));
            const { user, vehicle, rental} = userInfo;
            
            setUserInfo(user);
            setUsersCars(vehicle);
            setUsersRentals(rental);
            setIsLoading(false)

        } catch (error) { console.log(error); }
    }
    React.useEffect(() => { getUsersCars() }, []);

    return (
        <>
            <Background>
                <Loading isLoading={isLoading}/>

                <Navigation />

                <Container>
                    <UserTag>
                        <h1>
                            {userInfo.first_name + ' ' + userInfo.last_name}
                            <br/>
                            { '<' + userInfo.email + '>' }
                        </h1>
                    </UserTag>

                    <CarsListContainer>
                        {usersCars.map((car: any) => {
							return <Car 
								key={car.id}
                                id={car.id}
                                type={'edit'}
								image={car.image ? car.image : CarAvatar} 
								name={car.brand + ' ' + car.model}
								seats={car.seats} 
								shifter={car.shifter} 
								horsepower={car.horsepower} 
								torque={car.torque} 
								speed={car.acceleration} 
								fuel={car.fuel} 
								location={userInfo.place + ', ' + car.country} 
								price={car.price} 
								duration={car.rent_duration} 
							/>;
						})}
                    </CarsListContainer>
                </Container>

                <Footer />
            </Background>
        </>
    );
};

export default Profile;
