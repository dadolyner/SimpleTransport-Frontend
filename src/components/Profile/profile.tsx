import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { generateUploadURL } from '../../api/s3';
import RefreshUsersData from '../../helpers/RefreshUserData';
import { CarAvatar } from '../../images/ImageExporter';
import Car from '../Cars/Car/Car';
import { Background, BigParentContainer, Button, CarsListContainer, RentListContainer } from '../Cars/cars.styled';
import Footer from '../Footer/footer';
import Loading from '../Loading/loading';
import Navigation from '../Navigation/navigation';
import Popup from '../Popups/popup';
import Toast from '../Toast/toast';
import RentedCar from './profile.rent';
import { Container, ContainerHeader, UserTag } from './profile.styled';

const Profile: React.FC = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({} as any);
    const [usersCars, setUsersCars] = React.useState([] as any);
    const [isLoading, setIsLoading] = React.useState(false)
    const [rentedCarsInfo, setRentedCars] = React.useState([] as any);
    const [addCarPopupVisible, setAddCarPopupVisible] = React.useState(false);
    const [toastSuccess, setToastSuccess] = React.useState(false);
	const [toastSuccessMessage, setToastSuccessMessage] = React.useState('');
	const [toastError, setToastError] = React.useState(false);
	const [toastErrorMessage, setToastErrorMessage] = React.useState('');
    const [fuels, setFuels] = React.useState([] as any);
    const [models, setModels] = React.useState([] as any);
    const [colors, setColors] = React.useState([] as any);
    
    const getUsersCars = async () => {
        try {
            setIsLoading(true)
            const userLoggedIn = localStorage.getItem('simpletransport_userLoggedIn');
            if(!userLoggedIn) navigate('/login');
            const accessToken = localStorage.getItem('simpletransport_accessToken');
            const userInfo = await axios.get('/user/me', { headers: { Authorization: 'Bearer ' + accessToken } });
            const { user, vehicle, rental} = userInfo.data;
            
            const rentedCars: Array<{}> = [];
            for(let i = 0; i < rental.length; i++) {
                const carInfo = await axios.get(`/vehicle?vehicle.id=${rental[i].vehicleId}`);
                rentedCars.push(...carInfo.data);
            }

            const carsInfo = rental.map((carRent: any) => { 
                const car = rentedCars.find((car: any) => car.vehicle.id === carRent.vehicleId);
                return {
                    ...car,
                    id: carRent.id,
                    rent_start: carRent.rent_start,
                    rent_end: carRent.rent_end,
                }
            })

            setRentedCars(carsInfo);
            setUserInfo(user);
            setUsersCars(vehicle);
            setIsLoading(false)

        } catch (error) { console.log(error); }
    }
    const getDropdownData = async () => {
        try {
            const fuelData = await axios.get('/fuel');
            const modelData = await axios.get('/model');
            const colorData = await axios.get('/color');

            const fuels = fuelData.data.map((fuel: any) => { return { optionValue: fuel.id, optionText: fuel.fuel } })
            const models = modelData.data.map((model: any) => { return { optionValue: model.id, optionText: model.brand + ' ' +model.model } })
            const colors = colorData.data.map((color: any) => { return { optionValue: color.id, optionText: color.color } })

            setFuels(fuels);
            setModels(models);
            setColors(colors);
        } catch(error) { console.log(error) }
    }
    const shifters = [
        {
            optionValue: 'Automatic',
            optionText: 'Automatic'
        },
        {
            optionValue: 'Manual',
            optionText: 'Manual'
        }
    ];
    const CreateCar = async(values: any) => {
        try {
            const url = await generateUploadURL();
            await axios.put(url, values.image, { headers: { 'Content-Type': 'image/png' } });
            const imageUrl = url.split('?')[0];

            const accessToken = localStorage.getItem('simpletransport_accessToken');
            const vehicleData = {
                seats: +values.seats,
                shifter: values.shifter,
                horsepower: +values.horsepower,
                torque: +values.torque,
                acceleration: +values.acceleration,
                year: values.year,
                price: +values.price,
                rent_duration: +values.rent_duration,
                licence_plate: values.licence_plate,
                vin: values.vin,
                modelId: values.model,
                colorId: values.color,
                fuelId: values.fuel,
                imageUrl: imageUrl
            }
            await axios.post(`/vehicle`, vehicleData, { headers: { Authorization: `Bearer ${accessToken}` } }) 

            setToastSuccessMessage(`New car added successfully!`);
            setToastSuccess(true);
            setTimeout(() => { setToastSuccess(false); RefreshUsersData() }, 5100);
            
            setAddCarPopupVisible(false);

        } catch(error) {
            if (error.response.status === 400) {
                setToastErrorMessage('Please fill all fields!');
                setToastError(true);
            } else {
                setToastErrorMessage(error.response.data.message);
                setToastError(true);
            }
            setTimeout(() => { setToastError(false) }, 5100);
        }
    }

    React.useEffect(() => {  getUsersCars(); getDropdownData(); }, []);

    return (
        <>
            <Background>
                <Loading isLoading={isLoading}/>

                { toastSuccess && <Toast type={'success'} message={toastSuccessMessage} /> }
			    { toastError && <Toast type={'error'} message={toastErrorMessage} /> }

                { addCarPopupVisible && <Popup
                key={'AddNewCarPopup'}
                active={ addCarPopupVisible }
                title={'Add a new car'}
                size={600}
                theme={{ background: '#fff', border: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)', text: '#000' }}
                labelAligment={'center'}
                topClose={() => setAddCarPopupVisible(false)}
                inputs={[
                    { type: 'number', name: 'seats', label: 'Seats' },
                    { type: 'dropdown', name: 'shifter', label: 'Shifter', options: shifters},
                    { type: 'number', name: 'horsepower', label: 'Horsepower(HP)' },
                    { type: 'number', name: 'torque', label: 'Torque(NM)' },
                    { type: 'number', name: 'acceleration', label: 'Acceleration(KM/s)' },
                    { type: 'text', name: 'year', label: 'Year' },
                    { type: 'number', name: 'price', label: 'Price(€)' },
                    { type: 'number', name: 'rent_duration', label: 'Duration(Days)' },
                    { type: 'text', name: 'licence_plate', label: 'Licence Plate' },
                    { type: 'text', name: 'vin', label: 'VIN' },
                    { type: 'dropdown', name: 'model', label: 'Model', options: models },
                    { type: 'dropdown', name: 'color', label: 'Color', options: colors },
                    { type: 'dropdown', name: 'fuel', label: 'Fuel', options: fuels },
                    { type: 'file', name: 'image', label: 'Image' },
                ]}
                bottomButtons={[ {  name: 'confirm',  text: 'Confirm',  color: '#fff',  colorHover:'#de8667',  background: 'linear-gradient(240deg, #efb467 0%, #de8667 100%)',  backgroundHover: '#fff',  onClick: () => {} } ]}
                RetrieveValues={(values) => { CreateCar(values) }}
            />}

                <Navigation />

                <Container>
                    <UserTag>
                        <h1>
                            {userInfo.first_name + ' ' + userInfo.last_name}
                        </h1>
                    </UserTag>

                    <BigParentContainer style={{marginTop: "10px"}}>
                        <RentListContainer>
                            <ContainerHeader>MY RENTS</ContainerHeader>
                            { rentedCarsInfo.map((rental: any) => {
                                const { id, vehicle, user, rent_start, rent_end } = rental;
                                return <RentedCar id={id} vehicle={vehicle} user={user} rent_start={rent_start} rent_end={rent_end}/>
                            })}
                        </RentListContainer>

                        <CarsListContainer>
                            <ContainerHeader>MY CARS <Button onClick={() => { setAddCarPopupVisible(true) }}>Add a car</Button></ContainerHeader>
                            { usersCars.map((car: any) => {
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
					    			location={userInfo.place + ', ' + userInfo.country} 
					    			price={car.price} 
					    			duration={car.rent_duration}
                                    licence_plate={car.licence_plate}
                                    vin={car.vin}
                                    year={car.year}
					    		/>;
					    	})}
                        </CarsListContainer>
                    </BigParentContainer>
                </Container>

                <Footer />
            </Background>
        </>
    );
};

export default Profile;
